# Content guide

Run `python tools/build.py check` after editing: it points to the exact question if something is wrong.

## A level (`src/content/levels/level-NN.js`)
```js
LEVELS.push({
  id: 4, name: "Work and money", theme: "Jobs and the economy",   // id must match the file number
  L: [ /* listening lessons */ ], R: [ /* reading */ ], W: [ /* writing */ ], S: [ /* speaking */ ]
});
```
Level N targets band 4.5 + 0.5 × (N − 1). Item difficulty (for rating) comes from the level number.

## Lessons
**Listening**: screens of script + questions. Lines start with a speaker letter; `sp` gives each a voice (`"f"` or `"m"`).
`ctx` must contain "Part 1"–"Part 4": it picks the briefing slides.
```js
{ t: "Booking a hotel", ctx: "Listening Part 1 · phone call", sp: { W: "f", M: "m" }, tip: "One-line tip shown in the briefing.",
  sc: [ { s: `W: Good morning…\nM: Hi, I'd like…`, q: [ /* 1–3 questions for this part of the audio */ ] } ] }
```
Write numbers the way they should be spoken ("oh seven seven nine"), and spell letters with commas ("M, A, R, S, H").

**Reading**: one passage, each question on its own screen. Paragraph letters at the start of paragraphs ("A  …").
`ty` picks the briefing: TRUE/FALSE/NOT GIVEN, YES/NO/NOT GIVEN, Matching headings, Matching…, …completion, Multiple choice.
```js
{ t: "The humble bicycle", ty: "TRUE / FALSE / NOT GIVEN", tip: "…", ps: `First paragraph…\n\nSecond paragraph…`, q: [ … ] }
```
**Writing / Speaking**: `{ t, tip, q: [ … ] }`. The first writing lesson of a level is Task 1, the second Task 2;
the first speaking lesson is Part 1, the second Part 2/3.

## Question kinds (`k`)
Every graded question should have `x`: a short explanation shown after answering.

| k | Type | Fields |
|---|---|---|
| `m` | Multiple choice | `p` question, `o` options, `a` index of the correct option (0 = first) |
| `2` | Choose TWO | `p`, `o` (5 options), `a: [i, j]` |
| `g` | Gap fill | `p` with `___` where the gap is, `a` list of accepted answers (lowercase), `w` word limit: `1`, `2`, `3` or `"n"` (one word and/or a number) |
| `t` | TRUE/FALSE/NOT GIVEN | `p` statement, `a: "T" \| "F" \| "NG"` |
| `y` | YES/NO/NOT GIVEN | `p`, `a: "Y" \| "N" \| "NG"` |
| `x` | Matching (headings, features, word box…) | `p`, `o` options (shown in a box), `i: [["item text", correctOptionIndex], …]` |
| `o` | Put in order | `p`, `a` pieces in the correct order (shuffled for the learner); `sent: true` for whole sentences |
| `s` | Speaking task | `p` question or `cc: { title, b: [bullets] }`, `prep` and `time` in seconds, `n` checklist |
| `w` | Writing task | `p` task, `min` words, `time` seconds, `n` checklist, optional `ch` chart |
| `i` | Info card | `p` text (no answer) |

Optional on any question: `ch` (chart), `say: "word"` (adds a pronunciation button).

## Charts (`ch`)
```js
{ t: "line" | "bar", title, x: ["2010", "2020"], s: [{ n: "Series name", v: [10, 20] }] }
{ t: "pie", title, s: [{ n: "Housing", v: 32 }, …] }
{ t: "table", title, head: ["Sector", "2015", "2025"], rows: [["Tech", "48", "72"], …] }
{ t: "flow", title, steps: ["Step one", "Step two", …] }
```

## Banks (`src/content/banks/`)
- **Tricks**: any question kind plus `cat` (trap name) and `sk` (L/R/W/S); listening tricks use `au` (script) + `sp`; reading tricks use `ps`.
- **Strategies**: `{ id, sk, t, why, steps: [...], drill: [questions] }` or `gen: "spell" | "para" | "micro"` for generated drills.
- **Writing Lab**: `t1: [{ title, ch, p }]`, `t2: [{ ty, p }]`. **Cue cards**: `{ title, b, p3: [follow-up questions] }`.
- **Briefings** live in `src/app/32-briefings.js` (`BRIEF`): slides are `[illustration, title, text]`, `r` is the Remember list.
  Illustrations are in `31-illustrations.js` (`ART`). Available names: sequence, predict, correction, map, options, chat, signpost, ear,
  tfng, keyword, qualifier, headings, gap, scan, chart, peel, speech, timer, plan, opinion, question, checklist.

## Writing good items
- One clear correct answer; distractors that are *mentioned* but wrong are the IELTS way.
- Keep explanations short and point to the exact words in the text.
- Write everything yourself. Never copy Cambridge passages, scripts or answer keys.
