/* ================= Text-to-speech listening ================= */
const TTS = {
  list: [], ok: () => 'speechSynthesis' in window, _run: 0,
  init() { if (!this.ok()) return; const load = () => { this.list = speechSynthesis.getVoices().filter(v => /^en/i.test(v.lang)); }; load(); speechSynthesis.onvoiceschanged = load; },
  F: /female|woman|kate|serena|martha|libby|sonia|susan|hazel|karen|moira|tessa|samantha|victoria|fiona|zira|jenny|aria|emma|olivia|amy|catherine|natasha|clara|maisie|ava|allison|joanna|salli|kimberly/i,
  M: /\bmale\b|daniel|arthur|ryan|george|oliver|thomas|alex|fred|james|guy|david|mark|rishi|brian|william|eric|aaron|gordon|matthew|joey|justin|christopher|liam/i,
  pool() { const acc = (S.settings.accent || 'en-GB').toLowerCase(); let p = this.list.filter(v => v.lang.replace('_', '-').toLowerCase().startsWith(acc)); return p.length ? p : this.list; },
  assign(sp) { const pool = this.pool(); const fem = pool.filter(v => this.F.test(v.name)), mal = pool.filter(v => this.M.test(v.name) && !this.F.test(v.name)); const pref = S.settings.voice && this.list.find(v => v.name === S.settings.voice); const map = {}; let fi = 0, mi = 0; Object.keys(sp || { A: 'f' }).forEach(who => { const g = (sp || {})[who] || 'f'; const list = g === 'm' ? mal : fem; const k = g === 'm' ? mi++ : fi++; let voice = list.length ? list[k % list.length] : (pref || pool[0] || null); if (k === 0 && pref && (!list.length || (g === 'f' ? this.F.test(pref.name) : this.M.test(pref.name)))) voice = pref; const reused = list.length ? Math.floor(k / list.length) : 0; let pitch = list.length ? 1 + 0.12 * reused * (k % 2 ? -1 : 1) : (g === 'm' ? 0.8 : 1.15) + 0.1 * (k % 2); map[who] = { voice, pitch }; }); return map; },
  parse(script) { return script.split('\n').map(l => l.trim()).filter(Boolean).map(l => { const m = l.match(/^([A-Z]):\s*(.*)$/); return m ? { who: m[1], text: m[2] } : { who: 'A', text: l }; }); },
  speak(script, sp, onEnd) {
    this.stop(); const run = ++this._run; if (!this.ok()) { onEnd && onEnd(); return; }
    const map = this.assign(sp); const q = [];
    this.parse(script).forEach(L => (L.text.match(/[^.!?]+[.!?]*/g) || [L.text]).forEach(s => s.trim() && q.push({ s: s.trim(), who: L.who })));
    let i = 0; const next = () => { if (run !== this._run) return; if (i >= q.length) { onEnd && onEnd(); return; } const it = q[i++]; const u = new SpeechSynthesisUtterance(it.s); const v = map[it.who] || map.A || { pitch: 1 }; if (v.voice) { u.voice = v.voice; u.lang = v.voice.lang; } else u.lang = S.settings.accent; u.pitch = v.pitch || 1; u.rate = S.settings.rate; let done = false; const fin = () => { if (done) return; done = true; clearTimeout(wd); setTimeout(next, 140); }; const wd = setTimeout(fin, (wc(it.s) / 2.2 / S.settings.rate + 2.5) * 1000); u.onend = fin; u.onerror = fin; speechSynthesis.speak(u); };
    next();
  },
  stop() { this._run++; if (this.ok()) try { speechSynthesis.cancel(); } catch (e) { } }
};
