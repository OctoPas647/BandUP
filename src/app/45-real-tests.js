/* ================= Real Test Simulator ================= */
const BOOKS = ['Cambridge IELTS 16 Academic', 'Cambridge IELTS 17 Academic', 'IELTS Practice Tests Plus 1', 'IELTS Practice Tests Plus 2', 'Other book'];
const LAB = { book: 0, test: 1, sec: 'listening', files: [], idx: 0, ans: Array(40).fill(''), on: false, t: 0, tm: null, phase: 'ready', strict: true, marked: null, audio: null };
const labKey = () => `${LAB.book}|${LAB.test}|${LAB.sec === 'listening' ? 'L' : 'R'}`;
function viewLab() {
  const key = S.keys[labKey()] || []; const isL = LAB.sec === 'listening'; const parts = isL ? [[1, 10], [11, 20], [21, 30], [31, 40]] : [[1, 13], [14, 26], [27, 40]];
  const res = LAB.marked;
  return `<header class="vhead"><h1>Real Test Simulator</h1><p class="muted">Sit a test from your own Cambridge books with the official timing and answer sheet. Your audio files stay on your device.</p></header>
  <section class="card labsetup"><div class="row3"><label class="fld">Book<select id="lbook">${BOOKS.map((b, i) => `<option value="${i}" ${LAB.book === i ? 'selected' : ''}>${b}</option>`).join('')}</select></label><label class="fld">Test<select id="ltest">${[1, 2, 3, 4, 5].map(n => `<option ${LAB.test === n ? 'selected' : ''}>${n}</option>`).join('')}</select></label><label class="fld">Section<select id="lsec"><option value="listening" ${isL ? 'selected' : ''}>Listening</option><option value="academic" ${LAB.sec === 'academic' ? 'selected' : ''}>Academic Reading</option><option value="general" ${LAB.sec === 'general' ? 'selected' : ''}>General Training Reading</option></select></label></div>
  ${isL ? `<div class="audiopick"><label class="btn">${icon('upload')} Load MP3s<input id="lfiles" type="file" accept="audio/*" multiple hidden></label><span class="muted small">${LAB.files.length ? LAB.files.map((f, i) => `<span class="${i === LAB.idx ? 'now' : ''}">${esc(f.name)}</span>`).join(' → ') : 'Pick the parts in order (e.g. Test 1 Part 1–4), or one full-test file.'}</span></div><label class="tog"><input type="checkbox" id="lstrict" ${LAB.strict ? 'checked' : ''}> Exam conditions: no pausing or rewinding</label><div class="lplayer" id="lplayer"></div>` : ''}
  <div class="labtimer"><b id="ltime">${fmtTime(LAB.t)}</b><span id="lphase">${{ ready: isL ? 'Ready. The timer runs with the recording, then 10 minutes to transfer answers.' : 'Ready: 60 minutes, no extra transfer time.', run: 'In progress', transfer: 'Transfer time', over: 'Time is up' }[LAB.phase]}</span><button type="button" class="btn primary" id="lstart" ${LAB.phase !== 'ready' ? 'hidden' : ''}>${icon('play')} Start test</button></div></section>
  <section class="card"><h2>Answer sheet</h2><div class="sheetgrid">${parts.map(([a, b], pi) => `<fieldset><legend>${isL ? 'Part' : 'Passage'} ${pi + 1}</legend>${Array.from({ length: b - a + 1 }, (_, k) => { const n = a + k; const r = res && res[n - 1]; return `<label class="ans ${r ? (r.ok ? 'right' : 'bad') : ''}"><span>${n}</span><input data-n="${n}" value="${esc(LAB.ans[n - 1])}" autocomplete="off" spellcheck="false" aria-label="Answer ${n}">${r && !r.ok ? `<em>${esc(r.key || '—')}</em>` : ''}</label>`; }).join('')}</fieldset>`).join('')}</div>
  <details class="keybox" ${key.filter(Boolean).length ? '' : 'open'}><summary>Answer key from your book ${key.filter(Boolean).length ? `(${key.filter(Boolean).length}/40 saved)` : '(not entered yet)'}</summary><p class="muted small">One answer per line, in order. Numbers like “1 ” or “1.” at the start are fine. Separate alternatives with a slash: <code>colour/color</code>. Optional words in brackets: <code>(the) bridge</code>. Saved for this book, test and section.</p><textarea id="lkey" rows="8" placeholder="1 Marsh&#10;2 628&#10;3 B">${esc(key.map((k, i) => k ? `${i + 1} ${k}` : '').filter(Boolean).join('\n'))}</textarea><button type="button" class="btn small" id="lsavekey">Save key</button></details>
  <div class="mbtns"><button type="button" class="btn primary" id="lmark">${icon('check')} Mark my answers</button><button type="button" class="btn ghost" id="lclear">Clear sheet</button></div>
  ${res ? `<section class="card labres"><div class="bandbig"><b>${fmtBand(res.band)}</b><span>${res.raw}/40 · ${esc(BAND_USERS[Math.floor(res.band)] || '')}</span></div><p class="muted small">Converted with the ${isL ? 'Listening' : LAB.sec === 'academic' ? 'Academic Reading' : 'General Training Reading'} table. This result now counts towards your predicted ${isL ? 'Listening' : 'Reading'} band.</p></section>` : ''}
  ${S.labres.length ? `<section class="card"><h2>Your real test history</h2><ul class="hist">${S.labres.slice().reverse().map(r => `<li><span>${esc(BOOKS[r.book] || '')} · Test ${r.test} · ${r.sec === 'L' ? 'Listening' : 'Reading'}</span><b>${r.raw}/40 → ${fmtBand(r.b)}</b><span class="muted">${r.d}</span></li>`).join('')}</ul></section>` : ''}`;
}
function labAudioEl() { if (!LAB.audio) { LAB.audio = new Audio(); LAB.audio.preload = 'auto'; LAB.audio.onended = () => { if (LAB.idx < LAB.files.length - 1) { LAB.idx++; loadLabFile(true); } else if (LAB.phase === 'run') { LAB.phase = 'transfer'; LAB.t = 600; render(); } }; } return LAB.audio; }
function loadLabFile(autoplay) { const f = LAB.files[LAB.idx]; if (!f) return; const a = labAudioEl(); let fell = false; a.onerror = () => { if (fell) return; fell = true; const fr = new FileReader(); fr.onload = () => { a.src = fr.result; if (autoplay) a.play().catch(() => { }); }; fr.readAsDataURL(f); }; try { a.src = URL.createObjectURL(f); } catch (e) { a.onerror(); } if (autoplay) a.play().catch(() => { }); drawLabPlayer(); }
function drawLabPlayer() {
  const box = $('#lplayer'); if (!box) return; const a = LAB.audio; if (!a || !LAB.files.length) { box.innerHTML = ''; return; }
  if (LAB.strict && LAB.phase === 'run') { box.innerHTML = `<p class="muted small">${icon('volume')} Playing ${esc(LAB.files[LAB.idx].name)}. Controls are locked, as in the exam.</p>`; return; }
  box.innerHTML = ''; a.controls = true; box.appendChild(a); if (!LAB.strict) { const sp = div('speed', `<label class="fld inline">Speed<select>${[0.75, 0.9, 1, 1.1, 1.25].map(r => `<option ${r === (a.playbackRate || 1) ? 'selected' : ''}>${r}</option>`).join('')}</select></label>`); box.appendChild(sp); $('select', sp).onchange = e => a.playbackRate = +e.target.value; }
}
function parseKey(txt) { const out = Array(40).fill(''); let n = 0; txt.split('\n').map(l => l.trim()).filter(Boolean).forEach(l => { const m = l.match(/^(\d{1,2})[\s.):-]+(.*)$/); if (m && +m[1] >= 1 && +m[1] <= 40) { out[+m[1] - 1] = m[2].trim(); n = +m[1]; } else if (n < 40) out[n++] = l; }); return out; }
function labMatch(ans, key) {
  if (!key) return false; const a = norm(ans); if (!a) return false;
  const tf = { true: 't', false: 'f', 'not given': 'ng', yes: 'y', no: 'n' }; const canon = s => tf[s] || s;
  return key.split('/').some(alt => { alt = alt.trim(); const base = norm(alt.replace(/\(([^)]*)\)/g, '$1')); const short = norm(alt.replace(/\([^)]*\)/g, '').replace(/\s+/g, ' ')); return [base, short].some(k => canon(k) === canon(a) || k.replace(/\s/g, '') === a.replace(/\s/g, '')); });
}
BIND.lab = () => {
  $('#lbook').onchange = e => { LAB.book = +e.target.value; LAB.marked = null; render(); };
  $('#ltest').onchange = e => { LAB.test = +e.target.value; LAB.marked = null; render(); };
  $('#lsec').onchange = e => { LAB.sec = e.target.value; LAB.marked = null; render(); };
  const fi = $('#lfiles'); if (fi) fi.onchange = e => { LAB.files = Array.from(e.target.files || []).sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric: true })); LAB.idx = 0; if (LAB.files.length) loadLabFile(false); render(); };
  const st = $('#lstrict'); if (st) st.onchange = e => { LAB.strict = e.target.checked; drawLabPlayer(); };
  drawLabPlayer();
  $$('.sheetgrid input').forEach(i => i.oninput = e => { LAB.ans[+e.target.dataset.n - 1] = e.target.value; });
  $('#lsavekey').onclick = () => { S.keys[labKey()] = parseKey($('#lkey').value); save(); toast('Answer key saved.'); render(); };
  $('#lclear').onclick = () => { if (!confirm('Clear all answers on the sheet?')) return; LAB.ans = Array(40).fill(''); LAB.marked = null; render(); };
  $('#lstart').onclick = () => {
    const isL = LAB.sec === 'listening'; if (isL && !LAB.files.length) { toast('Load the MP3 for this test first.'); return; }
    LAB.phase = 'run'; LAB.t = isL ? 0 : 3600; LAB.marked = null; clearInterval(LAB.tm);
    LAB.tm = setInterval(() => { if (LAB.phase === 'run') LAB.t += isL ? 1 : -1; else if (LAB.phase === 'transfer') LAB.t--; if (!isL && LAB.t <= 0 && LAB.phase === 'run') { LAB.phase = 'over'; clearInterval(LAB.tm); render(); toast('Time is up. Pens down.'); } if (LAB.phase === 'transfer' && LAB.t <= 0) { LAB.phase = 'over'; clearInterval(LAB.tm); render(); toast('Transfer time is over.'); } const el = $('#ltime'); if (el) el.textContent = fmtTime(LAB.t); }, 1000);
    if (isL) { LAB.idx = 0; loadLabFile(true); } render();
  };
  $('#lmark').onclick = () => {
    const key = S.keys[labKey()] || []; if (key.filter(Boolean).length < 10) { toast('Enter and save the answer key from your book first.'); const d = $('.keybox'); d && (d.open = true); return; }
    const res = LAB.ans.map((a, i) => ({ ok: labMatch(a, key[i]), key: key[i] })); const raw = res.filter(r => r.ok).length; const tab = LAB.sec === 'listening' ? 'listening' : LAB.sec; const band = rawToBand(raw, tab);
    res.raw = raw; res.band = band; LAB.marked = res; const skl = LAB.sec === 'listening' ? 'L' : 'R';
    S.exams[skl].push({ b: band, d: today(), src: 'real' }); S.labres.push({ book: LAB.book, test: LAB.test, sec: skl, raw, b: band, d: today() }); S.counts.real++; addXP(50); touchStreak(); logBand(); checkAch(); save(); clearInterval(LAB.tm); LAB.phase = 'ready'; if (LAB.audio) LAB.audio.pause(); render(); confetti();
  };
};
