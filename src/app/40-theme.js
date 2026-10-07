/* ================= Theme ================= */
const TOKENS = [
  ['Base', [['bg', 'bg', 'App background'], ['surface', 'surface', 'Cards'], ['surface2', 'surface2', 'Raised areas'], ['border', 'border', 'Borders'], ['text', 'text', 'Text'], ['muted', 'muted', 'Secondary text'], ['nav', 'nav', 'Navigation']]],
  ['Brand', [['primary', 'primary', 'Primary buttons'], ['primaryInk', 'primary-ink', 'Text on primary'], ['accent', 'accent', 'Accent & gems'], ['xp', 'xp', 'XP & stars'], ['streak', 'streak', 'Streak flame'], ['heart', 'heart', 'Hearts']]],
  ['Feedback', [['correct', 'correct', 'Correct'], ['correctBg', 'correct-bg', 'Correct background'], ['wrong', 'wrong', 'Wrong'], ['wrongBg', 'wrong-bg', 'Wrong background']]],
  ['Skills', [['listening', 'listening', 'Listening'], ['reading', 'reading', 'Reading'], ['writing', 'writing', 'Writing'], ['speaking', 'speaking', 'Speaking']]],
  ['Progress', [['fill', 'fill', 'Progress fill'], ['track', 'track', 'Progress track'], ['path', 'path', 'Locked nodes']]],
  ['Reading booklet', [['paper', 'paper', 'Paper'], ['paperInk', 'paper-ink', 'Paper text'], ['mark', 'mark', 'Highlighter']]],
  ['Charts', [['c1', 'c1', 'Series 1'], ['c2', 'c2', 'Series 2'], ['c3', 'c3', 'Series 3'], ['c4', 'c4', 'Series 4']]]
];
const TOKLIST = TOKENS.flatMap(g => g[1]);
const BASE_L = { bg: '#F4F6FB', surface: '#FFFFFF', surface2: '#EDF0F7', border: '#DCE2EE', text: '#18213A', muted: '#5F6A84', nav: '#FFFFFF', primary: '#3657F4', primaryInk: '#FFFFFF', accent: '#0E9BDB', xp: '#F5A800', streak: '#FF7A1A', heart: '#EE3D57', correct: '#1FA968', correctBg: '#E2F7EC', wrong: '#E5384F', wrongBg: '#FDE8EB', listening: '#0E9BDB', reading: '#8B5CF6', writing: '#F57F17', speaking: '#E0457B', fill: '#1FA968', track: '#E2E7F0', path: '#C9D1E0', paper: '#FFFFFF', paperInk: '#1E222B', mark: '#FFE45C', c1: '#3657F4', c2: '#F57F17', c3: '#1FA968', c4: '#8B5CF6' };
const BASE_D = { bg: '#10141F', surface: '#181E2C', surface2: '#222A3B', border: '#2D3649', text: '#EEF2FA', muted: '#9AA5BC', nav: '#141A27', primary: '#7088FF', primaryInk: '#0C1020', accent: '#3CC2FF', xp: '#FFC83D', streak: '#FF9440', heart: '#FF5C74', correct: '#3DD68C', correctBg: '#133628', wrong: '#FF5C74', wrongBg: '#3A1820', listening: '#3CC2FF', reading: '#A78BFA', writing: '#FFA04D', speaking: '#F472B6', fill: '#3DD68C', track: '#2A3244', path: '#3A4458', paper: '#1C2231', paperInk: '#E6E9F0', mark: '#7A6200', c1: '#7088FF', c2: '#FFA04D', c3: '#3DD68C', c4: '#A78BFA' };
const PRESETS = [
  ['Cobalt', BASE_L], ['Cobalt Night', BASE_D],
  ['Meadow', { ...BASE_L, bg: '#F5FAF1', primary: '#3E9B12', fill: '#3E9B12', accent: '#1CB0F6', track: '#E1EDD7', path: '#CADBBD', c1: '#3E9B12' }],
  ['Sofia', { ...BASE_L, bg: '#FAFAFA', primary: '#00875F', fill: '#00875F', accent: '#00875F', heart: '#D62612', wrong: '#D62612', streak: '#D62612', c1: '#00875F', c2: '#D62612' }],
  ['Sunset', { ...BASE_L, bg: '#FFF5EE', primary: '#D9480F', fill: '#E8590C', accent: '#C2255C', track: '#F5E1D5', path: '#E7CBBB', c1: '#E8590C', c2: '#C2255C', c3: '#F59F00', c4: '#7048E8' }],
  ['Ocean', { ...BASE_L, bg: '#EDF6F7', primary: '#0B7285', fill: '#0CA678', accent: '#1098AD', track: '#D3E8EB', path: '#B5D3D8', c1: '#0B7285', c2: '#15AABF', c3: '#0CA678', c4: '#4263EB' }],
  ['Neon Night', { ...BASE_D, bg: '#0D0B16', surface: '#171327', surface2: '#221C38', border: '#2F2747', nav: '#120F1F', primary: '#C84BFF', primaryInk: '#0D0B16', fill: '#2CF2A0', accent: '#3DE3FF', c1: '#C84BFF', c2: '#3DE3FF', c3: '#2CF2A0', c4: '#FFD23D' }],
  ['Print', { ...BASE_L, bg: '#FFFFFF', surface: '#FFFFFF', surface2: '#F2F2F2', border: '#1A1A1A', text: '#000000', muted: '#444444', primary: '#000000', primaryInk: '#FFFFFF', accent: '#000000', fill: '#000000', track: '#DDDDDD', path: '#BBBBBB', listening: '#1A1A1A', reading: '#333333', writing: '#555555', speaking: '#222222', c1: '#000000', c2: '#777777', c3: '#BBBBBB', c4: '#444444' }],
  ['High contrast', { ...BASE_D, bg: '#000000', surface: '#000000', surface2: '#1A1A1A', border: '#FFFFFF', text: '#FFFFFF', muted: '#E0E0E0', nav: '#000000', primary: '#FFE600', primaryInk: '#000000', correct: '#00FF85', wrong: '#FF4D4D', fill: '#00FF85' }]
];
const FONTS = { rounded: ['"Baloo 2", "Nunito", ui-rounded, system-ui, sans-serif', '"Nunito", ui-rounded, system-ui, sans-serif'], clean: ['"Nunito", system-ui, sans-serif', '"Nunito", system-ui, sans-serif'], serif: ['"Source Serif 4", Georgia, serif', '"Source Serif 4", Georgia, serif'], system: ['system-ui, -apple-system, "Segoe UI", sans-serif', 'system-ui, -apple-system, "Segoe UI", sans-serif'] };
function applyTheme() {
  const r = document.documentElement;
  TOKLIST.forEach(t => r.style.removeProperty('--' + t[1]));
  if (S.palette) { TOKLIST.forEach(t => { if (S.palette[t[0]]) r.style.setProperty('--' + t[1], S.palette[t[0]]); }); r.setAttribute('data-theme', lum(S.palette.bg || '#fff') < 0.4 ? 'dark' : 'light'); }
  else { const m = S.settings.themeMode; if (m === 'system') r.removeAttribute('data-theme'); else r.setAttribute('data-theme', m); }
  r.style.setProperty('--radius', S.settings.radius + 'px'); r.style.setProperty('--depth', S.settings.depth + 'px');
  r.style.fontSize = (16 * S.settings.scale) + 'px'; const f = FONTS[S.settings.font] || FONTS.rounded; r.style.setProperty('--font-display', f[0]); r.style.setProperty('--font-ui', f[1]);
  S.settings.anim = (+S.settings.animSpeed || 0) > 0; r.classList.toggle('nomotion', !S.settings.anim); r.style.setProperty('--spd', String(SPD())); r.style.setProperty('--ics', String(S.settings.iconSize || 1)); r.style.setProperty('--nodesz', String(S.settings.nodeSize || 1)); r.style.setProperty('--icw', String(ICON_STROKE[S.settings.iconStyle] || 2.2)); ICON_STYLE = S.settings.iconStyle; r.classList.toggle('touch', TOUCH);
}
function lum(hex) { const m = String(hex).replace('#', ''); if (m.length < 6) return 1; const [r, g, b] = [0, 2, 4].map(i => parseInt(m.substr(i, 2), 16) / 255); return 0.2126 * r + 0.7152 * g + 0.0722 * b; }
function currentColor(k) { const t = TOKLIST.find(x => x[0] === k); const v = getComputedStyle(document.documentElement).getPropertyValue('--' + t[1]).trim(); return /^#[0-9a-f]{6}$/i.test(v) ? v.toUpperCase() : '#888888'; }
