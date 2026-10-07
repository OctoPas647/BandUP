/* Level 2: Getting around */
LEVELS.push({
  id: 2, name: "Getting around", theme: "Travel and transport",
  L: [
    { t: "Booking an airport shuttle", ctx: "Listening Part 1 · phone call", sp: { M: "m", W: "f" },
      tip: "Speakers often change their minds. The first thing you hear is not always the answer.",
      sc: [
        { s: `M: City Shuttles, good morning.
W: Hello, I'd like to book a shuttle to the airport, please.
M: Certainly. What date is that for?
W: The twelfth of March. Oh, sorry, no, my flight's been moved. It's the thirteenth now.
M: The thirteenth of March. And what time is your flight?
W: It leaves at ten fifteen in the morning.
M: Then I'd suggest a pick-up at seven thirty. Traffic is very heavy at that time.`,
          q: [
            { k: "g", p: "Date: ___ March", a: ["13th", "13", "thirteenth"], w: "n", x: "She corrects herself: ‘no… It's the thirteenth now.’ The 12th is a trap." },
            { k: "g", p: "Pick-up time: ___ am", a: ["7.30", "7:30", "730", "seven thirty"], w: "n", x: "10.15 is the flight; the pick-up is 7.30." }
          ] },
        { s: `M: And where should we collect you?
W: From my hotel. It's the Harbour View Hotel, on Mill Road.
M: Is that M, I, L, L?
W: That's right.
M: How many people are travelling?
W: Two adults. And we have three large suitcases.
M: Fine. The fare is thirty-six pounds for two people. We take cash or card, but card payments must be made in advance, online.`,
          q: [
            { k: "g", p: "Collect from: Harbour View Hotel, ___ Road", a: ["mill"], w: 1, x: "Spelled M-I-L-L." },
            { k: "g", p: "Luggage: ___ large suitcases", a: ["3", "three"], w: "n", x: "Two is the number of people, three is the suitcases." },
            { k: "m", p: "How can card payments be made?", o: ["to the driver", "online before the trip", "at the hotel reception"], a: 1, x: "‘Card payments must be made in advance, online.’" }
          ] }
      ] },
    { t: "A walking tour of the old town", ctx: "Listening Part 2 · tour guide", sp: { A: "m" },
      tip: "Location questions use words like ‘opposite’, ‘next to’, ‘at the far end’. Follow the guide's route.",
      sc: [
        { s: `A: Right, we're standing in Market Square, which is the starting point of every tour. The building directly opposite us, with the clock tower, is the old town hall. It's now a museum, and entry is free on Wednesdays. If you walk down the narrow street to the left of the town hall, you'll reach the river. The bridge there is the oldest in the city. It was built about eight hundred years ago.`,
          q: [
            { k: "m", p: "What is the old town hall used for now?", o: ["a museum", "a council office", "a tourist information centre"], a: 0, x: "‘It's now a museum.’" },
            { k: "m", p: "When is entry free?", o: ["Mondays", "Wednesdays", "every day"], a: 1, x: "‘Entry is free on Wednesdays.’" },
            { k: "g", p: "The bridge is about ___ years old.", a: ["800", "eight hundred"], w: "n", x: "‘Built about eight hundred years ago.’" }
          ] },
        { s: `A: Now, a few practical points. The tour lasts about two hours, and we'll stop for a break at the café beside the bridge. Please stay with the group. If you do get lost, the meeting point is the fountain in the centre of the square. And finally, the steps up to the castle are quite steep, so anyone with walking difficulties may prefer to take the small tourist train instead.`,
          q: [
            { k: "g", p: "If you get lost, go to the ___ in the square.", a: ["fountain"], w: 1, x: "‘The meeting point is the fountain.’ The café is the break stop." },
            { k: "m", p: "Why might some people take the tourist train?", o: ["it is faster", "the castle steps are steep", "the tour is too long"], a: 1, x: "‘The steps… are quite steep’, so people with walking difficulties may prefer the train." }
          ] }
      ] },
    { t: "Planning a transport survey", ctx: "Listening Part 3 · two students", sp: { A: "f", B: "m" },
      tip: "Part 3 tests opinions. Listen for agreement words: ‘exactly’, ‘I'm not so sure’, ‘that's a good point, but…’",
      sc: [
        { s: `A: So, for our project, should we survey students about how they get to campus?
B: Yes, but I don't think an online survey is the best idea. People ignore those emails.
A: Hmm, maybe. But face-to-face interviews take ages.
B: True. What if we stand at the main entrance at eight in the morning? We'd catch lots of people quickly.
A: That's a good point. And it means we'd be talking to people who are actually arriving.`,
          q: [
            { k: "m", p: "What does the man think about an online survey?", o: ["It is cheap and quick.", "Students may not answer it.", "It gives the most reliable results."], a: 1, x: "‘People ignore those emails’ = students may not answer." },
            { k: "m", p: "Why do they decide to stand at the entrance?", o: ["They can collect responses quickly.", "Their tutor suggested it.", "It is warmer there."], a: 0, x: "‘We'd catch lots of people quickly.’" }
          ] },
        { s: `A: What should we ask about, apart from transport type?
B: Journey time, definitely. And cost.
A: I'd leave cost out, actually. Lots of students have travel passes, so it's hard to compare.
B: Fair enough. What about safety? Cyclists might have strong feelings about the roads.
A: Yes, let's include that.`,
          q: [
            { k: "2", p: "Which TWO topics will they include, apart from transport type?", o: ["journey time", "cost", "safety", "parking", "weather"], a: [0, 2], x: "Journey time is agreed, cost is dropped, safety is added." }
          ] }
      ] }
  ],
  R: [
    { t: "Cable cars in cities", ty: "TRUE / FALSE / NOT GIVEN",
      tip: "Watch for words that limit a statement: ‘all’, ‘only’, ‘first’. One word can turn TRUE into FALSE.",
      ps: `Cable cars are usually associated with ski resorts, but a growing number of cities are using them as public transport. The first large urban system opened in Medellín, Colombia, in 2004. It connected poor neighbourhoods on steep hillsides with the city's metro, reducing some journeys from over an hour to around fifteen minutes.

Cable cars have several advantages. They are relatively cheap to build compared with underground railways, and they can be constructed in a few years rather than decades. They also need very little land, since only the towers touch the ground.

However, they are not suitable for every city. Each cabin carries a limited number of passengers, so cable cars cannot replace a busy metro line. Strong winds can also force them to close temporarily. Critics point out that some systems, built mainly to attract tourists, have carried far fewer commuters than expected.`,
      q: [
        { k: "t", p: "Medellín's cable car was the first urban system of its size.", a: "T", x: "‘The first large urban system opened in Medellín.’" },
        { k: "t", p: "The Medellín system reduced some journey times.", a: "T", x: "From over an hour to around fifteen minutes." },
        { k: "t", p: "Cable cars are more expensive to build than underground railways.", a: "F", x: "They are ‘relatively cheap to build compared with underground railways’." },
        { k: "t", p: "Cable cars can carry as many passengers as a metro line.", a: "F", x: "‘Cannot replace a busy metro line.’" },
        { k: "t", p: "Most cable car systems close for several weeks each winter.", a: "NG", x: "Wind can close them ‘temporarily’; nothing about weeks or winter." }
      ] },
    { t: "The story of road signs", ty: "Matching headings",
      tip: "A heading sums up the whole paragraph. A heading that matches only one detail is usually wrong.",
      ps: `A  Before cars, travellers relied on milestones: stones at the roadside showing the distance to the next town. The Romans placed them along their roads across Europe, and many still survive today.

B  When cars became common in the early twentieth century, drivers were moving far faster than horses. Written signs were hard to read at speed, so countries began to use simple pictures instead. However, each country designed its own symbols, which confused international travellers.

C  In 1968, many countries signed an agreement in Vienna that standardised road signs. Since then, a triangle has usually meant a warning and a circle has usually given an order. A driver from Bulgaria can understand most signs in Portugal without speaking a word of Portuguese.`,
      q: [
        { k: "x", p: "Choose the correct heading for each paragraph.", o: ["i  An international solution", "ii  Signs before the motor age", "iii  The cost of new signs", "iv  Faster travel creates a new problem"], i: [["Paragraph A", 1], ["Paragraph B", 3], ["Paragraph C", 0]], x: "A: milestones (before cars). B: speed made words hard to read, and symbols varied. C: the Vienna agreement. Heading iii is never discussed." },
        { k: "m", p: "Why did countries start using pictures on signs?", o: ["Pictures were cheaper to make.", "Words were difficult to read quickly.", "The Romans had used pictures."], a: 1, x: "‘Written signs were hard to read at speed.’" },
        { k: "g", p: "Since 1968, a ___ has usually meant a warning.", a: ["triangle"], w: 1, x: "‘A triangle has usually meant a warning.’" }
      ] },
    { t: "The return of the night train", ty: "Summary completion (word box)",
      tip: "In word-box summaries, decide the word class each gap needs (noun? adjective?) before you look at the box.",
      ps: `For decades, night trains in Europe seemed to be disappearing. Cheap flights were faster, and many rail companies cut their sleeper services because they lost money. Recently, however, interest has returned. Many travellers are worried about the environmental impact of flying, and a train journey produces far less carbon dioxide per passenger.

Night trains also save time in a different way. Passengers travel while they sleep, so they avoid paying for a hotel and arrive in the city centre in the morning, rather than at an airport far outside it. New services have opened between several capital cities, although tickets for private cabins can still be expensive.`,
      q: [
        { k: "x", p: "Complete the summary with words from the box.", o: ["A  profitable", "B  environment", "C  centres", "D  airports", "E  hotels", "F  expensive"], i: [["Many sleeper services were cut because they were not ___.", 0], ["Travellers are now concerned about the ___.", 1], ["Night trains help passengers avoid the cost of ___.", 4], ["Trains arrive in city ___.", 2]], x: "‘Lost money’ = not profitable. ‘Avoid paying for a hotel.’ ‘Arrive in the city centre.’" },
        { k: "t", p: "All night-train tickets are now cheap.", a: "F", x: "‘Tickets for private cabins can still be expensive.’" }
      ] }
  ],
  W: [
    { t: "Comparing data", tip: "Compare, don't list. Use ‘more than’, ‘twice as many’, ‘the highest’, ‘whereas’.",
      q: [
        { k: "m", ch: { t: "bar", title: "How people travel to work (%)", x: ["Car", "Bus", "Bicycle", "Walk"], s: [{ n: "Oslo", v: [35, 30, 20, 15] }, { n: "Dallas", v: [80, 8, 2, 10] }] },
          p: "Which sentence compares the data accurately?", o: ["Car use in Dallas was more than twice as high as in Oslo.", "Car use in Dallas was slightly higher than in Oslo.", "Oslo and Dallas had the same pattern of transport use."], a: 0, x: "80% vs 35%: more than double." },
        { k: "m", p: "Complete: ‘Cycling accounted for 20% of journeys in Oslo, ___ in Dallas the figure was only 2%.’", o: ["whereas", "because", "so"], a: 0, x: "‘Whereas’ joins two contrasting facts." },
        { k: "m", p: "Which is grammatically correct?", o: ["The bus was the second most popular option in Oslo.", "The bus was the second more popular option in Oslo.", "The bus was the second popularest option in Oslo."], a: 0, x: "Superlative of a long adjective: the most popular." },
        { k: "o", p: "Put the words in order.", a: ["In", "both", "cities,", "the", "car", "was", "the", "most", "common", "way", "to", "travel."], x: "A strong comparison sentence for the overview." },
        { k: "w", ch: { t: "bar", title: "How people travel to work (%)", x: ["Car", "Bus", "Bicycle", "Walk"], s: [{ n: "Oslo", v: [35, 30, 20, 15] }, { n: "Dallas", v: [80, 8, 2, 10] }] },
          p: "Write three sentences comparing travel in Oslo and Dallas. Use at least one comparative and ‘whereas’.", min: 40, time: 480, n: ["Compares, doesn't just list", "Uses a comparative correctly", "Figures are accurate"] }
      ] },
    { t: "Topic sentences", tip: "Each body paragraph starts with one sentence that tells the reader its main idea.",
      q: [
        { k: "m", p: "Essay: ‘Should city centres ban private cars?’ Which is the best topic sentence for a body paragraph?", o: ["One major benefit of banning cars is cleaner air in city centres.", "In 2019 I visited a city.", "Cars have four wheels and use petrol or electricity."], a: 0, x: "It states one clear idea that the paragraph will develop." },
        { k: "m", p: "What type of question is ‘What are the advantages and disadvantages of car-free city centres?’", o: ["opinion", "advantages and disadvantages", "two-part question"], a: 1, x: "You must cover both sides. An opinion is optional unless asked." },
        { k: "m", p: "Which linker introduces a disadvantage?", o: ["On the other hand,", "Furthermore,", "As a result,"], a: 0, x: "‘On the other hand’ signals the opposite side." },
        { k: "o", p: "Order the paragraph.", a: ["One drawback is that some businesses may lose customers.", "Shoppers who drive may choose out-of-town malls instead.", "For example, small shops could see fewer visitors.", "Therefore, cities need good public transport before banning cars."], sent: true, x: "Topic sentence → explanation → example → link back." },
        { k: "w", p: "What are the advantages and disadvantages of car-free city centres?\n\nWrite one body paragraph about an advantage. Start with a topic sentence.", min: 50, time: 600, n: ["Clear topic sentence", "Explanation follows", "Includes an example"] }
      ] }
  ],
  S: [
    { t: "Talking about transport", tip: "Keep your tenses consistent. A question in the past needs an answer in the past.",
      q: [
        { k: "m", p: "Examiner: ‘How did you travel to school when you were a child?’ Which answer uses tenses correctly?", o: ["I usually walked, because the school was only ten minutes from my house.", "I usually walk, because the school is only ten minutes from my house.", "I am usually walking to school."], a: 0, x: "‘When you were a child’ needs the past simple." },
        { k: "m", p: "Which word has the stress on the SECOND syllable?", o: ["TRAVel", "transPORT (verb)", "BICycle"], a: 1, x: "Transport the noun: TRANSport. Transport the verb: transPORT.", say: "to transport goods" },
        { k: "m", p: "Which is the most natural answer to ‘Do you like travelling by bus?’", o: ["Not really, to be honest. They're often late, so I'd rather cycle if I can.", "No.", "Yes, the bus is a large road vehicle that carries passengers."], a: 0, x: "Natural phrases (‘to be honest’, ‘I'd rather’) + a reason." },
        { k: "s", p: "How do most people in your city get around?", prep: 10, time: 30, n: ["Gave a direct answer", "Added a reason", "Kept tenses consistent"] }
      ] },
    { t: "Describing a journey", tip: "For past stories, use time markers: ‘at first’, ‘after that’, ‘in the end’.",
      q: [
        { k: "m", p: "Which phrase best introduces a Part 2 talk?", o: ["I'm going to talk about a train journey I took last summer.", "Bullet point one: where you went.", "I have nothing to say about this."], a: 0, x: "A clear opening sentence tells the examiner your topic." },
        { k: "o", p: "Put the story in order.", a: ["At first, the trip went smoothly.", "Then the train broke down near the border.", "After two hours, a replacement bus arrived.", "In the end, we reached the city just before midnight."], sent: true, x: "At first → then → after → in the end." },
        { k: "m", p: "Part 3: ‘Will people travel more in the future?’ Which answer is strongest?", o: ["I think they probably will, partly because flights are becoming cheaper, although concerns about pollution might slow this down.", "Yes.", "In the future I travelled more."], a: 0, x: "Prediction + reason + a balancing point." },
        { k: "s", cc: { title: "Describe a journey you remember well.", b: ["where you went", "how you travelled", "who you were with", "and explain why you remember it"] }, p: "Speak about the cue card.", prep: 60, time: 75, n: ["Used past tenses", "Used sequencing words", "Explained why it was memorable"] }
      ] }
  ]
});
