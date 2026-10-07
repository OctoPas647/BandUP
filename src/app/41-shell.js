/* ================= Shell ================= */
const TABS = [['learn', 'path', 'Learn'], ['modes', 'bolt', 'Modes'], ['strategy', 'bulb', 'Strategies'], ['lab', 'flask', 'Real tests'], ['stats', 'chart', 'Progress'], ['profile', 'user', 'Profile'], ['custom', 'palette', 'Customize']];
let TAB = 'learn';
function navHTML(cls) { return TABS.map(([id, ic, n]) => `<button type="button" class="navb ${TAB === id ? 'on' : ''}" data-tab="${id}" ${TAB === id ? 'aria-current="page"' : ''}>${icon(ic)}<span>${n}</span></button>`).join(''); }
function chipsHTML() { regenHearts(); const p = predict(); const nh = nextHeartIn(); return `<span class="schip streak" title="Day streak">${icon('flame')}<b>${S.streak.n}</b></span><span class="schip gems" title="Gems">${icon('gem')}<b>${S.gems}</b></span><span class="schip hearts" title="${nh ? 'Next heart in ' + fmtTime(nh / 1000) : 'Hearts full'}">${icon('heart')}<b>${S.hearts.n}</b></span><button type="button" class="schip band" data-band="" title="Predicted overall band">Band <b>${fmtBand(p.overall)}</b></button>`; }
function railHTML() {
  dayRoll(); const p = predict(); const goal = S.settings.dailyGoal; const dx = S.daily.xp;
  const qs = S.quests.list.map(id => { const q = QUESTS.find(x => x.id === id); const v = Math.min(q.g, S.quests.p[id] || 0); return `<li class="${v >= q.g ? 'qdone' : ''}"><span>${esc(q.t)}</span><div class="bar sm"><i style="width:${v / q.g * 100}%"></i></div></li>`; }).join('');
  return `<section class="card bandcard" data-band="" role="button" tabindex="0" title="Why this band, and how to raise it"><h3>Predicted IELTS band</h3><div class="bandbig"><b>${fmtBand(p.overall)}</b><span>${p.overall == null ? 'Answer a few questions to get an estimate' : p.provisional ? 'Provisional: not all skills tested' : 'Overall, IELTS rounding'}</span></div><div class="skbands">${SK4.map(sk => `<div class="skb sk-${SKILLS[sk].v}"><span>${icon(SKILLS[sk].ic)}</span><b>${fmtBand(p[sk].b)}</b></div>`).join('')}</div><p class="muted small">Target ${S.settings.target.toFixed(1)}${p.overall != null ? ` · ${p.overall >= S.settings.target ? 'on target' : (S.settings.target - p.overall).toFixed(1) + ' to go'}` : ''}</p></section>
  <section class="card"><h3>Daily goal</h3><div class="goal"><div class="ring sm" style="--p:${Math.min(100, Math.round(dx / goal * 100))}"><b>${dx}</b></div><span>${dx} / ${goal} XP today</span></div></section>
  <section class="card"><h3>Today's quests</h3><ul class="quests">${qs}</ul></section>
  <section class="card"><h3>Rating</h3><div class="rating"><b>${S.rating.all}</b><span class="tier">${tierOf(S.rating.all)}</span></div><p class="muted small">${S.games.all} rated answers. Test mode, Rapid Fire and Trick questions are rated.</p></section>
  <section class="card shop"><h3>Shop</h3><button type="button" class="btn small" data-act="refill" ${S.gems < 50 || S.hearts.n >= S.settings.heartsMax ? 'disabled' : ''}>${icon('heart')} Refill hearts · 50</button><button type="button" class="btn small" data-act="freeze" ${S.gems < 100 ? 'disabled' : ''}>${icon('flame')} Streak freeze · 100 <span class="muted">(${S.streak.freeze} owned)</span></button></section>`;
}
function render() {
  applyTheme(); dayRoll();
  $('#side').innerHTML = `<div class="brand"><span class="logo" aria-hidden="true">${icon('trophy')}</span><span>BandUp</span></div>${navHTML()}`;
  $('#bottomnav').innerHTML = navHTML();
  $('#topchips').innerHTML = chipsHTML();
  $('#rail').innerHTML = railHTML();
  const views = { learn: viewLearn, modes: viewModes, strategy: viewStrategy, lab: viewLab, stats: viewStats, profile: viewProfile, custom: viewCustom };
  $('#main').innerHTML = (views[TAB] || viewLearn)();
  (BIND[TAB] || (() => { }))();
  const mainEl = $('#main'); if (TAB !== LAST_TAB) { mainEl.classList.remove('enter'); void mainEl.offsetWidth; mainEl.classList.add('enter'); LAST_TAB = TAB; }
  if (JUST && TAB === 'learn' && !PLAYER) { const n = $('#main .node.cur') || $('#main .node.just'); if (n) setTimeout(() => n.scrollIntoView({ block: 'center', behavior: reduceMotion() ? 'auto' : 'smooth' }), 60); setTimeout(() => { JUST = null; }, 900); }
  flushToasts();
}
function flushToasts() { const box = $('#toasts'); while (TOASTS.length) { const msg = TOASTS.shift(); [...box.children].forEach(o => { if (o.textContent === msg) o.remove(); }); while (box.children.length >= 2) box.firstElementChild.remove(); const el = div('toast', esc(msg)); box.appendChild(el); setTimeout(() => el.remove(), 4200); } }
function toast(m) { TOASTS.push(m); flushToasts(); }
function sheet(html, bind) { const m = div('modal'); m.innerHTML = `<div class="mcard" role="dialog" aria-modal="true"><button type="button" class="iconbtn mx" aria-label="Close">${icon('x')}</button>${html}</div>`; document.body.appendChild(m); const close = () => { m.remove(); document.removeEventListener('keydown', k); }; const k = e => { if (e.key === 'Escape') close(); }; document.addEventListener('keydown', k); m.onclick = e => { if (e.target === m || e.target.closest('.mx')) close(); }; bind && bind(m, close); const f = $('button:not(.mx), select, input', m); f && !TOUCH && f.focus(); return close; }
const BIND = {}; BIND.profile = () => bindProfile(); let JUST = null, LAST_TAB = null;
