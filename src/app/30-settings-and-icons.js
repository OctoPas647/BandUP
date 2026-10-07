/* ================= v1.2: briefings, profile, band breakdown, icons, speed ================= */
const TOUCH = window.matchMedia ? matchMedia('(pointer: coarse)').matches : false;
function SPD() { return Math.max(0.25, +S.settings.animSpeed || 1); }
if (S.settings.anim === false && !S.settings._mig12) S.settings.animSpeed = 0;
S.settings._mig12 = true;
if (!S.profile.joined) S.profile.joined = Date.now();

const EMOJI = { headphones: '🎧', book: '📖', pen: '✍️', mic: '🎤', bolt: '⚡', eye: '👁️', target: '🎯', flame: '🔥', heart: '❤️', gem: '💎', star: '⭐', lock: '🔒', chart: '📊', palette: '🎨', flask: '🧪', bulb: '💡', path: '🗺️', clock: '⏱️', trophy: '🏆', sparkle: '✨', shuffle: '🔀', cards: '🃏', alert: '⚠️', user: '👤', calendar: '📅', medal: '🏅' };
const ICON_STROKE = { thin: 1.6, line: 2.2, bold: 2.9, emoji: 2.2 };
