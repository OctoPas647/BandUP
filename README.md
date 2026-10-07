# BandUp: IELTS practice app

A Duolingo-style IELTS Academic trainer: 10 levels × 4 skills, practice/test modes with hearts,
rating and predicted band, Rapid Fire, Trick Questions, strategies, real-test simulator, profile,
full theme customisation. One codebase builds three apps:

| Target | Command | Output |
|---|---|---|
| Web page (single file) | `python tools/build.py web` | `dist/web/bandup.html` |
| iPhone / iPad (installable web app) | `python tools/build.py pwa` | `dist/ios-pwa/` and `dist/BandUp-iOS-<version>.zip` |
| Android APK | `python tools/build.py android` | `dist/android/BandUp-<version>.apk` |
| All three | `python tools/build.py all` | |

## Quick start

1. Install **Python 3.9+** (python.org). That's all you need for the web and iPhone builds.
2. Open a terminal in this folder and run the live preview:
   ```
   python tools/build.py serve
   ```
   Open http://localhost:8000. Edit any file in `src/`, save, refresh the page: the change is there.
3. Before building a release, run the checks (needs **Node.js** from nodejs.org):
   ```
   python tools/build.py check
   ```
   It tells you exactly which level, lesson and question has a mistake.

## Folder map

```
src/
  index.template.html      page shell (placeholders filled in by the build)
  content/                 everything the learner reads and answers
    levels/level-01.js …   one file per level (lessons, passages, scripts, questions)
    banks/                 trick questions, strategies, writing prompts, cue cards, vocab…
  app/                     the app code, one file per area, loaded in number order
    10–20                  engine: state, rating, speech, charts, question types, lesson player
    30–35                  briefings, illustrations, band breakdown, profile, icon/speed settings
    40–48                  screens: theme, shell, learn path, modes, strategies, real tests, progress, customize, boot
  styles/                  CSS, one file per area, loaded in number order
platforms/
  web/                     Google Fonts link for the online version
  android/                 manifest, Java (WebView + native speech), bridge.js, signing key
  ios-pwa/                 iPhone install tags, offline service worker, hosting notes
assets/                    bundled fonts and app icons
tools/                     build.py, check_content.js, config.json (name, version)
tests/                     automated play-throughs (optional, need Playwright)
docs/                      ARCHITECTURE.md, CONTENT_GUIDE.md, IDEAS.md
```

## "I want to change…"

| …this | Edit |
|---|---|
| A reading passage, script or question | `src/content/levels/level-NN.js` (format: `docs/CONTENT_GUIDE.md`) |
| Trick questions / strategies / writing prompts / cue cards | `src/content/banks/` |
| Briefing slides before lessons | `src/app/32-briefings.js` (`BRIEF`), pictures in `31-illustrations.js` |
| How the predicted band is worked out | `src/app/15-rating-bands-rewards.js` (`predict`), explanation in `33-band-breakdown.js` |
| A screen (Learn, Modes, Profile…) | `src/app/42-…` to `47-…`, `34-profile.js` |
| Colours, theme presets | `src/app/40-theme.js` (`TOKENS`, `PRESETS`), base colours in `src/styles/01-tokens-and-themes.css` |
| Look of anything | the matching file in `src/styles/` |
| App name, version | `tools/config.json` (or `python tools/build.py bump`) |
| Android behaviour (speech, back button, file picker) | `platforms/android/java/…/MainActivity.java` |

## Building the Android APK

You need, once:
- **JDK 17 or newer** (e.g. Eclipse Temurin). Set `JAVA_HOME` to its folder.
- **Android SDK**: easiest is to install Android Studio, then in *SDK Manager* tick
  *Android 14 (API 34) SDK Platform* and *Build-Tools 35*. Or with the command-line tools:
  `sdkmanager "platforms;android-34" "build-tools;35.0.0"`.
- Set `ANDROID_HOME` to the SDK folder (Windows default: `%LOCALAPPDATA%\Android\Sdk`).

Then `python tools/build.py android`. The APK is signed with `platforms/android/signing/bandup.keystore`
(passwords in `signing.json`). **Keep that key:** updates only install over the existing app (keeping
progress) if they're signed with the same key. Back it up outside this folder.

Raise the version before each new APK (`python tools/build.py bump`), otherwise Android refuses the update.

## iPhone

`python tools/build.py pwa`, upload `dist/ios-pwa/` (e.g. drag it onto app.netlify.com/drop), open the
link in Safari, *Share → Add to Home Screen*. See `platforms/ios-pwa/HOSTING.txt`.

## Recommended workflow

1. `git init` once, then commit after each change you're happy with (`git add -A && git commit -m "…"`).
   You can always go back.
2. Work on one area at a time: one level, one screen, one style file.
3. `python tools/build.py serve` while you work; `check` before you build.
4. Optional: `pip install playwright && playwright install chromium`, then `python tests/run_lessons.py`
   plays every lesson automatically to catch anything that gets stuck.
5. `bump`, `all`, install, and note what changed in `CHANGELOG.md`.

Content is original, written in the style of IELTS Academic tests. Don't paste text, audio or answer
keys from the Cambridge books into the app: they're copyrighted. The Real Test Simulator lets you use
your own copies on your own device instead.
