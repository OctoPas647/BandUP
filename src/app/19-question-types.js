/* ================= Item renderers ================= */
function sayBtn(text) { return `<button class="say" type="button" data-say="${esc(text)}" aria-label="Hear it">${icon('volume')}<span>Hear it</span></button>`; }
function bindSay(el) { $$('[data-say]', el).forEach(b => b.onclick = () => TTS.speak('A: ' + b.dataset.say, { A: 'f' })); }

function rChoice(it, ctx, multi) {
  const order = shuffle(it.o.map((o, i) => i)); const el = div('item'); let sel = []; let locked = false;
  const need = multi ? 2 : 1;
  el.innerHTML = `${it.say ? sayBtn(it.say) : ''}<div class="q">${fmt(it.p)}</div>${multi ? '<p class="hint">Choose TWO answers.</p>' : ''}<div class="opts" role="${multi ? 'group' : 'radiogroup'}">${order.map((oi, k) => `<button type="button" class="opt" role="${multi ? 'checkbox' : 'radio'}" aria-checked="false" data-i="${oi}"><span class="key">${'ABCDEFG'[k]}</span><span class="ot">${esc(it.o[oi])}</span></button>`).join('')}</div>`;
  const btns = $$('.opt', el);
  const choose = b => { if (locked) return; const i = +b.dataset.i; if (multi) { if (sel.includes(i)) sel = sel.filter(x => x !== i); else { sel.push(i); if (sel.length > need) sel.shift(); } } else sel = [i]; btns.forEach(x => { const on = sel.includes(+x.dataset.i); x.classList.toggle('sel', on); x.setAttribute('aria-checked', on); }); ctx.change(); };
  btns.forEach(b => b.onclick = () => choose(b)); bindSay(el);
  const ans = multi ? it.a : [it.a];
  return { el, ready: () => sel.length === need, key: n => btns[n] && choose(btns[n]),
    check() { locked = true; const ok = sel.length === ans.length && sel.every(s => ans.includes(s)); btns.forEach(b => { const i = +b.dataset.i; if (ans.includes(i)) b.classList.add('right'); else if (sel.includes(i)) b.classList.add('bad'); b.disabled = true; }); return { ok, answer: ans.map(i => it.o[i]).join(' + ') }; } };
}
function rTF(it, ctx) {
  const yn = it.k === 'y'; const opts = yn ? [['Y', 'Yes'], ['N', 'No'], ['NG', 'Not given']] : [['T', 'True'], ['F', 'False'], ['NG', 'Not given']];
  const el = div('item'); let sel = null, locked = false;
  el.innerHTML = `<div class="q stmt">${fmt(it.p)}</div><div class="tf">${opts.map(([v, l], k) => `<button type="button" class="opt tfb" data-v="${v}" aria-pressed="false"><span class="key">${k + 1}</span>${l}</button>`).join('')}</div>`;
  const btns = $$('.tfb', el); const choose = b => { if (locked) return; sel = b.dataset.v; btns.forEach(x => { x.classList.toggle('sel', x === b); x.setAttribute('aria-pressed', x === b); }); ctx.change(); };
  btns.forEach(b => b.onclick = () => choose(b));
  return { el, ready: () => !!sel, key: n => btns[n] && choose(btns[n]), check() { locked = true; btns.forEach(b => { if (b.dataset.v === it.a) b.classList.add('right'); else if (b.dataset.v === sel) b.classList.add('bad'); b.disabled = true; }); return { ok: sel === it.a, answer: opts.find(o => o[0] === it.a)[1].toUpperCase() }; } };
}
function rGap(it, ctx) {
  const el = div('item'); const parts = it.p.split('___');
  el.innerHTML = `${it.w ? `<p class="limit">${LIMITS[it.w]}</p>` : ''}<div class="q gapq">${esc(parts[0]).replace(/\n/g, '<br>')}<input class="gap" type="text" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="Your answer">${esc(parts[1] || '')}</div>`;
  const inp = $('input', el); inp.oninput = () => ctx.change(); inp.onkeydown = e => { if (e.key === 'Enter') { e.preventDefault(); ctx.enter(); } };
  setTimeout(() => { if (!matchMedia('(pointer: coarse)').matches) inp.focus({ preventScroll: true }); }, 60);
  return { el, ready: () => inp.value.trim().length > 0, check() { inp.disabled = true; const r = checkGap(inp.value, it); inp.classList.add(r.ok ? 'right' : 'bad'); return { ok: r.ok, msg: r.msg, answer: it.a[0] }; } };
}
function rMatch(it, ctx) {
  const el = div('item'); const opts = it.o;
  el.innerHTML = `<div class="q">${fmt(it.p)}</div><ul class="optbox">${opts.map(o => `<li>${esc(o)}</li>`).join('')}</ul><div class="mrows">${it.i.map((r, k) => `<label class="mrow"><span class="mt">${esc(r[0])}</span><select data-k="${k}"><option value="">Choose…</option>${opts.map((o, oi) => `<option value="${oi}">${esc(o.length > 46 ? o.slice(0, 44) + '…' : o)}</option>`).join('')}</select></label>`).join('')}</div>`;
  const sels = $$('select', el); sels.forEach(s => s.onchange = () => ctx.change());
  return { el, ready: () => sels.every(s => s.value !== ''), check() { let wrong = 0; sels.forEach((s, k) => { s.disabled = true; const ok = +s.value === it.i[k][1]; if (!ok) { wrong++; s.parentElement.insertAdjacentHTML('beforeend', `<span class="fix">${esc(opts[it.i[k][1]])}</span>`); } s.parentElement.classList.add(ok ? 'right' : 'bad'); }); return { ok: wrong === 0, msg: wrong ? `${it.i.length - wrong} of ${it.i.length} correct.` : '', answer: 'see corrections above' }; } };
}
function rOrder(it, ctx) {
  const el = div('item'); let order = shuffle(it.a.map((_, i) => i)); if (order.every((v, i) => v === i) && order.length > 1) order.reverse();
  const placed = []; let locked = false;
  el.innerHTML = `<div class="q">${fmt(it.p)}</div><div class="answerline ${it.sent ? 'sent' : ''}" aria-label="Your answer"></div><div class="bank ${it.sent ? 'sent' : ''}"></div>`;
  const line = $('.answerline', el), bank = $('.bank', el);
  const draw = () => { line.innerHTML = placed.map(i => `<button type="button" class="chip" data-i="${i}">${esc(it.a[i])}</button>`).join('') || '<span class="ph">Tap the pieces in order</span>'; bank.innerHTML = order.map(i => `<button type="button" class="chip ${placed.includes(i) ? 'used' : ''}" data-i="${i}" ${placed.includes(i) ? 'disabled' : ''}>${esc(it.a[i])}</button>`).join(''); $$('.chip', line).forEach(b => b.onclick = () => { if (locked) return; placed.splice(placed.indexOf(+b.dataset.i), 1); draw(); ctx.change(); }); $$('.chip', bank).forEach(b => b.onclick = () => { if (locked || b.disabled) return; placed.push(+b.dataset.i); draw(); ctx.change(); }); };
  draw();
  return { el, ready: () => placed.length === it.a.length, check() { locked = true; const ok = placed.every((v, i) => it.a[v] === it.a[i]); line.classList.add(ok ? 'right' : 'bad'); return { ok, answer: it.a.join(it.sent ? ' / ' : ' ') }; } };
}
function rPairs(it, ctx) {
  const el = div('item'); const left = shuffle(it.pairs.map((p, i) => i)), right = shuffle(it.pairs.map((p, i) => i)); let pick1 = null, matched = 0, mistakes = 0;
  el.innerHTML = `<div class="q">${fmt(it.p)}</div><div class="pairs"><div class="pcol">${left.map(i => `<button type="button" class="pb" data-s="l" data-i="${i}">${esc(it.pairs[i][0])}</button>`).join('')}</div><div class="pcol">${right.map(i => `<button type="button" class="pb" data-s="r" data-i="${i}">${esc(it.pairs[i][1])}</button>`).join('')}</div></div>`;
  $$('.pb', el).forEach(b => b.onclick = () => { if (b.disabled) return; if (!pick1 || pick1.dataset.s === b.dataset.s) { $$('.pb.sel', el).forEach(x => x.classList.remove('sel')); pick1 = b; b.classList.add('sel'); return; } if (pick1.dataset.i === b.dataset.i) { [pick1, b].forEach(x => { x.classList.remove('sel'); x.classList.add('done'); x.disabled = true; }); matched++; beep(true); } else { mistakes++; const a = pick1; [a, b].forEach(x => x.classList.add('shake')); setTimeout(() => [a, b].forEach(x => x.classList.remove('shake', 'sel')), 450); beep(false); } pick1 = null; ctx.change(); });
  return { el, ready: () => matched === it.pairs.length, check() { return { ok: mistakes <= 1, msg: mistakes ? `${mistakes} wrong attempt${mistakes > 1 ? 's' : ''}.` : 'Flawless.', answer: '' }; } };
}
function selfBandHTML(name) { return `<label class="selfband">Rate yourself <select data-band><option value="">Skip</option>${[9, 8.5, 8, 7.5, 7, 6.5, 6, 5.5, 5, 4.5, 4].map(b => `<option>${b.toFixed(1)}</option>`).join('')}</select></label>`; }
function checklistHTML(n) { return n && n.length ? `<fieldset class="checks"><legend>Check your answer</legend>${n.map((t, i) => `<label><input type="checkbox" data-c="${i}"> ${esc(t)}</label>`).join('')}</fieldset>` : ''; }
function aiBoxHTML() { return SAMPLE ? `<div class="ai"><button type="button" class="btn ghost aibtn">${icon('sparkle')} Get an AI examiner estimate</button><div class="aiout" aria-live="polite"></div></div>` : ''; }
async function aiGrade(kind, prompt, text, out, btn, onBand) {
  if (!SAMPLE) return; const rub = RUBRIC[kind]; let ctl = new AbortController();
  btn.disabled = true; out.innerHTML = '<p class="muted">Thinking… this can take up to a minute.</p>';
  const crit = rub.crit.map(c => `${c.k} (${c.n}): ` + Object.entries(c.b).sort((a, b) => b[0] - a[0]).map(([b, d]) => `Band ${b}: ${d}`).join(' | ')).join('\n');
  const req = `You are an experienced, strict IELTS ${rub.name} examiner. Assess the candidate's ${kind === 'S' ? 'spoken answer (a transcript, so ignore punctuation and spelling)' : 'written answer'} against the official criteria summarised below. Be calibrated: do not inflate scores.\n\nCRITERIA\n${crit}\n\nTASK\n${prompt}\n\nCANDIDATE ANSWER (${wc(text)} words)\n${text}\n\nReturn ONLY JSON: {"criteria":{${rub.crit.map(c => `"${c.k}":number`).join(',')}},"overall":number,"strengths":[string,string],"improve":[string,string,string],"upgrade":{"original":string,"better":string}}. Bands are 0–9 in steps of 0.5. "upgrade" rewrites one weak sentence from the answer at a higher band.`;
  try {
    const r = await SAMPLE.json(req, { signal: ctl.signal, modelTier: S.settings.aiTier || 'default' });
    const ov = +r.overall; out.innerHTML = `<div class="aires"><div class="aiband"><b>${fmtBand(ov)}</b><span>AI estimate</span></div><div class="aicrit">${rub.crit.map(c => `<span><b>${fmtBand(r.criteria && r.criteria[c.k])}</b> ${esc(c.n)}</span>`).join('')}</div></div>${r.strengths ? `<h4>Strengths</h4><ul>${r.strengths.map(s => `<li>${esc(s)}</li>`).join('')}</ul>` : ''}${r.improve ? `<h4>To improve</h4><ul>${r.improve.map(s => `<li>${esc(s)}</li>`).join('')}</ul>` : ''}${r.upgrade && r.upgrade.better ? `<h4>Upgrade one sentence</h4><p class="was">${esc(r.upgrade.original)}</p><p class="now">${esc(r.upgrade.better)}</p>` : ''}`;
    if (ov >= 1 && ov <= 9) onBand(ov);
  } catch (e) { const m = { not_granted: 'AI feedback needs your permission. Allow it to use this feature.', rate_limited: 'Too many requests. Wait a minute, then try again.', invalid_json: 'The answer came back in the wrong format. Try again.' }; out.innerHTML = `<p class="err">${esc(m[e && e.code] || 'AI feedback is unavailable right now. Use the checklist and self-rating instead.')}</p>`; if (e && e.code === 'not_granted') SAMPLE = null; }
  btn.disabled = false;
}
function rWrite(it, ctx) {
  const el = div('item prod'); let started = false, tleft = it.time || 0, tm = null, aiBand = null;
  el.innerHTML = `<div class="q task">${fmt(it.p)}</div><div class="wbar"><span class="wcount" aria-live="polite">0 words${it.min ? ` · aim for ${it.min}+` : ''}</span>${it.time ? `<button type="button" class="btn small timerbtn">${icon('clock')} Start ${fmtTime(it.time)} timer</button>` : ''}</div><textarea class="essay" rows="${it.min > 120 ? 14 : 6}" placeholder="Write your answer here…" aria-label="Your answer"></textarea>${checklistHTML(it.n)}<div class="prodfoot">${selfBandHTML()}</div>${aiBoxHTML()}`;
  const ta = $('textarea', el), cnt = $('.wcount', el), tb = $('.timerbtn', el);
  ta.oninput = () => { const n = wc(ta.value); cnt.textContent = `${n} words${it.min ? (n >= it.min ? ' ✓' : ` · aim for ${it.min}+`) : ''}`; cnt.classList.toggle('ok', it.min && n >= it.min); ctx.change(); };
  if (tb) tb.onclick = () => { if (started) return; started = true; tb.disabled = true; tm = setInterval(() => { tleft--; tb.innerHTML = `${icon('clock')} ${fmtTime(tleft)} left`; if (tleft <= 0) { clearInterval(tm); tb.innerHTML = `${icon('clock')} Time's up`; tb.classList.add('warn'); } }, 1000); ctx.timers.push(() => clearInterval(tm)); };
  const ab = $('.aibtn', el); if (ab) ab.onclick = () => { if (wc(ta.value) < 20) { $('.aiout', el).innerHTML = '<p class="err">Write at least 20 words first.</p>'; return; } aiGrade('W', it.p + (it.ch ? `\n(Chart: ${it.ch.title})` : ''), ta.value, $('.aiout', el), ab, b => aiBand = b); };
  return { el, prod: true, ready: () => wc(ta.value) > 0, check() { ta.readOnly = true; const n = wc(ta.value); const sb = $('[data-band]', el).value; const ticks = $$('.checks input', el); const ratio = ticks.length ? ticks.filter(t => t.checked).length / ticks.length : 1; const band = aiBand || (sb ? +sb : null); return { ok: !it.min || n >= it.min * 0.9, prod: { sk: 'W', words: n, band, ai: !!aiBand, ratio }, msg: it.min && n < it.min ? `${n} words: under the ${it.min}-word target. In the exam this loses marks.` : `${n} words submitted.`, answer: '' }; } };
}
function rSpeak(it, ctx) {
  const el = div('item prod'); let phase = 'idle', t = 0, tm = null, rec = null, chunks = [], sr = null, finalT = '', aiBand = null, stream = null;
  const cc = it.cc ? `<div class="cue"><h3>${esc(it.cc.title)}</h3><p>You should say:</p><ul>${it.cc.b.map(b => `<li>${esc(b)}</li>`).join('')}</ul></div>` : '';
  el.innerHTML = `${cc}<div class="q">${fmt(it.cc ? it.p : '“' + it.p + '”')}</div><div class="sstage"><div class="sring" aria-live="polite"><b class="stime">${fmtTime(it.prep || 0)}</b><span class="slab">Preparation</span></div><div class="sbtns"><button type="button" class="btn primary sgo">${icon('play')} Start</button><button type="button" class="btn ghost sskip" hidden>Skip ahead</button></div>${it.prep >= 30 ? '<textarea class="notes" rows="3" placeholder="Notes (key words only)…" aria-label="Notes"></textarea>' : ''}</div><div class="safter" hidden><audio controls class="playback" hidden></audio><label class="tlab">Transcript <span class="muted">(auto-filled if your browser supports it; type or edit freely)</span><textarea class="tscript" rows="4"></textarea></label>${checklistHTML(it.n)}<div class="prodfoot">${selfBandHTML()}</div>${aiBoxHTML()}</div><p class="sstatus muted" aria-live="polite"></p>`;
  const st = $('.stime', el), sl = $('.slab', el), go = $('.sgo', el), sk = $('.sskip', el), status = $('.sstatus', el);
  if (!it.prep) { sl.textContent = 'Speaking time'; st.textContent = fmtTime(it.time); }
  const stopAll = () => { clearInterval(tm); try { rec && rec.state !== 'inactive' && rec.stop(); } catch (e) { } try { sr && sr.stop(); } catch (e) { } if (stream) stream.getTracks().forEach(x => x.stop()); };
  ctx.timers.push(stopAll);
  const finish = () => { if (phase === 'done') return; phase = 'done'; stopAll(); $('.sstage', el).hidden = true; $('.safter', el).hidden = false; $('.tscript', el).value = finalT.trim(); status.textContent = 'Done. Review your answer below, then press Submit.'; quest('speak', 1); ctx.change(); };
  const speakPhase = async () => {
    phase = 'speak'; t = it.time; sl.textContent = 'Speak now'; st.textContent = fmtTime(t); el.classList.add('live'); sk.hidden = false; sk.textContent = 'I\'ve finished';
    try { stream = await navigator.mediaDevices.getUserMedia({ audio: true }); rec = new MediaRecorder(stream); rec.ondataavailable = e => chunks.push(e.data); rec.onstop = () => { if (!chunks.length) return; const a = $('.playback', el); try { a.src = URL.createObjectURL(new Blob(chunks)); a.hidden = false; } catch (e) { } }; rec.start(); status.textContent = 'Recording…'; } catch (e) { status.textContent = 'Recording isn\'t available here, so speak aloud and use the timer.'; }
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SR) { try { sr = new SR(); sr.lang = 'en-GB'; sr.continuous = true; sr.interimResults = false; sr.onresult = e => { for (let i = e.resultIndex; i < e.results.length; i++) if (e.results[i].isFinal) finalT += e.results[i][0].transcript + ' '; }; sr.onerror = () => { }; sr.start(); } catch (e) { } }
    tm = setInterval(() => { t--; st.textContent = fmtTime(t); if (t <= 0) finish(); }, 1000);
  };
  go.onclick = () => { go.hidden = true; if (it.prep) { phase = 'prep'; t = it.prep; sk.hidden = false; tm = setInterval(() => { t--; st.textContent = fmtTime(t); if (t <= 0) { clearInterval(tm); speakPhase(); } }, 1000); } else speakPhase(); };
  sk.onclick = () => { if (phase === 'prep') { clearInterval(tm); speakPhase(); } else if (phase === 'speak') finish(); };
  setTimeout(() => { const ab = $('.aibtn', el); if (ab) ab.onclick = () => { const tx = $('.tscript', el).value; if (wc(tx) < 15) { $('.aiout', el).innerHTML = '<p class="err">Add a transcript of at least 15 words (type what you said) for AI feedback.</p>'; return; } aiGrade('S', it.cc ? it.cc.title + ' ' + it.cc.b.join('; ') : it.p, tx, $('.aiout', el), ab, b => aiBand = b); }; });
  return { el, prod: true, ready: () => phase === 'done', check() { const sb = $('[data-band]', el).value; const ticks = $$('.checks input', el); const ratio = ticks.length ? ticks.filter(x => x.checked).length / ticks.length : 1; const band = aiBand || (sb ? +sb : null); return { ok: true, prod: { sk: 'S', band, ai: !!aiBand, ratio }, msg: 'Answer saved.', answer: '' }; } };
}
function renderItem(it, ctx) {
  switch (it.k) { case 'm': return rChoice(it, ctx, false); case '2': return rChoice(it, ctx, true); case 't': case 'y': return rTF(it, ctx); case 'g': return rGap(it, ctx); case 'x': return rMatch(it, ctx); case 'o': return rOrder(it, ctx); case 'pairs': return rPairs(it, ctx); case 'w': return rWrite(it, ctx); case 's': return rSpeak(it, ctx); default: { const el = div('item info', fmt(it.p || '')); return { el, ready: () => true, check: () => ({ ok: true, info: true }) }; } }
}
