/* Strategies tab: each strategy has steps and a practice drill (drill: [...] or gen: "spell" | "para" | "micro"). */
const STRATEGIES = [
  { id: "l-predict", sk: "L", t: "Predict before you listen", why: "You have time to read the questions before each part. Predicting the type of answer means you recognise it the moment it's spoken.",
    steps: ["Read the gap and the words around it.", "Decide: number, date, name, noun (singular or plural), adjective?", "Note any word-limit instruction.", "Listen for that type of word."],
    drill: [
      { k: "m", p: "‘Cost per night: £___’. What will you listen for?", o: ["a number", "a name", "an adjective"], a: 0, x: "£ tells you it's a price." },
      { k: "m", p: "‘Please bring two ___’. What type of word?", o: ["a plural noun", "a verb", "a singular noun"], a: 0, x: "‘Two’ requires a plural." },
      { k: "m", p: "‘The talk will be held in the ___ room.’ Likely answer type?", o: ["an adjective or noun describing the room", "a date", "a verb"], a: 0, x: "e.g. ‘seminar’, ‘main’, ‘blue’." },
      { k: "m", p: "‘Contact person: Ms ___’. What should you prepare for?", o: ["a spelled surname", "a phone number", "a time"], a: 0, x: "Surnames are usually spelled out. Get ready to write letters." },
      { k: "m", p: "‘The main problem was the ___ weather.’ What type?", o: ["an adjective", "a plural noun", "a number"], a: 0, x: "Before a noun, the gap needs an adjective." }
    ] },
  { id: "l-final", sk: "L", t: "Wait for the final answer", why: "IELTS deliberately includes corrections and rejected options. The first thing you hear is often the trap.",
    steps: ["Write lightly in your head, not on paper, until the speaker commits.", "Watch for ‘sorry’, ‘actually’, ‘no, wait’, ‘in the end’.", "In choice questions, expect two options to be mentioned and rejected."],
    drill: TRICKS.filter(t => t.cat === "Self-correction" || t.cat === "Rejected option" || t.cat === "Distractor number") },
  { id: "l-signpost", sk: "L", t: "Follow the signposts", why: "In Parts 2 and 4 the speaker moves through topics. Signposts tell you which part of the notes you're in, so you never lose your place.",
    steps: ["Underline the headings in the notes.", "Learn common signposts: ‘moving on to…’, ‘another aspect…’, ‘to sum up…’.", "If you miss one answer, jump to the next heading; don't chase it."],
    drill: [
      { k: "m", p: "‘Now let's turn to the question of cost.’ What does this signal?", o: ["a new topic", "an example", "a conclusion"], a: 0, x: "‘Turn to’ introduces a new section." },
      { k: "m", p: "‘To give you an idea of the scale…’ What comes next?", o: ["a figure or example", "a new topic", "a summary"], a: 0, x: "It introduces supporting detail." },
      { k: "m", p: "‘So, to wrap up…’ signals", o: ["the conclusion", "a correction", "a definition"], a: 0, x: "The talk is ending; final questions are close." },
      { k: "m", p: "‘What this means in practice is…’ introduces", o: ["an explanation or application", "a new speaker", "a list of names"], a: 0, x: "It restates the idea in practical terms." }
    ] },
  { id: "l-spell", sk: "L", t: "Spelling and numbers are free marks", why: "Part 1 answers are often names, postcodes and numbers. One wrong letter means zero, but these are the easiest marks to secure.",
    steps: ["Practise the alphabet aloud, especially vowels A, E, I.", "Know ‘double L’, ‘hyphen’, ‘underscore’.", "Write answers in capitals so your handwriting is clear.", "Check spelling of common topic words."],
    gen: "spell" },
  { id: "l-limit", sk: "L", t: "Respect the word limit", why: "Writing three words when the instruction says ‘ONE WORD ONLY’ is marked wrong, even if the meaning is perfect.",
    steps: ["Circle the instruction: ONE WORD / NO MORE THAN TWO WORDS / AND/OR A NUMBER.", "Hyphenated words count as one word.", "Numbers can be written as digits.", "Don't repeat words already in the sentence."],
    drill: [
      { k: "m", p: "NO MORE THAN TWO WORDS: which answer is valid?", o: ["city centre", "the city centre", "the centre of the city"], a: 0, x: "Two words exactly. Articles count as words." },
      { k: "m", p: "ONE WORD AND/OR A NUMBER: which is valid?", o: ["3 bedrooms", "three large bedrooms", "3 large bedrooms"], a: 0, x: "One word + one number." },
      { k: "m", p: "Is ‘well-known’ one word or two in IELTS?", o: ["one", "two"], a: 0, x: "Hyphenated words count as one." },
      { k: "m", p: "Gap: ‘walking ___’. Speaker says ‘walking boots’. Write:", o: ["boots", "walking boots", "a pair of boots"], a: 0, x: "Don't repeat words already in the sentence." }
    ] },
  { id: "r-skim", sk: "R", t: "Skim first, scan second", why: "You have about 20 minutes per passage. Skimming gives you the map; scanning finds the exact spot for each answer.",
    steps: ["Skim: read the title, first and last sentences of each paragraph (about 90 seconds).", "Note the topic of each paragraph in two or three words.", "Scan: for each question, find names, numbers, or capitalised words, then read around them carefully."],
    drill: [
      { k: "m", flash: 20, ps: "Urban beekeeping has grown rapidly in many European cities. Rooftop hives now sit on hotels, offices and even opera houses. Supporters argue that city bees benefit from a wide variety of flowers in parks and gardens, often more varied than in farmland treated with pesticides. However, some ecologists warn that too many honeybee hives may compete with wild bees for limited food, potentially harming native species.", p: "What is the passage mainly about?", o: ["the growth of city beekeeping and a concern about it", "how to build a rooftop hive", "why pesticides are banned in cities"], a: 0, x: "Growth (first lines) + concern (‘However…’). Skimming first and last sentences gets you there." },
      { k: "m", flash: 20, ps: "For centuries, sailors navigated using the stars. But measuring longitude, your east–west position, required knowing the exact time at a reference point. In the 1700s, clockmaker John Harrison built marine chronometers accurate enough to keep time at sea, solving a problem that had cost countless ships and lives.", p: "The main idea is", o: ["how accurate clocks solved a navigation problem", "the life of sailors in the 1700s", "how stars are used in astronomy"], a: 0, x: "Problem (longitude) → solution (chronometers)." },
      { k: "m", flash: 20, ps: "Many schools are replacing printed textbooks with tablets. Advocates point to lower costs over time and access to updated content. Yet several studies suggest that students remember less when reading on screens, particularly for longer texts, possibly because scrolling disrupts their sense of where information is located.", p: "What is the writer's main point?", o: ["Tablets have benefits but may reduce memory for long texts", "Tablets are always better than books", "Textbooks are too expensive"], a: 0, x: "The ‘Yet…’ sentence carries the key point." }
    ] },
  { id: "r-para", sk: "R", t: "Hunt paraphrases, not words", why: "IELTS rarely uses the same words in the question and the text. The answer is where the MEANING matches, often with completely different words.",
    steps: ["Underline the key idea in the question.", "Think of 2–3 synonyms before you scan.", "Be suspicious when the exact same word appears: it may be a trap."],
    gen: "para" },
  { id: "r-tfng", sk: "R", t: "The TRUE / FALSE / NOT GIVEN decision", why: "Most mistakes happen between FALSE and NOT GIVEN. One simple question settles it.",
    steps: ["Find the part of the text the statement is about.", "Does the text say the same thing? → TRUE.", "Does the text say the OPPOSITE? → FALSE.", "Can't find it, or the text doesn't say either way? → NOT GIVEN.", "Never use your own knowledge."],
    gen: "micro" },
  { id: "r-head", sk: "R", t: "Headings = the main idea", why: "Heading distractors often match a single detail or word in the paragraph. The right heading summarises the whole paragraph.",
    steps: ["Read the whole paragraph before looking at headings.", "Summarise it in five words.", "Pick the heading closest to your summary.", "Cross out headings you've used."],
    drill: [
      { k: "m", ps: "In the early 1900s, cities filled with horses created serious problems. Streets were covered in manure, which attracted flies and spread disease. The arrival of motor vehicles was initially welcomed as a clean, modern solution.", p: "Best heading?", o: ["Cars as an answer to a city problem", "The life of city horses", "Diseases spread by flies"], a: 0, x: "Horses and flies are details. The paragraph is about why cars were welcomed." },
      { k: "m", ps: "Although solar panels have become far cheaper, their output varies with weather and time of day. Storage remains expensive, so electricity grids still rely on other sources when the sun is not shining.", p: "Best heading?", o: ["A remaining limitation of solar power", "The falling cost of solar panels", "How electricity grids were invented"], a: 0, x: "The cost fall is the concession; the paragraph's point is the limitation." },
      { k: "m", ps: "Researchers tracked 500 commuters for two years. Those who cycled to work took, on average, fewer sick days and reported higher job satisfaction than those who drove, even after accounting for income and age.", p: "Best heading?", o: ["Benefits linked to cycling to work", "The problems of driving", "How the research was funded"], a: 0, x: "Findings about cyclists are the main idea." }
    ] },
  { id: "r-time", sk: "R", t: "Manage the 60 minutes", why: "Academic Reading has no extra transfer time, and passage 3 is the hardest. Running out of time costs more marks than any single difficult question.",
    steps: ["Aim for about 17–20 minutes per passage, faster on passage 1.", "If stuck for over a minute, guess and move on. There's no penalty.", "Write answers directly on the answer sheet.", "Never leave a blank."],
    drill: [
      { k: "m", p: "Do you get extra time to transfer answers in Academic Reading?", o: ["No: write directly on the answer sheet", "Yes, 10 minutes", "Yes, 2 minutes"], a: 0, x: "Only Listening (paper) has transfer time." },
      { k: "m", p: "You're stuck on question 9 after 90 seconds. Best move?", o: ["Guess, mark it, and move on", "Keep trying until you're sure", "Skip the whole passage"], a: 0, x: "There's no negative marking. Return if you have time." },
      { k: "m", p: "Which passage is usually the most difficult?", o: ["Passage 3", "Passage 1", "They're identical"], a: 0, x: "Passages increase in difficulty." },
      { k: "m", p: "How many questions are left blank by a strategic candidate?", o: ["none", "a few hard ones", "as many as needed"], a: 0, x: "A guess has a chance; a blank has none." }
    ] },
  { id: "w-overview", sk: "W", t: "Task 1: the overview is everything", why: "In the descriptors, a clear overview is what separates Band 6–7 from Band 5. Without it, even perfect data description is capped.",
    steps: ["Before writing, ask: what are the 2 biggest features?", "Write them in 1–2 sentences, with no numbers.", "Put the overview after the introduction or at the end, clearly labelled with ‘Overall,’."],
    drill: [
      { k: "m", ch: { t: "bar", title: "Holiday destinations (millions of trips)", x: ["Beach", "City", "Mountains", "Countryside"], s: [{ n: "2010", v: [20, 12, 6, 8] }, { n: "2020", v: [18, 22, 9, 7] }] }, p: "Best overview?", o: ["City breaks overtook beach holidays to become the most popular choice, while the other two categories changed little.", "Beach holidays were 20 million in 2010.", "People like cities more now because of cheap flights."], a: 0, x: "Biggest change + general stability, with no figures and no speculation." },
      { k: "m", ch: { t: "line", title: "Mobile vs landline subscriptions (millions)", x: ["2000", "2010", "2020"], s: [{ n: "Mobile", v: [5, 40, 70] }, { n: "Landline", v: [30, 25, 10] }] }, p: "Best overview?", o: ["Mobile subscriptions rose dramatically and overtook landlines, which declined steadily.", "Mobiles went from 5 to 40 to 70 million.", "Landlines are outdated technology."], a: 0, x: "Two opposite trends + the crossover." },
      { k: "m", p: "Where can the overview go?", o: ["after the introduction or as the final paragraph", "only in the middle", "nowhere: it's optional"], a: 0, x: "Either position works if it's clear." }
    ] },
  { id: "w-type", sk: "W", t: "Decode the Task 2 question", why: "Answering a slightly different question is the fastest way to lose Task Response marks.",
    steps: ["Identify the type: opinion, discussion, advantages/disadvantages, problem/solution, or two-part.", "Count the tasks: how many things must you do?", "Plan one body paragraph per task."],
    drill: [
      { k: "m", p: "‘Do the advantages of tourism outweigh the disadvantages?’", o: ["advantages vs disadvantages + your judgement", "discussion of two views", "problem and solution"], a: 0, x: "‘Outweigh’ requires a judgement, not just a list." },
      { k: "m", p: "‘Many young people are unemployed. Why? What can be done?’", o: ["two-part (causes and solutions)", "opinion", "advantages and disadvantages"], a: 0, x: "Two direct questions." },
      { k: "m", p: "‘Some say X. Others say Y. Discuss both views and give your opinion.’", o: ["discussion + opinion", "opinion only", "problem and solution"], a: 0, x: "Three jobs: X, Y, your view." },
      { k: "m", p: "‘To what extent do you agree or disagree?’", o: ["opinion: a partial position is allowed", "discussion only", "two-part"], a: 0, x: "You can agree partly, but make the extent clear." },
      { k: "m", p: "‘Is this a positive or negative development?’", o: ["opinion on a trend", "problem/solution", "process"], a: 0, x: "Judge the development and justify it." }
    ] },
  { id: "w-peel", sk: "W", t: "Build PEEL paragraphs", why: "Band 7 asks for ideas that are ‘extended and supported’. PEEL makes every paragraph do that automatically.",
    steps: ["Point: one clear topic sentence.", "Explain: why or how.", "Example: specific and realistic.", "Link: tie it back to the question."],
    drill: [
      { k: "o", sent: true, p: "Build the PEEL paragraph.", a: ["Public libraries remain essential in the digital age.", "They provide free internet access for people who cannot afford it.", "In many cities, job seekers rely on library computers to submit applications.", "Thus, closing libraries would deepen existing inequalities."], x: "P → E → E → L." },
      { k: "o", sent: true, p: "Build the PEEL paragraph.", a: ["One major drawback of fast fashion is its environmental cost.", "Cheap clothing encourages people to buy more and discard items quickly.", "For example, millions of tonnes of textiles end up in landfill each year.", "This suggests that the industry's low prices hide significant long-term costs."], x: "P → E → E → L." }
    ] },
  { id: "w-paraphrase", sk: "W", t: "Paraphrase the prompt", why: "Copied words don't count and show no range. A quick, accurate paraphrase sets up a strong introduction.",
    steps: ["Change word forms: ‘increase’ → ‘an increase in’.", "Use synonyms only where you are sure of the meaning.", "Change the structure: active ↔ passive, clause order."],
    drill: [
      { k: "m", p: "Prompt: ‘Many people believe that homework should be banned.’ Best paraphrase?", o: ["It is widely argued that schools should stop setting homework.", "Many people believe that homework should be banned.", "Homework is believed by many, banned."], a: 0, x: "New structure + synonyms, same meaning." },
      { k: "m", p: "Prompt: ‘The number of cars in cities has increased dramatically.’ Best paraphrase?", o: ["Urban areas have seen a sharp rise in vehicle numbers.", "Cars in cities have dramatically numbered.", "There are many cars."], a: 0, x: "Noun phrase ‘a sharp rise in’ + ‘urban areas’." },
      { k: "m", p: "Which paraphrase CHANGES the meaning (a mistake)?", o: ["‘Some people think’ → ‘Everyone agrees’", "‘children’ → ‘young people’", "‘important’ → ‘significant’"], a: 0, x: "‘Some’ → ‘everyone’ distorts the claim." }
    ] },
  { id: "w-time", sk: "W", t: "Plan your 60 minutes", why: "Task 2 is worth roughly twice Task 1. Many high scorers write Task 2 first to protect the bigger score.",
    steps: ["Task 2: 40 minutes (5 plan, 30 write, 5 check).", "Task 1: 20 minutes.", "Consider starting with Task 2.", "Always leave time to check for errors."],
    drill: [
      { k: "m", p: "Which task carries more marks?", o: ["Task 2", "Task 1", "Equal"], a: 0, x: "Task 2 contributes twice as much." },
      { k: "m", p: "How long should you plan a Task 2 essay?", o: ["about 5 minutes", "0 minutes", "20 minutes"], a: 0, x: "A short plan prevents a confused structure." },
      { k: "m", p: "Your Task 1 runs over to 30 minutes. The risk?", o: ["an underdeveloped Task 2", "no risk", "a better overall score"], a: 0, x: "Protect the task that counts double." }
    ] },
  { id: "s-extend", sk: "S", t: "Answer + reason + example", why: "Short answers can't show fluency or vocabulary. Extending every answer gives the examiner something to assess.",
    steps: ["Answer directly.", "Give a reason (‘mainly because…’).", "Add an example or contrast (‘for instance…’, ‘although…’).", "Stop naturally. Don't ramble."],
    drill: [
      { k: "m", p: "‘Do you like cooking?’ Best answer?", o: ["I do, actually. It helps me switch off after studying, and I've recently been experimenting with Bulgarian recipes from my grandmother.", "Yes.", "Cooking is when you make food."], a: 0, x: "Answer + reason + example." },
      { k: "m", p: "‘Do you prefer mornings or evenings?’ Best answer?", o: ["Evenings, definitely. My mind seems sharper later in the day, although I know that's not ideal for early exams!", "Evening.", "I prefer the mornings or evenings."], a: 0, x: "Preference + reason + a natural contrast." },
      { k: "s", p: "Do you enjoy spending time in the city centre?", prep: 5, time: 30, n: ["Direct answer", "Reason", "Example or contrast"] }
    ] },
  { id: "s-plan", sk: "S", t: "Part 2: plan in 60 seconds", why: "A one-minute plan stops you running out of ideas at 50 seconds. The bullets on the card are your structure.",
    steps: ["Write 2–3 key words per bullet.", "Add a story or example: it fills time naturally.", "Plan your final ‘explain why’ point first; it's the one people forget.", "Keep talking until the examiner stops you."],
    drill: [
      { k: "m", p: "How should you use the cue-card bullets?", o: ["as the structure of your talk", "ignore them", "read them aloud word for word"], a: 0, x: "Bullets = ready-made structure." },
      { k: "m", p: "You finish at 1 min 10 sec. What should you do?", o: ["add a further detail or story", "say ‘That's all’ and stop", "start a new topic"], a: 0, x: "Use the full two minutes if you can." },
      { k: "s", cc: { title: "Describe a skill you would like to learn.", b: ["what the skill is", "how you would learn it", "how long it would take", "and explain why you want to learn it"] }, p: "Plan in 60 seconds, then speak.", prep: 60, time: 120, n: ["Used notes as structure", "Included a story/example", "Covered ‘explain why’"] }
    ] },
  { id: "s-time", sk: "S", t: "Buy time naturally", why: "Silence hurts fluency; robotic fillers hurt it too. Natural thinking phrases keep you fluent while you plan.",
    steps: ["Learn 4–5 natural phrases.", "Use them only for hard questions.", "Rephrase the question to give yourself a moment."],
    drill: [
      { k: "m", p: "Which sounds most natural?", o: ["Hmm, I've never really thought about that, but I suppose…", "Wait.", "I will now think."], a: 0, x: "Honest and natural, and it leads straight into an answer." },
      { k: "m", p: "Which is a good rephrasing strategy?", o: ["So, whether technology makes us lonelier… well, I'd say…", "Repeat the question.", "Can you answer it for me?"], a: 0, x: "Rephrasing buys time AND shows paraphrase." },
      { k: "m", p: "Which filler should you avoid overusing?", o: ["‘um’ and ‘you know’", "‘that's a good question’ once", "‘let me think’ once"], a: 0, x: "Repeated empty fillers signal searching for language." }
    ] },
  { id: "s-p3", sk: "S", t: "Part 3: opinion, reason, contrast", why: "Part 3 is where Band 7+ is decided. Examiners want abstract reasoning, not personal stories.",
    steps: ["Give a clear view.", "Justify it with a general reason.", "Add a contrast or exception.", "Compare (past/present, young/old, countries)."],
    drill: [
      { k: "m", p: "‘Why do people live in cities?’ Which answer fits Part 3 best?", o: ["Mainly for economic reasons: jobs and services are concentrated there. That said, many people now leave cities for a better quality of life, especially since remote work became common.", "I live in Sofia because my family is there.", "Cities are big."], a: 0, x: "General, reasoned, with a contrast." },
      { k: "s", p: "Do you think people will still read printed books in the future?", prep: 10, time: 60, n: ["Clear view", "General reason", "Contrast or comparison"] }
    ] },
  { id: "x-sheet", sk: "X", t: "Answer-sheet rules", why: "Easy marks are lost on the answer sheet, not in the questions.",
    steps: ["Write in capitals: no confusion between letters.", "Check plurals and spelling.", "Never leave a blank: there's no penalty for guessing.", "For T/F/NG, write the full words or the exact form the instructions require."],
    drill: [
      { k: "m", p: "Why write answers in CAPITALS?", o: ["Handwriting is clearer and spelling errors are less likely to be misread", "It earns bonus marks", "It is required for Writing"], a: 0, x: "Capitals are allowed in Listening and Reading and avoid ambiguity." },
      { k: "m", p: "Is there a penalty for a wrong answer?", o: ["No", "Yes, −1", "Yes, −0.5"], a: 0, x: "Always write something." },
      { k: "m", p: "The answer is ‘Y’ (YES) but you write ‘T’ (TRUE). Result?", o: ["marked wrong", "marked right", "half a mark"], a: 0, x: "Use the form the instructions ask for." }
    ] }
];
