/* ================= Player ================= */
let PLAYER = null;
function play(cfg) {
  if (PLAYER) PLAYER.destroy(true); document.querySelectorAll('.confetti').forEach(c => c.remove());
  regenHearts();
  const useGlobal = cfg.hearts === 'global'; const localHearts = typeof cfg.hearts === 'number' ? cfg.hearts : null;
  const P = { cfg, i: 0, hearts: useGlobal ? S.hearts.n : localHearts, correct: 0, total: 0, xp: 0, combo: 0, best: 0, start: Date.now(), r0: S.rating.all, timers: [], ended: false, screens: cfg.screens ? cfg.screens.slice() : [], wrongs: [], prods: [] };
  const rated = !!cfg.rated;
  const ov = div('player'); ov.setAttribute('role', 'dialog'); ov.setAttribute('aria-modal', 'true'); ov.setAttribute('aria-label', cfg.title);
  ov.innerHTML = `<header class="phead"><button type="button" class="iconbtn pclose" aria-label="Close">${icon('x')}</button><div class="pbar" role="progressbar" aria-valuemin="0" aria-valuemax="100"><i></i></div><div class="pstat"></div></header><div class="ptitle"><span class="pmode">${esc(cfg.badge || '')}</span><span>${esc(cfg.title)}</span></div><main class="pbody"></main><footer class="pfoot"><div class="pfb" aria-live="polite"></div><div class="pbtns"><button type="button" class="btn ghost pskip">${cfg.timer ? 'Pass' : 'Skip'}</button><button type="button" class="btn primary pcheck" disabled>Check</button></div></footer>`;
  document.body.appendChild(ov); document.body.classList.add('noscroll');
  const body = $('.pbody', ov), foot = $('.pfoot', ov), fb = $('.pfb', ov), btn = $('.pcheck', ov), skip = $('.pskip', ov), bar = $('.pbar i', ov), stat = $('.pstat', ov);
  let cur = null, phase = 'answer', tLeft = cfg.timer || 0, tick = null;
  const drawStat = () => {
    let h = '';
    if (cfg.timer) h += `<span class="chip-t">${icon('clock')} ${fmtTime(tLeft)}</span><span class="chip-s">${icon('bolt')} ${P.correct}${P.combo >= 3 ? ` <small>×${Math.min(4, 1 + Math.floor(P.combo / 3))}</small>` : ''}</span>`;
    else if (P.hearts != null) { const hit = P._ph != null && P.hearts < P._ph; h += `<span class="chip-h${hit ? ' hit' : ''}">${icon('heart')} ${P.hearts}</span>`; }
    else h += `<span class="chip-inf" title="Practice mode: unlimited mistakes">${icon('infinity')}</span>`;
    stat.innerHTML = h; P._ph = P.hearts; const pct = cfg.timer ? (1 - tLeft / cfg.timer) * 100 : (P.screens.length ? (P.i / (cfg.next ? Math.max(P.i + 1, cfg.goal || P.i + 1) : P.screens.length)) * 100 : 0);
    bar.style.width = pct + '%'; bar.parentElement.setAttribute('aria-valuenow', Math.round(pct));
  };
  P.destroy = (silent) => { P.ended = true; TTS.stop(); clearInterval(tick); P.timers.forEach(f => { try { f(); } catch (e) { } }); P.timers = []; document.removeEventListener('keydown', onKey); ov.remove(); document.body.classList.remove('noscroll'); PLAYER = null; if (!silent) cfg.onClose && cfg.onClose(); };
  const ensureScreen = () => { if (cfg.next && P.i >= P.screens.length) P.screens.push(cfg.next(P)); return P.screens[P.i]; };
  const PRE = new Map();
  function renderScreen() {
    P.timers.forEach(f => { try { f(); } catch (e) { } }); P.timers = []; TTS.stop();
    const sc = ensureScreen(); if (!sc) return finish();
    phase = 'answer'; fb.innerHTML = ''; foot.className = 'pfoot'; btn.textContent = sc.items.every(it => it.k === 'i') ? 'Continue' : sc.items.some(isProd) ? 'Submit' : 'Check'; btn.disabled = true; skip.hidden = !!cfg.noSkip || sc.items.every(it => it.k === 'i');
    body.innerHTML = ''; body.scrollTop = 0;
    let B = PRE.get(P.i); PRE.delete(P.i); if (!B || B.sc !== sc) B = buildScreen(sc);
    cur = B.cur; body.appendChild(B.wrap); B.ctx.change(); drawStat();
    if (sc.au && S.settings.autoplay && !cfg.timer) setTimeout(() => { const b = $('.aplay', body); if (b && !document.querySelector('.brief')) b.click(); }, 400);
    preload();
  }
  function buildScreen(sc) {
    const wrap = div('screen' + (sc.ps ? ' split' : '')); const left = div('sleft'), right = div('sright');
    if (sc.ps) { const pk = sc.ps.length > 400; left.innerHTML = `<details class="passage" ${pk ? 'open' : 'open'}><summary>${icon('book')} ${esc(sc.psTitle || 'Text')}<span class="hl" role="button" tabindex="0" title="Highlight selected text">${icon('marker')} Highlight</span></summary><div class="paper">${fmt(sc.ps)}</div></details>`; wrap.appendChild(left); const hl = $('.hl', left); hl.onclick = e => { e.preventDefault(); const s = getSelection(); if (!s.rangeCount || s.isCollapsed) return; const r = s.getRangeAt(0); if (!$('.paper', left).contains(r.commonAncestorContainer)) return; try { const m = document.createElement('mark'); r.surroundContents(m); s.removeAllRanges(); } catch (err) { } }; if (sc.flash) { const pp = $('.paper', left); pp.insertAdjacentHTML('beforebegin', `<p class="flash" aria-live="polite">Skim it: ${sc.flash}s</p>`); let f = sc.flash; const ft = setInterval(() => { f--; const fl = $('.flash', left); if (fl) fl.textContent = `Skim it: ${f}s`; if (f <= 0) { clearInterval(ft); pp.innerHTML = '<p class="muted">Time\'s up. Answer from what you remember.</p>'; if (fl) fl.remove(); } }, 1000); P.timers.push(() => clearInterval(ft)); } }
    if (sc.au) right.appendChild(audioCard(sc));
    if (sc.ch) right.insertAdjacentHTML('beforeend', chartHTML(sc.ch));
    const ctx = { change: () => { btn.disabled = !(cur && cur.every(c => c.ready())); }, enter: () => !btn.disabled && btn.click(), timers: P.timers };
    const items = sc.items.map(it => { const r = renderItem(it, ctx); r.it = it; right.appendChild(r.el); return r; });
    if (sc.items.length > 1) items.forEach((r, k) => r.el.insertAdjacentHTML('afterbegin', `<span class="qn">${k + 1}</span>`));
    wrap.appendChild(right); return { sc, wrap, cur: items, ctx };
  }
  function preload() {
    const run = () => { if (P.ended) return; for (let d = 1; d <= 3; d++) { const j = P.i + d; if (PRE.has(j)) continue; if (cfg.next && j >= P.screens.length) { if (j !== P.screens.length) break; P.screens.push(cfg.next(P)); } const s2 = P.screens[j]; if (!s2 || s2.flash || s2.items.some(isProd)) continue; try { PRE.set(j, buildScreen(s2)); } catch (err) { } } };
    (window.requestIdleCallback ? requestIdleCallback(run, { timeout: 300 }) : setTimeout(run, 30));
  }
  function audioCard(sc) {
    const strict = rated || cfg.mode === 'test'; let plays = strict ? Math.max(1, S.settings.replays) : Infinity; const box = div('audio');
    const speakers = Object.keys(sc.sp || { A: 1 }).length;
    box.innerHTML = `<button type="button" class="aplay" aria-label="Play recording">${icon('play')}</button><div class="ainfo"><b>Listen</b><span class="aplays">${plays === Infinity ? 'Replay as often as you like' : `Plays left: ${plays}. Like the real exam, you hear it once.`}</span>${speakers > 1 ? `<span class="muted">${speakers} speakers</span>` : ''}</div><div class="eq" aria-hidden="true"><i></i><i></i><i></i><i></i></div>`;
    const b = $('.aplay', box), pl = $('.aplays', box);
    if (!TTS.ok()) { box.innerHTML = `<p class="err">${icon('alert')} Audio isn't available in this browser, so read the transcript instead.</p><div class="tscr">${transcriptHTML(sc.au)}</div>`; return box; }
    let playing = false;
    b.onclick = () => { if (playing) { if (!strict) { TTS.stop(); playing = false; box.classList.remove('on'); b.innerHTML = icon('play'); } return; } if (plays <= 0) return; plays--; playing = true; box.classList.add('on'); b.innerHTML = icon(strict ? 'volume' : 'stop'); pl.textContent = plays === Infinity ? 'Playing…' : `Playing… (plays left: ${plays})`; TTS.speak(sc.au, sc.sp, () => { playing = false; box.classList.remove('on'); b.innerHTML = icon('play'); pl.textContent = plays === Infinity ? 'Replay as often as you like' : plays > 0 ? `Plays left: ${plays}` : 'No plays left'; if (plays <= 0) b.disabled = true; }); };
    return box;
  }
  const transcriptHTML = s => TTS.parse(s).map(l => `<p><b>${esc(l.who)}</b> ${esc(l.text)}</p>`).join('');
  function flair(xp, combo) {
    if (reduceMotion()) return;
    if (xp > 0) { const r = btn.getBoundingClientRect(); const e = div('xpfloat', `+${xp} XP`); e.style.left = (r.left + r.width / 2) + 'px'; e.style.top = (r.top - 6) + 'px'; ov.appendChild(e); setTimeout(() => e.remove(), 900 * SPD()); }
    if (combo >= 3 && !cfg.timer) { const e = div('combo', `${icon('flame')} ${combo} in a row!`); ov.appendChild(e); setTimeout(() => e.remove(), 1300 * SPD()); }
  }
  function check() {
    const sc = P.screens[P.i]; let allOk = true; const notes = []; const xp0 = P.xp;
    cur.forEach(r => {
      const res = r.check(); const it = r.it; if (res.info) return;
      if (res.prod) { const pr = res.prod; P.prods.push(pr); if (pr.sk === 'W') { S.counts.words += pr.words; quest('write', pr.words); } if (pr.band) { S.prod[pr.sk].push({ b: pr.band, ai: pr.ai, d: today() }); } const gain = 8 + Math.round(6 * pr.ratio); P.xp += gain; notes.push(`<p>${esc(res.msg || '')} +${gain} XP${pr.band ? ` · band ${fmtBand(pr.band)} recorded` : ''}</p>`); return; }
      P.total++; const sk = it.sk || cfg.skill || 'R';
      if (res.ok) { P.correct++; P.combo++; P.best = Math.max(P.best, P.combo); const mult = cfg.timer ? Math.min(4, 1 + Math.floor((P.combo - 1) / 3)) : 1; P.xp += (cfg.mode === 'test' || rated ? 3 : 2) * mult; if (sk === 'L') quest('listen', 1); if (it.cat) { S.counts.tricks++; quest('trick', 1); } if (cfg.review && it.ref) S.mist = S.mist.filter(m => m !== it.ref); }
      else { allOk = false; P.combo = 0; P.wrongs.push(it); if (it.ref && !S.mist.includes(it.ref)) S.mist.push(it.ref); if (P.hearts != null) P.hearts--; }
      S.st.a++; if (res.ok) S.st.k++; if (it.cat) { const t = S.traps[it.cat] || (S.traps[it.cat] = { n: 0, fell: 0 }); t.n++; if (!res.ok) t.fell++; }
      if (rated) rateItem(sk, (it.lvl || 5) + (it.cat ? 1 : 0), res.ok ? 1 : 0, cfg.K);
      if (!cfg.timer || !res.ok) notes.push(`${res.ok ? '' : `<p class="ans">${res.answer ? `Answer: <b>${esc(res.answer)}</b>` : ''}</p>`}${res.msg ? `<p class="why">${esc(res.msg)}</p>` : ''}${it.x ? `<p class="why">${esc(it.x)}</p>` : ''}${it.cat ? `<p class="trap">${icon('eye')} Trap: ${esc(it.cat)}</p>` : ''}`);
    });
    if (useGlobal && P.hearts != null) S.hearts.n = P.hearts;
    const anyGraded = cur.some(r => !isProd(r.it));
    if (anyGraded) beep(allOk);
    if (sc.au && S.settings.transcript && !cfg.timer) { const tx = div('transcript'); tx.innerHTML = `<details><summary>Transcript</summary>${transcriptHTML(sc.au)}</details>`; $('.sright', body).appendChild(tx); TTS.stop(); }
    phase = 'feedback'; skip.hidden = true;
    foot.className = 'pfoot ' + (anyGraded ? (allOk ? 'good' : 'badf') : 'neutral');
    fb.innerHTML = `<h3>${anyGraded ? `<span class="fbic">${icon(allOk ? 'check' : 'x')}</span>` : ''}${anyGraded ? (allOk ? pick(['Correct!', 'Nice!', 'Spot on!', 'Excellent!']) : 'Not quite') : 'Submitted'}</h3>${notes.join('')}`; flair(P.xp - xp0, anyGraded && allOk ? P.combo : 0);
    btn.textContent = 'Continue'; btn.disabled = false; drawStat(); save();
    if (cfg.timer) { setTimeout(() => { if (!P.ended && phase === 'feedback') next(); }, allOk ? 350 : 1600); }
    if (P.hearts != null && P.hearts <= 0) { btn.textContent = 'Continue'; }
    if (!TOUCH) btn.focus({ preventScroll: true });
  }
  function next() {
    if (P.hearts != null && P.hearts <= 0) return outOfHearts();
    P.i++; if (!cfg.next && P.i >= P.screens.length) return finish(); if (cfg.goal && P.i >= cfg.goal && !cfg.timer) return finish(); renderScreen();
  }
  function outOfHearts() {
    if (cfg.onOut) return finish(true);
    const m = div('modal'); m.innerHTML = `<div class="mcard"><div class="bigic heart">${icon('heart')}</div><h2>Out of hearts</h2><p>Test mode ends when you run out of hearts.</p><div class="mbtns">${S.gems >= 50 ? `<button type="button" class="btn primary" data-a="refill">${icon('gem')} Refill for 50 gems</button>` : ''}<button type="button" class="btn" data-a="practice">Continue in Practice mode (unrated)</button><button type="button" class="btn ghost" data-a="quit">End lesson</button></div></div>`;
    ov.appendChild(m);
    m.onclick = e => { const a = e.target.closest('[data-a]'); if (!a) return; m.remove(); if (a.dataset.a === 'refill') { S.gems -= 50; S.hearts.n = S.settings.heartsMax; P.hearts = S.hearts.n; save(); drawStat(); next(); } else if (a.dataset.a === 'practice') { P.hearts = null; P.cfg.mode = 'practice'; P.failedTest = true; drawStat(); next(); } else finish(true); };
  }
  function finish(failed) {
    if (P.ended) return; clearInterval(tick); TTS.stop(); P.timers.forEach(f => { try { f(); } catch (e) { } }); P.timers = [];
    const acc = P.total ? P.correct / P.total : 1;
    const summary = { acc, correct: P.correct, total: P.total, xp: P.xp, failed: !!failed || !!P.failedTest, best: P.best, prods: P.prods, wrongs: P.wrongs, secs: (Date.now() - P.start) / 1000, hearts: P.hearts };
    const extra = cfg.onDone ? cfg.onDone(summary) || {} : {};
    addXP(summary.xp + (extra.bonus || 0)); touchStreak(); dayRoll(); if (rated) S.rhist.push({ t: Date.now(), r: S.rating.all }); logBand(); checkAch(); save();
    const dr = S.rating.all - P.r0;
    body.innerHTML = `<section class="result"><div class="rhero ${summary.failed ? 'fail' : ''}"><div class="ring" style="--p:${Math.round(acc * 100)}"><b>${Math.round(acc * 100)}%</b><span>accuracy</span></div><h2>${esc(extra.title || (summary.failed ? 'Lesson ended' : 'Lesson complete!'))}</h2>${extra.sub ? `<p>${extra.sub}</p>` : ''}</div><div class="rstats"><div><b>+${summary.xp + (extra.bonus || 0)}</b><span>XP</span></div><div><b>${P.correct}/${P.total}</b><span>correct</span></div>${rated ? `<div><b class="${dr >= 0 ? 'up' : 'down'}">${dr >= 0 ? '+' : ''}${dr}</b><span>rating</span></div>` : '<div><b>Unrated</b><span>practice</span></div>'}<div><b>${fmtTime(summary.secs)}</b><span>time</span></div></div>${extra.html || ''}${summary.wrongs.length && !cfg.timer ? `<p class="muted">${summary.wrongs.length} question${summary.wrongs.length > 1 ? 's' : ''} added to Mistake Review.</p>` : ''}</section>`;
    foot.className = 'pfoot neutral'; fb.innerHTML = ''; skip.hidden = true; bar.style.width = '100%';
    btn.textContent = 'Continue'; btn.disabled = false; phase = 'done'; $$('.bigstars', body).forEach(e => { e.innerHTML = e.innerHTML.replace(/★/g, '<i>★</i>'); }); if (!reduceMotion()) { const xb = $('.rstats b', body); const mm = xb && xb.textContent.match(/^\+(\d+)$/); if (mm && +mm[1] > 0) { const to = +mm[1], t0 = performance.now(); const step = t => { if (P.ended) return; const k = Math.min(1, (t - t0) / (600 * SPD())); xb.textContent = '+' + Math.round(to * (1 - Math.pow(1 - k, 3))); if (k < 1) requestAnimationFrame(step); }; requestAnimationFrame(step); } }
    if (!summary.failed && acc >= 0.6) confetti(); if (!summary.failed && P.total && acc >= 0.6) beep(true);
  }
  btn.onclick = () => { if (phase === 'answer' && P.screens[P.i] && P.screens[P.i].items.every(it => it.k === 'i')) { next(); return; } if (phase === 'answer') check(); else if (phase === 'feedback') next(); else if (phase === 'done') P.destroy(); };
  skip.onclick = () => { if (phase !== 'answer') return; if (cfg.timer) { P.combo = 0; P.total++; P.i++; renderScreen(); return; } const sc = P.screens[P.i]; cur.forEach(r => { if (!isProd(r.it) && r.it.ref && !S.mist.includes(r.it.ref)) S.mist.push(r.it.ref); }); P.total += cur.filter(r => !isProd(r.it)).length; P.combo = 0; P.i++; if (cfg.next || P.i < P.screens.length) renderScreen(); else finish(); };
  $('.pclose', ov).onclick = () => { if (phase === 'done' || confirm('Quit? Progress in this session will be lost.')) { if (phase === 'done') P.destroy(); else { save(); P.destroy(); } } };
  function onKey(e) { if (e.target.matches('textarea, input, select') && e.key !== 'Enter') return; if (e.key === 'Enter' && !e.target.matches('textarea')) { if (e.target.matches('button:not(.pcheck)')) return; e.preventDefault(); if (!btn.disabled) btn.click(); } else if (/^[1-7]$/.test(e.key) && phase === 'answer' && cur && cur.length === 1 && cur[0].key) cur[0].key(+e.key - 1); else if (e.key === 'Escape') $('.pclose', ov).click(); }
  document.addEventListener('keydown', onKey);
  if (cfg.timer) tick = setInterval(() => { tLeft--; drawStat(); if (tLeft <= 0) finish(); }, 1000);
  PLAYER = P; renderScreen(); return P;
}
