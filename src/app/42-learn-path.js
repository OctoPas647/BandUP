/* ================= Learn ================= */
const OFFS = [0, 46, 72, 46, 0, -46, -72, -46];
const isUnlocked = lv => lv.id === 1 || S.settings.unlockAll || S.jump[lv.id] || levelProgress(LEVELS[lv.id - 2]) >= 0.7;
function lessonOpen(rec) { if (!isUnlocked(rec.lv)) return false; if (S.settings.unlockAll || rec.i === 0) return true; return !!S.done[`${rec.lv.id}-${rec.sk}-${rec.i - 1}`]; }
function recommend() { const p = predict(); const order = SK4.slice().sort((a, b) => (p[a].b ?? 0) - (p[b].b ?? 0)); for (const lv of LEVELS) { if (!isUnlocked(lv)) break; for (const sk of order) { const rec = ALL.find(r => r.lv === lv && r.sk === sk && !S.done[r.id] && lessonOpen(r)); if (rec) return rec; } } return null; }
function viewLearn() {
  const done = Object.keys(S.done).length, rec = recommend(); let cur = rec && rec.id;
  let h = `<section class="course"><div class="ctop"><div><h1>Your path to band ${S.settings.target.toFixed(1)}</h1><p class="muted">${done} of ${ALL.length} lessons complete</p></div><div class="seg" role="group" aria-label="Default lesson mode"><button type="button" data-setmode="practice" class="${S.settings.mode === 'practice' ? 'on' : ''}">${icon('infinity')} Practice</button><button type="button" data-setmode="test" class="${S.settings.mode === 'test' ? 'on' : ''}">${icon('heart')} Test</button></div></div><div class="bar big" role="progressbar" aria-valuenow="${Math.round(done / ALL.length * 100)}" aria-valuemin="0" aria-valuemax="100"><i style="width:${done / ALL.length * 100}%"></i></div><p class="muted small">${S.settings.mode === 'practice' ? 'Practice: unlimited mistakes, unrated.' : 'Test: hearts, rated, and your answers move your predicted band.'}</p>${rec ? `<button type="button" class="btn primary wide" data-lesson="${rec.id}">${icon('play')} Continue: ${esc(rec.ls.t)} <span class="muted-on">· ${SKILLS[rec.sk].name}, level ${rec.lv.id}</span></button>` : ''}</section><div class="today-inline">${railHTML()}</div>`;
  for (const lv of LEVELS) {
    const open = isUnlocked(lv), prog = levelProgress(lv);
    h += `<section class="level ${open ? '' : 'locked'}" id="lv-${lv.id}"><header class="lvhead"><div class="lvband" aria-label="Band ${levelBand(lv.id).toFixed(1)}"><b>${levelBand(lv.id).toFixed(1)}</b><span>band</span></div><div class="lvtext"><h2>Level ${lv.id} · ${esc(lv.name)}</h2><p>${esc(lv.theme)}</p><div class="bar"><i style="width:${prog * 100}%"></i></div></div>${open ? '' : `<div class="lvlock">${icon('lock')}<button type="button" class="btn small" data-jump="${lv.id}">Jump here</button></div>`}</header><div class="path">`;
    let k = 0;
    for (const sk of SK4) {
      h += `<div class="unit sk-${SKILLS[sk].v}">${icon(SKILLS[sk].ic)} ${SKILLS[sk].name}</div>`;
      lv[sk].forEach((ls, i) => {
        const id = `${lv.id}-${sk}-${i}`, d = S.done[id], o = lessonOpen({ lv, sk, i }); const st = d ? (d.test ? 'gold' : 'done') : o ? 'open' : 'locked'; const isCur = id === cur;
        h += `<div class="nw" style="--x:${OFFS[k++ % 8]}px">${isCur ? '<span class="start">Start</span>' : ''}<button type="button" class="node sk-${SKILLS[sk].v} ${st} ${isCur ? 'cur' : ''} ${id === JUST ? 'just' : ''}" data-lesson="${id}" aria-label="${esc(ls.t)}, ${SKILLS[sk].name}${d ? ', complete' : o ? '' : ', locked'}">${icon(st === 'locked' ? 'lock' : d ? (d.test ? 'trophy' : 'check') : SKILLS[sk].ic)}</button><span class="nlab">${esc(ls.t)}</span>${d ? `<span class="stars" aria-label="${d.s} stars">${'★'.repeat(d.s)}<span class="off">${'★'.repeat(3 - d.s)}</span></span>` : ''}</div>`;
      });
    }
    h += `</div>${open ? '' : `<p class="lvnote">Finish 7 lessons in level ${lv.id - 1} to unlock, or jump ahead with a short test.</p>`}</section>`;
  }
  return h;
}
function lessonSheet(id) {
  const rec = byId(id); if (!rec) return; const { ls, sk, lv } = rec; const d = S.done[id]; regenHearts();
  if (!lessonOpen(rec)) { toast(isUnlocked(lv) ? 'Finish the previous lesson in this unit first.' : 'This level is locked.'); return; }
  const nq = screensFor(rec).reduce((a, s) => a + s.items.length, 0);
  sheet(`<div class="lsheet sk-${SKILLS[sk].v}"><div class="lsic">${icon(SKILLS[sk].ic)}</div><p class="eyebrow">Level ${lv.id} · ${SKILLS[sk].name}${ls.ctx ? ' · ' + esc(ls.ctx) : ls.ty ? ' · ' + esc(ls.ty) : ''}</p><h2>${esc(ls.t)}</h2><p>${esc(ls.tip || '')}</p><p class="muted small">${nq} questions${d ? ` · best ${'★'.repeat(d.s)}${d.test ? ' · test passed' : ''}` : ''}</p><div class="mbtns"><button type="button" class="btn ${S.settings.mode === 'practice' ? 'primary' : ''}" data-go="practice">${icon('infinity')} Practice</button><button type="button" class="btn ${S.settings.mode === 'test' ? 'primary' : ''}" data-go="test" ${S.hearts.n <= 0 ? 'disabled' : ''}>${icon('heart')} Test · ${S.hearts.n} hearts</button></div>${S.hearts.n <= 0 ? `<p class="muted small">No hearts left. Next heart in ${fmtTime(nextHeartIn() / 1000)}, or refill in the shop.</p>` : ''}</div>`, (m, close) => $$('[data-go]', m).forEach(b => b.onclick = () => { close(); startLesson(id, b.dataset.go); }));
}
function startLesson(id, mode) {
  const rec = byId(id); const test = mode === 'test'; regenHearts(); if (test && S.hearts.n <= 0) { toast('You are out of hearts.'); return; }
  maybeBrief(rec);
  play({ title: rec.ls.t, badge: `Level ${rec.lv.id} · ${SKILLS[rec.sk].name}`, screens: screensFor(rec), mode, rated: test, hearts: test ? 'global' : null, skill: rec.sk, onClose: render,
    onDone(sm) {
      const stars = !sm.total ? 3 : sm.acc >= 1 ? 3 : sm.acc >= 0.8 ? 2 : sm.acc >= 0.6 ? 1 : 0; const prev = S.done[id];
      if (test && sm.failed) return { title: 'Out of hearts', sub: 'Review the explanations, then try again.' };
      if (stars > 0) { JUST = id; S.done[id] = { s: Math.max(stars, prev ? prev.s : 0), test: !!((prev && prev.test) || (test && !sm.failed)), n: (prev ? prev.n : 0) + 1 }; S.counts.lessons++; quest('lessons', 1); if (sm.total && sm.acc === 1) quest('perfect', 1); }
      if (!test) { regenHearts(); S.hearts.n = Math.min(S.settings.heartsMax, S.hearts.n + 1); }
      return { bonus: stars ? (test ? 15 : 10) + (sm.acc === 1 ? 5 : 0) : 0, title: stars ? (test ? 'Test passed!' : 'Lesson complete!') : 'Almost there', sub: stars ? `<span class="bigstars">${'★'.repeat(stars)}<span class="off">${'★'.repeat(3 - stars)}</span></span>${!test ? '<br>+1 heart for practising' : ''}` : 'Score 60% or more to complete the lesson.' };
    } });
}
function jumpTest(n) {
  const lv = LEVELS[n - 1]; const pool = shuffle(ALL.filter(r => r.lv === lv).flatMap(r => screensFor(r).map(sc => ({ ...sc, items: sc.items.filter(it => !isProd(it)) })).filter(sc => sc.items.length))).slice(0, 8);
  play({ title: `Jump to level ${n}`, badge: 'Level jump', screens: pool, mode: 'test', rated: true, hearts: 3, onOut: true, onClose: render, onDone(sm) { const pass = !sm.failed && sm.acc >= 0.7; if (pass) S.jump[n] = true; return { title: pass ? `Level ${n} unlocked!` : 'Not this time', sub: pass ? 'You can start any lesson in this level.' : 'You need 70% without losing all 3 hearts.' }; } });
}
BIND.learn = () => { const c = $('.node.cur'); if (c && !BIND._scrolled) { BIND._scrolled = true; setTimeout(() => c.scrollIntoView({ block: 'center', behavior: reduceMotion() ? 'auto' : 'smooth' }), 120); } };
