/* ---------- Briefing decks ---------- */
const BRIEF = {
  L1: { n: 'Listening Part 1', s: [['sequence', 'Questions follow the recording', 'Answers come in the same order as the questions. Missed one? Let it go and move to the next.'], ['predict', 'Predict the answer type', 'Before the audio starts, decide what each gap needs: a number, a name, a date, a plural noun?'], ['correction', 'The first answer is often a trap', 'Speakers correct themselves. “Tuesday… sorry, Thursday.” Only the final version counts.']], r: ['All the questions are in sequence', 'Predict what each gap needs', 'Spelling and the word limit count'] },
  L2: { n: 'Listening Part 2', s: [['options', 'Read the options first', 'Underline what makes each option different. Usually two get mentioned and rejected.'], ['map', 'Follow the route', 'For maps and plans, find the starting point, then track “opposite”, “next to”, “at the far end”.']], r: ['Questions follow the order of the talk', 'Expect distractors that get rejected', 'Use the pause to read ahead'] },
  L3: { n: 'Listening Part 3', s: [['chat', 'Who thinks what?', 'Two or three speakers discuss. Track each person’s opinion, not just the facts.'], ['options', 'Wait for the decision', '“That’s a good point, but…” usually means the idea is about to be rejected. The final agreement is the answer.']], r: ['Note which speaker says what', 'The agreed decision is the answer', 'Questions are still in sequence'] },
  L4: { n: 'Listening Part 4', s: [['signpost', 'Use the signposts', '“Moving on to…”, “Another factor…” tell you which heading of the notes you’re on.'], ['ear', 'Technical words, exact spelling', 'Answers are often words the lecturer defines: “this is known as…”. Spell them carefully.'], ['timer', 'One long talk, no pause', 'Keep your eyes one question ahead so you never lose your place.']], r: ['All the questions are in sequence', 'Listen for key words and definitions', 'Keep up: there is no break in Part 4'] },
  R_tfng: { n: 'TRUE / FALSE / NOT GIVEN', s: [['tfng', 'Three answers, three meanings', 'TRUE: the text says the same. FALSE: it says the opposite. NOT GIVEN: it doesn’t say.'], ['keyword', 'Hunt the paraphrase', 'Find the sentence with the same meaning. It almost always uses different words.'], ['qualifier', 'Watch the small words', '“All”, “some”, “usually”, “only”: one word can turn TRUE into FALSE.']], r: ['All the questions are in sequence', 'Look for key words and their synonyms', 'Never use your own knowledge'] },
  R_ynng: { n: 'YES / NO / NOT GIVEN', s: [['opinion', 'It’s about the writer', 'These questions test the writer’s views. Look for “clearly”, “it seems”, “I believe”, “unfortunately”.'], ['tfng', 'Same logic as T/F/NG', 'YES: the writer agrees. NO: the writer disagrees. NOT GIVEN: the writer doesn’t say.']], r: ['Separate the writer’s view from other people’s', 'All the questions are in sequence', 'Hedges like “may” and “partly” matter'] },
  R_head: { n: 'Matching headings', s: [['headings', 'Main idea, not a detail', 'Read the whole paragraph, sum it up in five words, then pick the heading.'], ['keyword', 'Beware of word matches', 'A heading that repeats a word from the paragraph is often the trap.']], r: ['Read the paragraph before the headings', 'Cross out headings you’ve used', 'There are always extra headings'] },
  R_comp: { n: 'Completion tasks', s: [['gap', 'Check the word limit', '“ONE WORD ONLY” means one. Copy the word exactly as it appears in the text.'], ['predict', 'Grammar tells you the type', 'After “a” you need a singular noun; after “the most” an adjective. Decide before you scan.']], r: ['Answers usually come in order', 'Copy spelling exactly', 'Decide the word class first'] },
  R_match: { n: 'Matching tasks', s: [['scan', 'Scan for names first', 'Find each person, place or paragraph quickly, then read around it carefully.'], ['keyword', 'Big paraphrase gap', 'The statement and the text say the same thing in very different words.']], r: ['These questions are NOT in order', 'Options can be used more than once', 'Match meaning, not words'] },
  R_mcq: { n: 'Multiple choice', s: [['options', 'Two options are half right', 'The answer must match the whole idea, not just part of it.'], ['scan', 'Locate, then eliminate', 'Find the paragraph, then cross out options the text contradicts or never mentions.']], r: ['All the questions are in sequence', 'Read the question stem carefully', 'Spend about 20 minutes per passage'] },
  W1: { n: 'Writing Task 1', s: [['chart', 'Overview first', 'One or two sentences on the big picture, with no numbers. Without it, your score is capped.'], ['options', 'Group and compare', 'Don’t list every figure. Compare the highest, the lowest and the biggest changes.']], r: ['20 minutes, at least 150 words', 'Start with a clear overview', 'Support it with accurate figures'] },
  W2: { n: 'Writing Task 2', s: [['question', 'Answer every part', 'Opinion, discussion, advantages/disadvantages, problem/solution or two questions? Cover every part.'], ['peel', 'Plan PEEL paragraphs', 'Point, Explain, Example, Link. Five minutes of planning saves the essay.']], r: ['40 minutes, at least 250 words', 'Task 2 counts double', 'Keep your position clear throughout'] },
  S1: { n: 'Speaking Part 1', s: [['speech', 'Answer, reason, example', 'Two or three sentences per answer. One-word answers can’t show your level.'], ['chat', 'Sound natural', '“Let me think…” is fine. Memorised answers are not, so examiners spot them fast.']], r: ['Extend every answer', 'Keep your tenses consistent', 'It’s fine to ask for a repeat'] },
  S2: { n: 'Speaking Part 2 & 3', s: [['plan', 'Plan in 60 seconds', 'Write two or three key words per bullet. Never full sentences.'], ['timer', 'Keep going for 2 minutes', 'Running out? Add a short story or example.'], ['opinion', 'Part 3: think bigger', 'Opinion, reason, contrast. Talk about people in general, not just yourself.']], r: ['Use the bullets as your structure', 'Don’t forget “explain why”', 'Speak until the examiner stops you'] }
};
function deckKey(rec) {
  const { sk, ls, i } = rec;
  if (sk === 'L') { const m = /Part (\d)/.exec(ls.ctx || ''); return 'L' + (m ? m[1] : '1'); }
  if (sk === 'R') { const t = (ls.ty || '').toLowerCase(); if (t.includes('heading')) return 'R_head'; if (t.startsWith('matching')) return 'R_match'; if (t.includes('yes /')) return 'R_ynng'; if (t.includes('true')) return 'R_tfng'; if (/completion|summary|flow|diagram/.test(t)) return 'R_comp'; if (t.includes('multiple')) return 'R_mcq'; return 'R_tfng'; }
  if (sk === 'W') return i === 0 ? 'W1' : 'W2';
  return i === 0 ? 'S1' : 'S2';
}
function maybeBrief(rec) {
  const mode = S.settings.brief || 'always'; if (mode === 'off') return;
  const key = deckKey(rec); if (mode === 'new' && S.seenBrief[key]) return;
  S.seenBrief[key] = 1; save();
  Promise.resolve().then(() => showBrief(BRIEF[key], rec));
}
function showBrief(deck, rec) {
  if (!deck) return;
  const sk = SKILLS[rec.sk];
  const slides = deck.s.map(([art, t, d]) => `<article class="bslide"><div class="bart">${ART[art] || ''}</div><h2>${esc(t)}</h2><p>${esc(d)}</p></article>`);
  slides.push(`<article class="bslide brem"><div class="bart">${ART.checklist}</div><h2>Remember</h2><ol>${deck.r.map(x => `<li>${esc(x)}</li>`).join('')}</ol>${rec.ls.tip ? `<p class="btip"><b>This lesson:</b> ${esc(rec.ls.tip)}</p>` : ''}</article>`);
  const o = div('brief sk-' + sk.v); o.setAttribute('role', 'dialog'); o.setAttribute('aria-modal', 'true'); o.setAttribute('aria-label', 'Lesson briefing');
  o.innerHTML = `<div class="bhead"><span class="beyebrow">${icon(sk.ic)} ${esc(deck.n)}</span><button type="button" class="btn small ghost bskip">Skip</button></div><div class="bstage">${slides.join('')}</div><div class="bfoot"><div class="bdots">${slides.map(() => '<i></i>').join('')}</div><button type="button" class="btn primary bnext">Next</button></div>`;
  document.body.appendChild(o);
  const ss = $$('.bslide', o), dots = $$('.bdots i', o), nb = $('.bnext', o); let k = 0, dir = 1;
  const show = () => { ss.forEach((s, j) => { s.classList.toggle('on', j === k); s.classList.toggle('back', j === k && dir < 0); }); dots.forEach((d, j) => d.classList.toggle('on', j <= k)); nb.textContent = k === ss.length - 1 ? 'Start lesson' : 'Next'; };
  const close = () => { document.removeEventListener('keydown', kb, true); o.remove(); if (S.settings.autoplay) { const b = document.querySelector('.player .aplay'); if (b && !b.disabled) b.click(); } };
  const go = d => { const n = k + d; if (n < 0) return; if (n >= ss.length) return close(); dir = d; k = n; show(); };
  nb.onclick = () => go(1); $('.bskip', o).onclick = close;
  $('.bstage', o).onclick = e => { if (Date.now() - (o._sw || 0) < 450) return; const r = o.getBoundingClientRect(); go(e.clientX < r.left + r.width * 0.3 ? -1 : 1); };
  let x0 = null; o.addEventListener('pointerdown', e => { x0 = e.clientX; }); o.addEventListener('pointerup', e => { if (x0 == null) return; const dx = e.clientX - x0; x0 = null; if (Math.abs(dx) > 50) { o._sw = Date.now(); go(dx < 0 ? 1 : -1); } });
  const kb = e => { if (e.key === 'ArrowRight' || e.key === 'Enter') { e.preventDefault(); e.stopPropagation(); go(1); } else if (e.key === 'ArrowLeft') { e.stopPropagation(); go(-1); } else if (e.key === 'Escape') { e.stopPropagation(); close(); } };
  document.addEventListener('keydown', kb, true);
  show(); if (!TOUCH) nb.focus({ preventScroll: true });
}
