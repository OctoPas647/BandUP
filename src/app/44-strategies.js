/* ================= Strategy ================= */
let STRAT_F = 'all';
function viewStrategy() {
  const list = STRATEGIES.filter(s => STRAT_F === 'all' || s.sk === STRAT_F); const names = { L: 'Listening', R: 'Reading', W: 'Writing', S: 'Speaking', X: 'Exam day' };
  return `<header class="vhead"><h1>Winning strategies</h1><p class="muted">Each strategy comes with a drill. Master it to earn stars.</p></header><div class="filters" role="group" aria-label="Filter">${[['all', 'All'], ['L', 'Listening'], ['R', 'Reading'], ['W', 'Writing'], ['S', 'Speaking'], ['X', 'Exam day']].map(([k, n]) => `<button type="button" class="fchip ${STRAT_F === k ? 'on' : ''}" data-sf="${k}">${n}</button>`).join('')}</div><div class="strats">${list.map(s => { const st = S.strat[s.id] || 0; const v = s.sk === 'X' ? 'exam' : SKILLS[s.sk].v; return `<article class="strat sk-${v}"><header><span class="schip2">${names[s.sk]}</span><span class="stars" aria-label="${st} of 3 stars">${'★'.repeat(st)}<span class="off">${'★'.repeat(3 - st)}</span></span></header><h3>${esc(s.t)}</h3><p>${esc(s.why)}</p><details><summary>How to do it</summary><ol>${s.steps.map(x => `<li>${esc(x)}</li>`).join('')}</ol></details><button type="button" class="btn primary small" data-drill="${s.id}">${icon('target')} Practise this</button></article>`; }).join('')}</div>`;
}
function startDrill(id) {
  const s = STRATEGIES.find(x => x.id === id); let items;
  if (s.gen === 'spell') items = Array.from({ length: 6 }, () => GEN.bee());
  else if (s.gen === 'para') items = [GEN.pairs(), GEN.para(), GEN.para(), GEN.para(), GEN.pairs()];
  else if (s.gen === 'micro') items = Array.from({ length: 8 }, () => GEN.micro());
  else items = s.drill.map(d => ({ ...d }));
  const sk = s.sk === 'X' ? 'R' : s.sk;
  const screens = [{ items: [{ k: 'i', p: `${s.t}\n\n${s.steps.map((x, i) => `${i + 1}. ${x}`).join('\n')}` }] }, ...items.map(it => bankScreen({ sk, lvl: 5, ...it }))];
  play({ title: s.t, badge: 'Strategy drill', screens, mode: 'practice', onClose: render, onDone(sm) { const st = !sm.total ? 3 : sm.acc >= 1 ? 3 : sm.acc >= 0.75 ? 2 : sm.acc >= 0.5 ? 1 : 0; S.strat[id] = Math.max(S.strat[id] || 0, st); quest('strat', 1); return { title: st >= 3 ? 'Strategy mastered' : 'Drill complete', sub: `<span class="bigstars">${'★'.repeat(st)}<span class="off">${'★'.repeat(3 - st)}</span></span>` }; } });
}
