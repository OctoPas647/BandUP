/* Level 3: Campus life */
LEVELS.push({
  id: 3, name: "Campus life", theme: "Education and study",
  L: [
    { t: "Enrolling on an evening course", ctx: "Listening Part 1 · college office", sp: { W: "f", M: "m" },
      tip: "Listen for the exact figure. Speakers often mention several prices or times before the right one.",
      sc: [
        { s: `W: Westbrook College, enrolment office.
M: Hi. I'm interested in the evening photography course.
W: We have two. The beginners' course runs on Tuesdays, and the advanced one is on Thursdays.
M: I've done a bit before, but I think I'll start with the beginners' one.
W: Sensible. It costs a hundred and twenty pounds for the term, but if you're over sixty or a full-time student, it's ninety.
M: I'm a full-time student, yes.`,
          q: [
            { k: "m", p: "Which day will the man attend?", o: ["Tuesday", "Thursday", "Saturday"], a: 0, x: "He chooses the beginners' course, which runs on Tuesdays." },
            { k: "g", p: "Fee he will pay: £___", a: ["90", "ninety"], w: "n", x: "£120 is the full price. As a full-time student he pays £90." }
          ] },
        { s: `W: Classes are in room B twelve, that's in the Hartley Building.
M: Hartley, H, A, R, T, L, E, Y?
W: That's it. You'll need your own camera, but it doesn't have to be expensive. A phone camera is fine for the first few weeks.
M: Great. Is there anything else?
W: Just bring a notebook. And the course finishes with an exhibition of students' work in December.`,
          q: [
            { k: "g", p: "Room: B12, ___ Building", a: ["hartley"], w: 1, x: "Spelled H-A-R-T-L-E-Y." },
            { k: "g", p: "Equipment: a camera and a ___", a: ["notebook"], w: 1, x: "‘Just bring a notebook.’" },
            { k: "g", p: "Course ends with an ___ in December", a: ["exhibition"], w: 1, x: "‘An exhibition of students' work in December.’" }
          ] }
      ] },
    { t: "Student union welcome talk", ctx: "Listening Part 2 · matching", sp: { A: "f" },
      tip: "In matching tasks, the options are in a box but the talk goes through the places in order.",
      sc: [
        { s: `A: Welcome to your first week. Let me tell you where to find things. The careers service has moved this year. It's now in the library, on the second floor. If you need help with essays, the writing centre runs free sessions in the student union building, every afternoon. The sports hall is where you'll find the medical centre, by the main entrance. And for anything to do with accommodation, go to the main administration block, not the student union.`,
          q: [
            { k: "x", p: "Where can students find each service?", o: ["A  the library", "B  the student union building", "C  the sports hall", "D  the administration block"], i: [["careers service", 0], ["writing centre", 1], ["medical centre", 2], ["accommodation office", 3]], x: "Note the trap: accommodation is ‘not the student union’." }
          ] },
        { s: `A: One last thing. The union runs over a hundred clubs and societies. You can join as many as you like, and most are free. Some, like the sailing club, do charge a fee, because of equipment costs. The clubs fair is on Friday in the main hall, and it's the easiest way to sign up.`,
          q: [
            { k: "m", p: "Why does the sailing club charge a fee?", o: ["It is very popular.", "Equipment is expensive.", "It travels abroad."], a: 1, x: "‘Because of equipment costs.’" },
            { k: "g", p: "The clubs fair takes place on ___", a: ["friday"], w: 1, x: "‘The clubs fair is on Friday.’" }
          ] }
      ] },
    { t: "Feedback on an essay", ctx: "Listening Part 3 · tutorial", sp: { T: "m", S: "f" },
      tip: "When the tutor says ‘but’ or ‘however’, the criticism usually follows. That's often where the answer is.",
      sc: [
        { s: `T: I've read your essay on study habits, Maya. Your research was thorough. You used a really good range of sources.
S: Thanks. I spent a lot of time in the library.
T: It shows. However, the structure needs work. Your main argument doesn't appear until page four. A reader should know your position from the introduction.
S: Right. I thought it would be more interesting to build up to it.
T: That works in a story, but not really in an academic essay.`,
          q: [
            { k: "m", p: "What does the tutor praise?", o: ["the essay's structure", "the range of sources", "the conclusion"], a: 1, x: "‘You used a really good range of sources.’" },
            { k: "m", p: "What is the main problem with the essay?", o: ["Its argument appears too late.", "It is too short.", "It has no references."], a: 0, x: "‘Your main argument doesn't appear until page four.’" }
          ] },
        { s: `S: Should I also cut the section on music while studying? It's quite long.
T: No, keep that. It's one of the most original parts. But the section on diet doesn't really connect to your question. I'd remove it.
S: OK. And the deadline for the new draft?
T: Let's say the end of next week. Friday the twentieth.`,
          q: [
            { k: "m", p: "What does the tutor tell Maya to remove?", o: ["the music section", "the diet section", "the introduction"], a: 1, x: "She suggests cutting music, but the tutor says keep it and remove diet instead." },
            { k: "g", p: "New draft due: Friday the ___", a: ["20th", "20", "twentieth"], w: "n", x: "‘Friday the twentieth.’" }
          ] }
      ] }
  ],
  R: [
    { t: "Learning languages as an adult", ty: "TRUE / FALSE / NOT GIVEN",
      tip: "Don't use your own knowledge. Answer only from what the passage says.",
      ps: `It is widely believed that children learn languages more easily than adults. Research supports part of this belief: people who start learning a language before puberty are more likely to develop a native-like accent. However, the picture is more complicated than it first appears.

In controlled studies, adults often make faster progress than children in the early stages of learning. They can use their knowledge of grammar, and they are better at using strategies such as making notes and comparing the new language with their own. Children's advantage seems to appear only over many years of exposure, usually in an environment where the language is spoken all around them.

Motivation also plays a major role. Adults who need a language for work or study frequently reach a high level, even if they began in their thirties or forties. The idea that it is ‘too late’ to learn may discourage people more than any real biological limit.`,
      q: [
        { k: "t", p: "Starting before puberty makes a native-like accent more likely.", a: "T", x: "‘More likely to develop a native-like accent.’" },
        { k: "t", p: "Children learn faster than adults in the first months of study.", a: "F", x: "‘Adults often make faster progress… in the early stages.’" },
        { k: "t", p: "Adults are better at using learning strategies.", a: "T", x: "‘Better at using strategies such as making notes…’" },
        { k: "t", p: "Most adult learners give up within a year.", a: "NG", x: "Drop-out rates are never mentioned." },
        { k: "m", p: "What does the writer suggest about the idea that it is ‘too late’ to learn?", o: ["It is supported by biology.", "It may stop people trying.", "It applies only to grammar."], a: 1, x: "‘May discourage people more than any real biological limit.’" }
      ] },
    { t: "The Pomodoro technique", ty: "Matching headings",
      tip: "Read the paragraph first, then choose the heading. Reading the headings first can lead you to word-match.",
      ps: `A  The Pomodoro technique was developed in the late 1980s by Francesco Cirillo, then a university student who struggled to concentrate. He used a kitchen timer shaped like a tomato (pomodoro in Italian) to divide his work into short periods.

B  The method is simple. You choose one task, set a timer for 25 minutes and work without interruption until it rings. Then you take a five-minute break. After four of these cycles, you take a longer break of 15 to 30 minutes.

C  Supporters say the technique works because it makes large tasks feel manageable. Knowing that a break is coming also makes it easier to resist distractions such as phones.

D  Not everyone finds it helpful. Some people say that 25 minutes is too short for deep, creative work, and that the timer breaks their concentration just as they are making progress.`,
      q: [
        { k: "x", p: "Choose the correct heading for each paragraph.", o: ["i  Why the method succeeds", "ii  A student's invention", "iii  Step-by-step instructions", "iv  A popular app", "v  A possible weakness"], i: [["Paragraph A", 1], ["Paragraph B", 2], ["Paragraph C", 0], ["Paragraph D", 4]], x: "iv is never mentioned: the tomato timer is a kitchen timer, not an app." },
        { k: "g", p: "Each work period lasts ___ minutes.", a: ["25", "twenty-five", "twenty five"], w: "n", x: "‘Set a timer for 25 minutes.’" },
        { k: "t", p: "The long break comes after every four work periods.", a: "T", x: "‘After four of these cycles, you take a longer break.’" }
      ] },
    { t: "Libraries in the digital age", ty: "Sentence completion",
      tip: "The sentence is a paraphrase. Find the matching idea, then copy the missing word exactly.",
      ps: `When the internet made information freely available, many people predicted that libraries would close. In fact, visitor numbers at many university libraries have stayed stable or even increased. What has changed is the reason people go there.

Fewer students now visit libraries to borrow printed books. Instead, they come for quiet study spaces, group rooms, and reliable internet access. Many libraries have responded by removing some shelves and adding more desks and power sockets.

Librarians' work has changed too. Much of their time is now spent teaching students how to evaluate sources, since finding information is easy but judging its quality is not.`,
      q: [
        { k: "g", p: "Some predicted that libraries would ___ because of the internet.", a: ["close"], w: 1, x: "‘Many people predicted that libraries would close.’" },
        { k: "g", p: "Students now visit libraries mainly to use quiet ___.", a: ["study spaces"], w: 2, x: "‘Quiet study spaces.’" },
        { k: "g", p: "Libraries have replaced some shelves with desks and power ___.", a: ["sockets"], w: 1, x: "‘More desks and power sockets.’" },
        { k: "m", p: "Librarians now spend much of their time", o: ["buying printed books.", "teaching students to judge sources.", "repairing computers."], a: 1, x: "‘Teaching students how to evaluate sources.’" }
      ] }
  ],
  W: [
    { t: "Pie charts and proportions", tip: "Proportions have their own vocabulary: ‘a quarter’, ‘just over half’, ‘the vast majority’.",
      q: [
        { k: "m", ch: { t: "pie", title: "How students spend a typical week (%)", s: [{ n: "Study", v: 25 }, { n: "Sleep", v: 33 }, { n: "Work", v: 12 }, { n: "Leisure", v: 20 }, { n: "Travel", v: 10 }] },
          p: "Which phrase describes 25%?", o: ["a quarter", "a third", "the majority"], a: 0, x: "25% = one quarter. 33% ≈ a third." },
        { k: "m", p: "Which describes 33%?", o: ["roughly one third", "just under half", "the vast majority"], a: 0, x: "33% is roughly one third." },
        { k: "m", p: "Which sentence is the best overview?", o: ["Sleep took up the largest share of students' time, followed by study, while travel accounted for the smallest proportion.", "Students sleep 33% of the time.", "Students should study more and travel less."], a: 0, x: "It ranks the main categories without listing everything." },
        { k: "g", p: "Complete: ‘Work and travel ___ for 12% and 10% respectively.’", a: ["accounted", "account"], w: 1, x: "‘Account for’ is the key verb for proportions." },
        { k: "w", ch: { t: "pie", title: "How students spend a typical week (%)", s: [{ n: "Study", v: 25 }, { n: "Sleep", v: 33 }, { n: "Work", v: 12 }, { n: "Leisure", v: 20 }, { n: "Travel", v: 10 }] },
          p: "Write an introduction (paraphrase) and an overview for this pie chart.", min: 45, time: 480, n: ["Paraphrased the title", "Overview names largest and smallest", "Used proportion language"] }
      ] },
    { t: "Discussion essays", tip: "‘Discuss both views and give your opinion’ has three jobs. Miss one and your Task Response score drops.",
      q: [
        { k: "m", p: "‘Some believe university education should be free. Others think students should pay. Discuss both views and give your opinion.’ How many things must you do?", o: ["one: give your opinion", "two: discuss both views", "three: discuss both views and give your opinion"], a: 2, x: "View 1, view 2, and your own position." },
        { k: "m", p: "Where should your opinion appear?", o: ["only in the conclusion", "in the introduction and the conclusion", "nowhere; it's a discussion"], a: 1, x: "State it early and confirm it at the end, so your position is clear throughout." },
        { k: "m", p: "Which sentence presents someone else's view?", o: ["Supporters of free tuition argue that it gives everyone an equal chance.", "I strongly believe tuition should be free.", "Tuition is free."], a: 0, x: "‘Supporters argue that…’ reports a view without making it yours." },
        { k: "o", p: "Order the words.", a: ["While", "both", "views", "have", "merit,", "I", "believe", "that", "students", "should", "contribute", "something."], x: "A balanced thesis statement." },
        { k: "w", p: "Some believe university education should be free. Others think students should pay. Discuss both views and give your opinion.\n\nWrite the introduction, including a thesis statement.", min: 40, time: 480, n: ["Paraphrases both views", "States your opinion", "Previews the essay"] }
      ] }
  ],
  S: [
    { t: "Talking about your studies", tip: "Use topic vocabulary: ‘subjects’, ‘assignments’, ‘deadline’, ‘revise’, ‘tuition’.",
      q: [
        { k: "m", p: "Which sentence uses ‘revise’ correctly (British English)?", o: ["I need to revise for my maths exam.", "I need to revise my teacher.", "I revised to school by bus."], a: 0, x: "In British English, revise = study again before an exam." },
        { k: "m", p: "‘What subject do you enjoy most?’ Which answer shows the best range?", o: ["I'd have to say physics. What I love about it is that it explains how everyday things actually work.", "Physics. It's good.", "I enjoy most physics subject."], a: 0, x: "‘I'd have to say’ + a cleft sentence (‘What I love is…’) shows range." },
        { k: "m", p: "Which word has stress on the FIRST syllable?", o: ["asSIGNment", "DEADline", "uniVERsity"], a: 1, x: "DEAD-line.", say: "deadline" },
        { k: "s", p: "Do you prefer studying alone or with other people? Why?", prep: 10, time: 30, n: ["Clear preference", "A reason", "An example or comparison"] }
      ] },
    { t: "Opinions on education", tip: "Part 3 wants opinions plus reasons. Use ‘I'd say…’, ‘It depends on…’, ‘On the one hand…’",
      q: [
        { k: "m", p: "‘Should schools teach practical skills like cooking?’ Which answer is strongest?", o: ["I'd say yes, to some extent. Skills like cooking help young people become independent, although they shouldn't replace core subjects.", "Yes, cooking.", "I cooked yesterday."], a: 0, x: "Opinion + reason + a limit. That's the Part 3 shape." },
        { k: "m", p: "Which phrase is best for an answer that depends on the situation?", o: ["It depends on the age of the students.", "I don't care.", "Everybody knows that."], a: 0, x: "‘It depends on…’ lets you discuss different cases." },
        { k: "m", p: "Which phrase introduces a contrasting point?", o: ["Having said that,", "What's more,", "For instance,"], a: 0, x: "‘Having said that’ = however, in spoken English." },
        { k: "s", cc: { title: "Describe a teacher who influenced you.", b: ["who the teacher was", "what subject they taught", "what they were like", "and explain how they influenced you"] }, p: "Speak about the cue card.", prep: 60, time: 90, n: ["Covered every bullet", "Gave specific examples", "Explained the influence"] }
      ] }
  ]
});
