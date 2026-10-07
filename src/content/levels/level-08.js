/* Level 8: History and culture */
LEVELS.push({
  id: 8, name: "History and culture", theme: "Heritage, art and the past",
  L: [
    { t: "Booking a museum workshop", ctx: "Listening Part 1 · enquiry", sp: { W: "f", M: "m" },
      tip: "At Band 8, Part 1 has several near-answers. Hold your answer until the speaker confirms it.",
      sc: [
        { s: `W: I'd like to book my son onto one of your history workshops. He's eleven.
M: We have three for that age. ‘Roman Life’ is on the fourth, ‘Egyptian Writing’ on the eleventh, and ‘Medieval Castles’ on the eighteenth.
W: He did the Romans at school last term, so not that one. The castles one sounds fun, but we're away that weekend.
M: So, Egyptian Writing?
W: Yes, please.
M: It's twelve pounds, or nine for museum members.
W: We're not members, I'm afraid.`,
          q: [
            { k: "m", p: "Which workshop does she book?", o: ["Roman Life", "Egyptian Writing", "Medieval Castles"], a: 1, x: "Romans: already studied. Castles: away that weekend." },
            { k: "g", p: "Date: the ___", a: ["11th", "11", "eleventh"], w: "n", x: "Egyptian Writing is on the eleventh." },
            { k: "g", p: "Price: £___", a: ["12", "twelve"], w: "n", x: "£9 is the members' price, and they're not members." }
          ] },
        { s: `M: Children should wear old clothes, as they'll be using ink. And please arrive fifteen minutes early to sign the consent form. The workshop starts at ten thirty, sharp.
W: Where do we go?
M: Use the side entrance on Museum Lane, not the main steps. The education room is just inside, on the left.`,
          q: [
            { k: "g", p: "Children will be working with ___, so wear old clothes.", a: ["ink"], w: 1, x: "‘They'll be using ink.’" },
            { k: "g", p: "Arrival time: ___", a: ["10.15", "10:15", "1015", "quarter past ten"], w: "n", x: "Starts 10.30; arrive fifteen minutes early, so 10.15." },
            { k: "g", p: "Entrance: the side entrance on Museum ___", a: ["lane"], w: 1, x: "‘Not the main steps.’" }
          ] }
      ] },
    { t: "Inside a working watermill", ctx: "Listening Part 2 · guided tour", sp: { A: "m" },
      tip: "Process questions in Part 2 follow the stages in order. Sequencing words are your map.",
      sc: [
        { s: `A: This mill has been grinding flour for nearly three hundred years. Let me take you through the process. Grain is first lifted to the top floor by a hoist powered by the waterwheel itself. From there, it's fed down by gravity into the hopper, a sort of funnel, which drops it slowly between two huge millstones. The lower stone stays still; only the upper one turns.`,
          q: [
            { k: "x", p: "Complete the process with the box.", o: ["A  hopper", "B  hoist", "C  upper stone", "D  lower stone"], i: [["Grain is raised to the top floor by the ___.", 1], ["It falls into a funnel-shaped ___.", 0], ["The ___ does not move.", 3]], x: "Hoist → hopper → millstones; only the upper stone turns." }
          ] },
        { s: `A: The miller's most important skill was adjusting the gap between the stones. Too close, and the flour would overheat and could even catch fire; flour dust is surprisingly explosive. Too far apart, and the grain wouldn't be ground finely enough. The miller judged this by rubbing flour between his fingers, which is supposedly where the phrase ‘rule of thumb’ comes from, although historians dispute that.`,
          q: [
            { k: "m", p: "What was the danger of setting the stones too close?", o: ["The grain would be wasted.", "The flour could overheat and catch fire.", "The waterwheel would stop."], a: 1, x: "‘The flour would overheat and could even catch fire.’" },
            { k: "m", p: "What does the guide say about the origin of ‘rule of thumb’?", o: ["It definitely comes from milling.", "Its link to milling is uncertain.", "It comes from building."], a: 1, x: "‘Supposedly… although historians dispute that.’" }
          ] }
      ] },
    { t: "Trade routes and ideas", ctx: "Listening Part 4 · lecture", sp: { A: "f" },
      tip: "In Band 8 lectures, the speaker often corrects a popular misconception. The question tests the correction.",
      sc: [
        { s: `A: The term ‘Silk Road’ suggests a single road and a single product. Both impressions are wrong. The name was coined only in the nineteenth century, by a German geographer. In reality, it was a shifting network of overland and sea routes, and silk was just one of many goods. Paper, spices, glass, horses and, crucially, ideas travelled along it.`,
          q: [
            { k: "g", p: "The name ‘Silk Road’ dates from the ___ century.", a: ["19th", "nineteenth"], w: "n", x: "‘Coined only in the nineteenth century.’" },
            { k: "m", p: "What misconception does the lecturer correct?", o: ["that silk was expensive", "that it was one road carrying mainly one product", "that trade went only westwards"], a: 1, x: "‘A single road and a single product. Both impressions are wrong.’" }
          ] },
        { s: `A: Few merchants travelled the whole distance. Goods typically passed through many hands, with each trader covering one section and selling to the next. This relay system explains why Romans had only the vaguest idea of where silk came from. Perhaps the most significant transfer was technological. Papermaking, developed in China, reached the Islamic world by the eighth century and from there spread to Europe, with consequences that are hard to overstate.`,
          q: [
            { k: "g", p: "Goods moved in a ___ system, passing between traders.", a: ["relay"], w: 1, x: "‘This relay system.’" },
            { k: "g", p: "Papermaking reached the Islamic world by the ___ century.", a: ["8th", "eighth"], w: "n", x: "‘By the eighth century.’" }
          ] }
      ] }
  ],
  R: [
    { t: "The Antikythera mechanism", ty: "TRUE / FALSE / NOT GIVEN",
      tip: "At Band 8, FALSE often hides in a small qualifier: dates, ‘first’, ‘only’, ‘entirely’.",
      ps: `In 1901, sponge divers exploring a Roman-era shipwreck off the Greek island of Antikythera recovered a lump of corroded bronze. Only later did researchers notice the remains of gear wheels inside it. The object, now known as the Antikythera mechanism, is generally dated to the second or first century BC.

For decades its purpose was unclear. Modern X-ray imaging has revealed at least thirty interlocking bronze gears and thousands of tiny inscribed characters. Researchers now agree that it was a hand-powered device for modelling the heavens: it could predict the positions of the Sun and Moon, the phases of the Moon, and eclipses.

What makes the mechanism so remarkable is that nothing of comparable complexity is known to have survived from the following thousand years or more. Whether this reflects a lost tradition of instrument-making or simply the poor survival of bronze objects, which were often melted down for reuse, is still debated.`,
      q: [
        { k: "t", p: "The divers immediately recognised the object as a machine.", a: "F", x: "‘Only later did researchers notice the remains of gear wheels.’" },
        { k: "t", p: "The mechanism contained exactly thirty gears.", a: "F", x: "‘At least thirty’, which is not the same as exactly thirty." },
        { k: "t", p: "The device could predict eclipses.", a: "T", x: "It could predict ‘eclipses’." },
        { k: "t", p: "The mechanism was operated by water power.", a: "F", x: "‘A hand-powered device.’" },
        { k: "t", p: "The mechanism was built by a famous astronomer.", a: "NG", x: "No maker is mentioned." },
        { k: "m", p: "Why is it unclear whether similar devices existed?", o: ["Bronze objects were often melted down.", "Records were deliberately destroyed.", "The inscriptions cannot be read."], a: 0, x: "‘The poor survival of bronze objects, which were often melted down for reuse.’" }
      ] },
    { t: "Gold of the Thracians", ty: "Matching information + summary",
      tip: "Matching information: one paragraph can contain several answers, and some paragraphs none.",
      ps: `A  In December 1949, three brothers digging clay for a tile factory near the town of Panagyurishte, in what is now Bulgaria, struck a collection of gold vessels. The find, now known as the Panagyurishte Treasure, consists of nine objects weighing more than six kilograms in total.

B  The vessels are thought to date from the late fourth or early third century BC and are usually associated with the Thracians, a group of peoples who lived across much of south-eastern Europe. Many are drinking vessels, some ending in the heads of animals such as deer and goats.

C  Scholars are divided over the treasure's purpose. Some see it as a royal ceremonial set, used in rituals; others suggest it was hidden in a moment of danger, perhaps during an invasion, and its owners never returned.

D  The decoration combines scenes from Greek mythology with Thracian forms, showing the close cultural contact between the two worlds. Today the treasure is among the most widely exhibited archaeological finds from Bulgaria, and has toured museums around the world.`,
      q: [
        { k: "x", p: "Which paragraph contains the following information?", o: ["A", "B", "C", "D"], i: [["evidence of interaction between two cultures", 3], ["the total weight of the find", 0], ["competing explanations for why the objects were buried", 2], ["a description of the shape of some vessels", 1]], x: "Greek myths + Thracian forms (D); 6 kg (A); ritual vs hidden (C); animal heads (B)." },
        { k: "t", p: "The treasure was discovered during an organised archaeological excavation.", a: "F", x: "Brothers ‘digging clay for a tile factory’, so it was an accidental find." },
        { k: "g", p: "Some vessels end in the heads of animals such as deer and ___.", a: ["goats"], w: 1, x: "‘Deer and goats.’" }
      ] },
    { t: "The book before printing", ty: "Matching headings",
      tip: "Similar headings test precision. ‘A cost’ vs ‘a cause’ vs ‘a consequence’: read the paragraph's logic.",
      ps: `A  Before the printing press, every book in Europe was copied by hand. A single Bible could take a scribe more than a year to produce, and the materials alone, particularly parchment made from animal skins, made books objects of great value.

B  Monasteries dominated book production for centuries, but from the twelfth century, the growth of universities created demand for textbooks. Professional workshops emerged in cities such as Paris and Bologna, where texts were divided into sections that could be copied by several scribes at once.

C  Errors were inevitable. Each copy introduced small mistakes, which were then reproduced in later copies. Scholars today can sometimes trace the ‘family tree’ of a manuscript by the errors it shares with others.

D  When printing arrived in the fifteenth century, it did not eliminate handwriting overnight. Luxury manuscripts continued to be commissioned for decades, and some early printed books were deliberately designed to imitate them.`,
      q: [
        { k: "x", p: "Choose the correct heading for each paragraph.", o: ["i  A slow transition", "ii  Mistakes that reveal history", "iii  The expense of hand-made books", "iv  New readers, new methods", "v  The invention of parchment"], i: [["Paragraph A", 2], ["Paragraph B", 3], ["Paragraph C", 1], ["Paragraph D", 0]], x: "v is a word-match trap: parchment appears in A, but its invention isn't discussed." },
        { k: "m", p: "How did workshops speed up copying?", o: ["by using cheaper materials", "by splitting texts between several scribes", "by employing monks"], a: 1, x: "‘Divided into sections that could be copied by several scribes at once.’" }
      ] }
  ],
  W: [
    { t: "Maps and changes", tip: "Map tasks: describe what was built, removed, extended or replaced. The passive is essential.",
      q: [
        { k: "m", ch: { t: "table", title: "Seaside village: 1990 vs today", head: ["Area", "1990", "Today"], rows: [["North shore", "Fishing huts", "Hotel and car park"], ["Centre", "Farmland", "Housing estate"], ["South", "Forest", "Forest (smaller), walking trail"], ["Pier", "Short wooden pier", "Pier extended"]] },
          p: "Which overview is best?", o: ["The village was transformed from a rural fishing community into a tourist destination, with most natural areas replaced by development.", "In 1990 there were fishing huts on the north shore.", "The village is now better for tourists."], a: 0, x: "Big-picture change, with no details or opinions." },
        { k: "m", p: "Choose the correct passive: ‘The fishing huts ___ to make way for a hotel.’", o: ["were demolished", "demolished", "have demolish"], a: 0, x: "Past passive: were + past participle." },
        { k: "m", p: "Which verb fits the pier?", o: ["was extended", "was cleared", "was converted"], a: 0, x: "Extended = made longer. Cleared (trees), converted (change use)." },
        { k: "m", p: "Which sentence is the most precise?", o: ["The forest in the south was partially cleared, although a walking trail was added through the remaining woodland.", "The forest got smaller and there's a trail.", "Trees were cut."], a: 0, x: "Precise verbs (‘partially cleared’) + linking (‘although’)." },
        { k: "w", ch: { t: "table", title: "Seaside village: 1990 vs today", head: ["Area", "1990", "Today"], rows: [["North shore", "Fishing huts", "Hotel and car park"], ["Centre", "Farmland", "Housing estate"], ["South", "Forest", "Forest (smaller), walking trail"], ["Pier", "Short wooden pier", "Pier extended"]] },
          p: "Write a full Task 1 response describing the changes (150+ words).", min: 150, time: 1200, n: ["Clear overview", "Passive verbs", "Logical spatial organisation", "Precise change verbs"] }
      ] },
    { t: "Concession and counter-argument", tip: "Band 8 essays acknowledge the other side, then answer it. ‘While it is true that…, …’",
      q: [
        { k: "m", p: "Which sentence concedes and then counters?", o: ["While historic buildings are costly to maintain, they generate significant tourism revenue that often exceeds those costs.", "Historic buildings are costly. Tourism is good.", "Everyone knows old buildings are worth it."], a: 0, x: "Concession clause + counter in the same sentence." },
        { k: "m", p: "Which linker introduces a stronger, surprising point?", o: ["Indeed, …", "However, …", "Similarly, …"], a: 0, x: "‘Indeed’ intensifies the previous point." },
        { k: "m", p: "Which is a cohesion error?", o: ["The government should fund museums. Moreover, it would mean museums are funded.", "The government should fund museums. Moreover, free entry would widen access.", "Museums preserve history. As a result, they educate future generations."], a: 0, x: "‘Moreover’ must add a new point; the first option just repeats itself." },
        { k: "o", p: "Order the words.", a: ["Admittedly,", "preserving", "heritage", "is", "expensive;", "nevertheless,", "its", "cultural", "value", "is", "immeasurable."], x: "Concession → counter-argument." },
        { k: "w", p: "Some believe governments should spend money on preserving historic buildings. Others think the money would be better spent on modern housing. Discuss both views and give your opinion.\n\nWrite a full essay (250+ words). Include at least one concession.", min: 250, time: 2400, n: ["Both views fully developed", "Clear position", "Concession + counter", "Cohesion that doesn't feel mechanical"] }
      ] }
  ],
  S: [
    { t: "Talking about history", tip: "Band 8 lexis: less common words used naturally. ‘Fascinated by’, ‘steeped in history’, ‘bring the past to life’.",
      q: [
        { k: "m", p: "Which phrase means a place has a long, rich history?", o: ["steeped in history", "full of old", "very history"], a: 0, x: "‘Steeped in history’ is a natural, less common collocation." },
        { k: "m", p: "‘Did you enjoy history at school?’ Which answer is closest to Band 8?", o: ["Not especially, if I'm honest. It was mostly memorising dates, and it was only later, through documentaries, that I realised how fascinating it can be.", "Yes I enjoyed history very much it was good.", "History at school is dates."], a: 0, x: "Contrast, a cleft-like structure (‘it was only later… that’), natural hedging." },
        { k: "m", p: "Which uses the past perfect correctly?", o: ["By the time I visited the castle, most of it had been restored.", "By the time I visited the castle, most of it has been restored.", "By the time I had visit the castle, most was restored."], a: 0, x: "Past perfect shows the earlier of two past events." },
        { k: "s", p: "What period of history would you like to learn more about, and why?", prep: 10, time: 45, n: ["Less common vocabulary", "Complex structures", "A clear reason"] }
      ] },
    { t: "Heritage and change", tip: "For abstract questions, compare generations or countries. It gives you natural ways to extend.",
      q: [
        { k: "m", p: "‘Is it important to preserve old buildings?’ Which answer is most sophisticated?", o: ["Broadly speaking, yes, though I'd distinguish between buildings of real historical significance and those that are simply old. Preserving everything would leave cities frozen in time.", "Yes it is important.", "Old buildings are old."], a: 0, x: "A distinction + an image (‘frozen in time’) + a consequence." },
        { k: "m", p: "Which expression introduces a generational comparison?", o: ["Whereas my grandparents' generation…, people my age tend to…", "Grandparents yes, young no.", "In the old time people did."], a: 0, x: "Comparison structures extend Part 3 answers naturally." },
        { k: "m", p: "Which is an appropriate, natural idiom?", o: ["Some traditions are dying out.", "Some traditions are kicking the bucket.", "Some traditions are under the weather."], a: 0, x: "Idioms must fit the register. ‘Kick the bucket’ (die) is too informal and odd for traditions." },
        { k: "s", cc: { title: "Describe a historical building you have visited.", b: ["where it is", "what it looks like", "what you learned there", "and explain why it is important"] }, p: "Speak about the cue card.", prep: 60, time: 120, n: ["Precise descriptive language", "Past forms used accurately", "Fluent with few pauses"] }
      ] }
  ]
});
