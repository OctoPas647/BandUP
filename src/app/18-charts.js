/* ================= Charts ================= */
function niceMax(v) { const p = Math.pow(10, Math.floor(Math.log10(v || 1))); for (const m of [1, 2, 2.5, 5, 10]) if (m * p >= v) return m * p; return 10 * p; }
function chartHTML(ch) {
  const cols = ['var(--c1)', 'var(--c2)', 'var(--c3)', 'var(--c4)'];
  const legend = names => `<div class="legend">${names.map((n, i) => `<span><i style="background:${cols[i % 4]}"></i>${esc(n)}</span>`).join('')}</div>`;
  let body = '';
  if (ch.t === 'line' || ch.t === 'bar') {
    const W = 360, H = 210, L = 38, B = 30, T = 10, R = 10, max = niceMax(Math.max(...ch.s.flatMap(s => s.v)) * 1.05), pw = W - L - R, ph = H - T - B;
    const y = v => T + ph - (v / max) * ph; let g = '';
    for (let k = 0; k <= 4; k++) { const v = max * k / 4, yy = y(v); g += `<line x1="${L}" x2="${W - R}" y1="${yy}" y2="${yy}" class="grid"/><text x="${L - 6}" y="${yy + 4}" text-anchor="end" class="ax">${+v.toFixed(1)}</text>`; }
    const n = ch.x.length;
    if (ch.t === 'line') { const x = i => L + (n === 1 ? pw / 2 : i * pw / (n - 1)); ch.x.forEach((lab, i) => g += `<text x="${x(i)}" y="${H - 10}" text-anchor="middle" class="ax">${esc(lab)}</text>`); ch.s.forEach((s, si) => { g += `<polyline fill="none" stroke="${cols[si % 4]}" stroke-width="3" stroke-linejoin="round" points="${s.v.map((v, i) => x(i) + ',' + y(v)).join(' ')}"/>` + s.v.map((v, i) => `<circle cx="${x(i)}" cy="${y(v)}" r="3.5" fill="${cols[si % 4]}"><title>${esc(s.n)} ${esc(ch.x[i])}: ${v}</title></circle>`).join(''); }); }
    else { const gw = pw / n, bw = gw * 0.78 / ch.s.length; ch.x.forEach((lab, i) => { g += `<text x="${L + gw * i + gw / 2}" y="${H - 10}" text-anchor="middle" class="ax">${esc(lab)}</text>`; ch.s.forEach((s, si) => { const v = s.v[i], xx = L + gw * i + gw * 0.11 + bw * si; g += `<rect x="${xx}" y="${y(v)}" width="${bw - 2}" height="${T + ph - y(v)}" rx="3" fill="${cols[si % 4]}"><title>${esc(s.n)} ${esc(lab)}: ${v}</title></rect>`; }); }); }
    body = `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="${esc(ch.title)}">${g}<line x1="${L}" x2="${L}" y1="${T}" y2="${T + ph}" class="axis"/><line x1="${L}" x2="${W - R}" y1="${T + ph}" y2="${T + ph}" class="axis"/></svg>` + (ch.s.length > 1 || ch.t === 'line' ? legend(ch.s.map(s => s.n)) : '');
  } else if (ch.t === 'pie') {
    const tot = ch.s.reduce((a, s) => a + s.v, 0); let a0 = -Math.PI / 2, paths = ''; const pc = ['var(--c1)', 'var(--c2)', 'var(--c3)', 'var(--c4)', 'var(--xp)', 'var(--muted)'];
    ch.s.forEach((s, i) => { const a1 = a0 + s.v / tot * Math.PI * 2, lg = a1 - a0 > Math.PI ? 1 : 0; paths += `<path d="M100 100 L${100 + 90 * Math.cos(a0)} ${100 + 90 * Math.sin(a0)} A90 90 0 ${lg} 1 ${100 + 90 * Math.cos(a1)} ${100 + 90 * Math.sin(a1)}Z" fill="${pc[i % 6]}" stroke="var(--surface)" stroke-width="2"><title>${esc(s.n)}: ${s.v}%</title></path>`; a0 = a1; });
    body = `<div class="pie"><svg viewBox="0 0 200 200" role="img" aria-label="${esc(ch.title)}">${paths}</svg><div class="legend col">${ch.s.map((s, i) => `<span><i style="background:${pc[i % 6]}"></i>${esc(s.n)} <b>${s.v}%</b></span>`).join('')}</div></div>`;
  } else if (ch.t === 'table') {
    body = `<div class="tscroll"><table class="dtable"><thead><tr>${ch.head.map(h => `<th>${esc(h)}</th>`).join('')}</tr></thead><tbody>${ch.rows.map(r => `<tr>${r.map((c, i) => i ? `<td>${esc(c)}</td>` : `<th>${esc(c)}</th>`).join('')}</tr>`).join('')}</tbody></table></div>`;
  } else if (ch.t === 'flow') {
    body = `<ol class="flow">${ch.steps.map(s => `<li>${esc(s)}</li>`).join('')}</ol>`;
  }
  return `<figure class="chart"><figcaption>${esc(ch.title)}</figcaption>${body}</figure>`;
}
