/* Android bridge: native text-to-speech behind the Web Speech API, and system bars that follow the theme. */
(function () {
  var B = window.AndroidTTS;
  if (B) {
    var voices = [], listeners = [], cbs = {}, seq = 0;
    var wrap = function (arr) { return arr.map(function (v) { return { name: v.name, lang: v.lang, voiceURI: v.name, localService: v.localService !== false, default: false }; }); };
    try { voices = wrap(JSON.parse(B.voices() || '[]')); } catch (e) { }
    var synth = {
      speaking: false, pending: false, paused: false, onvoiceschanged: null,
      getVoices: function () { return voices.slice(); },
      speak: function (u) {
        var id = 'u' + (++seq); cbs[id] = u; synth.speaking = true;
        B.speak(id, String(u.text || ''), (u.voice && u.voice.name) || '', u.lang || 'en-GB', +u.pitch || 1, +u.rate || 1);
      },
      cancel: function () { cbs = {}; synth.speaking = false; try { B.stop(); } catch (e) { } },
      pause: function () { }, resume: function () { },
      addEventListener: function (t, f) { if (t === 'voiceschanged') listeners.push(f); },
      removeEventListener: function (t, f) { listeners = listeners.filter(function (x) { return x !== f; }); }
    };
    function U(text) { this.text = text || ''; this.lang = 'en-GB'; this.pitch = 1; this.rate = 1; this.volume = 1; this.voice = null; this.onstart = this.onend = this.onerror = null; }
    try { Object.defineProperty(window, 'speechSynthesis', { value: synth, configurable: true, writable: true }); } catch (e) { window.speechSynthesis = synth; }
    window.SpeechSynthesisUtterance = U;
    window.__ttsEvent = function (id, type) {
      var u = cbs[id]; if (!u) return;
      if (type === 'start') { u.onstart && u.onstart({ utterance: u }); return; }
      delete cbs[id]; synth.speaking = false;
      if (type === 'error' && u.onerror) u.onerror({ utterance: u, error: 'synthesis-failed' });
      else if (u.onend) u.onend({ utterance: u });
    };
    window.__ttsVoices = function (json) {
      try { voices = wrap(JSON.parse(json || '[]')); } catch (e) { }
      if (typeof synth.onvoiceschanged === 'function') try { synth.onvoiceschanged({}); } catch (e) { }
      listeners.forEach(function (f) { try { f({}); } catch (e) { } });
    };
  }
  var UI = window.AndroidUI;
  if (UI) {
    var last = '';
    var sync = function () {
      var cs = getComputedStyle(document.documentElement), bg = (cs.getPropertyValue('--bg') || '').trim();
      if (!/^#[0-9a-f]{6}$/i.test(bg)) return;
      var r = parseInt(bg.substr(1, 2), 16) / 255, g = parseInt(bg.substr(3, 2), 16) / 255, b = parseInt(bg.substr(5, 2), 16) / 255;
      var dark = 0.2126 * r + 0.7152 * g + 0.0722 * b < 0.45, key = bg + dark;
      if (key !== last) { last = key; try { UI.bars(bg, dark); } catch (e) { } }
    };
    document.addEventListener('DOMContentLoaded', function () {
      sync();
      new MutationObserver(sync).observe(document.documentElement, { attributes: true, attributeFilter: ['style', 'data-theme', 'class'] });
      if (window.matchMedia) matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function () { setTimeout(sync, 50); });
    });
  }
})();
