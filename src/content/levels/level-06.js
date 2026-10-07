/* Level 6: Science and health */
LEVELS.push({
  id: 6, name: "Science and health", theme: "Medicine, body and mind",
  L: [
    { t: "Registering at a health centre", ctx: "Listening Part 1 · reception", sp: { W: "f", M: "m" },
      tip: "Postcodes and dates are classic Part 1 answers. Write letters in capitals to avoid spelling slips.",
      sc: [
        { s: `W: So, you'd like to register with the practice. Can I have your date of birth?
M: Yes, the twenty-first of November, two thousand and five.
W: And your address?
M: Flat four, twenty-two Elm Grove.
W: Postcode?
M: B, S, six, three, R, T.
W: Sorry, was that B for Bravo?
M: Yes. B, S, six, three, R, T.`,
          q: [
            { k: "g", p: "Date of birth: ___ November 2005", a: ["21st", "21", "twenty-first", "twenty first"], w: "n", x: "‘The twenty-first of November.’" },
            { k: "g", p: "Postcode: ___", a: ["bs6 3rt", "bs63rt"], w: "n", x: "B-S-6, 3-R-T. Postcodes count as one ‘number’ answer." }
          ] },
        { s: `W: Are you taking any medication at the moment?
M: Not regularly. I used to take something for hay fever, but I stopped last year.
W: Any allergies?
M: Just one. Penicillin. I found out when I was a child.
W: Right. New patients have a short health check with the nurse. The first available appointment is next Thursday at nine forty. Is that OK?
M: Could I have something later? I have lectures in the morning.
W: There's two fifteen on the same day.
M: Perfect.`,
          q: [
            { k: "g", p: "Allergy: ___", a: ["penicillin"], w: 1, x: "Hay fever medication is something he no longer takes." },
            { k: "g", p: "Appointment: Thursday at ___", a: ["2.15", "2:15", "215", "14.15", "14:15"], w: "n", x: "9.40 was offered but rejected because of lectures." }
          ] }
      ] },
    { t: "Researching the placebo effect", ctx: "Listening Part 3 · two students", sp: { A: "f", B: "m" },
      tip: "Questions about attitude (‘What does Ben think…?’) need you to hear tone and hedges, not just facts.",
      sc: [
        { s: `A: So our presentation is on the placebo effect. I found a fascinating study where patients improved even when they knew they were taking sugar pills.
B: I read that one too. To be honest, I'm a bit sceptical. The sample was tiny, only about eighty people.
A: That's fair, but it's been repeated with similar results.
B: Has it? Then I suppose it's worth including, as long as we mention the limitations.`,
          q: [
            { k: "m", p: "What is Ben's first reaction to the ‘open-label’ placebo study?", o: ["He finds it convincing.", "He doubts it because of the sample size.", "He thinks it is irrelevant."], a: 1, x: "‘I'm a bit sceptical. The sample was tiny.’" },
            { k: "m", p: "What do they finally agree to do?", o: ["leave the study out", "include it but discuss its weaknesses", "replace it with a larger study"], a: 1, x: "‘Worth including, as long as we mention the limitations.’" }
          ] },
        { s: `B: How about we start with the history? Doctors were prescribing placebos centuries ago.
A: Mm, I think the audience will switch off. Why not open with a surprising fact, like the colour of pills affecting how well they work?
B: Oh, that's a great hook. Then history can come second, briefly.
A: Agreed. And we should finish with the ethical question, whether doctors should ever give placebos without telling patients.`,
          q: [
            { k: "m", p: "How will the presentation begin?", o: ["with the history of placebos", "with a surprising fact about pill colour", "with the ethical question"], a: 1, x: "Ben suggests history; Alice prefers a surprising fact; Ben agrees." },
            { k: "m", p: "What will they discuss at the end?", o: ["whether doctors should give placebos without telling patients", "the cost of placebos", "how placebos are made"], a: 0, x: "‘Finish with the ethical question…’" }
          ] }
      ] },
    { t: "How vaccines train the body", ctx: "Listening Part 4 · lecture", sp: { A: "f" },
      tip: "At Band 7+, note-completion answers are often technical words. Spell them using the structure of the word.",
      sc: [
        { s: `A: To understand vaccines, we need to start with the immune system. When a virus enters the body, white blood cells produce proteins called antibodies, which attach to the virus and mark it for destruction. The first time this happens, the response is slow. It can take one to two weeks, which is why we feel ill. But afterwards, the body keeps memory cells, so if the same virus returns, the response is much faster.`,
          q: [
            { k: "g", p: "White blood cells produce proteins called ___", a: ["antibodies"], w: 1, x: "‘Proteins called antibodies.’" },
            { k: "g", p: "After an infection, the body keeps ___ cells.", a: ["memory"], w: 1, x: "‘The body keeps memory cells.’" }
          ] },
        { s: `A: A vaccine exploits this memory. It exposes the immune system to a harmless version or part of the pathogen, so that memory cells are created without the person getting seriously ill. The idea goes back to Edward Jenner in the seventeen nineties, who noticed that milkmaids who had caught cowpox, a mild disease, seemed protected from smallpox. In fact, the word vaccine comes from the Latin word for cow, vacca.`,
          q: [
            { k: "m", p: "What does a vaccine do?", o: ["It kills viruses directly.", "It creates memory cells without serious illness.", "It replaces white blood cells."], a: 1, x: "‘Memory cells are created without the person getting seriously ill.’" },
            { k: "g", p: "Jenner observed that people who had had ___ were protected from smallpox.", a: ["cowpox"], w: 1, x: "‘Milkmaids who had caught cowpox.’" },
            { k: "g", p: "‘Vaccine’ comes from the Latin word for ___", a: ["cow"], w: 1, x: "‘Vacca’ means cow." }
          ] }
      ] }
  ],
  R: [
    { t: "The placebo paradox", ty: "YES / NO / NOT GIVEN",
      tip: "When a writer reports others' views (‘some argue…’), that is not necessarily the writer's own view.",
      ps: `The placebo effect is often presented as proof of the mind's power over the body. This is misleading. Much of what is measured as a placebo response in clinical trials is not caused by belief at all, but by the natural course of illness: many conditions improve on their own, and patients tend to enrol in trials when their symptoms are at their worst.

That said, the effect is real for certain outcomes, particularly subjective ones such as pain and nausea. Brain-imaging studies have shown that placebo painkillers can trigger the release of the body's own pain-relieving chemicals. Expectations, shaped by the colour, size and price of a pill, appear to matter.

Some doctors argue that placebos should be prescribed openly. I find this harder to support. A treatment that works only for symptoms, while the underlying disease progresses, could give patients a dangerous sense of security.`,
      q: [
        { k: "y", p: "It is accurate to describe the placebo effect as proof of the mind's power.", a: "N", x: "‘This is misleading.’" },
        { k: "y", p: "Some placebo responses in trials are actually natural recovery.", a: "Y", x: "‘Not caused by belief at all, but by the natural course of illness.’" },
        { k: "y", p: "Placebos are most effective for subjective symptoms like pain.", a: "Y", x: "‘Particularly subjective ones such as pain and nausea.’" },
        { k: "y", p: "Expensive pills always work better than cheap ones.", a: "NG", x: "Price ‘appears to matter’, but ‘always work better’ goes beyond what's said." },
        { k: "y", p: "The writer supports open prescription of placebos.", a: "N", x: "‘I find this harder to support.’ The supporters are ‘some doctors’." }
      ] },
    { t: "Resistance is rising", ty: "Summary completion (word box)",
      tip: "Word-box options are often synonyms of the text, not the same word. Match meanings.",
      ps: `Antibiotics have saved hundreds of millions of lives since penicillin came into use in the 1940s. However, bacteria evolve. Each time an antibiotic is used, the bacteria that happen to survive are those with genetic features that protect them. They multiply, and over time the drug becomes less effective.

This process is natural, but human behaviour has dramatically accelerated it. Antibiotics are frequently prescribed for viral infections, against which they are useless. In many countries, they are added in large quantities to animal feed to make livestock grow faster. Patients who stop a course of treatment early may also help resistant bacteria survive.

Developing new antibiotics is slow and offers drug companies little profit, since new drugs are kept in reserve and used as rarely as possible.`,
      q: [
        { k: "x", p: "Complete the summary with words from the box.", o: ["A  survive", "B  viruses", "C  farming", "D  reserve", "E  profitable", "F  surgery", "G  cheap"], i: [["Resistance develops because protected bacteria ___ and multiply.", 0], ["Antibiotics are wrongly given for illnesses caused by ___.", 1], ["Large amounts are used in ___.", 2], ["New antibiotics are rarely ___ for companies.", 4], ["New drugs are kept in ___.", 3]], x: "Animal feed = farming. ‘Little profit’ = rarely profitable." },
        { k: "t", p: "Penicillin was first used in the 1960s.", a: "F", x: "‘Since penicillin came into use in the 1940s.’" }
      ] },
    { t: "The microbes within", ty: "Matching researchers",
      tip: "When matching findings to people, the paraphrase gap is big. Read each person's sentence carefully.",
      ps: `The human gut contains trillions of bacteria, and research into this ‘microbiome’ has expanded rapidly.

Dr Hanna Lindqvist found that people living in rural communities with traditional diets had a far greater variety of gut bacteria than city dwellers. She suggests that diversity, rather than any single ‘good’ species, may be the key to a healthy gut.

Professor Daniel Osei's team studied mice raised in completely sterile conditions. These animals behaved differently under stress, leading Osei to propose that gut bacteria may influence mood, although he stresses that human evidence remains limited.

Dr Mei Tanaka warns that the field has attracted commercial hype. Many probiotic products, she notes, make claims that have never been tested in properly controlled trials.

Professor Lucas Moreau has shown that a single course of antibiotics can reduce microbial diversity for months, and in some individuals the original balance never fully returns.`,
      q: [
        { k: "x", p: "Match each finding with the correct researcher.", o: ["A  Lindqvist", "B  Osei", "C  Tanaka", "D  Moreau"], i: [["Some products are sold with unproven claims.", 2], ["Medical treatment can have long-lasting effects on gut bacteria.", 3], ["A wide range of bacteria may matter more than particular types.", 0], ["There may be a link between bacteria and emotional state.", 1]], x: "Mood = emotional state (Osei). ‘Never fully returns’ = long-lasting (Moreau)." },
        { k: "t", p: "Osei believes the link between bacteria and mood has been proven in humans.", a: "F", x: "‘Human evidence remains limited.’" }
      ] }
  ],
  W: [
    { t: "Multiple lines over time", tip: "With several lines, group them: which rose, which fell, which crossed? Mention any crossover point.",
      q: [
        { k: "m", ch: { t: "line", title: "Life expectancy at birth (years)", x: ["1960", "1980", "2000", "2020"], s: [{ n: "Country A", v: [68, 72, 77, 82] }, { n: "Country B", v: [45, 55, 64, 71] }, { n: "Country C", v: [70, 70, 71, 73] }] },
          p: "Which overview is best?", o: ["Life expectancy increased in all three countries, with Country B showing the most dramatic improvement, although it remained the lowest.", "Country A was 68 in 1960 and 82 in 2020.", "Country C had a good health system."], a: 0, x: "Overall trend + the most striking feature, with no figures and no speculation." },
        { k: "m", p: "How should you describe Country C?", o: ["remained relatively stable, rising only marginally", "soared", "plummeted"], a: 0, x: "70 → 73 over 60 years is near-stable." },
        { k: "m", p: "Which uses a noun phrase correctly?", o: ["Country B saw a significant rise of 26 years.", "Country B saw a significant rised of 26 years.", "Country B was significantly rise 26 years."], a: 0, x: "‘Saw a rise of…’ is a flexible alternative to ‘rose by…’." },
        { k: "g", p: "Complete: ‘Life expectancy in Country A rose ___ 14 years over the period.’", a: ["by"], w: 1, x: "‘Rose by’ + the amount of change." },
        { k: "w", ch: { t: "line", title: "Life expectancy at birth (years)", x: ["1960", "1980", "2000", "2020"], s: [{ n: "Country A", v: [68, 72, 77, 82] }, { n: "Country B", v: [45, 55, 64, 71] }, { n: "Country C", v: [70, 70, 71, 73] }] },
          p: "Write a full Task 1 response (150+ words).", min: 150, time: 1200, n: ["Introduction paraphrases", "Clear overview", "Data grouped logically", "Accurate figures"] }
      ] },
    { t: "Two-part questions", tip: "‘Why is this? Is it positive or negative?’ means two direct questions. Answer both clearly.",
      q: [
        { k: "m", p: "‘People today are living longer. Why is this? Is it a positive or negative development?’ How should you organise the body?", o: ["Paragraph 1: reasons. Paragraph 2: whether it is positive or negative.", "Paragraph 1: advantages. Paragraph 2: disadvantages.", "One paragraph about medicine."], a: 0, x: "Mirror the two questions in two body paragraphs." },
        { k: "m", p: "Which thesis answers both questions?", o: ["Longer lives are mainly the result of medical advances and better diets, and I believe this is largely positive, despite the pressure it places on pension systems.", "People are living longer nowadays.", "Medicine is important."], a: 0, x: "It names the causes AND takes a position." },
        { k: "m", p: "Which sentence shows a concession?", o: ["Admittedly, an ageing population puts pressure on healthcare budgets.", "Everyone agrees that ageing is good.", "Healthcare is a budget."], a: 0, x: "‘Admittedly’ acknowledges the other side before you argue back." },
        { k: "m", p: "Which is the most precise vocabulary?", o: ["advances in medical treatment", "good things in medicine", "doctors doing stuff better"], a: 0, x: "Lexical resource rewards precise, topic-specific collocations." },
        { k: "w", p: "People today are living longer than ever before. Why is this? Is it a positive or negative development?\n\nWrite a full essay (250+ words).", min: 250, time: 2400, n: ["Answers both questions", "Clear position", "Well-developed paragraphs", "Range of vocabulary"] }
      ] }
  ],
  S: [
    { t: "Health habits", tip: "Range matters at Band 7: mix tenses and structures naturally. ‘I've been trying to…’, ‘If I could…’, ‘I used to…’",
      q: [
        { k: "m", p: "Which answer shows the widest range of structures?", o: ["I used to eat a lot of fast food, but since I started cooking for myself, I've been eating much more healthily.", "I eat healthy food. I like vegetables.", "Healthy food is healthy."], a: 0, x: "‘Used to’ + ‘since’ + present perfect continuous in one natural sentence." },
        { k: "m", p: "Which is a natural collocation?", o: ["a balanced diet", "a balanced food", "an equal diet"], a: 0, x: "Collocations: a balanced diet, a sedentary lifestyle, get enough sleep." },
        { k: "m", p: "‘Do you think people worry too much about their health these days?’ Which response is best?", o: ["In some ways, yes. Social media is full of conflicting advice, which can make people anxious, although I'd say greater awareness is mostly a good thing.", "Yes, too much.", "Health is when you are not sick."], a: 0, x: "A qualified opinion with a reason and a balancing point." },
        { k: "s", p: "What do you do to stay healthy?", prep: 10, time: 40, n: ["Mixed tenses naturally", "Used topic collocations", "Gave examples"] }
      ] },
    { t: "Public health debates", tip: "Abstract Part 3 questions: define, give examples, compare past and present, predict.",
      q: [
        { k: "m", p: "‘Should governments tax unhealthy food?’ Which opening is best for a nuanced answer?", o: ["It's a tricky one. On the one hand, taxes have reduced smoking in many countries, but on the other, food is a basic need, so the poorest would be hit hardest.", "Yes.", "Unhealthy food is unhealthy."], a: 0, x: "Comparison + consequence + counterpoint." },
        { k: "m", p: "Which phrase introduces a hypothetical consequence?", o: ["The knock-on effect would be that…", "Yesterday I…", "As I said before, as I said…"], a: 0, x: "‘Knock-on effect’ is natural, precise vocabulary for consequences." },
        { k: "m", p: "Which word has the stress on the THIRD syllable?", o: ["nuTRItion", "mediCAtion", "VEGetable"], a: 1, x: "me-di-CA-tion.", say: "medication" },
        { k: "s", cc: { title: "Describe a time you tried to change a habit.", b: ["what the habit was", "why you wanted to change it", "what you did", "and explain whether you succeeded"] }, p: "Speak about the cue card.", prep: 60, time: 120, n: ["Clear narrative", "Range of tenses", "Reflected on the result"] }
      ] }
  ]
});
