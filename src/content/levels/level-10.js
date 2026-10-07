/* Level 10: Mastery */
LEVELS.push({
  id: 10, name: "Mastery", theme: "Expert-level English",
  L: [
    { t: "A complicated booking", ctx: "Listening Part 1 · conference office", sp: { W: "f", M: "m" },
      tip: "Expert level: stacked corrections. Write nothing until the speaker commits.",
      sc: [
        { s: `W: I'm calling to register for the engineering conference. I'd like the two-day pass.
M: Certainly. That's a hundred and eighty pounds, or a hundred and forty if you book before the end of the month.
W: It's the twenty-eighth today, so I'm just in time.
M: You are. Will you attend the dinner on the first evening? It's an extra forty-five.
W: Hmm, actually, let me change to the one-day pass, for the Friday only. And no dinner.
M: The one-day pass is ninety, with no early discount on that, I'm afraid.
W: That's fine.`,
          q: [
            { k: "m", p: "Which pass does she finally choose?", o: ["two-day pass", "one-day pass (Friday)", "two-day pass with dinner"], a: 1, x: "She changes from two days to Friday only, and drops the dinner." },
            { k: "g", p: "Amount she will pay: £___", a: ["90", "ninety"], w: "n", x: "£180, £140 and £45 are all distractors. The one-day pass has no discount." }
          ] },
        { s: `M: Can I take your name for the badge?
W: Dr Ana Petrova-Wells. That's Petrova, hyphen, Wells.
M: P, E, T, R, O, V, A, hyphen, W, E, double L, S.
W: Exactly. And my organisation is the Institute of Applied Acoustics.
M: Is there anything we should know regarding access or diet?
W: I'm vegetarian. Oh, wait, there's no dinner now, is there? Then no, nothing.`,
          q: [
            { k: "g", p: "Surname on badge: Petrova-___", a: ["wells"], w: 1, x: "W-E-double L-S." },
            { k: "g", p: "Organisation: Institute of Applied ___", a: ["acoustics"], w: 1, x: "‘Applied Acoustics’. Spelling matters." },
            { k: "m", p: "What dietary requirement is recorded?", o: ["vegetarian", "none", "vegan"], a: 1, x: "She withdraws it, since she's not attending the dinner." }
          ] }
      ] },
    { t: "Debating research methods", ctx: "Listening Part 3 · seminar", sp: { A: "m", B: "f" },
      tip: "Expert Part 3: speakers partly agree. ‘I take your point, but…’ often means they still disagree.",
      sc: [
        { s: `A: For our dissertation on urban noise, I think surveys are the way to go. We can reach hundreds of residents.
B: I take your point about scale, but surveys only tell us what people think they experience. I'd rather combine them with actual sound measurements.
A: That doubles the workload, though.
B: It does, but otherwise any examiner will ask how we know people's perceptions match reality.
A: Fair. Then we'd better narrow the area. Maybe two neighbourhoods instead of five.`,
          q: [
            { k: "m", p: "What is B's concern about surveys alone?", o: ["They're too expensive.", "They only measure perception, not real noise levels.", "Residents won't respond."], a: 1, x: "‘Surveys only tell us what people think they experience.’" },
            { k: "m", p: "What do they decide?", o: ["to use only sound measurements", "to combine methods and study fewer areas", "to survey all five neighbourhoods"], a: 1, x: "Combine + ‘two neighbourhoods instead of five’." }
          ] },
        { s: `B: On analysis, should we use the city's existing noise map?
A: I'd be cautious. It's modelled from traffic data, not measured, and it's six years old.
B: Then perhaps as a comparison rather than as evidence. If our measurements differ, that's a finding in itself.
A: I like that. It turns a weakness into a contribution.`,
          q: [
            { k: "2", p: "Which TWO problems with the existing noise map does A mention?", o: ["It is based on a model, not measurements.", "It covers too small an area.", "It is out of date.", "It was made by a private company.", "It ignores night-time noise."], a: [0, 2], x: "‘Modelled from traffic data, not measured’ and ‘six years old’." },
            { k: "m", p: "How will they use the noise map?", o: ["as their main evidence", "as a point of comparison", "not at all"], a: 1, x: "‘As a comparison rather than as evidence.’" }
          ] }
      ] },
    { t: "Urban heat islands", ctx: "Listening Part 4 · lecture", sp: { A: "f" },
      tip: "At Band 9, answers are dense and quick. Keep your eyes one question ahead.",
      sc: [
        { s: `A: Cities are typically warmer than the surrounding countryside, a phenomenon known as the urban heat island. The difference is usually greatest not during the day but at night, when buildings and roads release the heat they have absorbed. Dark surfaces such as asphalt have a low albedo, meaning they reflect little sunlight, so they store more energy. Waste heat from air conditioning and vehicles adds to the effect, as does the lack of vegetation, which would otherwise cool the air through evaporation.`,
          q: [
            { k: "g", p: "The temperature difference is usually greatest at ___", a: ["night", "night-time", "nighttime"], w: 1, x: "‘Not during the day but at night.’" },
            { k: "g", p: "Dark surfaces have a low ___, reflecting little sunlight.", a: ["albedo"], w: 1, x: "‘A low albedo.’" },
            { k: "g", p: "Plants cool the air through ___", a: ["evaporation"], w: 1, x: "‘Cool the air through evaporation.’" }
          ] },
        { s: `A: Mitigation strategies fall into two broad categories. Cool surfaces, such as reflective roofs, are cheap and quick to install but can, paradoxically, increase glare and heat for pedestrians if poorly placed. Green infrastructure, meaning street trees and parks, is slower and costlier, yet it delivers additional benefits, from flood control to mental well-being, which arguably makes it the better long-term investment.`,
          q: [
            { k: "m", p: "What drawback of cool surfaces is mentioned?", o: ["They are expensive.", "Badly placed, they can make pedestrians hotter.", "They take years to install."], a: 1, x: "‘Increase glare and heat for pedestrians if poorly placed.’" },
            { k: "m", p: "Why does the lecturer favour green infrastructure?", o: ["It is the cheapest option.", "It brings several benefits beyond cooling.", "It is the fastest to install."], a: 1, x: "‘Additional benefits, from flood control to mental well-being.’" }
          ] }
      ] }
  ],
  R: [
    { t: "The commons reconsidered", ty: "YES / NO / NOT GIVEN",
      tip: "Expert YNNG: double negatives and concessions. Rephrase the writer's claim in simple words before deciding.",
      ps: `In 1968, the ecologist Garrett Hardin argued that shared resources are doomed to overuse. Each herder grazing animals on common land gains the full benefit of adding one more animal, while the cost of overgrazing is shared by all. Rational individuals, he reasoned, will therefore exhaust the resource. The only remedies were private ownership or state control.

Hardin's essay was enormously influential, yet its central premise was not empirically tested. The political economist Elinor Ostrom, who later became the first woman to receive the Nobel prize in economics, documented numerous communities, from Swiss alpine pastures to Japanese forests, that had managed shared resources sustainably for centuries. They did so not through privatisation or government command, but through locally devised rules, monitoring by users themselves, and graduated penalties for those who broke the rules.

It would be wrong to conclude that Hardin was simply mistaken. Where users are numerous, transient and unable to communicate, as with ocean fisheries, his pessimism is often borne out. Ostrom's achievement was not to refute him but to specify the conditions under which his prediction holds.`,
      q: [
        { k: "y", p: "Hardin's conclusion was based on extensive field research.", a: "N", x: "‘Its central premise was not empirically tested.’" },
        { k: "y", p: "Ostrom showed that neither private ownership nor state control is always necessary.", a: "Y", x: "Communities succeeded ‘not through privatisation or government command’." },
        { k: "y", p: "Graduated penalties are more effective than fixed fines.", a: "NG", x: "Graduated penalties are listed, but never compared with fixed fines." },
        { k: "y", p: "Hardin's pessimism is unjustified in every situation.", a: "N", x: "‘His pessimism is often borne out’ in some situations." },
        { k: "y", p: "Ostrom's work refined rather than overturned Hardin's argument.", a: "Y", x: "‘Not to refute him but to specify the conditions under which his prediction holds.’" }
      ] },
    { t: "When languages fall silent", ty: "Matching headings (close options)",
      tip: "Expert headings differ by one idea. Ask: is this paragraph about a cause, an effect, a response, or a debate?",
      ps: `A  Linguists estimate that around seven thousand languages are spoken today, and that a substantial proportion could cease to be spoken within this century. Many have fewer than a thousand speakers, most of them elderly.

B  Languages rarely disappear because their speakers die out. More often, a community gradually shifts to a dominant language that offers economic opportunity, education or social prestige. Parents may stop speaking their heritage language to children in the belief that this will help them succeed.

C  The loss is not merely symbolic. Languages encode knowledge that may exist nowhere else, such as detailed classifications of local plants or navigational techniques, and each represents a distinct solution to the problem of human communication.

D  Revitalisation efforts have had notable successes. Hebrew was revived as an everyday spoken language in the nineteenth and twentieth centuries, and immersion schools have increased the number of young speakers of several indigenous languages. Such efforts, however, depend heavily on sustained community commitment.

E  Some scholars question whether outsiders should intervene at all, arguing that language choice is ultimately a decision for the community itself, and that preservation projects can sometimes reflect the priorities of researchers more than those of speakers.`,
      q: [
        { k: "x", p: "Choose the correct heading for each paragraph.", o: ["i  What is lost with a language", "ii  The scale of the threat", "iii  Reviving languages: possible but demanding", "iv  Whose decision is it?", "v  Why communities switch languages", "vi  The death of the last speakers"], i: [["Paragraph A", 1], ["Paragraph B", 4], ["Paragraph C", 0], ["Paragraph D", 2], ["Paragraph E", 3]], x: "vi is a trap: paragraph B says languages ‘rarely disappear because their speakers die out’." },
        { k: "m", p: "According to paragraph B, parents may stop using a heritage language because they", o: ["have forgotten it", "think the dominant language will help their children", "are told to by schools"], a: 1, x: "‘In the belief that this will help them succeed.’" }
      ] },
    { t: "Measuring happiness", ty: "Multiple choice (inference)",
      tip: "Inference questions ask what the writer implies. The answer is never stated directly, but it is always supported.",
      ps: `Governments have long measured economic output with considerable precision, yet until recently made little attempt to measure whether citizens' lives were going well. That has changed. Several national statistics offices now ask large samples of people to rate their life satisfaction on a scale of nought to ten.

Sceptics object that such ratings are hopelessly subjective. The objection is weaker than it appears. Life-satisfaction scores correlate, as one would expect, with health, employment and relationships, and they respond predictably to events such as bereavement or unemployment. A measure that tracked nothing real would not behave so consistently.

A subtler difficulty concerns comparison. People may interpret the scale differently: a ‘seven’ in one culture may represent greater contentment than a ‘seven’ in another. This makes comparisons between countries considerably less reliable than changes measured within a single population over time, which is precisely why the latter are more informative for policy.`,
      q: [
        { k: "m", p: "What is the writer's response to the claim that life-satisfaction ratings are too subjective?", o: ["He fully accepts it.", "He argues the ratings behave too consistently to be meaningless.", "He says subjectivity doesn't matter in statistics."], a: 1, x: "‘A measure that tracked nothing real would not behave so consistently.’" },
        { k: "m", p: "What does the writer imply about international happiness rankings?", o: ["They are the most useful form of the data.", "They should be treated with caution.", "They are completely worthless."], a: 1, x: "Comparisons between countries are ‘considerably less reliable’, so be cautious (not ‘worthless’)." },
        { k: "m", p: "Why are changes within one country more useful for policy?", o: ["The same interpretation of the scale is likely over time.", "They use larger samples.", "Governments prefer national data."], a: 0, x: "Cultural differences in interpreting the scale cancel out within one population." },
        { k: "y", p: "Measuring economic output is more important than measuring well-being.", a: "NG", x: "The writer contrasts how precisely each is measured, but never ranks their importance." }
      ] }
  ],
  W: [
    { t: "Band 9 Task 1", tip: "Band 9 Task 1: an overview that could stand alone, precise data, and cohesion that ‘attracts no attention’.",
      q: [
        { k: "m", ch: { t: "line", title: "Renewable share of electricity (%)", x: ["2000", "2005", "2010", "2015", "2020", "2025"], s: [{ n: "Norway", v: [96, 97, 95, 97, 98, 98] }, { n: "Germany", v: [6, 10, 17, 29, 45, 55] }, { n: "Poland", v: [2, 3, 7, 13, 18, 30] }] },
          p: "Which overview is closest to Band 9?", o: ["While Norway's electricity remained almost entirely renewable throughout, Germany and Poland both recorded substantial growth from very low bases, with Germany's expansion considerably more pronounced.", "Norway was high, Germany grew, Poland grew too.", "Germany's renewable share rose from 6% in 2000 to 55% in 2025."], a: 0, x: "Contrast of stability vs growth + relative magnitude, all in one sentence." },
        { k: "m", p: "Which describes Germany's change most precisely?", o: ["rose more than ninefold, from 6% to 55%", "increased a lot", "rose by 55%"], a: 0, x: "55 ÷ 6 ≈ 9.2. ‘Rose by 55%’ confuses percentage points with percent." },
        { k: "m", p: "Which phrase is accurate for 6% → 55%?", o: ["an increase of 49 percentage points", "an increase of 49%", "an increase of 55 points"], a: 0, x: "The difference between two percentages is measured in percentage points." },
        { k: "m", p: "Which sentence shows cohesion that ‘attracts no attention’?", o: ["Poland followed a similar, if more gradual, trajectory, reaching 30% by 2025.", "Moreover, furthermore, Poland also increased too.", "Firstly Poland. Secondly it increased."], a: 0, x: "‘A similar, if more gradual, trajectory’ links ideas without mechanical connectors." },
        { k: "w", ch: { t: "line", title: "Renewable share of electricity (%)", x: ["2000", "2005", "2010", "2015", "2020", "2025"], s: [{ n: "Norway", v: [96, 97, 95, 97, 98, 98] }, { n: "Germany", v: [6, 10, 17, 29, 45, 55] }, { n: "Poland", v: [2, 3, 7, 13, 18, 30] }] },
          p: "Write a Band 9 Task 1 response in 20 minutes (150+ words).", min: 150, time: 1200, n: ["Overview could stand alone", "Percentage points used correctly", "Invisible cohesion", "No errors"] }
      ] },
    { t: "Band 9 Task 2", tip: "Band 9 Task 2: a fully developed position, ideas extended and supported, and full flexibility of language.",
      q: [
        { k: "m", p: "Which body-paragraph opening is most sophisticated?", o: ["The most compelling argument for this policy lies not in its economic benefits, considerable as they are, but in its effect on social cohesion.", "There are many reasons for this policy. The first reason is money.", "This policy is good because of many things."], a: 0, x: "A ‘not X but Y’ structure + a parenthetical concession." },
        { k: "m", p: "Which sentence shows full flexibility of grammar?", o: ["Only by addressing the causes of inequality can governments hope to reduce crime.", "Governments can reduce crime if they address inequality causes.", "Crime reduce when inequality is address."], a: 0, x: "Negative-adverbial inversion, used where it adds emphasis." },
        { k: "m", p: "What distinguishes Band 9 Task Response from Band 7?", o: ["Ideas are fully extended and well supported, with no tendency to overgeneralise.", "It has more paragraphs.", "It uses more idioms."], a: 0, x: "Band 7 may overgeneralise or lack focus; Band 9 is fully developed." },
        { k: "o", p: "Order into an elegant concluding sentence.", a: ["Ultimately,", "the", "question", "is", "not", "whether", "to", "act,", "but", "how", "quickly."], x: "A ‘not whether… but how’ conclusion leaves a sharp final impression." },
        { k: "w", p: "Some argue that the best way to reduce crime is longer prison sentences. Others believe there are better alternatives. Discuss both views and give your own opinion.\n\nWrite a Band 9 essay in 40 minutes (250+ words).", min: 250, time: 2400, n: ["Fully developed position", "Ideas extended and supported", "Full grammatical flexibility", "Sophisticated, natural lexis"] }
      ] }
  ],
  S: [
    { t: "Effortless Part 1", tip: "Band 9 Part 1 isn't longer, it's more natural: precise, relaxed, idiomatic, and never rehearsed.",
      q: [
        { k: "m", p: "‘Do you like reading?’ Which answer is closest to Band 9?", o: ["I do, although my tastes have changed. These days I'm drawn to non-fiction, popular science especially, which I find oddly relaxing.", "Yes, I like reading books very much because reading is my hobby.", "Reading is good for the brain, so I read."], a: 0, x: "Natural, precise (‘drawn to’, ‘oddly relaxing’), and personal." },
        { k: "m", p: "What does Band 9 pronunciation require?", o: ["a full range of features, used with precision and subtlety, effortless to understand", "a British or American accent", "speaking slowly"], a: 0, x: "Accent isn't assessed. Features like stress, intonation and chunking are." },
        { k: "m", p: "Which hesitation is acceptable at Band 9?", o: ["hesitation to think about content", "hesitation to find words", "hesitation to fix grammar"], a: 0, x: "At Band 9, any hesitation is content-related, not language-related." },
        { k: "s", p: "How have your reading habits changed over the years?", prep: 5, time: 45, n: ["Natural and precise", "No language-searching pauses", "Flexible structures"] }
      ] },
    { t: "Band 9 discussion", tip: "Band 9 Part 3 sounds like a thoughtful conversation, not an exam answer.",
      q: [
        { k: "m", p: "‘Should art be funded by governments?’ Which answer is most Band 9?", o: ["I'd lean towards yes, but with a caveat. Public funding protects work that would never survive commercially, yet there's a real risk that it rewards what committees find comfortable rather than what's genuinely original.", "Yes, governments should fund art because art is important.", "Art is beautiful so government must pay."], a: 0, x: "Position, caveat, a balanced tension, and natural, precise language." },
        { k: "m", p: "Which phrase sounds natural in a Band 9 discussion?", o: ["That's a question I've gone back and forth on, actually.", "I will now answer your question.", "In conclusion to your question, …"], a: 0, x: "Conversational authenticity, not essay language spoken aloud." },
        { k: "m", p: "Which uses a cleft sentence for emphasis?", o: ["What concerns me most is the effect on young artists.", "Young artists concern me most effect.", "Most concerning young artists."], a: 0, x: "‘What concerns me most is…’ is a natural emphatic structure." },
        { k: "s", cc: { title: "Describe an idea you changed your mind about.", b: ["what the idea was", "what you used to think", "what made you change your mind", "and explain how you feel about it now"] }, p: "Speak about the cue card.", prep: 60, time: 120, n: ["Effortless fluency", "Precise, idiomatic lexis", "Full range of structures", "Natural intonation"] }
      ] }
  ]
});
