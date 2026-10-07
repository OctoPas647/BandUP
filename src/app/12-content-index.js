/* ================= Content index ================= */
const ALL = [];
LEVELS.forEach(lv => SK4.forEach(sk => lv[sk].forEach((ls, i) => ALL.push({ id: `${lv.id}-${sk}-${i}`, lv, sk, i, ls }))));
const byId = id => ALL.find(r => r.id === id);
const levelBand = n => 4.5 + 0.5 * (n - 1);
const itemRating = lvl => 800 + 100 * lvl;
const bandFromRating = r => clamp(4.5 + (r - 900) / 200, 1, 9);
const tagItem = (q, extra) => Object.assign({}, q, extra);
function screensFor(rec) {
  const { ls, sk, lv } = rec;
  if (sk === 'L') return ls.sc.map((sc, si) => ({ au: sc.s, sp: ls.sp, items: sc.q.map((q, qi) => tagItem(q, { lvl: lv.id, sk, ref: `${rec.id}:${si}:${qi}` })) }));
  if (sk === 'R') return ls.q.map((q, qi) => ({ ps: ls.ps, psTitle: ls.t, items: [tagItem(q, { lvl: lv.id, sk, ref: `${rec.id}:0:${qi}` })] }));
  return ls.q.map((q, qi) => ({ ch: q.ch, cc: q.cc, items: [tagItem(q, { lvl: lv.id, sk, ref: `${rec.id}:0:${qi}` })] }));
}
function screenFromRef(ref) {
  const [id, si, qi] = ref.split(':'); const rec = byId(id); if (!rec) return null;
  const { ls, sk, lv } = rec; const tag = q => tagItem(q, { lvl: lv.id, sk, ref });
  if (sk === 'L') { const sc = ls.sc[+si]; return sc && sc.q[+qi] ? { au: sc.s, sp: ls.sp, items: [tag(sc.q[+qi])] } : null; }
  const q = ls.q[+qi]; if (!q) return null;
  if (sk === 'R') return { ps: ls.ps, psTitle: ls.t, items: [tag(q)] };
  return { ch: q.ch, cc: q.cc, items: [tag(q)] };
}
const bankScreen = it => ({ au: it.au, sp: it.sp, ps: it.ps, ch: it.ch, cc: it.cc, flash: it.flash, items: [it] });
const isProd = it => it.k === 's' || it.k === 'w' || it.k === 'i';
