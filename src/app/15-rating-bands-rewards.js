/* ================= Rating, bands, rewards ================= */
function rateItem(sk, lvl, score, K) { const ir = itemRating(lvl || 5); for (const key of [sk, 'all']) { if (!(key in S.rating)) continue; const r = S.rating[key]; const e = 1 / (1 + Math.pow(10, (ir - r) / 400)); const k = K || (S.games[key] < 25 ? 32 : 20); S.rating[key] = Math.round(r + k * (score - e)); S.games[key]++; } }
const avg = a => a.reduce((x, y) => x + y, 0) / a.length;
function roundIELTS(x) { const f = Math.floor(x), d = x - f; return d < 0.25 ? f : d < 0.75 ? f + 0.5 : f + 1; }
function predict() {
  const out = {};
  for (const sk of SK4) {
    const parts = []; let n = S.games[sk];
    if (n > 0) parts.push([bandFromRating(S.rating[sk]), Math.min(1, n / 25)]);
    if ((sk === 'L' || sk === 'R') && S.exams[sk].length) { parts.push([avg(S.exams[sk].slice(-3).map(e => e.b)), 1.5]); n += 20; }
    if ((sk === 'W' || sk === 'S') && S.prod[sk].length) { const p = S.prod[sk].slice(-5); parts.push([avg(p.map(e => e.b)), 0.8 + 0.3 * p.filter(e => e.ai).length]); n += 6 * p.length; }
    if (!parts.length) { out[sk] = { b: null, conf: 0 }; continue; }
    const tw = parts.reduce((s, p) => s + p[1], 0); const b = parts.reduce((s, p) => s + p[0] * p[1], 0) / tw;
    out[sk] = { b: Math.round(b * 2) / 2, raw: b, conf: n < 10 ? 1 : n < 40 ? 2 : 3 };
  }
  const have = SK4.filter(sk => out[sk].b != null);
  out.overall = have.length ? roundIELTS(avg(have.map(sk => out[sk].b))) : null;
  out.provisional = have.length < 4; return out;
}
const TIERS = [[0, 'Bronze'], [900, 'Silver'], [1050, 'Gold'], [1200, 'Sapphire'], [1350, 'Ruby'], [1500, 'Emerald'], [1650, 'Diamond'], [1800, 'Obsidian']];
const tierOf = r => TIERS.filter(t => r >= t[0]).pop()[1];
function regenHearts() { const H = S.hearts, max = S.settings.heartsMax, per = S.settings.heartMins * 60000; if (H.n >= max) { H.n = Math.min(H.n, max); H.ts = Date.now(); return; } const add = Math.floor((Date.now() - H.ts) / per); if (add > 0) { H.n = Math.min(max, H.n + add); H.ts += add * per; if (H.n >= max) H.ts = Date.now(); } }
const nextHeartIn = () => { const H = S.hearts; if (H.n >= S.settings.heartsMax) return 0; return S.settings.heartMins * 60000 - (Date.now() - H.ts); };
const QUESTS = [{ id: 'xp', t: 'Earn 60 XP', g: 60 }, { id: 'lessons', t: 'Finish 2 lessons', g: 2 }, { id: 'perfect', t: 'Finish a lesson with no mistakes', g: 1 }, { id: 'rapid', t: 'Score 12+ in Rapid Fire', g: 12, max: true }, { id: 'trick', t: 'Spot 5 traps', g: 5 }, { id: 'speak', t: 'Complete a speaking task', g: 1 }, { id: 'write', t: 'Write 150 words', g: 150 }, { id: 'strat', t: 'Practise a strategy', g: 1 }, { id: 'listen', t: 'Get 8 listening answers right', g: 8 }];
function dayRoll() { const d = today(); if (S.daily.d !== d) S.daily = { d, xp: 0 }; if (S.quests.d !== d) { let seed = d.split('-').reduce((a, b) => a * 31 + +b, 7); const ids = []; while (ids.length < 3) { seed = (seed * 9301 + 49297) % 233280; const q = QUESTS[seed % QUESTS.length]; if (!ids.includes(q.id)) ids.push(q.id); } S.quests = { d, p: {}, list: ids }; } }
let TOASTS = [];
function quest(id, amt, isMax) { dayRoll(); if (!S.quests.list.includes(id)) return; const q = QUESTS.find(x => x.id === id); const before = S.quests.p[id] || 0; const now = isMax ? Math.max(before, amt) : before + amt; S.quests.p[id] = now; if (before < q.g && now >= q.g) { S.gems += 20; TOASTS.push(`Quest complete: ${q.t} (+20 gems)`); } }
function addXP(n) { if (n <= 0) return; dayRoll(); S.xp += n; S.daily.xp += n; { const td = today(); S.xpLog[td] = (S.xpLog[td] || 0) + n; for (const k of Object.keys(S.xpLog)) if (k < dayShift(td, -40)) delete S.xpLog[k]; } quest('xp', n); }
function touchStreak() { const d = today(); if (S.streak.last === d) return; const y = dayShift(d, -1); if (S.streak.last === y) S.streak.n++; else if (S.streak.last && S.streak.freeze > 0 && S.streak.last === dayShift(d, -2)) { S.streak.freeze--; S.streak.n++; } else S.streak.n = 1; S.streak.last = d; }
function logBand() { const p = predict(); if (p.overall == null) return; const d = today(); const last = S.bhist[S.bhist.length - 1]; if (last && last.d === d) last.b = p.overall; else S.bhist.push({ d, b: p.overall }); }
const ACH = [
  { id: 'first', t: 'First steps', d: 'Finish your first lesson', f: () => S.counts.lessons >= 1 },
  { id: 'ten', t: 'Getting serious', d: 'Finish 10 lessons', f: () => S.counts.lessons >= 10 },
  { id: 'level', t: 'Level up', d: 'Complete a whole level', f: () => LEVELS.some(lv => levelProgress(lv) === 1) },
  { id: 'streak3', t: 'On a roll', d: '3-day streak', f: () => S.streak.n >= 3 },
  { id: 'streak7', t: 'Week warrior', d: '7-day streak', f: () => S.streak.n >= 7 },
  { id: 'gold', t: 'Under pressure', d: 'Pass a lesson in Test mode', f: () => Object.values(S.done).some(d => d.test) },
  { id: 'rapid20', t: 'Lightning', d: 'Score 20+ in Rapid Fire', f: () => Object.values(S.best).some(v => v >= 20) },
  { id: 'trap20', t: 'Trap hunter', d: 'Answer 20 trick questions correctly', f: () => S.counts.tricks >= 20 },
  { id: 'words', t: 'Wordsmith', d: 'Write 1,000 words in total', f: () => S.counts.words >= 1000 },
  { id: 'mock', t: 'Dress rehearsal', d: 'Finish a mock exam', f: () => S.counts.mocks >= 1 },
  { id: 'real', t: 'The real thing', d: 'Mark a real Cambridge test', f: () => S.counts.real >= 1 },
  { id: 'b7', t: 'Band 7 territory', d: 'Reach a predicted 7.0', f: () => (predict().overall || 0) >= 7 },
  { id: 'b8', t: 'Band 8 territory', d: 'Reach a predicted 8.0', f: () => (predict().overall || 0) >= 8 }
];
function checkAch() { for (const a of ACH) if (!S.ach[a.id] && a.f()) { S.ach[a.id] = today(); S.gems += 30; TOASTS.push(`Achievement: ${a.t} (+30 gems)`); } }
function levelProgress(lv) { const ids = ALL.filter(r => r.lv === lv).map(r => r.id); return ids.filter(id => S.done[id]).length / ids.length; }
