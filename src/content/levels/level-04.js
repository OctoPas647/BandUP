/* Level 4: Work and money */
LEVELS.push({
  id: 4, name: "Work and money", theme: "Jobs and the economy",
  L: [
    { t: "Registering with a job agency", ctx: "Listening Part 1 · interview", sp: { W: "f", M: "m" },
      tip: "Salaries, dates and hours come in clusters. Write the number that answers the question, not the first one you hear.",
      sc: [
        { s: `W: So, Mr Okafor, what kind of work are you looking for?
M: Something in hospitality, ideally hotel reception. I did two years in a restaurant, but I'd like a change.
W: And are you looking for full-time work?
M: Part-time at first, around twenty hours a week. I'm finishing a course until June.
W: OK. Pay for reception work usually starts at eleven pounds fifty an hour, though some hotels pay up to fourteen for evening shifts.
M: Evenings would suit me, actually.`,
          q: [
            { k: "g", p: "Preferred job: hotel ___", a: ["reception", "receptionist"], w: 1, x: "‘Ideally hotel reception.’ The restaurant was his past job." },
            { k: "g", p: "Hours per week: ___", a: ["20", "twenty"], w: "n", x: "‘Around twenty hours a week.’" },
            { k: "g", p: "Maximum hourly pay for evening shifts: £___", a: ["14", "fourteen", "14.00"], w: "n", x: "£11.50 is the starting rate. Evenings pay up to £14." }
          ] },
        { s: `W: Do you have any references?
M: Yes, my manager at the restaurant, and one of my tutors.
W: Good. We'll also need a copy of your passport, and you'll have to complete a short online test in customer service before we can put you forward.
M: Is it difficult?
W: Not at all. Most people finish it in about fifteen minutes.`,
          q: [
            { k: "2", p: "Which TWO things must Mr Okafor provide or complete?", o: ["a copy of his passport", "a driving licence", "an online test", "a medical certificate", "a bank statement"], a: [0, 2], x: "Passport copy and the online customer-service test." }
          ] }
      ] },
    { t: "Preparing for an interview", ctx: "Listening Part 2 · radio advice", sp: { A: "m" },
      tip: "‘Choose TWO’ questions: the speaker may mention all five options, but rejects three of them.",
      sc: [
        { s: `A: Many listeners have asked how to prepare for a job interview. People often think the most important thing is the right clothes. Yes, look tidy, but interviewers rarely remember what you wore. Far more important is research. Read the company's website, and find out what they've been doing recently. And practise answering questions out loud. Thinking about your answers isn't enough; you need to hear yourself say them.`,
          q: [
            { k: "2", p: "Which TWO pieces of advice does the speaker give?", o: ["buy new clothes", "research the company", "arrive very early", "practise answers out loud", "bring a printed CV"], a: [1, 3], x: "Clothes are played down: ‘interviewers rarely remember what you wore’." }
          ] },
        { s: `A: What about questions you can't answer? Don't panic. It's perfectly acceptable to pause and say you need a moment. What interviewers dislike is when candidates invent an answer. And at the end, always ask a question of your own. It shows genuine interest. Don't ask about salary or holidays in a first interview, though. Save that for when you get an offer.`,
          q: [
            { k: "m", p: "What do interviewers dislike, according to the speaker?", o: ["long pauses", "candidates who make up answers", "questions about the company"], a: 1, x: "‘Invent an answer’ = make up answers. Pausing is acceptable." },
            { k: "m", p: "When should you ask about salary?", o: ["at the start of the interview", "at the end of the first interview", "after you receive an offer"], a: 2, x: "‘Save that for when you get an offer.’" }
          ] }
      ] },
    { t: "A short history of money", ctx: "Listening Part 4 · lecture", sp: { A: "f" },
      tip: "Part 4 is one long talk with note completion. The notes follow the lecture's structure, so use headings to keep your place.",
      sc: [
        { s: `A: Before coins, many societies used a system of exchange based on goods. The problem was what economists call the double coincidence of wants: if I have fish and want shoes, I need to find a shoemaker who wants fish. Some societies solved this by using shells as money. Cowrie shells, for example, were used across parts of Africa and Asia for centuries, because they were durable and hard to fake.`,
          q: [
            { k: "g", p: "Problem with exchanging goods: the double coincidence of ___", a: ["wants"], w: 1, x: "‘The double coincidence of wants.’" },
            { k: "g", p: "Cowrie shells were durable and difficult to ___", a: ["fake", "copy"], w: 1, x: "‘Durable and hard to fake.’" }
          ] },
        { s: `A: The first coins appeared in Lydia, in what is now Turkey, around six hundred BC. They were made from electrum, a natural mixture of gold and silver. Paper money came later, in China, partly because carrying large numbers of metal coins was so impractical for merchants. Today, of course, most money exists only as numbers in computers, and some economists predict that physical cash will largely disappear within a generation.`,
          q: [
            { k: "g", p: "First coins: made of ___, a mix of gold and silver", a: ["electrum"], w: 1, x: "‘Made from electrum.’" },
            { k: "m", p: "Why was paper money introduced in China?", o: ["Gold had run out.", "Coins were heavy to carry in large numbers.", "The government wanted to control prices."], a: 1, x: "‘Carrying large numbers of metal coins was so impractical.’" }
          ] }
      ] }
  ],
  R: [
    { t: "The four-day week", ty: "YES / NO / NOT GIVEN",
      tip: "YES/NO/NOT GIVEN asks about the writer's opinion, not just facts. Look for opinion words: ‘clearly’, ‘it seems’, ‘unfortunately’.",
      ps: `Trials of a four-day working week, with no reduction in pay, have produced encouraging results. In several countries, companies taking part reported that productivity stayed the same or even rose, while staff took fewer days off sick. It is hardly surprising that employees were enthusiastic: few people would turn down an extra day off.

Yet it would be a mistake to treat these trials as conclusive. Most participating companies volunteered, which suggests they already believed the idea would work. Firms in sectors such as healthcare or retail, where someone must be present at all times, are far harder to reorganise.

The four-day week, then, is not a universal solution. But for office-based businesses willing to rethink how meetings and tasks are organised, it deserves serious consideration.`,
      q: [
        { k: "y", p: "Employees' positive reaction to the trials was predictable.", a: "Y", x: "‘It is hardly surprising that employees were enthusiastic.’" },
        { k: "y", p: "The trials prove that a four-day week works for all companies.", a: "N", x: "‘It would be a mistake to treat these trials as conclusive.’" },
        { k: "y", p: "The companies in the trials were chosen at random.", a: "N", x: "‘Most participating companies volunteered.’ Volunteering is the opposite of random selection." },
        { k: "y", p: "Healthcare workers would prefer a four-day week to higher pay.", a: "NG", x: "The writer says healthcare is hard to reorganise but says nothing about workers' preferences." },
        { k: "y", p: "Office-based businesses should consider the idea.", a: "Y", x: "‘It deserves serious consideration.’" }
      ] },
    { t: "Coffee: a global commodity", ty: "Matching features",
      tip: "Matching features: each option can be used more than once, or not at all. Scan for the names, then read around them.",
      ps: `Coffee is one of the world's most traded agricultural products. Brazil is by far the largest producer, responsible for around a third of global supply, and its harvests have a major influence on world prices. A frost there can raise the price of coffee everywhere.

Vietnam rose rapidly to become the second-largest producer during the 1990s, mainly growing robusta beans, which are cheaper and more bitter than arabica and often used in instant coffee.

Ethiopia, where the coffee plant is believed to have originated, has a long tradition of coffee ceremonies. Much of its coffee is grown by smallholders, and wild coffee forests still exist there.

Colombia has built a strong international brand, promoting its beans through a fictional farmer character in advertising campaigns.`,
      q: [
        { k: "x", p: "Which country is each statement about?", o: ["A  Brazil", "B  Vietnam", "C  Ethiopia", "D  Colombia"], i: [["Its weather can affect prices worldwide.", 0], ["It used a fictional character to market its coffee.", 3], ["It mostly produces a cheaper type of bean.", 1], ["Coffee may have first grown there.", 2], ["Much of its coffee comes from small farms.", 2]], x: "Frost raises prices (Brazil); fictional farmer (Colombia); robusta (Vietnam); origin and smallholders (Ethiopia, used twice)." },
        { k: "t", p: "Robusta beans are less bitter than arabica.", a: "F", x: "Robusta beans are ‘cheaper and more bitter than arabica’." }
      ] },
    { t: "Small loans, big ideas", ty: "Multiple choice",
      tip: "In multiple choice, two options are often partly true. The correct one matches the whole meaning.",
      ps: `Microfinance, the practice of giving very small loans to people without access to banks, became famous in the 1970s through the work of economist Muhammad Yunus in Bangladesh. His Grameen Bank lent mainly to women, who were found to repay loans more reliably and to spend profits on their families.

For years, microfinance was celebrated as a powerful tool against poverty. Later studies were more cautious. Several large randomised trials found that small loans helped some borrowers expand businesses, but had little effect on average household income. Critics also highlighted cases where lenders charged extremely high interest rates.

Today, most researchers see microfinance as useful but limited: it can give people more financial flexibility, but it is not, by itself, a route out of poverty.`,
      q: [
        { k: "m", p: "Why did the Grameen Bank lend mainly to women?", o: ["Women had fewer other options.", "Women repaid more reliably and invested in their families.", "The government required it."], a: 1, x: "‘Repay loans more reliably and… spend profits on their families.’" },
        { k: "m", p: "What did the randomised trials find?", o: ["Microfinance ended poverty for most borrowers.", "Loans had little effect on average income.", "Women did not repay their loans."], a: 1, x: "‘Had little effect on average household income.’" },
        { k: "m", p: "What is the writer's overall view of microfinance?", o: ["It is harmful and should stop.", "It has some benefits but is not a complete solution.", "It is the best way to fight poverty."], a: 1, x: "‘Useful but limited.’" },
        { k: "t", p: "Some lenders charged very high interest rates.", a: "T", x: "‘Lenders charged extremely high interest rates.’" }
      ] }
  ],
  W: [
    { t: "Tables with two years", tip: "With tables, select. Pick the biggest changes and the extremes, then group similar items.",
      q: [
        { k: "m", ch: { t: "table", title: "Average annual salary (thousand €)", head: ["Sector", "2015", "2025"], rows: [["Technology", "48", "72"], ["Education", "34", "39"], ["Healthcare", "41", "55"], ["Retail", "24", "27"]] },
          p: "Which sentence best groups the data?", o: ["Salaries in technology and healthcare rose considerably, whereas those in education and retail increased only slightly.", "Technology was 48 and then 72, education was 34 and then 39.", "Retail workers should be paid more."], a: 0, x: "It groups by similar behaviour instead of listing rows." },
        { k: "m", p: "Technology salaries went from 48 to 72. This is an increase of", o: ["a half", "a third", "a quarter"], a: 0, x: "24 ÷ 48 = 0.5, so a 50% increase." },
        { k: "m", p: "Which is correct?", o: ["The salary of retail workers was the lowest in both years.", "The retail workers salary was the most low in both year.", "Retail was lowest salary both years."], a: 0, x: "Superlative ‘the lowest’ + plural ‘years’." },
        { k: "g", p: "Complete: ‘Healthcare salaries rose ___ 41,000 to 55,000 euros.’", a: ["from"], w: 1, x: "‘Rose from X to Y.’ ‘By’ would give the size of the change." },
        { k: "w", ch: { t: "table", title: "Average annual salary (thousand €)", head: ["Sector", "2015", "2025"], rows: [["Technology", "48", "72"], ["Education", "34", "39"], ["Healthcare", "41", "55"], ["Retail", "24", "27"]] },
          p: "Write an overview and one body paragraph for this table.", min: 80, time: 720, n: ["Overview with no figures", "Groups similar sectors", "Accurate figures in the body"] }
      ] },
    { t: "Building an argument", tip: "A strong body paragraph: Point, Explanation, Example, Link (PEEL).",
      q: [
        { k: "o", p: "Order the sentences into a PEEL paragraph.", a: ["Working from home can significantly improve productivity.", "Without a daily commute, employees have more time and energy for their tasks.", "For instance, one software firm reported a 13% rise in output after allowing remote work.", "Therefore, employers who allow remote work may benefit as much as their staff."], sent: true, x: "Point → Explanation → Example → Link." },
        { k: "m", p: "Which example is most convincing in an essay?", o: ["A large survey found that remote workers took fewer sick days.", "My cousin likes working at home.", "Everyone knows remote work is better."], a: 0, x: "General, evidence-based examples are stronger than anecdotes or claims everyone ‘knows’." },
        { k: "m", p: "Which word makes this claim more academic: ‘Remote work ___ reduce team spirit.’", o: ["may", "will definitely", "always"], a: 0, x: "Hedging (‘may’, ‘can’, ‘tends to’) avoids overgeneralising, which examiners penalise." },
        { k: "m", p: "Which conclusion opening is best?", o: ["In conclusion, although remote work has drawbacks, I believe its benefits are greater.", "In conclusion, remote work is a topic.", "Finally, a new point is that offices are expensive."], a: 0, x: "Sum up your position. Never add new ideas in the conclusion." },
        { k: "w", p: "Remote working is becoming more common. Do the advantages outweigh the disadvantages?\n\nWrite one full PEEL body paragraph.", min: 70, time: 720, n: ["Point is clear", "Explanation develops it", "Example is relevant", "Links back to the question"] }
      ] }
  ],
  S: [
    { t: "Talking about work", tip: "Paraphrase the examiner's words. If they say ‘job’, you can say ‘line of work’ or ‘career’.",
      q: [
        { k: "m", p: "Examiner: ‘What job would you like to do in the future?’ Which answer paraphrases best?", o: ["I'd love to go into engineering. That's the career I've had in mind since I was about twelve.", "The job I would like to do in the future is engineering.", "Job. Engineering. Future."], a: 0, x: "‘Go into’, ‘career’, ‘had in mind’ avoid repeating the question's words." },
        { k: "m", p: "Which idiom means ‘work very hard’?", o: ["burn the midnight oil", "hit the sack", "on cloud nine"], a: 0, x: "Burn the midnight oil = work late into the night. Use idioms only when they fit naturally." },
        { k: "m", p: "Which sounds most natural?", o: ["I'm not really a morning person, so I tend to do my best work in the afternoon.", "I am not a person of the morning.", "Morning is bad for my working."], a: 0, x: "Natural collocations: ‘a morning person’, ‘tend to’, ‘do my best work’." },
        { k: "s", p: "What do you think makes a job satisfying?", prep: 10, time: 40, n: ["Gave two or more factors", "Used a paraphrase", "Sounded natural"] }
      ] },
    { t: "Money and happiness", tip: "In Part 3, move from personal to general: ‘In my country…’, ‘For most people…’, ‘Society as a whole…’",
      q: [
        { k: "m", p: "‘Does money make people happy?’ Which answer has the best structure?", o: ["Up to a point. Having enough to cover basic needs clearly reduces stress, but beyond that, relationships and health seem to matter more.", "Yes, I like money.", "No. Money is paper."], a: 0, x: "A qualified answer with a distinction is a Band 7+ move." },
        { k: "m", p: "Which phrase helps you speculate?", o: ["I'd imagine that…", "It is a fact that…", "I know for sure that…"], a: 0, x: "Speculation language: ‘I'd imagine’, ‘it's likely that’, ‘perhaps’." },
        { k: "m", p: "Which uses a conditional correctly?", o: ["If people earned more, they would probably spend more.", "If people earn more, they would probably spend more.", "If people would earn more, they spend more."], a: 0, x: "Second conditional: if + past, would + verb." },
        { k: "s", cc: { title: "Describe a job you would like to have in the future.", b: ["what the job is", "what skills it needs", "how you could get it", "and explain why you would like it"] }, p: "Speak about the cue card.", prep: 60, time: 105, n: ["Covered every bullet", "Used future forms", "Spoke for most of the time"] }
      ] }
  ]
});
