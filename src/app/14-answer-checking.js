/* ================= Answer checking ================= */
const LIMITS = { 1: 'ONE WORD ONLY', 2: 'NO MORE THAN TWO WORDS', 3: 'NO MORE THAN THREE WORDS', n: 'ONE WORD AND/OR A NUMBER' };
function norm(s) { return String(s).toLowerCase().replace(/[‘’`]/g, "'").replace(/[£$€]/g, '').replace(/(\d),(\d)/g, '$1$2').replace(/(\d):(\d)/g, '$1.$2').replace(/\s*-\s*/g, '-').replace(/\s+/g, ' ').replace(/[.,;!?]+$/, '').trim(); }
function lev(a, b) { const m = a.length, n = b.length; if (Math.abs(m - n) > 2) return 3; const d = Array.from({ length: m + 1 }, (_, i) => [i]); for (let j = 1; j <= n; j++) d[0][j] = j; for (let i = 1; i <= m; i++) for (let j = 1; j <= n; j++) d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1)); return d[m][n]; }
function limitOk(input, w) { const t = norm(input).split(' ').filter(Boolean); if (w === 'n') { const nums = t.filter(x => /\d/.test(x)).length; return t.length - nums <= 1 && nums <= 2; } const lim = +w || 3; return t.length <= lim; }
function checkGap(input, it) {
  const n = norm(input); const acc = it.a.map(norm);
  if (acc.includes(n)) return { ok: true };
  if (limitOk(input, it.w)) { const s = n.replace(/^(the|a|an) /, ''); if (acc.includes(s) && s !== n && it.w !== 1) return { ok: true }; }
  if (!limitOk(input, it.w)) return { ok: false, msg: `Too many words. The instruction is ${LIMITS[it.w] || 'limited'}.` };
  if (acc.some(a => lev(a, n) <= 2 && a.length > 4)) return { ok: false, msg: 'So close: check the spelling. Misspelt answers score zero.' };
  return { ok: false };
}
