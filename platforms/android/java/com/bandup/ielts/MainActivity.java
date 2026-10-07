package com.bandup.ielts;

import android.Manifest;
import android.app.Activity;
import android.content.ActivityNotFoundException;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.graphics.Color;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.speech.tts.TextToSpeech;
import android.speech.tts.UtteranceProgressListener;
import android.speech.tts.Voice;
import android.view.View;
import android.view.Window;
import android.webkit.JavascriptInterface;
import android.webkit.PermissionRequest;
import android.webkit.ValueCallback;
import android.webkit.WebChromeClient;
import android.webkit.WebResourceRequest;
import android.webkit.WebResourceResponse;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import org.json.JSONArray;
import org.json.JSONObject;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Locale;
import java.util.Map;
import java.util.Set;

public class MainActivity extends Activity implements TextToSpeech.OnInitListener {
    static final String HOST = "appassets.androidplatform.net";
    static final String START = "https://" + HOST + "/index.html";
    static final int REQ_FILE = 41, REQ_MIC = 42;

    WebView web;
    TextToSpeech tts;
    volatile boolean ttsReady = false;
    ValueCallback<Uri[]> fileCb;
    PermissionRequest pendingPerm;

    @Override
    protected void onCreate(Bundle state) {
        super.onCreate(state);
        web = new WebView(this);
        if (Build.VERSION.SDK_INT >= 26) web.setDefaultFocusHighlightEnabled(false);
        web.setOverScrollMode(View.OVER_SCROLL_NEVER);
        web.setBackgroundColor(Color.parseColor("#F4F6FB"));
        setContentView(web);

        WebSettings s = web.getSettings();
        s.setJavaScriptEnabled(true);
        s.setDomStorageEnabled(true);
        s.setDatabaseEnabled(true);
        s.setMediaPlaybackRequiresUserGesture(false);
        s.setAllowFileAccess(false);
        s.setAllowContentAccess(true);
        s.setTextZoom(100);
        s.setUserAgentString(s.getUserAgentString() + " BandUpApp/1.0");

        web.addJavascriptInterface(new TtsBridge(), "AndroidTTS");
        web.addJavascriptInterface(new UiBridge(), "AndroidUI");

        web.setWebViewClient(new WebViewClient() {
            @Override
            public WebResourceResponse shouldInterceptRequest(WebView view, WebResourceRequest req) {
                Uri u = req.getUrl();
                if (!HOST.equals(u.getHost())) return null;
                String path = u.getPath();
                if (path == null || path.equals("/") || path.isEmpty()) path = "/index.html";
                try {
                    InputStream in = getAssets().open(path.substring(1));
                    WebResourceResponse r = new WebResourceResponse(mime(path), "utf-8", in);
                    Map<String, String> h = new HashMap<>();
                    h.put("Cache-Control", "no-cache");
                    r.setResponseHeaders(h);
                    return r;
                } catch (Exception e) {
                    return new WebResourceResponse("text/plain", "utf-8", 404, "Not Found", null, null);
                }
            }

            @Override
            public boolean shouldOverrideUrlLoading(WebView view, WebResourceRequest req) {
                Uri u = req.getUrl();
                if (HOST.equals(u.getHost())) return false;
                try { startActivity(new Intent(Intent.ACTION_VIEW, u)); } catch (ActivityNotFoundException ignored) { }
                return true;
            }

            @Override
            public void onPageFinished(WebView view, String url) { pushVoices(); }
        });

        web.setWebChromeClient(new WebChromeClient() {
            @Override
            public boolean onShowFileChooser(WebView v, ValueCallback<Uri[]> cb, FileChooserParams p) {
                if (fileCb != null) fileCb.onReceiveValue(null);
                fileCb = cb;
                Intent i = new Intent(Intent.ACTION_GET_CONTENT);
                i.addCategory(Intent.CATEGORY_OPENABLE);
                String[] acc = p.getAcceptTypes();
                String type = "*/*";
                if (acc != null && acc.length > 0 && acc[0] != null && acc[0].contains("/")) type = acc[0];
                i.setType(type);
                if (p.getMode() == FileChooserParams.MODE_OPEN_MULTIPLE) i.putExtra(Intent.EXTRA_ALLOW_MULTIPLE, true);
                try { startActivityForResult(Intent.createChooser(i, "Choose file"), REQ_FILE); }
                catch (ActivityNotFoundException e) { fileCb = null; return false; }
                return true;
            }

            @Override
            public void onPermissionRequest(final PermissionRequest req) {
                runOnUiThread(new Runnable() { @Override public void run() {
                    boolean wantsAudio = false;
                    for (String r : req.getResources()) if (PermissionRequest.RESOURCE_AUDIO_CAPTURE.equals(r)) wantsAudio = true;
                    if (!wantsAudio) { req.deny(); return; }
                    if (checkSelfPermission(Manifest.permission.RECORD_AUDIO) == PackageManager.PERMISSION_GRANTED) {
                        req.grant(new String[]{PermissionRequest.RESOURCE_AUDIO_CAPTURE});
                    } else {
                        pendingPerm = req;
                        requestPermissions(new String[]{Manifest.permission.RECORD_AUDIO}, REQ_MIC);
                    }
                }});
            }
        });

        tts = new TextToSpeech(this, this);
        if (state != null) web.restoreState(state); else web.loadUrl(START);
    }

    static String mime(String p) {
        p = p.toLowerCase(Locale.ROOT);
        if (p.endsWith(".html")) return "text/html";
        if (p.endsWith(".js")) return "application/javascript";
        if (p.endsWith(".css")) return "text/css";
        if (p.endsWith(".woff2")) return "font/woff2";
        if (p.endsWith(".png")) return "image/png";
        if (p.endsWith(".svg")) return "image/svg+xml";
        if (p.endsWith(".json")) return "application/json";
        return "application/octet-stream";
    }

    @Override
    protected void onSaveInstanceState(Bundle out) { super.onSaveInstanceState(out); web.saveState(out); }

    @Override
    protected void onActivityResult(int req, int res, Intent data) {
        if (req == REQ_FILE) {
            if (fileCb == null) return;
            Uri[] out = null;
            if (res == RESULT_OK && data != null) {
                if (data.getClipData() != null) {
                    int n = data.getClipData().getItemCount();
                    out = new Uri[n];
                    for (int k = 0; k < n; k++) out[k] = data.getClipData().getItemAt(k).getUri();
                } else if (data.getData() != null) out = new Uri[]{data.getData()};
            }
            fileCb.onReceiveValue(out);
            fileCb = null;
            return;
        }
        super.onActivityResult(req, res, data);
    }

    @Override
    public void onRequestPermissionsResult(int req, String[] perms, int[] results) {
        if (req == REQ_MIC && pendingPerm != null) {
            if (results.length > 0 && results[0] == PackageManager.PERMISSION_GRANTED)
                pendingPerm.grant(new String[]{PermissionRequest.RESOURCE_AUDIO_CAPTURE});
            else pendingPerm.deny();
            pendingPerm = null;
        }
    }

    @Override
    public void onBackPressed() {
        String js = "(function(){var b=document.querySelector('.modal .mx')||document.querySelector('.player .pclose');if(b){b.click();return 'h';}if(typeof TAB!=='undefined'&&TAB!=='learn'&&typeof render==='function'){TAB='learn';render();window.scrollTo(0,0);return 'h';}return '';})()";
        try {
            web.evaluateJavascript(js, new ValueCallback<String>() { @Override public void onReceiveValue(String v) { if (v == null || !v.contains("h")) finish(); } });
        } catch (Exception e) { finish(); }
    }

    @Override
    protected void onPause() { super.onPause(); if (tts != null) tts.stop(); web.onPause(); }

    @Override
    protected void onResume() { super.onResume(); web.onResume(); }

    @Override
    protected void onDestroy() {
        if (tts != null) { tts.stop(); tts.shutdown(); }
        web.destroy();
        super.onDestroy();
    }

    /* ---------- Text to speech ---------- */
    @Override
    public void onInit(int status) {
        if (status != TextToSpeech.SUCCESS) return;
        int r = tts.setLanguage(Locale.UK);
        if (r == TextToSpeech.LANG_MISSING_DATA || r == TextToSpeech.LANG_NOT_SUPPORTED) tts.setLanguage(Locale.US);
        tts.setOnUtteranceProgressListener(new UtteranceProgressListener() {
            @Override public void onStart(String id) { fire(id, "start"); }
            @Override public void onDone(String id) { fire(id, "end"); }
            @Override public void onError(String id) { fire(id, "error"); }
            @Override public void onError(String id, int code) { fire(id, "error"); }
            @Override public void onStop(String id, boolean interrupted) { }
        });
        ttsReady = true;
        runOnUiThread(new Runnable() { @Override public void run() { pushVoices(); } });
    }

    String voicesJson() {
        JSONArray arr = new JSONArray();
        if (!ttsReady) return arr.toString();
        try {
            Set<Voice> vs = tts.getVoices();
            if (vs != null) {
                for (Voice v : new ArrayList<>(vs)) {
                    Locale l = v.getLocale();
                    if (l == null || !"en".equals(l.getLanguage())) continue;
                    if (v.getFeatures() != null && v.getFeatures().contains(TextToSpeech.Engine.KEY_FEATURE_NOT_INSTALLED)) continue;
                    JSONObject o = new JSONObject();
                    o.put("name", v.getName());
                    o.put("lang", l.toLanguageTag());
                    o.put("localService", !v.isNetworkConnectionRequired());
                    arr.put(o);
                }
            }
        } catch (Exception ignored) { }
        return arr.toString();
    }

    void pushVoices() {
        if (!ttsReady || web == null) return;
        web.evaluateJavascript("window.__ttsVoices&&window.__ttsVoices(" + JSONObject.quote(voicesJson()) + ")", null);
    }

    void fire(final String id, final String type) {
        runOnUiThread(new Runnable() { @Override public void run() { web.evaluateJavascript("window.__ttsEvent&&window.__ttsEvent(" + JSONObject.quote(id) + ",'" + type + "')", null); } });
    }

    class TtsBridge {
        @JavascriptInterface public boolean ready() { return ttsReady; }
        @JavascriptInterface public String voices() { return voicesJson(); }

        @JavascriptInterface
        public void speak(String id, String text, String voice, String lang, float pitch, float rate) {
            if (!ttsReady) { fire(id, "error"); return; }
            try {
                boolean set = false;
                if (voice != null && !voice.isEmpty() && tts.getVoices() != null) {
                    for (Voice v : tts.getVoices()) if (v.getName().equals(voice)) { tts.setVoice(v); set = true; break; }
                }
                if (!set && lang != null && !lang.isEmpty()) tts.setLanguage(Locale.forLanguageTag(lang));
                tts.setPitch(pitch > 0 ? pitch : 1f);
                tts.setSpeechRate(rate > 0 ? rate : 1f);
                Bundle b = new Bundle();
                b.putString(TextToSpeech.Engine.KEY_PARAM_UTTERANCE_ID, id);
                if (tts.speak(text, TextToSpeech.QUEUE_ADD, b, id) != TextToSpeech.SUCCESS) fire(id, "error");
            } catch (Exception e) { fire(id, "error"); }
        }

        @JavascriptInterface public void stop() { if (tts != null) tts.stop(); }
    }

    /* ---------- System bars follow the app theme ---------- */
    class UiBridge {
        @JavascriptInterface
        public void bars(final String hex, final boolean dark) {
            runOnUiThread(new Runnable() { @Override public void run() {
                try {
                    int c = Color.parseColor(hex);
                    Window w = getWindow();
                    w.setStatusBarColor(c);
                    w.setNavigationBarColor(c);
                    web.setBackgroundColor(c);
                    View d = w.getDecorView();
                    int f = d.getSystemUiVisibility();
                    if (dark) f &= ~View.SYSTEM_UI_FLAG_LIGHT_STATUS_BAR; else f |= View.SYSTEM_UI_FLAG_LIGHT_STATUS_BAR;
                    if (Build.VERSION.SDK_INT >= 26) {
                        if (dark) f &= ~View.SYSTEM_UI_FLAG_LIGHT_NAVIGATION_BAR; else f |= View.SYSTEM_UI_FLAG_LIGHT_NAVIGATION_BAR;
                    }
                    d.setSystemUiVisibility(f);
                } catch (Exception ignored) { }
            }});
        }
    }
}
