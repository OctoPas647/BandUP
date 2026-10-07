/* Level 5: Nature and the environment */
LEVELS.push({
  id: 5, name: "Nature and the environment", theme: "Ecology and climate",
  L: [
    { t: "Volunteering at a nature reserve", ctx: "Listening Part 1 · enquiry", sp: { M: "m", W: "f" },
      tip: "Some answers are words that speakers spell. Others you must spell yourself, so learn common topic words.",
      sc: [
        { s: `M: Hello, Fenwick Marshes Nature Reserve, volunteer office.
W: Hi. I saw your advert for volunteers. What kind of jobs are there?
M: Quite a range. Most people start with path maintenance, cutting back plants so visitors can walk safely. We also need people for bird surveys, but you'd need some training first.
W: I'd be happy to start with paths.
M: Great. Sessions run on Tuesday and Saturday mornings. Saturday is usually busier.
W: I'll do Tuesdays, then. Do I need to bring anything?
M: Just waterproof boots. We provide gloves and tools.`,
          q: [
            { k: "g", p: "First job: path ___", a: ["maintenance"], w: 1, x: "‘Path maintenance.’ Bird surveys need training first." },
            { k: "g", p: "Day chosen: ___", a: ["tuesday", "tuesdays"], w: 1, x: "‘I'll do Tuesdays.’" },
            { k: "g", p: "Bring: waterproof ___", a: ["boots"], w: 1, x: "Gloves and tools are provided." }
          ] },
        { s: `M: There's an induction session before you start. It covers safety and the history of the site. It's on the third of May, at the visitor centre.
W: Sorry, did you say the visitor centre or the field station?
M: Good question. It used to be the field station, but that's being repaired, so it's the visitor centre this time. Oh, and we ask for a small deposit of ten pounds, which you get back after five sessions.`,
          q: [
            { k: "g", p: "Induction location: the ___", a: ["visitor centre", "visitor center"], w: 2, x: "The field station is being repaired." },
            { k: "g", p: "Deposit returned after ___ sessions", a: ["5", "five"], w: "n", x: "‘You get back after five sessions.’ £10 is the deposit amount." }
          ] }
      ] },
    { t: "A community garden project", ctx: "Listening Part 2 · plan labelling", sp: { A: "f" },
      tip: "For maps and plans, find your starting point first, then follow directions: ‘to your right’, ‘beyond’, ‘in the corner’.",
      sc: [
        { s: `A: Let me explain the layout. You come in through the main gate on the south side. Straight ahead is the long path that runs through the middle of the garden. The first area on your left is the herb garden, which is closest to the gate so that people can pick herbs quickly. Opposite that, on the right of the path, are the raised beds for vegetables. At the far end of the path, in the north-east corner, is the composting area, as far from the houses as possible. And the tool shed is in the north-west corner, next to the water tank.`,
          q: [
            { k: "x", p: "Label the plan. Where is each feature?", o: ["A  left of the path, near the gate", "B  right of the path, near the gate", "C  north-east corner", "D  north-west corner"], i: [["herb garden", 0], ["vegetable beds", 1], ["composting area", 2], ["tool shed", 3]], x: "Follow the route: gate → left herb garden, right raised beds → far end corners." }
          ] },
        { s: `A: Why put the compost so far away? Well, there were complaints about the smell from the neighbours last summer. And one other change: we've stopped using a hose. Everything is now watered from the tank, which collects rainwater from the shed roof. It's saved a lot of money.`,
          q: [
            { k: "m", p: "Why is the composting area in the corner?", o: ["It needs the most sun.", "Neighbours complained about the smell.", "It is near the tank."], a: 1, x: "‘There were complaints about the smell from the neighbours.’" },
            { k: "g", p: "The tank collects ___ from the shed roof.", a: ["rainwater", "rain water", "rain"], w: 1, x: "‘Collects rainwater from the shed roof.’" }
          ] }
      ] },
    { t: "Coral reefs under pressure", ctx: "Listening Part 4 · lecture", sp: { A: "m" },
      tip: "Lecturers explain causes and effects. Listen for ‘because of’, ‘this leads to’, ‘as a result’.",
      sc: [
        { s: `A: Coral reefs cover less than one percent of the ocean floor, yet they support around a quarter of all marine species. A coral is actually a colony of tiny animals called polyps, which live in partnership with microscopic algae. The algae provide the coral with food through photosynthesis, and they also give coral its colour.`,
          q: [
            { k: "g", p: "Reefs support about a ___ of marine species.", a: ["quarter"], w: 1, x: "‘Around a quarter of all marine species.’ Less than one percent is the area they cover." },
            { k: "g", p: "Coral is a colony of animals called ___", a: ["polyps"], w: 1, x: "‘Tiny animals called polyps.’" }
          ] },
        { s: `A: When water temperatures rise even slightly above normal for several weeks, the coral expels the algae. Without them, it turns white, a process known as bleaching. Bleached coral isn't dead, but it is starving, and if temperatures don't fall, it will die. Reefs can recover, but this takes at least a decade, and bleaching events are now happening far more often than that.`,
          q: [
            { k: "m", p: "What causes bleaching?", o: ["pollution from ships", "a long period of warmer water", "too much sunlight in winter"], a: 1, x: "‘Temperatures rise… above normal for several weeks.’" },
            { k: "m", p: "What is the main problem the lecturer identifies?", o: ["Bleached coral dies immediately.", "Bleaching now happens more often than reefs can recover.", "Algae are disappearing from the oceans."], a: 1, x: "Recovery takes 10+ years, but bleaching happens more often than that." }
          ] }
      ] }
  ],
  R: [
    { t: "Rewilding Europe", ty: "TRUE / FALSE / NOT GIVEN",
      tip: "Be strict. If the statement adds a detail the passage doesn't contain, it's NOT GIVEN, even if it seems likely.",
      ps: `Rewilding is a form of conservation that aims to restore natural processes rather than manage landscapes in detail. Instead of deciding exactly which plants should grow where, rewilding projects reintroduce key species and then largely leave nature to take its course.

One of the best-known examples took place in Yellowstone National Park in the United States, where wolves were reintroduced in 1995 after an absence of about seventy years. Researchers have argued that the wolves changed the behaviour of deer-like elk, which avoided certain valleys, allowing trees to regrow there. Some scientists, however, believe the effect has been exaggerated and that other factors, such as changes in rainfall, played a part.

In Europe, rewilding has tended to focus on large herbivores such as bison and wild horses, which graze in ways that create a mix of open land and woodland. Projects have been established in countries including the Netherlands, Romania and Portugal. Not everyone welcomes them: some farmers fear that reintroduced predators will attack livestock.`,
      q: [
        { k: "t", p: "Rewilding involves carefully controlling where each plant species grows.", a: "F", x: "The opposite: rewilding avoids ‘deciding exactly which plants should grow where’." },
        { k: "t", p: "Wolves had been absent from Yellowstone for around seventy years.", a: "T", x: "‘After an absence of about seventy years.’" },
        { k: "t", p: "All scientists agree that wolves caused trees to regrow.", a: "F", x: "‘Some scientists… believe the effect has been exaggerated.’" },
        { k: "t", p: "European rewilding projects have mainly reintroduced wolves.", a: "F", x: "They ‘tended to focus on large herbivores such as bison and wild horses’." },
        { k: "t", p: "The project in Romania has been the most successful in Europe.", a: "NG", x: "Romania is listed, but no project is compared with another." }
      ] },
    { t: "How glaciers move", ty: "Flow-chart completion",
      tip: "Flow charts follow a process in order. The order of the chart usually matches the order of the text.",
      ps: `A glacier begins where more snow falls in winter than melts in summer. Year after year, the snow builds up, and its own weight compresses the lower layers. The air is squeezed out, and the snow gradually turns into dense, granular ice called firn. After many decades, the firn becomes glacial ice.

Once the ice is thick enough, usually several tens of metres, gravity causes it to move downhill. It flows in two ways. Under pressure, the ice itself deforms slowly, rather like very thick syrup. In addition, meltwater at the base can act as a lubricant, allowing the whole glacier to slide over the rock beneath it.

As it moves, the glacier picks up rocks and drags them along, grinding the land beneath. This is how glaciers carve deep U-shaped valleys.`,
      q: [
        { k: "x", p: "Complete the flow chart with words from the box.", o: ["A  firn", "B  weight", "C  meltwater", "D  valleys", "E  gravity", "F  rainfall"], i: [["Snow accumulates and its ___ compresses lower layers.", 1], ["Compressed snow becomes ___.", 0], ["Thick ice is pulled downhill by ___.", 4], ["The glacier slides on ___ at its base.", 2], ["Rocks carried by the ice carve U-shaped ___.", 3]], x: "Each step follows the text in order. ‘Rainfall’ is a distractor: the text talks about snow." },
        { k: "m", p: "The text compares deforming ice to", o: ["melting butter", "thick syrup", "flowing sand"], a: 1, x: "‘Rather like very thick syrup.’" }
      ] },
    { t: "Plastic in the oceans", ty: "Matching headings",
      tip: "Look for the paragraph's purpose: is it describing a problem, a cause, a solution, or a debate?",
      ps: `A  Every year, millions of tonnes of plastic enter the oceans. Much of it does not come from ships or beaches but from rivers, which carry litter from inland cities to the sea. A relatively small number of rivers are thought to be responsible for a large share of the total.

B  Once in the water, plastic does not disappear. Sunlight and waves break it into smaller and smaller fragments known as microplastics. These have been found everywhere from Arctic ice to the deepest ocean trenches, and inside fish that people eat.

C  Several clean-up projects have attempted to collect floating plastic, but most experts argue that this treats the symptom rather than the cause. Since the majority of ocean plastic is in tiny particles, much of it cannot be collected at all.

D  The most effective response, many scientists say, is to stop plastic reaching the sea in the first place: better waste collection in fast-growing cities, barriers in rivers, and reducing single-use packaging.`,
      q: [
        { k: "x", p: "Choose the correct heading for each paragraph.", o: ["i  Prevention at the source", "ii  An unexpected route to the sea", "iii  Limits of removing what is there", "iv  Plastic that never goes away", "v  The history of plastic production"], i: [["Paragraph A", 1], ["Paragraph B", 3], ["Paragraph C", 2], ["Paragraph D", 0]], x: "v is a distractor: production history is never discussed." },
        { k: "t", p: "Most ocean plastic comes from ships.", a: "F", x: "‘Much of it does not come from ships… but from rivers.’" },
        { k: "g", p: "Very small plastic pieces are called ___.", a: ["microplastics"], w: 1, x: "‘Fragments known as microplastics.’" }
      ] }
  ],
  W: [
    { t: "Describing a process", tip: "Processes use the passive and sequence words: ‘is collected’, ‘is then filtered’, ‘finally’.",
      q: [
        { k: "m", ch: { t: "flow", title: "How rainwater is recycled for household use", steps: ["Rain falls on roof", "Collected in gutters", "Filtered", "Stored in tank", "Pumped to toilets & washing machine"] },
          p: "Which overview is best?", o: ["The process consists of five stages, beginning with rain falling on the roof and ending with the water being pumped into the house.", "First, rain falls. Second, gutters. Third, the filter.", "Rainwater recycling is good for the environment."], a: 0, x: "Process overview: number of stages + start + end." },
        { k: "m", p: "Choose the correct passive: ‘The water ___ to remove leaves and dirt.’", o: ["is filtered", "filters", "is filter"], a: 0, x: "Present simple passive: is + past participle." },
        { k: "m", p: "Which sequencer fits best? ‘___ it has been filtered, the water is stored in a tank.’", o: ["Once", "Firstly", "Finally"], a: 0, x: "‘Once’ links two stages within one sentence." },
        { k: "o", p: "Order the words.", a: ["The", "stored", "water", "is", "then", "pumped", "to", "the", "toilets."], x: "Adverbs like ‘then’ go between ‘is’ and the participle." },
        { k: "w", ch: { t: "flow", title: "How rainwater is recycled for household use", steps: ["Rain falls on roof", "Collected in gutters", "Filtered", "Stored in tank", "Pumped to toilets & washing machine"] },
          p: "Describe the whole process in 80+ words. Use the passive and sequence words.", min: 80, time: 900, n: ["Overview included", "Passive voice used", "Every stage covered in order"] }
      ] },
    { t: "Problem and solution essays", tip: "Match each problem to a realistic solution. Vague solutions (‘people should be better’) score low.",
      q: [
        { k: "m", p: "‘Air pollution is a serious problem in many cities. What are the causes, and what can be done?’ What must you cover?", o: ["only solutions", "causes and solutions", "your opinion on pollution"], a: 1, x: "Two parts: causes AND measures." },
        { k: "m", p: "Which solution is most specific?", o: ["Cities could introduce charges for older, high-emission vehicles entering the centre.", "Governments should do something about pollution.", "People need to care more."], a: 0, x: "Specific = who does what, and how." },
        { k: "m", p: "Which phrase introduces a cause?", o: ["This is largely due to…", "To tackle this…", "In contrast,…"], a: 0, x: "‘Due to’, ‘stems from’, ‘is caused by’ introduce causes." },
        { k: "g", p: "Complete the collocation: ‘Governments should ___ stricter limits on factory emissions.’", a: ["impose", "set", "introduce"], w: 1, x: "‘Impose limits’ is a strong academic collocation." },
        { k: "w", p: "Air pollution is a serious problem in many cities. What are the causes, and what measures could be taken?\n\nWrite a full introduction and one body paragraph about causes.", min: 110, time: 1200, n: ["Introduction maps both parts", "Causes are explained, not listed", "Uses cause–effect language"] }
      ] }
  ],
  S: [
    { t: "Nature and weather", tip: "Describe with precise adjectives: not ‘nice weather’ but ‘mild’, ‘crisp’, ‘humid’, ‘overcast’.",
      q: [
        { k: "m", p: "Which describes a cool, dry, sunny autumn morning?", o: ["crisp", "humid", "muggy"], a: 0, x: "Crisp = cool, fresh and dry. Humid and muggy mean warm and damp." },
        { k: "m", p: "‘Do you spend much time outdoors?’ Which answer is strongest?", o: ["Not as much as I'd like. During term I'm mostly indoors, but in summer I try to get out into the mountains whenever I can.", "Yes, outdoors.", "I am spending time outdoors much."], a: 0, x: "Comparison + contrast + specific detail." },
        { k: "m", p: "In ‘environMENtal’, where is the main stress?", o: ["enVIronmental", "environMENtal", "ENvironmental"], a: 1, x: "en-vi-ron-MEN-tal.", say: "environmental" },
        { k: "s", p: "What's the weather usually like where you live?", prep: 10, time: 35, n: ["Used precise adjectives", "Mentioned seasons", "Said how it affects you"] }
      ] },
    { t: "Who is responsible?", tip: "Responsibility questions invite balance: individuals vs governments vs companies.",
      q: [
        { k: "m", p: "‘Who should be responsible for protecting the environment?’ Which answer is best?", o: ["I think it has to be shared. Individuals can cut waste, but only governments can regulate the big polluters, so they carry most of the responsibility.", "Governments.", "The environment is green."], a: 0, x: "Balanced, then a clear conclusion." },
        { k: "m", p: "Which phrase is best for disagreeing politely with a common view?", o: ["I know a lot of people think that, but I'm not entirely convinced.", "That's wrong.", "No way."], a: 0, x: "Polite disagreement shows control of tone." },
        { k: "m", p: "Which sentence uses ‘whereas’ correctly?", o: ["Older people tend to repair things, whereas younger people often replace them.", "Whereas older people repair things.", "Older people whereas repair things."], a: 0, x: "‘Whereas’ joins two contrasting clauses." },
        { k: "s", cc: { title: "Describe a natural place you have visited.", b: ["where it is", "when you went there", "what you did there", "and explain how you felt about it"] }, p: "Speak about the cue card.", prep: 60, time: 120, n: ["Vivid, precise description", "Covered all bullets", "Explained feelings"] }
      ] }
  ]
});
