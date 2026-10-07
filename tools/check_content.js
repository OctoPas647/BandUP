// Content checker: loads the content files and reports mistakes with their exact location.
// Run through:  python tools/build.py check
const fs = require('fs'), vm = require('vm'), path = require('path');
const ctx = {}; vm.createContext(ctx);
for (const f of process.argv.slice(2)) {
  try { vm.runInContext(fs.readFileSync(f, 'utf8').replace(/^const (\w+) =/gm, 'var $1 ='), ctx, { filename: f }); }
  catch (e) { console.log(`  ✗ ${path.basename(f)}: ${e.message}`); process.exit(1); }
}
const errors = [], warns = [];
const err = (where, msg) => errors.push(`${where}: ${msg}`), warn = (where, msg) => warns.push(`${where}: ${msg}`);
const LIMIT = { 1: 1, 2: 2, 3: 3, n: 2 };
const isInt = v => Number.isInteger(v);
function checkChart(ch, where) {
  if (!ch) return;
  if (!['line', 'bar', 'pie', 'table', 'flow'].includes(ch.t)) return err(where, `chart type "${ch.t}" unknown (line, bar, pie, table, flow)`);
  if ((ch.t === 'line' || ch.t === 'bar') && !(ch.s || []).every(s => Array.isArray(s.v) && s.v.length === (ch.x || []).length)) err(where, 'chart series length must match the x labels');
  if (ch.t === 'table' && !(ch.rows || []).every(r => r.length === (ch.head || []).length)) err(where, 'every table row needs one cell per heading');
  if (ch.t === 'flow' && !(ch.steps || []).length) err(where, 'flow chart needs steps');
}
function checkItem(q, where, needX = true) {
  if (!q || typeof q !== 'object') return err(where, 'question is not an object');
  checkChart(q.ch, where);
  const graded = !['s', 'w', 'i'].includes(q.k);
  if (graded && needX && !q.x) warn(where, 'no explanation (x)');
  switch (q.k) {
    case 'm': if (!Array.isArray(q.o) || q.o.length < 2) err(where, 'needs at least 2 options in o'); else if (!isInt(q.a) || q.a < 0 || q.a >= q.o.length) err(where, `answer a=${q.a} is not a valid option index (0–${q.o.length - 1})`); break;
    case '2': if (!Array.isArray(q.o) || q.o.length < 3) err(where, 'needs at least 3 options'); else if (!Array.isArray(q.a) || q.a.length !== 2 || new Set(q.a).size !== 2 || q.a.some(a => !isInt(a) || a < 0 || a >= q.o.length)) err(where, 'a must be two different option indexes'); break;
    case 'g': {
      if (!String(q.p || '').includes('___')) err(where, 'gap question text needs ___ where the gap is');
      if (!Array.isArray(q.a) || !q.a.length) err(where, 'a must be a list of accepted answers');
      if (!(q.w in LIMIT)) err(where, `word limit w=${q.w} must be 1, 2, 3 or "n"`);
      else if (Array.isArray(q.a)) { const lim = LIMIT[q.w]; const first = String(q.a[0]); if (first.trim().split(/\s+/).length > lim) warn(where, `main answer "${first}" is longer than the word limit`); }
      break; }
    case 't': if (!['T', 'F', 'NG'].includes(q.a)) err(where, 'TRUE/FALSE/NOT GIVEN answer must be "T", "F" or "NG"'); break;
    case 'y': if (!['Y', 'N', 'NG'].includes(q.a)) err(where, 'YES/NO/NOT GIVEN answer must be "Y", "N" or "NG"'); break;
    case 'x': if (!Array.isArray(q.o) || !Array.isArray(q.i) || !q.i.length) err(where, 'matching needs options o and items i'); else q.i.forEach((r, n) => { if (!Array.isArray(r) || typeof r[0] !== 'string' || !isInt(r[1]) || r[1] < 0 || r[1] >= q.o.length) err(where, `matching item ${n + 1} must be ["text", optionIndex] with index 0–${q.o.length - 1}`); }); break;
    case 'o': if (!Array.isArray(q.a) || q.a.length < 2) err(where, 'ordering needs at least 2 pieces in a'); break;
    case 's': if (!q.p && !q.cc) err(where, 'speaking task needs p or cc'); if (q.cc && (!q.cc.title || !Array.isArray(q.cc.b))) err(where, 'cue card needs title and bullet list b'); break;
    case 'w': if (!q.p) err(where, 'writing task needs p'); if (!(q.min > 0)) err(where, 'writing task needs a minimum word count (min)'); break;
    case 'i': break;
    default: err(where, `unknown question kind k="${q.k}"`);
  }
}
const SKN = { L: 'Listening', R: 'Reading', W: 'Writing', S: 'Speaking' };
const counts = { L: 0, R: 0, W: 0, S: 0 }; let lessons = 0;
(ctx.LEVELS || []).forEach((lv, li) => {
  const lw = `level-${String(li + 1).padStart(2, '0')}.js`;
  if (lv.id !== li + 1) err(lw, `id is ${lv.id} but this is level ${li + 1} in the load order`);
  if (!lv.name) err(lw, 'level needs a name');
  for (const sk of ['L', 'R', 'W', 'S']) {
    if (!Array.isArray(lv[sk]) || !lv[sk].length) { err(lw, `${SKN[sk]} needs at least one lesson`); continue; }
    lv[sk].forEach((ls, i) => {
      lessons++; const where = `${lw} › ${SKN[sk]} lesson ${i + 1} "${ls.t || '?'}"`;
      if (!ls.t) err(where, 'lesson needs a title t');
      if (sk === 'L') {
        if (!Array.isArray(ls.sc) || !ls.sc.length) return err(where, 'listening lesson needs screens sc: [{ s: script, q: [...] }]');
        ls.sc.forEach((sc, si) => {
          if (!sc.s) err(`${where} › screen ${si + 1}`, 'needs a script s');
          const speakers = new Set((sc.s || '').split('\n').map(l => (l.match(/^([A-Z]):/) || [])[1]).filter(Boolean));
          speakers.forEach(sp => { if (!ls.sp || !ls.sp[sp]) warn(`${where} › screen ${si + 1}`, `speaker "${sp}" has no voice in sp (use "f" or "m")`); });
          (sc.q || []).forEach((q, qi) => { counts.L++; checkItem(q, `${where} › screen ${si + 1} › question ${qi + 1}`); });
        });
      } else {
        if (sk === 'R' && !ls.ps) err(where, 'reading lesson needs a passage ps');
        (ls.q || []).forEach((q, qi) => { counts[sk]++; checkItem(q, `${where} › question ${qi + 1}`); });
      }
    });
  }
});
(ctx.TRICKS || []).forEach((t, i) => { const where = `04-trick-questions.js › trick ${i + 1}`; if (!t.cat) err(where, 'needs a trap category cat'); checkItem(t, where); });
(ctx.STRATEGIES || []).forEach((s, i) => {
  const where = `05-strategies.js › "${s.t || s.id}"`;
  if (!s.id || !s.t || !Array.isArray(s.steps)) err(where, 'strategy needs id, t and steps');
  if (!s.drill && !s.gen) err(where, 'needs a drill list or a gen generator');
  (s.drill || []).forEach((q, qi) => checkItem(q, `${where} › drill ${qi + 1}`, false));
});
if (ctx.WLAB) { (ctx.WLAB.t1 || []).forEach((t, i) => { if (!t.p || !t.ch) err(`06-writing-lab.js › Task 1 #${i + 1}`, 'needs p and ch'); checkChart(t.ch, `06-writing-lab.js › Task 1 #${i + 1}`); }); }
(ctx.CUECARDS || []).forEach((c, i) => { if (!c.title || !Array.isArray(c.b)) err(`07-speaking.js › cue card ${i + 1}`, 'needs title and bullets b'); });
(ctx.VOCAB || []).forEach((v, i) => { if (!Array.isArray(v) || v.length !== 2) err(`03-quickfire-banks.js › VOCAB ${i + 1}`, 'must be ["word", "synonym"]'); });
console.log(`  Content: ${(ctx.LEVELS || []).length} levels, ${lessons} lessons, ${counts.L} listening / ${counts.R} reading / ${counts.W} writing / ${counts.S} speaking questions, ${(ctx.TRICKS || []).length} tricks, ${(ctx.STRATEGIES || []).length} strategies`);
warns.slice(0, 30).forEach(w => console.log('  ⚠ ' + w)); if (warns.length > 30) console.log(`  … and ${warns.length - 30} more warnings`);
errors.forEach(e => console.log('  ✗ ' + e));
console.log(errors.length ? `  ${errors.length} error(s) found` : `  Content OK${warns.length ? ` (${warns.length} warnings)` : ''}`);
process.exit(errors.length ? 1 : 0);
