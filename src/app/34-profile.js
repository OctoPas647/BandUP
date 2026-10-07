/* ---------- Profile (Duolingo-inspired) ---------- */
const AVATARS = ['🎓', '🦊', '🐼', '🐯', '🦁', '🐨', '🐸', '🐙', '🦄', '🐝', '🚀', '⚡', '🎧', '📚', '🌍', '🔥', '🦉', '🐺', '🐧', '🌟'];
const AVCOL = ['#3657F4', '#0E9BDB', '#1FA968', '#F5A800', '#F57F17', '#E0457B', '#8B5CF6', '#18213A'];
function xpWeek() { const out = []; for (let i = 6; i >= 0; i--) { const d = dayShift(today(), -i); out.push([d, S.xpLog[d] || 0]); } return out; }
function achProgress(a) {
  const c = S.counts, m = { first: [c.lessons, 1], ten: [c.lessons, 10], streak3: [S.streak.n, 3], streak7: [S.streak.n, 7], trick20: [c.tricks, 20], mock: [c.mocks, 1], real: [c.real, 1] };
  if (S.ach[a.id]) return [1, 1]; const v = m[a.id]; return v ? [Math.min(v[0], v[1]), v[1]] : [0, 1];
}
function viewProfile() {
  const pr = S.profile, p = predict(), name = pr.name || 'IELTS learner', handle = '@' + (pr.name || 'learner').toLowerCase().replace(/[^a-z0-9]+/g, '');
  const joined = new Date(pr.joined).toLocaleDateString('en-GB', { month: 'long', year: 'numeric' });
  const exam = pr.exam ? Math.ceil((new Date(pr.exam) - new Date(today())) / 86400000) : null;
  const doneN = Object.keys(S.done).length, stars = Object.values(S.done).reduce((s, d) => s + d.s, 0);
  const acc = S.st.a ? Math.round(S.st.k / S.st.a * 100) : null;
  const tierIdx = TIERS.findIndex(t => t[1] === tierOf(S.rating.all)), nextT = TIERS[tierIdx + 1];
  const wk = xpWeek(), max = Math.max(10, ...wk.map(w => w[1]));
  const stat = (ic, cls, v, l, extra = '') => `<div class="pst ${cls}" ${extra}><span class="psic">${icon(ic)}</span><div><b>${v}</b><span>${l}</span></div></div>`;
  const skillDone = sk => { const all = ALL.filter(r => r.sk === sk); return [all.filter(r => S.done[r.id]).length, all.length]; };
  return `<section class="phead">
    <div class="avatar" style="--av:${pr.color}">${pr.avatar}</div>
    <div class="pinfo"><h1>${esc(name)}</h1><p class="muted">${esc(handle)} · Joined ${joined}</p>
      <p class="pflags"><span>${icon('target')} Target ${S.settings.target.toFixed(1)}</span>${exam != null ? `<span>${icon('calendar')} ${exam > 0 ? `Exam in ${exam} day${exam === 1 ? '' : 's'}` : exam === 0 ? 'Exam today. Good luck!' : 'Exam date passed'}</span>` : ''}<span>${icon('trophy')} ${tierOf(S.rating.all)} league</span></p></div>
    <div class="pbtns"><button type="button" class="btn small" id="pedit">${icon('pen')} Edit profile</button><button type="button" class="iconbtn" data-tab="custom" aria-label="Customize">${icon('palette')}</button></div>
  </section>
  <h2 class="psec">Statistics</h2>
  <div class="pstats">
    ${stat('flame', 'c-streak', S.streak.n, 'Day streak')}
    ${stat('bolt', 'c-xp', S.xp.toLocaleString('en-GB'), 'Total XP')}
    ${stat('target', 'c-band', fmtBand(p.overall), 'Predicted band ›', 'data-band="" role="button" tabindex="0"')}
    ${stat('trophy', 'c-league', S.rating.all, `${tierOf(S.rating.all)} rating`)}
    ${stat('book', 'c-les', `${doneN}/${ALL.length}`, 'Lessons done')}
    ${stat('star', 'c-star', `${stars}/${ALL.length * 3}`, 'Stars earned')}
    ${stat('check', 'c-acc', acc == null ? '–' : acc + '%', 'Accuracy')}
    ${stat('gem', 'c-gem', S.gems, 'Gems')}
  </div>
  <div class="pgrid">
    <section class="card"><h3>This week</h3><div class="xpweek">${wk.map(([d, v]) => `<div class="xpd ${d === today() ? 'now' : ''}"><span class="xpv">${v || ''}</span><i style="--h:${Math.round(v / max * 100)}"></i><span class="xpl">${new Date(d).toLocaleDateString('en-GB', { weekday: 'narrow' })}</span></div>`).join('')}</div><p class="muted small">${wk.reduce((s, w) => s + w[1], 0)} XP in the last 7 days · goal ${S.settings.dailyGoal}/day</p></section>
    <section class="card"><h3>League</h3><div class="league"><span class="lgbadge">${icon('trophy')}</span><div><b>${tierOf(S.rating.all)}</b><p class="muted small">${nextT ? `${nextT[0] - S.rating.all} rating to ${nextT[1]}` : 'Top league'}</p><div class="bar sm"><i style="width:${nextT ? Math.round((S.rating.all - TIERS[tierIdx][0]) / (nextT[0] - TIERS[tierIdx][0]) * 100) : 100}%"></i></div></div></div></section>
  </div>
  <h2 class="psec">Skills</h2>
  <div class="pskills">${SK4.map(sk => { const [d, t] = skillDone(sk); return `<button type="button" class="pskill sk-${SKILLS[sk].v}" data-band="${sk}"><span class="pring" style="--p:${Math.round(d / t * 100)}">${icon(SKILLS[sk].ic)}</span><b>${SKILLS[sk].name}</b><span class="muted small">${d}/${t} lessons · band ${fmtBand(p[sk].b)}</span></button>`; }).join('')}</div>
  <h2 class="psec">Achievements</h2>
  <div class="pachs">${ACH.map(a => { const [v, g] = achProgress(a), done = !!S.ach[a.id]; return `<div class="pach ${done ? 'done' : ''}"><span class="medal">${icon(done ? 'trophy' : 'lock')}</span><div><b>${esc(a.t)}</b><span class="muted small">${esc(a.d)}</span>${done ? `<span class="small ok">Earned ${esc(String(S.ach[a.id]))}</span>` : `<div class="bar sm"><i style="width:${Math.round(v / g * 100)}%"></i></div>`}</div></div>`; }).join('')}</div>`;
}
function bindProfile() {
  const b = $('#pedit'); if (!b) return;
  b.onclick = () => {
    const pr = S.profile;
    sheet(`<h2>${icon('user')} Edit profile</h2><label class="fld">Name<input type="text" id="pname" maxlength="24" value="${esc(pr.name)}" placeholder="Your name"></label>
      <div class="fld"><span>Avatar</span><div class="avgrid">${AVATARS.map(a => `<button type="button" class="avopt ${a === pr.avatar ? 'on' : ''}" data-av="${a}">${a}</button>`).join('')}</div></div>
      <div class="fld"><span>Colour</span><div class="avcols">${AVCOL.map(c => `<button type="button" class="avc ${c === pr.color ? 'on' : ''}" data-avc="${c}" style="background:${c}" aria-label="${c}"></button>`).join('')}<input type="color" id="pcol" value="${pr.color}" aria-label="Custom colour"></div></div>
      <div class="row3"><label class="fld">Exam date<input type="date" id="pexam" value="${esc(pr.exam || '')}"></label><label class="fld">Target band<select id="ptgt">${[5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9].map(x => `<option value="${x}" ${S.settings.target === x ? 'selected' : ''}>${x.toFixed(1)}</option>`).join('')}</select></label></div>
      <div class="mbtns"><button type="button" class="btn primary" id="psave">Save</button></div>`, (m, close) => {
      let av = pr.avatar, col = pr.color;
      $$('[data-av]', m).forEach(x => x.onclick = () => { av = x.dataset.av; $$('[data-av]', m).forEach(y => y.classList.toggle('on', y === x)); });
      $$('[data-avc]', m).forEach(x => x.onclick = () => { col = x.dataset.avc; $('#pcol', m).value = col; $$('[data-avc]', m).forEach(y => y.classList.toggle('on', y === x)); });
      $('#pcol', m).oninput = e => { col = e.target.value; $$('[data-avc]', m).forEach(y => y.classList.remove('on')); };
      $('#psave', m).onclick = () => { pr.name = $('#pname', m).value.trim().slice(0, 24); pr.avatar = av; pr.color = col; pr.exam = $('#pexam', m).value; S.settings.target = +$('#ptgt', m).value; save(); close(); render(); toast('Profile saved.'); };
    });
  };
}
