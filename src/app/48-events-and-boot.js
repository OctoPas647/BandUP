/* ================= Global events & boot ================= */
document.addEventListener('click', e => {
  const t = e.target.closest('[data-tab],[data-lesson],[data-jump],[data-mode],[data-drill],[data-sf],[data-setmode],[data-act]'); if (!t || t.closest('.player')) return;
  if (t.dataset.tab) { TAB = t.dataset.tab; BIND._scrolled = false; render(); window.scrollTo(0, 0); $('#main').focus({ preventScroll: true }); }
  else if (t.dataset.lesson) lessonSheet(t.dataset.lesson);
  else if (t.dataset.jump) jumpTest(+t.dataset.jump);
  else if (t.dataset.mode) { if (t.getAttribute('aria-disabled') === 'true') { toast(t.dataset.mode === 'review' ? 'No mistakes saved yet.' : 'This mode is available inside the Claude app.'); return; } startMode(t.dataset.mode); }
  else if (t.dataset.drill) startDrill(t.dataset.drill);
  else if (t.dataset.sf) { STRAT_F = t.dataset.sf; render(); }
  else if (t.dataset.setmode) { S.settings.mode = t.dataset.setmode; save(); render(); }
  else if (t.dataset.act === 'refill') { if (S.gems >= 50) { S.gems -= 50; S.hearts.n = S.settings.heartsMax; save(); render(); toast('Hearts refilled.'); } }
  else if (t.dataset.act === 'freeze') { if (S.gems >= 100) { S.gems -= 100; S.streak.freeze++; save(); render(); toast('Streak freeze added.'); } }
});
(function patchPlayerBySkill() { /* per-skill tallies for mock exams */ })();
TTS.init();
dayRoll(); render();
setInterval(() => { if (!PLAYER) { const c = $('#topchips'); if (c) c.innerHTML = chipsHTML(); } }, 30000);
if (window.matchMedia) matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => { if (TAB === 'custom' && !PLAYER) render(); });
if ('speechSynthesis' in window) speechSynthesis.addEventListener && speechSynthesis.addEventListener('voiceschanged', () => { if (TAB === 'custom' && !PLAYER) render(); });
connectRuntime(() => { if (!PLAYER) render(); });
