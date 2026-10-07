/* Level 1: First steps */
LEVELS.push({
  id: 1, name: "First steps", theme: "Everyday English",
  L: [
    { t: "Joining a swimming club", ctx: "Listening Part 1 · phone call", sp: { W: "f", M: "m" },
      tip: "Part 1 is a form. Before you listen, decide what kind of answer each gap needs: a name, a number, a date?",
      sc: [
        { s: `W: Good morning, Lakeside Swimming Club. How can I help?
M: Hi, I'd like to join the club. Could you take my details?
W: Of course. What's your surname?
M: It's Marsh. That's M, A, R, S, H.
W: Thank you. And a contact number?
M: Yes, it's oh seven seven nine three, four one five, six two eight.`,
          q: [
            { k: "g", p: "Surname: ___", a: ["marsh"], w: 1, x: "He spells it: M-A-R-S-H. Spelling must be exact." },
            { k: "g", p: "Phone: 07793 415 ___", a: ["628"], w: "n", x: "‘six two eight’. Numbers are often read in groups." }
          ] },
        { s: `W: Which membership would you like? Adult membership is forty-two pounds a month, or there's an off-peak option for twenty-eight pounds, but then you can only swim before four in the afternoon.
M: I work during the day, so off-peak is no good for me. I'll take the adult one.
W: Fine. And when would you like to start?
M: Next Monday, the fifteenth.
W: Great. Please bring a photo with you when you come in. We need it for your membership card.`,
          q: [
            { k: "m", p: "Which membership does Peter choose?", o: ["Adult: £42 a month", "Off-peak: £28 a month", "Family: £60 a month"], a: 0, x: "He works during the day, so off-peak (before 4 pm) doesn't suit him." },
            { k: "g", p: "Start date: Monday the ___", a: ["15th", "15", "fifteenth"], w: "n", x: "‘Next Monday, the fifteenth.’" },
            { k: "g", p: "Bring a ___ for the card", a: ["photo", "photograph"], w: 1, x: "‘Please bring a photo… for your membership card.’" }
          ] }
      ] },
    { t: "Tour of a new library", ctx: "Listening Part 2 · a talk", sp: { A: "f" },
      tip: "In Part 2 one speaker gives information. Questions follow the order of the talk.",
      sc: [
        { s: `A: Good afternoon everyone, and welcome to the new Central Library. Let me tell you a little about the building before we start the tour. The library is open from nine in the morning until eight in the evening on weekdays, and from ten until five on Saturdays. We're closed on Sundays. On the ground floor you'll find the café and the children's section. The computers are on the first floor, next to the study rooms.`,
          q: [
            { k: "m", p: "What time does the library close on weekdays?", o: ["5 pm", "8 pm", "9 pm"], a: 1, x: "Weekdays: 9 am to 8 pm. 5 pm is the Saturday closing time — a distractor." },
            { k: "m", p: "Where are the computers?", o: ["on the ground floor, near the café", "on the first floor, next to the study rooms", "on the second floor, beside the children's section"], a: 1, x: "‘The computers are on the first floor, next to the study rooms.’" }
          ] },
        { s: `A: If you want to borrow books, you'll need a library card. It's free for local residents, but you must bring proof of address, such as a recent bill. You can borrow up to eight books at a time, for three weeks. And one more thing: please don't bring food into the reading areas. Drinks are fine, as long as they have a lid.`,
          q: [
            { k: "g", p: "A library card is free with proof of ___", a: ["address"], w: 1, x: "‘You must bring proof of address.’" },
            { k: "g", p: "Maximum number of books at one time: ___", a: ["8", "eight"], w: "n", x: "‘Up to eight books at a time.’ Three weeks is the loan period." },
            { k: "m", p: "What is allowed in the reading areas?", o: ["sandwiches", "drinks with a lid", "any hot drink"], a: 1, x: "‘Drinks are fine, as long as they have a lid.’" }
          ] }
      ] },
    { t: "A short talk on sleep", ctx: "Listening Part 4 · mini lecture", sp: { A: "m" },
      tip: "Lectures use signposts like ‘first’, ‘so’, ‘finally’. They tell you where you are in the notes.",
      sc: [
        { s: `A: Today I want to talk about sleep, and why it matters so much for students. Most adults need between seven and nine hours a night, but teenagers need even more, about nine hours. During sleep, the brain sorts the information it has collected during the day. This is why people remember more after a good night's sleep.`,
          q: [
            { k: "g", p: "Teenagers need about ___ hours of sleep.", a: ["9", "nine"], w: "n", x: "Adults: 7–9. Teenagers: ‘about nine hours’." },
            { k: "m", p: "According to the speaker, sleep helps the brain to", o: ["grow new cells", "organise information", "use less energy"], a: 1, x: "‘Sorts the information’ is paraphrased as ‘organise information’." }
          ] },
        { s: `A: So how can you sleep better? First, try to go to bed at the same time every night. Second, avoid screens for an hour before bed, because the light keeps your brain awake. Finally, keep your bedroom cool. A temperature of around eighteen degrees is ideal.`,
          q: [
            { k: "2", p: "Which TWO tips does the speaker give?", o: ["exercise in the evening", "keep a regular bedtime", "drink warm milk", "stop using screens before bed", "sleep with the window open"], a: [1, 3], x: "Same time every night = regular bedtime. Avoid screens = stop using screens." },
            { k: "g", p: "Ideal bedroom temperature: about ___ degrees", a: ["18", "eighteen"], w: "n", x: "‘Around eighteen degrees is ideal.’" }
          ] }
      ] }
  ],
  R: [
    { t: "The humble bicycle", ty: "TRUE / FALSE / NOT GIVEN",
      tip: "FALSE means the passage says the opposite. NOT GIVEN means the passage doesn't say.",
      ps: `The bicycle was invented in the early nineteenth century, but the first models had no pedals. Riders pushed themselves along with their feet. Pedals were added in the 1860s, and by the 1890s cycling had become extremely popular in Europe and North America.

Today, there are estimated to be more than one billion bicycles in the world. In some countries, such as the Netherlands, there are more bicycles than people. Cycling is cheap, it produces no pollution, and it is good for the heart.

However, many cities are still designed mainly for cars. Cyclists often have to share busy roads with lorries and buses, which can be dangerous. Some city governments are now building separate cycle lanes to encourage more people to leave their cars at home.`,
      q: [
        { k: "t", p: "The earliest bicycles did not have pedals.", a: "T", x: "‘The first models had no pedals.’" },
        { k: "t", p: "Pedals were added to bicycles in the 1890s.", a: "F", x: "Pedals came in the 1860s. The 1890s is when cycling became popular." },
        { k: "t", p: "The Netherlands has more bicycles than any other country.", a: "NG", x: "The passage compares bicycles with people, not with other countries." },
        { k: "t", p: "Cycling has health benefits.", a: "T", x: "‘It is good for the heart.’" },
        { k: "t", p: "Most cyclists prefer to ride in separate cycle lanes.", a: "NG", x: "Cities are building lanes, but cyclists' preferences are never mentioned." },
        { k: "m", p: "What is the main purpose of the last paragraph?", o: ["to describe how bicycles are made", "to explain a problem and one response to it", "to compare cars and buses"], a: 1, x: "Problem: cities built for cars. Response: separate cycle lanes." }
      ] },
    { t: "Living in Greenfield Hall", ty: "Sentence completion",
      tip: "Copy words exactly from the text and check the word limit.",
      ps: `Welcome to Greenfield Hall. Each room has a bed, a desk, a wardrobe and a small fridge. Kitchens are shared between six students and are cleaned by staff twice a week. Residents are responsible for washing their own dishes.

The laundry room is in the basement. Washing machines cost £2 per load and dryers cost £1.50. You can pay with your student card.

Quiet hours are from 11 pm to 7 am. During this time, please keep noise to a minimum. Guests are welcome, but they must leave by midnight unless they are staying in the guest room, which must be booked one week in advance at reception.`,
      q: [
        { k: "g", p: "Each kitchen is shared by ___ students.", a: ["6", "six"], w: "n", x: "‘Kitchens are shared between six students.’" },
        { k: "g", p: "The laundry room is located in the ___.", a: ["basement"], w: 1, x: "‘The laundry room is in the basement.’" },
        { k: "g", p: "Residents can pay for the machines with their ___.", a: ["student card"], w: 2, x: "‘You can pay with your student card.’" },
        { k: "g", p: "The guest room must be booked one ___ in advance.", a: ["week"], w: 1, x: "‘Booked one week in advance at reception.’" },
        { k: "t", p: "Staff wash the residents' dishes.", a: "F", x: "‘Residents are responsible for washing their own dishes.’" }
      ] },
    { t: "Inside a beehive", ty: "Matching information",
      tip: "‘Which paragraph contains…’ questions are not in order. Scan for the idea, not the exact words.",
      ps: `A  Honeybees live in large groups called colonies. A single colony can contain up to 60,000 bees, but only one of them, the queen, lays eggs. Most of the others are female worker bees.

B  Worker bees have many jobs. Young workers clean the hive and feed the larvae. Older workers leave the hive to collect nectar and pollen from flowers. When a bee finds a good source of food, it returns to the hive and performs a ‘waggle dance’, which tells other bees the direction and distance of the flowers.

C  Bees are very important for agriculture. About one third of the food we eat depends on pollination by insects, and bees do most of this work. In recent years, however, bee numbers have fallen in many parts of the world, possibly because of pesticides and disease.`,
      q: [
        { k: "x", p: "Which paragraph contains the following information?", o: ["A", "B", "C"], i: [["how bees share information about food", 1], ["a threat to bee populations", 2], ["the size of a colony", 0]], x: "Waggle dance (B); pesticides and disease (C); up to 60,000 bees (A)." },
        { k: "m", p: "Who collects nectar?", o: ["the queen", "young workers", "older workers"], a: 2, x: "‘Older workers leave the hive to collect nectar.’" },
        { k: "t", p: "Bees carry out all insect pollination.", a: "F", x: "‘Bees do most of this work’, not all of it." },
        { k: "g", p: "The dance shows the direction and ___ of the flowers.", a: ["distance"], w: 1, x: "‘The direction and distance of the flowers.’" }
      ] }
  ],
  W: [
    { t: "Describing a trend", tip: "Task 1 needs an overview: one or two sentences about the big picture, with no numbers.",
      q: [
        { k: "m", ch: { t: "line", title: "Visitors to a city museum (thousands)", x: ["2018", "2019", "2020", "2021", "2022", "2023"], s: [{ n: "Visitors", v: [40, 45, 52, 30, 48, 60] }] },
          p: "Which sentence is the best overview?", o: ["Visitor numbers rose overall, despite a sharp fall in 2021.", "In 2018 there were 40,000 visitors and in 2019 there were 45,000.", "The museum is very popular and I think it will keep growing."], a: 0, x: "An overview states the main trend. It doesn't list figures or give opinions." },
        { k: "m", p: "Choose the correct form: ‘Visitor numbers ___ to 30,000 in 2021.’", o: ["fell", "fall", "felt"], a: 0, x: "Past events need the past simple: fall → fell. ‘Felt’ is from ‘feel’." },
        { k: "m", p: "Which phrase best describes a change from 52,000 to 30,000?", o: ["a slight decrease", "a sharp drop", "a steady rise"], a: 1, x: "A fall of over 40% in one year is sharp, not slight." },
        { k: "o", p: "Put the words in order.", a: ["The", "number", "of", "visitors", "peaked", "at", "60,000", "in", "2023."], x: "Peak at + number + in + year." },
        { k: "w", ch: { t: "line", title: "Visitors to a city museum (thousands)", x: ["2018", "2019", "2020", "2021", "2022", "2023"], s: [{ n: "Visitors", v: [40, 45, 52, 30, 48, 60] }] },
          p: "Write an overview of the chart in one or two sentences.", min: 20, time: 300, n: ["States the overall trend", "Mentions the 2021 dip", "Uses no specific numbers"] }
      ] },
    { t: "Reading the Task 2 question", tip: "Every Task 2 question has a type. Identify it before you plan, or you may answer the wrong question.",
      q: [
        { k: "m", p: "‘Some people think children should start school at the age of four. Do you agree or disagree?’ What type of question is this?", o: ["opinion (agree or disagree)", "advantages and disadvantages", "problem and solution"], a: 0, x: "‘Do you agree or disagree?’ asks for your opinion." },
        { k: "m", p: "Which is the best paraphrase of that prompt for your introduction?", o: ["Some people believe that formal education should begin when children are four years old.", "Some people think children should start school at the age of four.", "School is good for children and four is a good number."], a: 0, x: "Copying the prompt word for word gains you nothing. Change the words, keep the meaning." },
        { k: "m", p: "Choose the best linker: ‘Young children learn quickly. ___, they may not be ready to sit still for long periods.’", o: ["However", "Because", "For example"], a: 0, x: "The second idea contrasts with the first, so you need a contrast linker." },
        { k: "g", p: "Complete: ‘In my ___, children should start school at six.’", a: ["opinion", "view"], w: 1, x: "‘In my opinion’ or ‘In my view’." },
        { k: "w", p: "Some people think children should start school at the age of four. Do you agree or disagree?\n\nWrite an introduction: paraphrase the prompt, then give your opinion.", min: 30, time: 420, n: ["Paraphrases, doesn't copy", "Gives a clear opinion", "Two sentences or more"] }
      ] }
  ],
  S: [
    { t: "Talking about yourself", tip: "Part 1 answers should be 2–3 sentences: answer, then add a reason or detail.",
      q: [
        { k: "m", p: "Examiner: ‘Do you work or are you a student?’ Which answer is best?", o: ["Student.", "I'm a student. I'm in my final year of secondary school, and I'm hoping to study engineering next year.", "I am a student because I study."], a: 1, x: "Answer the question, then extend with a detail. One-word answers can't show your range." },
        { k: "m", p: "You didn't catch the question. What should you say?", o: ["What?", "Sorry, could you repeat the question, please?", "I don't know."], a: 1, x: "Asking politely for repetition is fine and doesn't lose marks." },
        { k: "m", p: "Which phrase gives you a moment to think, naturally?", o: ["That's an interesting question. Let me think…", "Next question, please.", "Um… um… um…"], a: 0, x: "Natural fillers sound fluent; repeated ‘um’ sounds like you're stuck." },
        { k: "s", p: "Tell me about your hometown.", prep: 10, time: 30, n: ["Say where it is", "Say one thing you like about it", "Add a detail or example"] }
      ] },
    { t: "Your first cue card", tip: "In Part 2 you get one minute to plan. Write key words, not sentences.",
      q: [
        { k: "m", p: "How long do you have to prepare in Part 2?", o: ["30 seconds", "1 minute", "2 minutes"], a: 1, x: "One minute to prepare, then up to two minutes to speak." },
        { k: "m", p: "What should your notes look like?", o: ["full sentences to read aloud", "a few key words for each point", "nothing, because notes are not allowed"], a: 1, x: "Key words keep you on track without sounding like you're reading." },
        { k: "o", p: "Put the talk in a logical order.", a: ["I'd like to talk about a park near my home.", "It's quite large and has a small lake.", "I usually go there at weekends with friends.", "I like it because it's quiet and green."], sent: true, x: "Introduce → describe → what you do → why you like it." },
        { k: "s", cc: { title: "Describe a place in your town where you like to spend time.", b: ["where it is", "what it looks like", "what you do there", "and explain why you like it"] }, p: "Speak about the cue card.", prep: 60, time: 60, n: ["Covered every bullet", "Kept talking for the full time", "Gave a reason at the end"] }
      ] }
  ]
});
