/* ================= State & persistence ================= */
const DEF_SETTINGS = { animSpeed: 1, brief: 'always', iconStyle: 'line', iconSize: 1, nodeSize: 1, mode: 'practice', heartsMax: 5, heartMins: 30, dailyGoal: 50, target: 8, sound: true, anim: true, confetti: true, voice: '', rate: 0.95, accent: 'en-GB', replays: 1, transcript: true, unlockAll: false, font: 'rounded', scale: 1, radius: 18, depth: 4, themeMode: 'system', rapidLen: 120, trickHearts: 3, aiTier: 'default' };
const DEF = () => ({ v: 1, xp: 0, gems: 150, streak: { n: 0, last: null, freeze: 0 }, hearts: { n: 5, ts: Date.now() }, done: {}, jump: {}, rating: { all: 1000, L: 1000, R: 1000, W: 1000, S: 1000 }, games: { all: 0, L: 0, R: 0, W: 0, S: 0 }, prod: { W: [], S: [] }, exams: { L: [], R: [] }, rhist: [], bhist: [], mist: [], traps: {}, strat: {}, best: {}, quests: { d: null, p: {}, list: [] }, daily: { d: null, xp: 0 }, ach: {}, counts: { lessons: 0, tricks: 0, words: 0, mocks: 0, real: 0 }, settings: { ...DEF_SETTINGS }, palette: null, keys: {}, labres: [], profile: { name: '', avatar: '🎓', color: '#3657F4', joined: 0, exam: '' }, xpLog: {}, st: { a: 0, k: 0 }, seenBrief: {}, updatedAt: 0 });
const LSKEY = 'bandup-ielts.v1';
function mergeDeep(base, over) { if (!over || typeof over !== 'object') return base; for (const k of Object.keys(over)) { const v = over[k]; if (v && typeof v === 'object' && !Array.isArray(v) && base[k] && typeof base[k] === 'object' && !Array.isArray(base[k])) base[k] = mergeDeep(base[k], v); else base[k] = v; } return base; }
function loadLocal() { try { const raw = localStorage.getItem(LSKEY); if (raw) return mergeDeep(DEF(), JSON.parse(raw)); } catch (e) { } return DEF(); }
let S = loadLocal();
let REMOTE = { ref: null, timer: null, busy: false, again: false };
function trim() { S.rhist = S.rhist.slice(-200); S.bhist = S.bhist.slice(-120); S.mist = S.mist.slice(-60); S.labres = S.labres.slice(-30); S.prod.W = S.prod.W.slice(-20); S.prod.S = S.prod.S.slice(-20); S.exams.L = S.exams.L.slice(-20); S.exams.R = S.exams.R.slice(-20); }
function save() { trim(); S.updatedAt = Date.now(); try { localStorage.setItem(LSKEY, JSON.stringify(S)); } catch (e) { } if (REMOTE.ref) { clearTimeout(REMOTE.timer); REMOTE.timer = setTimeout(pushRemote, 1800); } }
async function pushRemote() { if (!REMOTE.ref) return; if (REMOTE.busy) { REMOTE.again = true; return; } REMOTE.busy = true; try { await REMOTE.ref.set({ state: JSON.parse(JSON.stringify(S)) }); } catch (e) { if (e && (e.code === 'revoked' || e.code === 'invalid_argument')) REMOTE.ref = null; } REMOTE.busy = false; if (REMOTE.again) { REMOTE.again = false; pushRemote(); } }
let SAMPLE = null, DOWNLOADS = null;
function connectRuntime(onRemote) {
  const C = window.claude; if (!C || typeof C.use !== 'function') return;
  C.use('sample').then(s => { SAMPLE = s || null; if (s) onRemote && onRemote(); }).catch(() => { });
  C.use('downloads').then(d => { DOWNLOADS = d || null; }).catch(() => { });
  Promise.all([C.use('db'), C.use('user')]).then(async ([db, user]) => {
    if (!db || !user) return; const id = await user.id(); if (!id) return;
    const ref = db.collection('data/users/' + id).doc('progress');
    try { const snap = await ref.get(); const r = snap.exists ? snap.data() : null; if (r && r.state && (r.state.updatedAt || 0) > (S.updatedAt || 0)) { S = mergeDeep(DEF(), r.state); try { localStorage.setItem(LSKEY, JSON.stringify(S)); } catch (e) { } onRemote && onRemote(); } } catch (e) { }
    REMOTE.ref = ref; if (S.updatedAt) pushRemote();
  }).catch(() => { });
}
