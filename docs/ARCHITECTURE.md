# Architecture

The app is plain HTML/CSS/JavaScript with no framework and no npm dependencies. `tools/build.py` joins
every file into one page: content first, then `src/app/` in number order, so a later file can use
anything defined in an earlier one. All code shares one global scope.

## Load order
1. `src/content/00-levels-init.js` creates `LEVELS`, then each `levels/level-NN.js` pushes one level.
2. `src/content/banks/*` define the banks (`TRICKS`, `STRATEGIES`, `WLAB`, `CUECARDS`, `VOCAB`, `CONVERSION`, …).
3. `src/app/*.js` define the app. The last file (`48-events-and-boot.js`) wires up events and calls `render()`.

Rule: code at the top level of a file may only use things from *earlier* files. Inside functions you
can use anything, because functions run after everything has loaded.

## Key globals
| Name | File | What it is |
|---|---|---|
| `S` | 11-state-and-storage | The whole saved state: xp, gems, streak, hearts, `done` (lesson results), `rating`, `games`, `prod` (essay/speaking marks), `exams`, `settings`, `profile`, `xpLog`… Defaults in `DEF()` / `DEF_SETTINGS`. |
| `save()` | 11 | Writes `S` to localStorage (key `bandup-ielts.v1`) and, on claude.ai, to the artifact database. New fields: add them to `DEF()` and old saves get them automatically (merged on load). |
| `ALL`, `byId(id)` | 12-content-index | Flat list of every lesson record `{ id: "3-R-1", lv, sk, i, ls }`. `screensFor(rec)` turns a lesson into player screens. |
| `GEN` | 13-generators | Endless question generators (spelling, paraphrase, T/F/NG…). |
| `checkGap`, … | 14-answer-checking | Answer normalisation, word limits, spelling tolerance. |
| `rateItem`, `predict`, `bandFromRating`, `roundIELTS`, `TIERS`, `ACH` | 15 | Elo-style rating per skill, predicted band, leagues, achievements, quests. |
| `TTS` | 17-speech | Listening audio via the Web Speech API (Android: native engine through `bridge.js`). |
| `chartHTML` | 18-charts | SVG charts for Writing Task 1 (line, bar, pie, table, flow). |
| `renderItem` | 19-question-types | One renderer per question kind (`m`, `2`, `g`, `t`, `y`, `x`, `o`, `s`, `w`, `i`). |
| `play(cfg)`, `PLAYER` | 20-lesson-player | The lesson player used by every mode. |
| `TAB`, `render()`, `BIND` | 41-shell | Current tab, full re-render, and per-tab event binding (`BIND[tab]()` runs after render). |
| `startLesson`, `startMode`, `startDrill` | 42 / 43 / 44 | Entry points into the player. |

## The lesson player (`20-lesson-player.js`)
`play(cfg)` builds the overlay and runs a session. `cfg` = `{ title, badge, screens, mode: 'practice'|'test', rated, hearts, timer, next, goal, skill, onDone, onClose }`.
- A **screen** is `{ items: [...], au?: script, sp?: voices, ps?: passage, ch?: chart, cc?: cue card, flash?: seconds }`.
- `renderScreen()` shows the current screen; `buildScreen()` creates its DOM; `preload()` builds the next
  three screens in idle time so moving on is instant.
- `check()` marks answers, updates hearts/rating/XP, shows feedback. `next()` moves on; `finish()` shows results.
- Endless modes pass `cfg.next(P)` to generate screens on the fly; timed modes pass `cfg.timer` (seconds).

## Screens (tabs)
`TABS` in `41-shell.js` lists the tabs; `render()` maps each to a `view…()` function that returns HTML,
then calls `BIND[tab]()`. To add a tab: add it to `TABS`, write `viewX()`, add it to the `views` map in
`render()`, and optionally `BIND.x = () => {…}`.

## Theme, icons and speed
- Colours are CSS variables (`--bg`, `--primary`, `--listening`…). Defaults and dark mode live in
  `styles/01-tokens-and-themes.css`; `applyTheme()` (40-theme) overrides them from `S.palette`.
- `icon(name)` returns an SVG from `ICONS` (or an emoji from `EMOJI` in emoji style).
- Every CSS animation time is multiplied by `--spd` at build time (`scale_animation_times` in build.py),
  so the *Animation speed* setting controls them all. JavaScript timings use `SPD()`.

## Platforms
- **claude.ai artifact**: `window.claude` provides cloud storage (`db`) and the AI examiner (`sample`).
  Elsewhere these are absent and the app quietly uses localStorage and self-assessment.
- **Android**: `MainActivity.java` hosts a WebView serving `assets/` from `https://appassets.androidplatform.net/`,
  exposes `AndroidTTS` (speech) and `AndroidUI` (status-bar colour), handles the file picker, microphone
  permission and Back. `bridge.js` makes the native speech engine look like the Web Speech API.
- **iPhone**: a PWA: `head.html` adds the install tags, `sw.template.js` caches everything for offline use.
