/* Level 7: Technology and society */
LEVELS.push({
  id: 7, name: "Technology and society", theme: "Digital life and innovation",
  L: [
    { t: "Booking a laptop repair", ctx: "Listening Part 1 · service desk", sp: { M: "m", W: "f" },
      tip: "Email addresses are spelled with ‘dot’, ‘at’, ‘underscore’. Listen to every symbol.",
      sc: [
        { s: `M: TechFix, how can I help?
W: My laptop won't charge. I think it's the battery, but it might be the cable.
M: We'll test both. Can I take an email address?
W: Sure. It's j dot novak, N, O, V, A, K, at mailbox dot com.
M: And what model is it?
W: It's a Zenpro fourteen. Sorry, I mean a Zenpro sixteen. The fourteen was my old one.`,
          q: [
            { k: "g", p: "Email: j.___@mailbox.com", a: ["novak"], w: 1, x: "N-O-V-A-K." },
            { k: "g", p: "Model: Zenpro ___", a: ["16", "sixteen"], w: "n", x: "She corrects 14 to 16." }
          ] },
        { s: `M: A diagnostic test is twenty-five pounds, but that's deducted from the repair cost if you go ahead.
W: And if it is the battery?
M: A replacement is about eighty pounds, fitted. We can usually do it within two working days, although if we have to order the part, it can take up to a week.
W: Can I keep my files?
M: Yes, but we always recommend a backup first, just in case.`,
          q: [
            { k: "m", p: "What happens to the £25 diagnostic fee if she has the repair?", o: ["It is added to the cost.", "It is taken off the repair cost.", "It is refunded in cash."], a: 1, x: "‘Deducted from the repair cost.’" },
            { k: "g", p: "Maximum time if a part must be ordered: one ___", a: ["week"], w: 1, x: "‘It can take up to a week.’ Two working days is the usual time." },
            { k: "g", p: "Before the repair, make a ___ of your files.", a: ["backup", "back-up", "back up"], w: 1, x: "‘We always recommend a backup first.’" }
          ] }
      ] },
    { t: "Sensors in the smart city", ctx: "Listening Part 2 · public talk", sp: { A: "m" },
      tip: "Speakers often describe a benefit and then qualify it: ‘it's useful, but…’. The question may target the qualification.",
      sc: [
        { s: `A: Our city installed its first network of sensors three years ago. The most successful use has been in street lighting. Lights now dim automatically when streets are empty and brighten when someone approaches, which has cut energy use by almost forty percent. Air-quality sensors have been useful too, though people expected more from them: they tell us where pollution is high, but they can't reduce it on their own.`,
          q: [
            { k: "g", p: "Energy saved by smart street lighting: almost ___ percent", a: ["40", "forty"], w: "n", x: "‘Cut energy use by almost forty percent.’" },
            { k: "m", p: "What does the speaker say about the air-quality sensors?", o: ["They have reduced pollution significantly.", "They provide information but don't solve the problem.", "They were too expensive to install."], a: 1, x: "‘They can't reduce it on their own.’" }
          ] },
        { s: `A: Of course, there are concerns. Some residents worried that cameras would be used to identify individuals. In fact, our traffic sensors count vehicles and pedestrians but don't record faces or number plates, and all data is deleted after thirty days. We've also created a public website where anyone can see exactly what each sensor collects.`,
          q: [
            { k: "2", p: "Which TWO measures has the city taken to address privacy concerns?", o: ["Sensors don't record faces or number plates.", "Residents can switch off sensors near their homes.", "Data is deleted after thirty days.", "Sensors are only active at night.", "The police manage all data."], a: [0, 2], x: "The website is a third measure, but it's not among the options; the others are not mentioned." }
          ] }
      ] },
    { t: "How machines learn", ctx: "Listening Part 4 · lecture", sp: { A: "f" },
      tip: "Technical lectures define terms. The definition is often the answer: ‘this is known as…’, ‘what we call…’",
      sc: [
        { s: `A: Today we're looking at how a neural network learns. Imagine a network trained to recognise photos of cats. At first, its internal settings, known as weights, are random, so its guesses are essentially useless. It's shown thousands of labelled examples. Each time it makes a guess, the size of its error is calculated, and the weights are adjusted slightly to reduce that error. This adjustment process, repeated millions of times, is called training.`,
          q: [
            { k: "g", p: "A network's internal settings are known as ___", a: ["weights"], w: 1, x: "‘Its internal settings, known as weights.’" },
            { k: "g", p: "Initially, the settings are ___", a: ["random"], w: 1, x: "‘At first, its internal settings… are random.’" }
          ] },
        { s: `A: One danger is something called overfitting. This happens when a network learns its training examples too precisely, including irrelevant details. Imagine if every cat photo in the training set happened to be taken indoors. The network might learn that indoor backgrounds mean ‘cat’, and then fail completely on a photo of a cat in a garden. To check for this, researchers always test the network on new data it has never seen.`,
          q: [
            { k: "m", p: "What is overfitting?", o: ["when a network is too small to learn", "when a network learns training data too exactly, including irrelevant features", "when a network is trained for too short a time"], a: 1, x: "‘Learns its training examples too precisely, including irrelevant details.’" },
            { k: "g", p: "To detect overfitting, networks are tested on ___ data.", a: ["new", "unseen"], w: 1, x: "‘New data it has never seen.’" }
          ] }
      ] }
  ],
  R: [
    { t: "The right to repair", ty: "YES / NO / NOT GIVEN",
      tip: "Watch for the writer's hedges. ‘It is not unreasonable to…’ is a mild YES, not a NO.",
      ps: `For most of the twentieth century, repairing your own possessions was unremarkable. Radios came with circuit diagrams; cars could be serviced by any competent mechanic. Today, many products are deliberately difficult to open, and manufacturers often restrict access to spare parts and repair manuals.

Companies defend these practices on grounds of safety and security, and in a few cases the argument has merit: a poorly repaired battery can be genuinely dangerous. Yet it is difficult to escape the conclusion that the principal motive is commercial. When repair is expensive or impossible, consumers replace rather than fix.

Several governments have now introduced ‘right to repair’ laws requiring manufacturers to make parts available for a number of years. It is too early to judge their impact, and some critics fear that companies will simply raise the price of parts. Nevertheless, the principle that people should be able to repair what they own seems to me a reasonable one.`,
      q: [
        { k: "y", p: "Safety concerns about repair are never justified.", a: "N", x: "‘In a few cases the argument has merit.’" },
        { k: "y", p: "Making repair difficult mainly serves manufacturers' financial interests.", a: "Y", x: "‘The principal motive is commercial.’" },
        { k: "y", p: "Right-to-repair laws have already reduced electronic waste.", a: "N", x: "‘It is too early to judge their impact.’ Claiming success contradicts this." },
        { k: "y", p: "Spare parts should be sold at a fixed price set by governments.", a: "NG", x: "Critics fear price rises, but the writer proposes no price controls." },
        { k: "y", p: "The writer supports the basic idea behind right-to-repair laws.", a: "Y", x: "‘Seems to me a reasonable one.’" }
      ] },
    { t: "How satellite navigation works", ty: "Diagram and sentence completion",
      tip: "Diagram labels use words from the text in a new layout. Find the part of the text that describes the same component.",
      ps: `A satellite navigation receiver, such as the one in a phone, does not send any signal to satellites. It only listens. Each GPS satellite continuously broadcasts its position and the precise time, measured by an atomic clock on board.

Because radio signals travel at a known speed, the receiver can calculate its distance from a satellite by measuring how long the signal took to arrive. A distance from one satellite places the receiver somewhere on the surface of an imaginary sphere. Signals from three satellites narrow this down to a single point. In practice, a fourth satellite is required, because the cheap clock in a phone is not accurate enough, and the extra signal allows the timing error to be corrected.

Accuracy can be reduced in cities, where signals bounce off tall buildings before reaching the receiver, a problem known as multipath error.`,
      q: [
        { k: "g", p: "Each satellite carries an ___ clock.", a: ["atomic"], w: 1, x: "‘Measured by an atomic clock on board.’" },
        { k: "g", p: "Distance is calculated from the time the ___ takes to arrive.", a: ["signal"], w: 1, x: "‘How long the signal took to arrive.’" },
        { k: "m", p: "Why is a fourth satellite needed?", o: ["to cover areas without signal", "to correct the timing error of the receiver's clock", "to send a reply to the receiver"], a: 1, x: "‘The extra signal allows the timing error to be corrected.’" },
        { k: "g", p: "Signals reflecting off buildings cause ___ error.", a: ["multipath"], w: 1, x: "‘A problem known as multipath error.’" },
        { k: "t", p: "Phones send signals to GPS satellites.", a: "F", x: "‘Does not send any signal to satellites. It only listens.’" }
      ] },
    { t: "Machines that translate", ty: "Matching headings + multiple choice",
      tip: "At Band 7.5+, two headings may both seem possible. Choose the one that covers the whole paragraph, not its first line.",
      ps: `A  Early machine translation systems, developed from the 1950s, relied on rules written by linguists: dictionaries plus grammar instructions. They coped reasonably with simple, formal sentences but failed badly with idioms, ambiguity and anything resembling ordinary speech.

B  From the 2000s, statistical systems replaced rules with probabilities calculated from millions of human translations. Quality improved, but output was often fluent at the level of phrases and incoherent at the level of sentences.

C  Neural systems, introduced in the mid-2010s, process whole sentences at once and produce far more natural results. For widely spoken language pairs, professional translators now often use them to produce a first draft, which they then edit.

D  Yet the gains are uneven. Languages with little digitised text available, spoken by millions of people in some cases, still receive poor translations, since the systems learn only from the data they are given.`,
      q: [
        { k: "x", p: "Choose the correct heading for each paragraph.", o: ["i  A tool for professionals", "ii  Numbers instead of grammar rules", "iii  An unequal improvement", "iv  Hand-built systems and their limits", "v  Why human translators will disappear"], i: [["Paragraph A", 3], ["Paragraph B", 1], ["Paragraph C", 0], ["Paragraph D", 2]], x: "v is a tempting distractor, but the text says translators edit machine drafts; it never predicts they'll disappear." },
        { k: "m", p: "What was the main weakness of statistical systems?", o: ["They could not translate single words.", "Phrases sounded natural, but whole sentences often didn't make sense.", "They required linguists to write rules."], a: 1, x: "‘Fluent at the level of phrases and incoherent at the level of sentences.’" },
        { k: "m", p: "Why do some languages still get poor translations?", o: ["They have very few speakers.", "There is little digital text in them for systems to learn from.", "Their grammar is too complex."], a: 1, x: "‘Little digitised text available… spoken by millions’, so speaker numbers aren't the cause." }
      ] }
  ],
  W: [
    { t: "Comparing two charts", tip: "With two charts, your overview should link them: what's the relationship between the two sets of data?",
      q: [
        { k: "m", ch: { t: "bar", title: "Daily internet use: share of each age group (%)", x: ["16–24", "25–44", "45–64", "65+"], s: [{ n: "2005", v: [72, 55, 30, 8] }, { n: "2025", v: [99, 98, 93, 74] }] },
          p: "Which overview is most effective?", o: ["Daily internet use rose in every age group, and the gap between younger and older users narrowed considerably.", "Usage in the 65+ group went from 8% to 74%, an increase of 66 points.", "Older people are now as good with technology as young people."], a: 0, x: "It captures two key features: universal rise + convergence. The second is a detail; the third is an unsupported claim." },
        { k: "m", p: "Which is the most precise description of 8% → 74%?", o: ["increased more than ninefold", "increased slightly", "doubled"], a: 0, x: "74 ÷ 8 ≈ 9.25, so more than ninefold." },
        { k: "m", p: "Which sentence avoids repetition through referencing?", o: ["The 16–24 group was the heaviest user in 2005, and this remained the case in 2025.", "The 16–24 group was the heaviest user in 2005, and the 16–24 group was the heaviest user in 2025.", "The 16–24 group was heaviest and heaviest."], a: 0, x: "‘This remained the case’ refers back without repeating, which helps Coherence and Cohesion." },
        { k: "m", p: "Which uses ‘respectively’ correctly?", o: ["In 2025, the figures for the two oldest groups were 93% and 74% respectively.", "Respectively, the figures were high.", "The figures respectively rose."], a: 0, x: "‘Respectively’ matches a list of figures to a list of items, in order." },
        { k: "w", ch: { t: "bar", title: "Daily internet use: share of each age group (%)", x: ["16–24", "25–44", "45–64", "65+"], s: [{ n: "2005", v: [72, 55, 30, 8] }, { n: "2025", v: [99, 98, 93, 74] }] },
          p: "Write a full Task 1 response (150+ words).", min: 150, time: 1200, n: ["Overview links both years", "Comparisons, not lists", "Precise multiples/fractions", "Effective referencing"] }
      ] },
    { t: "Hedging and precision", tip: "Band 7.5+ essays sound careful: ‘tends to’, ‘is likely to’, ‘in many cases’. Absolute claims are easy to attack.",
      q: [
        { k: "m", p: "Which is the best academic version of ‘Social media makes everyone lonely’?", o: ["Heavy social media use may contribute to feelings of isolation, particularly among adolescents.", "Social media makes absolutely everyone lonely.", "Social media is lonely."], a: 0, x: "Hedged (‘may contribute’) and precise (‘heavy use’, ‘adolescents’)." },
        { k: "m", p: "Which uses nominalisation effectively?", o: ["The rapid adoption of smartphones has transformed how people communicate.", "Smartphones were adopted rapidly and this transformed things.", "People adopted smartphones fast, so communicating changed."], a: 0, x: "Turning verbs into noun phrases (‘the rapid adoption of…’) is a hallmark of academic style." },
        { k: "m", p: "Which collocation is correct?", o: ["pose a threat", "make a threat to privacy", "do a threat"], a: 0, x: "Pose a threat / a risk / a challenge." },
        { k: "o", p: "Order the words into a hedged claim.", a: ["Technology", "is", "likely", "to", "reshape", "the", "labour", "market", "in", "the", "coming", "decades."], x: "‘Is likely to’ marks a probable prediction." },
        { k: "w", p: "Some people argue that technology has made us less sociable. To what extent do you agree or disagree?\n\nWrite a full essay (250+ words). Use hedging at least three times.", min: 250, time: 2400, n: ["Clear position throughout", "Hedged claims", "Nominalisation used", "Precise collocations"] }
      ] }
  ],
  S: [
    { t: "Technology in daily life", tip: "Band 7.5+ fluency: discourse markers like ‘mind you’, ‘as it happens’, ‘to be fair’ make speech sound natural.",
      q: [
        { k: "m", p: "Which discourse marker adds a mild contrast in speech?", o: ["Mind you,", "Firstly,", "In conclusion,"], a: 0, x: "‘Mind you’ introduces a qualifying point. It's very natural in spoken British English." },
        { k: "m", p: "‘How often do you use your phone?’ Which answer is most fluent and natural?", o: ["Far more than I'd like to admit! I've actually started leaving it in another room when I'm studying, because otherwise I'm constantly checking it.", "I use my phone every day many times.", "Phone use: often."], a: 0, x: "Natural, idiomatic, with a specific example and a range of tenses." },
        { k: "m", p: "Which sentence uses ‘as it happens’ naturally?", o: ["As it happens, I was reading about that just yesterday.", "As it happens the phone.", "It happens as I am phone."], a: 0, x: "‘As it happens’ = by coincidence, actually." },
        { k: "s", p: "Is there any technology you couldn't live without?", prep: 10, time: 45, n: ["Natural discourse markers", "Specific example", "Range of structures"] }
      ] },
    { t: "Technology and the future", tip: "Use future forms with different levels of certainty: ‘will almost certainly’, ‘could well’, ‘is unlikely to’.",
      q: [
        { k: "m", p: "Which expresses the highest certainty?", o: ["will almost certainly", "could well", "might possibly"], a: 0, x: "Certainty scale: will almost certainly > is likely to > could well > might possibly." },
        { k: "m", p: "‘Will AI replace teachers?’ Which answer is strongest?", o: ["I doubt it, at least not entirely. AI could well take over routine tasks like marking, but the motivational side of teaching seems much harder to automate.", "No, teachers are humans.", "AI will replace everything definitely."], a: 0, x: "Hedged prediction, a distinction, and reasoning." },
        { k: "m", p: "Which uses the future continuous correctly?", o: ["In twenty years, we'll probably be working fewer hours.", "In twenty years, we'll probably working fewer hours.", "In twenty years, we're probably work fewer hours."], a: 0, x: "Will + be + -ing." },
        { k: "s", cc: { title: "Describe a piece of technology you find useful.", b: ["what it is", "how you use it", "how often you use it", "and explain why it is useful to you"] }, p: "Speak about the cue card.", prep: 60, time: 120, n: ["Precise vocabulary", "Range of future forms", "Fluent for 2 minutes"] }
      ] }
  ]
});
