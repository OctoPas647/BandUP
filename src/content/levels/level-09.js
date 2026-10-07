/* Level 9: Mind and behaviour */
LEVELS.push({
  id: 9, name: "Mind and behaviour", theme: "Psychology and decisions",
  L: [
    { t: "Signing up for a study", ctx: "Listening Part 1 · research office", sp: { M: "m", W: "f" },
      tip: "Band 8.5 Part 1: multiple corrections, similar numbers, and details mentioned then cancelled.",
      sc: [
        { s: `M: Thanks for volunteering. The study looks at memory and sleep. You'll need to come in twice. The first session is on Monday the ninth.
W: The ninth? I thought it said the sixth on the poster.
M: It did, but we had to move it. So, the ninth, at four.
W: Fine. And the second?
M: Exactly a week later, same time. And participants receive thirty pounds in total, fifteen per session, but there's a ten-pound bonus if you complete a sleep diary in between.
W: I'll definitely do the diary.`,
          q: [
            { k: "g", p: "First session: Monday the ___", a: ["9th", "9", "ninth"], w: "n", x: "The poster said the 6th, but it was moved to the 9th." },
            { k: "g", p: "Second session: Monday the ___", a: ["16th", "16", "sixteenth"], w: "n", x: "‘Exactly a week later’: 9 + 7 = 16." },
            { k: "g", p: "Total payment she expects: £___", a: ["40", "forty"], w: "n", x: "£30 + £10 diary bonus = £40. A calculation trap." }
          ] },
        { s: `M: The night before each session, please avoid caffeine after midday, and alcohol completely. You can exercise, but nothing too intense in the evening.
W: What about medication?
M: Normal medication is fine. Just list it on the form. Oh, and the building: we're in the psychology department, but the sleep lab itself is in the basement of the Newton Building, across the road.`,
          q: [
            { k: "m", p: "What should participants avoid completely?", o: ["caffeine", "alcohol", "exercise"], a: 1, x: "Caffeine only after midday; alcohol completely." },
            { k: "g", p: "The sleep lab is in the basement of the ___ Building.", a: ["newton"], w: 1, x: "Not the psychology department; across the road in Newton." }
          ] }
      ] },
    { t: "Discussing an experiment", ctx: "Listening Part 3 · tutorial", sp: { T: "f", A: "m", B: "f" },
      tip: "With three speakers, track who says what. Questions often ask about one specific person's view.",
      sc: [
        { s: `T: So, what did you both make of the anchoring experiment?
A: I was surprised how strong the effect was. People who first saw a high number gave much higher price estimates, even though they knew the number was random.
B: I wasn't surprised by that, honestly. What struck me more was that experts were affected almost as much as students.
T: Yes, that's often overlooked. Expertise doesn't protect you as much as you'd think.`,
          q: [
            { k: "m", p: "What surprised the second student (B) most?", o: ["how strong the anchoring effect was", "that experts were also affected", "that the numbers were random"], a: 1, x: "B: ‘I wasn't surprised by that… What struck me more was that experts were affected.’" },
            { k: "m", p: "What does the tutor suggest about expertise?", o: ["It eliminates bias.", "It gives less protection than people assume.", "It was not tested."], a: 1, x: "‘Doesn't protect you as much as you'd think.’" }
          ] },
        { s: `T: How would you improve the study design?
A: I'd want a larger, more diverse sample. Everyone was from one university.
B: Agreed, but I'd also change the setting. People were estimating prices of things they'd never buy. I'd test real purchasing decisions.
T: Both good points. Though real purchases are much harder to control experimentally.
B: True, so maybe as a follow-up study rather than a replacement.`,
          q: [
            { k: "2", p: "Which TWO improvements are suggested?", o: ["a more varied group of participants", "paying participants more", "using real buying decisions", "repeating the study online", "removing the random number"], a: [0, 2], x: "Diverse sample (A) and real purchasing decisions (B)." },
            { k: "m", p: "What do they conclude about testing real purchases?", o: ["It should replace the original method.", "It could be a later, separate study.", "It is impossible."], a: 1, x: "‘As a follow-up study rather than a replacement.’" }
          ] }
      ] },
    { t: "The paradox of choice", ctx: "Listening Part 4 · lecture", sp: { A: "m" },
      tip: "Band 8.5 lectures contain evaluation: ‘however, later research…’. The final position is what's tested.",
      sc: [
        { s: `A: One of the most cited studies in consumer psychology involved jam. Shoppers who saw a display of twenty-four flavours were more likely to stop, but far less likely to buy, than those who saw only six. This was taken as evidence for what became known as choice overload: beyond a certain point, more options reduce satisfaction and even prevent decisions.`,
          q: [
            { k: "m", p: "In the jam study, the larger display", o: ["attracted fewer shoppers", "attracted more shoppers but led to fewer purchases", "led to more purchases"], a: 1, x: "‘More likely to stop, but far less likely to buy.’" },
            { k: "g", p: "The idea that too many options hinder decisions is called choice ___", a: ["overload"], w: 1, x: "‘What became known as choice overload.’" }
          ] },
        { s: `A: However, later attempts to replicate the effect produced mixed results. A large analysis combining dozens of studies found that, on average, the effect was close to zero. It now seems that choice overload occurs only under specific conditions, for example when options are hard to compare, or when people don't already have clear preferences. So rather than a general law, it's better described as a context-dependent phenomenon.`,
          q: [
            { k: "m", p: "What did the large analysis find?", o: ["The effect is strong and universal.", "On average, there was almost no effect.", "The original study was fraudulent."], a: 1, x: "‘On average, the effect was close to zero.’" },
            { k: "2", p: "Which TWO conditions make choice overload more likely?", o: ["options are difficult to compare", "products are expensive", "people lack clear preferences", "shoppers are in a hurry", "the display is colourful"], a: [0, 2], x: "‘When options are hard to compare, or when people don't already have clear preferences.’" }
          ] }
      ] }
  ],
  R: [
    { t: "The marshmallow test revisited", ty: "YES / NO / NOT GIVEN",
      tip: "Band 8.5 YNNG: the writer may agree with part of a claim. Read the whole sentence, including the ‘but’.",
      ps: `In the late 1960s and early 1970s, children at a university nursery were offered a choice: one treat immediately, or two if they could wait alone for several minutes. Follow-up studies years later reported that children who waited longer tended to achieve better exam results, a finding that was widely interpreted as showing that self-control in early childhood shapes later success.

This interpretation was always too neat. The original sample was small and drawn from a highly educated community. A larger replication in 2018, using a more diverse group of children, found that the link with later achievement was much weaker, and that it shrank further once family background was taken into account.

None of this means that self-control is unimportant. But it does suggest that a child's ability to wait may partly reflect circumstances: a child who has learned that adults keep their promises has good reason to wait, while one whose environment is unpredictable may sensibly take what is offered. Popular accounts that present the test as a measure of character do the research, and the children, a disservice.`,
      q: [
        { k: "y", p: "The original conclusions were overly simple.", a: "Y", x: "‘This interpretation was always too neat.’" },
        { k: "y", p: "The 2018 study found no connection at all between waiting and achievement.", a: "N", x: "The link was ‘much weaker’, not absent." },
        { k: "y", p: "Self-control has no real importance.", a: "N", x: "‘None of this means that self-control is unimportant.’" },
        { k: "y", p: "Choosing not to wait can be a rational decision.", a: "Y", x: "A child in an unpredictable environment ‘may sensibly take what is offered’." },
        { k: "y", p: "The 2018 researchers had previously worked on the original study.", a: "NG", x: "Nothing about who the 2018 researchers were." }
      ] },
    { t: "Why we put things off", ty: "Matching researchers + sentence endings",
      tip: "Sentence-ending tasks: the grammar of each ending must fit. That alone can rule out options.",
      ps: `Procrastination was long treated as a problem of time management. Recent research suggests it is better understood as a problem of emotion regulation.

According to Dr Tim Pychyl's work, people delay tasks not because they are lazy but to escape the unpleasant feelings a task provokes, such as boredom, frustration or self-doubt. The relief is immediate, which is why the habit is so hard to break.

Fuschia Sirois has linked chronic procrastination to higher stress and poorer health, partly because procrastinators also tend to delay health-related actions, such as visiting a doctor.

Other researchers have explored self-compassion. A study of university students found that those who forgave themselves for procrastinating before one exam procrastinated less before the next. Harsh self-criticism, it seems, makes the task even more unpleasant to face.`,
      q: [
        { k: "x", p: "Complete each sentence with the correct ending.", o: ["A  because it removes unpleasant feelings at once.", "B  because procrastinators also put off medical appointments.", "C  because they had too many tasks.", "D  because criticism makes the task feel worse."], i: [["Procrastination is difficult to stop", 0], ["Procrastination may harm health partly", 1], ["Self-forgiveness may reduce future delay", 3]], x: "C is never stated: the text rejects the time-management view." },
        { k: "m", p: "The main idea of the passage is that procrastination", o: ["is caused by laziness", "is mainly about managing emotions", "only affects students"], a: 1, x: "‘Better understood as a problem of emotion regulation.’" },
        { k: "t", p: "The students who were self-critical procrastinated less before the next exam.", a: "F", x: "Those who forgave themselves procrastinated less." }
      ] },
    { t: "The wisdom of crowds", ty: "Summary completion + multiple choice",
      tip: "When a summary uses words from the passage, the answer must fit grammatically AND keep the passage's meaning.",
      ps: `In 1906, the statistician Francis Galton attended a country fair where visitors guessed the weight of an ox. Galton expected the guesses of non-experts to be poor. Instead, he found that the median of nearly eight hundred guesses was within one percent of the true weight, closer than most individual experts.

The principle that averaging many independent estimates can produce remarkable accuracy is now called the wisdom of crowds. Crucially, it depends on independence. If people can see each other's guesses, they tend to converge, and individual errors no longer cancel out. Diversity of knowledge matters for the same reason: a crowd of people who all share the same blind spot will all be wrong in the same direction.

This explains why crowds sometimes fail spectacularly, as in financial bubbles, where investors copy each other, and why some organisations collect opinions privately before any group discussion begins.`,
      q: [
        { k: "x", p: "Complete the summary with words from the box.", o: ["A  independent", "B  experts", "C  cancel", "D  identical", "E  public", "F  accurate"], i: [["Galton found that the crowd's median guess was very ___.", 5], ["The effect requires estimates to be ___.", 0], ["When people copy each other, errors no longer ___ out.", 2]], x: "‘Within one percent’ = accurate; ‘depends on independence’; ‘no longer cancel out’." },
        { k: "m", p: "Why do some organisations collect opinions privately first?", o: ["to save time in meetings", "to keep estimates independent", "to identify the best expert"], a: 1, x: "Seeing others' views causes convergence, which destroys independence." },
        { k: "m", p: "What does the writer say about diversity?", o: ["It makes crowds slower.", "It matters because shared blind spots cause errors in the same direction.", "It is less important than independence."], a: 1, x: "‘A crowd… who all share the same blind spot will all be wrong in the same direction.’" }
      ] }
  ],
  W: [
    { t: "Complex data, clear writing", tip: "At Band 8.5, select ruthlessly. You can't mention everything, so mention what matters most.",
      q: [
        { k: "m", ch: { t: "bar", title: "Hours of sleep per night, by study habit", x: ["<5h", "5–6h", "6–7h", "7–8h", "8h+"], s: [{ n: "Students who study late", v: [18, 34, 30, 14, 4] }, { n: "Students who study early", v: [3, 12, 28, 39, 18] }] },
          p: "Which overview is best?", o: ["Students who studied late generally slept less, with most getting under seven hours, whereas early studiers were concentrated in the seven-to-eight-hour range.", "18% of late studiers slept under five hours.", "Studying early is healthier and students should do it."], a: 0, x: "Compares the distributions of both groups in one sentence." },
        { k: "m", p: "Which is the most accurate description of the late group?", o: ["Roughly two thirds slept between five and seven hours.", "Most slept eight hours or more.", "Exactly half slept less than five hours."], a: 0, x: "34 + 30 = 64%, roughly two thirds." },
        { k: "m", p: "Which sentence avoids an error of meaning?", o: ["The proportion of early studiers sleeping over eight hours was more than four times that of late studiers.", "Early studiers slept four times more.", "Late studiers slept 4% hours."], a: 0, x: "18% vs 4% (4.5 times), a comparison of proportions, not hours." },
        { k: "m", p: "Which word best describes the late group's distribution?", o: ["skewed towards shorter sleep", "evenly spread", "concentrated at the top"], a: 0, x: "Most of the data sits at the shorter-sleep end." },
        { k: "w", ch: { t: "bar", title: "Hours of sleep per night, by study habit", x: ["<5h", "5–6h", "6–7h", "7–8h", "8h+"], s: [{ n: "Students who study late", v: [18, 34, 30, 14, 4] }, { n: "Students who study early", v: [3, 12, 28, 39, 18] }] },
          p: "Write a full Task 1 response (150+ words) aimed at Band 8+.", min: 150, time: 1200, n: ["Sophisticated overview", "Ruthless selection", "Precise comparisons", "Error-free grammar"] }
      ] },
    { t: "‘To what extent’ essays", tip: "‘To what extent’ invites a partial position. ‘I largely agree, but…’ can be stronger than total agreement.",
      q: [
        { k: "m", p: "‘People's behaviour is shaped more by their environment than by their character. To what extent do you agree?’ Which thesis is strongest?", o: ["While character undoubtedly plays a role, I would argue that environment is the more powerful influence, since it shapes character itself.", "I agree.", "Environment and character are both things."], a: 0, x: "A clear, qualified position with a reason that anticipates the counter-argument." },
        { k: "m", p: "Which sentence shows the most sophisticated grammar?", o: ["Were people's circumstances to change, their behaviour would likely follow.", "If circumstances change, behaviour changes.", "Circumstances change behaviour change."], a: 0, x: "Inverted conditional, used accurately and naturally." },
        { k: "m", p: "Which is the best use of a less common word?", o: ["Upbringing exerts a profound influence on adult behaviour.", "Upbringing makes a big thing on adults.", "Upbringing is very influencing."], a: 0, x: "‘Exert an influence’ is precise, less common collocation." },
        { k: "m", p: "What's the main risk of memorised ‘advanced’ phrases?", o: ["They may not fit the context and can sound unnatural.", "Examiners don't read them.", "They are too short."], a: 0, x: "Lexical Resource rewards natural, appropriate use, not decoration." },
        { k: "w", p: "People's behaviour is shaped more by their environment than by their character. To what extent do you agree or disagree?\n\nWrite a full Band 8+ essay (250+ words).", min: 250, time: 2400, n: ["Nuanced position", "Fully extended ideas", "Range of complex structures", "Natural, precise lexis"] }
      ] }
  ],
  S: [
    { t: "Speculating about people", tip: "Band 8.5 Part 3: speculate about motives with modal verbs: ‘might have’, ‘could be’, ‘must be’.",
      q: [
        { k: "m", p: "Which sentence speculates about the past correctly?", o: ["They might have been influenced by their parents.", "They might be influenced by their parents yesterday.", "They must influenced by parents."], a: 0, x: "Modal + have + past participle for past speculation." },
        { k: "m", p: "‘Why do some people find it hard to make decisions?’ Which answer is closest to Band 9?", o: ["I suspect it's often a fear of regret rather than a lack of information. If you've been criticised for past choices, it's understandable that you'd hesitate.", "Because decisions are hard to make.", "Some people find it hard, some people find it easy."], a: 0, x: "Speculation + distinction + an empathetic explanation." },
        { k: "m", p: "Which pronunciation feature helps meaning most in long answers?", o: ["chunking and pausing at natural phrase boundaries", "saying every word with equal stress", "speaking as fast as possible"], a: 0, x: "Chunking and stress are core features in the Pronunciation criterion." },
        { k: "s", p: "Why do you think some people are more willing to take risks than others?", prep: 10, time: 60, n: ["Speculated with modals", "Made a distinction", "Fluent and coherent"] }
      ] },
    { t: "Abstract discussion", tip: "Band 9 means effortless coherence: answer, develop, illustrate, conclude, without sounding rehearsed.",
      q: [
        { k: "m", p: "‘Is it possible to change someone's personality?’ Which answer develops most fully?", o: ["To an extent. Core temperament seems fairly stable, but habits and attitudes can change enormously. I've seen shy friends become confident simply through a job that demanded it, so environment clearly has some influence.", "Yes, it's possible.", "Personality is your personality."], a: 0, x: "Position → distinction → example → link back." },
        { k: "m", p: "Which phrase signals a concluding thought in speech?", o: ["So, all things considered, …", "Firstly, …", "For example, …"], a: 0, x: "Spoken conclusions wrap up an extended answer." },
        { k: "m", p: "Which idiom is used accurately?", o: ["Old habits die hard, so change usually takes time.", "Old habits die easy.", "Old habit dies hard in the weather."], a: 0, x: "Idiomatic language must be accurate to count positively." },
        { k: "s", cc: { title: "Describe a decision you made that changed your life.", b: ["what the decision was", "when you made it", "how you made it", "and explain how it changed your life"] }, p: "Speak about the cue card.", prep: 60, time: 120, n: ["Effortless flow", "Reflective vocabulary", "Complex structures", "Clear ending"] }
      ] }
  ]
});
