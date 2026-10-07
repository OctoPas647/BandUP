/* ---------- Band breakdown: why is it this, and how to raise it ---------- */
function bandParts(sk) {
  const parts = []; const n = S.games[sk];
  if (n > 0) parts.push({ k: 'rating', b: bandFromRating(S.rating[sk]), w: Math.min(1, n / 25), t: `${n} rated answers → rating ${S.rating[sk]} (${tierOf(S.rating[sk])})` });
  if ((sk === 'L' || sk === 'R') && S.exams[sk].length) { const e = S.exams[sk].slice(-3); parts.push({ k: 'exam', b: avg(e.map(x => x.b)), w: 1.5, t: `Real/mock tests: average of last ${e.length}` }); }
  if ((sk === 'W' || sk === 'S') && S.prod[sk].length) { const p = S.prod[sk].slice(-5); const ai = p.filter(e => e.ai).length; parts.push({ k: 'prod', b: avg(p.map(e => e.b)), w: 0.8 + 0.3 * ai, t: `${sk === 'W' ? 'Essays' : 'Speaking tasks'}: last ${p.length} marked${ai ? ` (${ai} by AI examiner)` : ' (self-assessed)'}` }); }
  return parts;
}
function nextStep(sk, p) {
  const b = p[sk].b; if (b == null) return `No evidence yet. Answer a few rated questions to get an estimate.`;
  if (b >= 9) return `That's the top band. Keep it there.`;
  const parts = bandParts(sk), rp = parts.find(x => x.k === 'rating');
  const others = parts.filter(x => x.k !== 'rating'); const wO = others.reduce((s, x) => s + x.w, 0), bO = wO ? others.reduce((s, x) => s + x.b * x.w, 0) / wO : 0;
  const need = b + 0.25;
  if (!rp) return `Answer rated questions in this skill (Test mode, Rapid Fire, Trick Questions) to add evidence.`;
  const bR = (need * (rp.w + wO) - bO * wO) / rp.w;
  if (bR > 9.2) return `Your ${sk === 'W' ? 'essay' : sk === 'S' ? 'speaking' : 'test'} marks are holding this back. Improve those to move up.`;
  const R = S.rating[sk], Rt = Math.ceil(900 + (bR - 4.5) * 200), dR = Math.max(1, Rt - R);
  const lvl = clamp(Math.round((b - 4.5) / 0.5) + 2, 1, 10), ir = itemRating(lvl), e = 1 / (1 + Math.pow(10, (ir - R) / 400)), K = S.games[sk] < 25 ? 32 : 20;
  const nAns = Math.max(1, Math.ceil(dR / (K * (1 - e))));
  return `Band ${(b + 0.5).toFixed(1)} needs a ${SKILLS[sk].name} rating of about ${Rt} (+${dR}). That's roughly ${nAns} correct Test-mode answers at Level ${lvl}, with no misses.`;
}
function raiseActions(sk) {
  const acts = []; const recs = ALL.filter(r => r.sk === sk);
  const imperfect = recs.filter(r => S.done[r.id] && S.done[r.id].s < 3).sort((a, b) => b.lv.id - a.lv.id).slice(0, 3);
  imperfect.forEach(r => acts.push({ ic: 'refresh', t: `Redo without mistakes: ${r.ls.t}`, d: `Level ${r.lv.id} · best ${'★'.repeat(S.done[r.id].s)}${'☆'.repeat(3 - S.done[r.id].s)}. A perfect Test-mode run earns 3 stars and rating.`, go: `L:${r.id}` }));
  const practiced = recs.filter(r => S.done[r.id] && !S.done[r.id].test && S.done[r.id].s === 3).slice(-2);
  practiced.forEach(r => acts.push({ ic: 'heart', t: `Pass in Test mode: ${r.ls.t}`, d: `You finished it in Practice, which is unrated. A Test-mode pass counts towards your band.`, go: `L:${r.id}` }));
  const nxt = recs.find(r => !S.done[r.id] && isUnlocked(r.lv) && lessonOpen(r));
  if (nxt) acts.push({ ic: SKILLS[sk].ic, t: `Next lesson: ${nxt.ls.t}`, d: `Level ${nxt.lv.id}. Harder levels move your rating faster.`, go: `L:${nxt.id}` });
  const mist = S.mist.filter(m => m.split(':')[0].split('-')[1] === sk).length;
  if (mist) acts.push({ ic: 'refresh', t: `Mistake Review (${mist} in ${SKILLS[sk].name})`, d: 'Get previous mistakes right to clear them.', go: 'M:review' });
  if (sk === 'W') acts.push({ ic: 'pen', t: 'Writing Lab', d: S.prod.W.length ? 'Each marked essay updates your Writing estimate.' : 'Submit an essay: it counts more than quiz answers.', go: 'M:wlab' });
  if (sk === 'S') acts.push({ ic: 'mic', t: 'Cue Card Roulette', d: S.prod.S.length ? 'Each marked talk updates your Speaking estimate.' : 'Complete a full Part 2 talk to add real evidence.', go: 'M:cue' });
  if (sk === 'L' || sk === 'R') acts.push({ ic: 'flask', t: 'Sit a real Cambridge test', d: 'A full test from your own books is the strongest evidence.', go: 'T:lab' });
  const st = STRATEGIES.find(s => s.sk === sk && !(S.strat[s.id] >= 3)); if (st) acts.push({ ic: 'bulb', t: `Strategy: ${st.t}`, d: 'Practise the technique behind the questions.', go: `D:${st.id}` });
  return acts;
}
function openBand(focus) {
  const p = predict(); const have = SK4.filter(sk => p[sk].b != null);
  const order = SK4.slice().sort((a, b) => (p[a].b ?? -1) - (p[b].b ?? -1));
  const mean = have.length ? avg(have.map(sk => p[sk].b)) : null;
  const tgt = S.settings.target;
  let overallNext = '';
  if (p.overall != null && p.overall < 9 && have.length === 4) {
    const fix = order[0], raised = roundIELTS((mean * 4 + 0.5) / 4);
    overallNext = raised > p.overall ? `Raise your weakest skill, <b>${SKILLS[fix].name}</b>, by half a band and your overall becomes <b>${raised.toFixed(1)}</b>.` : `Raise two skills by half a band each to reach <b>${(p.overall + 0.5).toFixed(1)}</b>.`;
  }
  const skillHTML = order.map(sk => {
    const parts = bandParts(sk); const tw = parts.reduce((s, x) => s + x.w, 0);
    return `<details class="bsk sk-${SKILLS[sk].v}" ${(focus ? sk === focus : sk === order[0]) ? 'open' : ''}><summary><span class="bskic">${icon(SKILLS[sk].ic)}</span><span class="bskn">${SKILLS[sk].name}</span><b>${fmtBand(p[sk].b)}</b><span class="conf">${'●'.repeat(p[sk].conf || 0)}<span class="off">${'●'.repeat(3 - (p[sk].conf || 0))}</span></span></summary>
      ${parts.length ? `<ul class="bwhy">${parts.map(x => `<li><span>${esc(x.t)}</span><b>${x.b.toFixed(1)}</b><i style="width:${Math.round(x.w / tw * 100)}%"></i></li>`).join('')}</ul><p class="small muted">Bars show how much each source counts. More answers = more confidence.</p>` : '<p class="muted">No evidence yet.</p>'}
      <p class="bnext">${icon('target')} ${nextStep(sk, p)}</p>
      <div class="bacts">${raiseActions(sk).map(a => `<button type="button" class="bact" data-bgo="${a.go}"><span class="baic">${icon(a.ic)}</span><span><b>${esc(a.t)}</b><span>${esc(a.d)}</span></span>${icon('arrowr')}</button>`).join('')}</div></details>`;
  }).join('');
  sheet(`<div class="bandsheet"><h2>${icon('target')} Why ${fmtBand(p.overall)}?</h2>
    <div class="bsum"><div class="bsumn"><b>${fmtBand(p.overall)}</b><span>${p.overall != null ? BAND_USERS[Math.floor(p.overall)] || '' : 'No estimate yet'}</span></div>
    <p>${have.length ? `Your overall band is the average of your four skills: ${SK4.map(sk => fmtBand(p[sk].b)).join(' + ')} ÷ ${have.length} = <b>${mean.toFixed(2)}</b>, rounded the IELTS way (.25 rounds up to .5, .75 up to the next band).` : 'Complete some Test-mode lessons or Rapid Fire to get an estimate.'}${p.provisional && have.length ? ' Provisional until all four skills have evidence.' : ''}</p></div>
    ${overallNext ? `<p class="bover">${icon('sparkle')} ${overallNext}</p>` : ''}
    ${p.overall != null ? `<p class="muted small">Target ${tgt.toFixed(1)} · ${p.overall >= tgt ? 'reached!' : `${(tgt - p.overall).toFixed(1)} to go`}</p>` : ''}
    <h3>Skills, weakest first</h3>${skillHTML}</div>`, (m, close) => {
    m.addEventListener('click', e => {
      const b = e.target.closest('[data-bgo]'); if (!b) return; e.stopPropagation(); const [kind, id] = b.dataset.bgo.split(':'); close();
      if (kind === 'L') { regenHearts(); startLesson(id, S.hearts.n > 0 ? 'test' : 'practice'); if (S.hearts.n <= 0) toast('No hearts, so this run is in Practice mode.'); }
      else if (kind === 'M') startMode(id); else if (kind === 'D') startDrill(id); else if (kind === 'T') { TAB = id; render(); window.scrollTo(0, 0); }
    });
  });
}
document.addEventListener('click', e => { const t = e.target.closest('[data-band]'); if (!t || t.closest('.player') || t.closest('.modal')) return; e.preventDefault(); e.stopPropagation(); openBand(t.dataset.band || null); }, true);
