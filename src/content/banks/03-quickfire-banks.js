/* Banks for Rapid Fire, Paraphrase Hunter, T/F/NG Arena and generators. */
const VOCAB = [
  ["increase", "rise"], ["decrease", "decline"], ["approximately", "roughly"], ["significant", "considerable"], ["purchase", "buy"],
  ["obtain", "acquire"], ["essential", "vital"], ["benefit", "advantage"], ["drawback", "disadvantage"], ["reside", "live"],
  ["commence", "begin"], ["terminate", "end"], ["inexpensive", "cheap"], ["frequently", "often"], ["rarely", "seldom"],
  ["assist", "help"], ["sufficient", "enough"], ["require", "need"], ["demonstrate", "show"], ["examine", "inspect"],
  ["consume", "use up"], ["persuade", "convince"], ["conceal", "hide"], ["reluctant", "unwilling"], ["eager", "keen"],
  ["ancient", "very old"], ["contemporary", "modern"], ["abundant", "plentiful"], ["scarce", "in short supply"], ["vast", "enormous"],
  ["minor", "small"], ["predict", "forecast"], ["evaluate", "assess"], ["enhance", "improve"], ["diminish", "reduce"],
  ["accelerate", "speed up"], ["postpone", "delay"], ["prohibit", "ban"], ["permit", "allow"], ["inhabitant", "resident"],
  ["occupation", "job"], ["remuneration", "pay"], ["elderly", "older people"], ["juvenile", "young"], ["affluent", "wealthy"],
  ["deprived", "poor"], ["rural", "countryside"], ["urban", "city"], ["fatigue", "tiredness"], ["ailment", "illness"],
  ["contaminate", "pollute"], ["deteriorate", "get worse"], ["flourish", "thrive"], ["deplete", "exhaust"], ["vulnerable", "at risk"],
  ["crucial", "key"], ["feasible", "possible"], ["obsolete", "out of date"], ["innovative", "new and original"], ["comprehensive", "complete"],
  ["subsequently", "later"], ["initially", "at first"], ["ultimately", "in the end"], ["simultaneously", "at the same time"], ["consequently", "as a result"],
  ["nevertheless", "however"], ["moreover", "furthermore"], ["notion", "idea"], ["phenomenon", "occurrence"], ["hypothesis", "theory"],
  ["verify", "confirm"], ["refute", "disprove"], ["advocate", "support"], ["oppose", "be against"], ["emphasise", "stress"],
  ["neglect", "ignore"], ["anticipate", "expect"], ["adequate", "acceptable"], ["prevalent", "widespread"], ["exceed", "go beyond"]
];

const COLLOC = [
  ["___ a decision", "make", ["do", "take part", "have"]], ["___ research", "do", ["make", "give", "put"]], ["___ an effort", "make", ["do", "give", "keep"]],
  ["___ attention to", "pay", ["give", "make", "do"]], ["___ a risk", "take", ["make", "do", "put"]], ["___ a conclusion", "reach", ["arrive", "make up", "get to do"]],
  ["___ a role in", "play", ["make", "do", "take"]], ["a ___ majority", "vast", ["large big", "high", "wide"]], ["___ rain", "heavy", ["strong", "big", "thick"]],
  ["___ a threat", "pose", ["do", "set", "give"]], ["___ awareness", "raise", ["rise", "lift", "grow"]], ["___ a problem", "tackle", ["make", "fight off", "hit"]],
  ["meet a ___", "deadline", ["date", "time", "goal-line"]], ["___ a lecture", "attend", ["assist", "join in", "go"]], ["___ progress", "make", ["do", "take", "have"]],
  ["___ an impact on", "have", ["make up", "do", "give"]], ["___ the gap", "bridge", ["close up", "cross", "jump"]], ["a ___ argument", "compelling", ["forcing", "pushing", "hard"]],
  ["___ a trend", "follow", ["go", "take", "make"]], ["a ___ increase", "sharp", ["sharpened", "hard", "steep up"]]
];

const LINKERS = [
  ["The data was limited. ___, the results were promising.", "Nevertheless", ["Therefore", "Furthermore", "For instance"]],
  ["Prices rose sharply. ___, demand fell.", "As a result", ["However", "Similarly", "In contrast"]],
  ["Cycling is cheap. ___, it improves health.", "Moreover", ["However", "Otherwise", "Instead"]],
  ["Some cities have banned cars, ___ Oslo.", "such as", ["for example of", "like as", "namely of"]],
  ["Sales rose in May, ___ they fell in June.", "whereas", ["despite", "because", "therefore"]],
  ["___ the rain, the event went ahead.", "Despite", ["Although", "However", "Even"]],
  ["___ it rained, the event went ahead.", "Although", ["Despite", "However", "In spite"]],
  ["Use public transport; ___, traffic will worsen.", "otherwise", ["moreover", "similarly", "thus far"]],
  ["Germany's share rose. Poland's share, ___, rose more slowly.", "by contrast", ["as a result", "for example", "in addition"]],
  ["The first stage is filtering. ___, the water is stored.", "Subsequently", ["Nevertheless", "Conversely", "Likewise"]],
  ["Funding was cut; ___, the project stopped.", "consequently", ["nonetheless", "meanwhile", "whereas"]],
  ["Few people, ___ young people, read newspapers.", "particularly", ["in contrast", "nevertheless", "hence"]]
];

const SPELL = [
  ["accommodation", ["accomodation", "acommodation"]], ["environment", ["enviroment", "environmant"]], ["government", ["goverment", "govermant"]],
  ["necessary", ["neccessary", "necesary"]], ["Wednesday", ["Wensday", "Wednsday"]], ["February", ["Febuary", "Februery"]],
  ["questionnaire", ["questionaire", "questionnair"]], ["temperature", ["temprature", "temperture"]], ["library", ["libary", "librery"]],
  ["restaurant", ["restaraunt", "resturant"]], ["equipment", ["equipement", "equiptment"]], ["experience", ["experiance", "expirience"]],
  ["maintenance", ["maintainance", "maintenence"]], ["recommend", ["reccomend", "recomend"]], ["occurred", ["occured", "ocurred"]],
  ["committee", ["comittee", "commitee"]], ["separate", ["seperate", "separete"]], ["definitely", ["definately", "definitly"]],
  ["guarantee", ["garantee", "guarentee"]], ["schedule", ["shedule", "schedual"]], ["vegetable", ["vegtable", "vegatable"]],
  ["licence", ["lisence", "licens"]], ["receipt", ["reciept", "receit"]], ["colleague", ["collegue", "colleage"]],
  ["opportunity", ["oppurtunity", "oportunity"]], ["beginning", ["begining", "beggining"]], ["advertisement", ["advertisment", "adverticement"]],
  ["knowledge", ["knowlege", "knowladge"]], ["psychology", ["phsychology", "psycology"]], ["parallel", ["paralel", "parralel"]]
];

const FACTS = [
  ["How many questions are in the Listening test?", "40", ["30", "50", "44"]],
  ["How long is the Academic Reading test?", "60 minutes", ["40 minutes", "90 minutes", "75 minutes"]],
  ["Minimum words for Writing Task 2?", "250", ["150", "200", "300"]],
  ["Minimum words for Writing Task 1?", "150", ["100", "250", "120"]],
  ["Which writing task carries more weight?", "Task 2 (about twice as much)", ["Task 1", "They are equal", "Neither is scored"]],
  ["How long is Speaking Part 2 preparation?", "1 minute", ["2 minutes", "30 seconds", "None"]],
  ["How long should you speak in Part 2?", "1–2 minutes", ["30 seconds", "5 minutes", "3–4 minutes"]],
  ["Overall 6.75 average is rounded to…", "7.0", ["6.5", "6.75", "6.0"]],
  ["Overall 6.25 average is rounded to…", "6.5", ["6.0", "6.25", "7.0"]],
  ["Overall 6.1 average is rounded to…", "6.0", ["6.5", "6.1", "5.5"]],
  ["Listening raw score 30/40 is roughly band…", "7.0", ["6.0", "7.5", "8.0"]],
  ["Academic Reading 35/40 is roughly band…", "8.0", ["7.0", "8.5", "9.0"]],
  ["Is there a penalty for wrong answers?", "No: always write something", ["Yes, −1 per wrong answer", "Only in Reading", "Only in Listening"]],
  ["How many times is the Listening recording played?", "Once", ["Twice", "Three times", "As often as you like"]],
  ["How many reading passages are there?", "3", ["2", "4", "5"]],
  ["Speaking Part 3 is…", "a discussion of abstract ideas linked to Part 2", ["a role play", "reading aloud", "a summary of Part 1"]]
];

const MICRO = [
  ["The museum opens daily except Mondays.", "The museum is open on Sundays.", "T", "Every day except Monday includes Sunday."],
  ["Most of the 200 volunteers were students.", "All the volunteers were students.", "F", "‘Most’ is not ‘all’."],
  ["The bridge was completed in 1932.", "The bridge was expensive to build.", "NG", "Cost is not mentioned."],
  ["Unlike wolves, coyotes often live alone.", "Wolves typically live in groups.", "T", "‘Unlike wolves… coyotes live alone’ implies wolves don't."],
  ["The drug reduced symptoms in some patients.", "The drug cured all patients.", "F", "‘Reduced symptoms in some’ contradicts ‘cured all’."],
  ["The festival attracts visitors from across Europe.", "The festival is the biggest in Europe.", "NG", "Size is not compared."],
  ["Production fell for the first time since 1990.", "Production had not fallen between 1990 and that year.", "T", "‘For the first time since 1990.’"],
  ["The author was born in Lisbon but grew up in Paris.", "The author spent childhood in Portugal.", "F", "Grew up in Paris."],
  ["Bees can see ultraviolet light.", "Bees can see more colours than humans.", "NG", "Seeing UV isn't the same as seeing ‘more colours’ — not stated."],
  ["Few early cars had roofs.", "Most early cars had no roof.", "T", "‘Few had roofs’ = most didn't."],
  ["The study was funded by a private company.", "The government paid for the study.", "F", "A private company funded it."],
  ["The scheme was introduced in three cities.", "The scheme was successful.", "NG", "Success isn't mentioned."],
  ["Temperatures rarely fall below zero there.", "It never freezes there.", "F", "‘Rarely’ ≠ ‘never’."],
  ["The library holds over a million books, including rare maps.", "The library has some maps.", "T", "It includes rare maps."],
  ["Coffee was introduced to Europe in the 17th century.", "Europeans drank coffee in the 1500s.", "F", "The 17th century is the 1600s."],
  ["Researchers interviewed 40 farmers.", "The farmers all agreed with the researchers.", "NG", "Their views aren't given."],
  ["The canal was widened twice, in 1890 and 1950.", "The canal was made wider more than once.", "T", "Twice = more than once."],
  ["The painting was once attributed to Vermeer.", "The painting is definitely by Vermeer.", "F", "‘Once attributed’ suggests it no longer is."]
];

const TRENDS = [
  ["40 → 41 → 40 → 42", "remained relatively stable", ["rose dramatically", "plummeted", "fluctuated wildly"]],
  ["10 → 50 in one year", "soared", ["edged up", "levelled off", "dipped"]],
  ["80 → 20", "plummeted", ["dipped slightly", "rose", "peaked"]],
  ["30 → 31", "edged up", ["surged", "collapsed", "halved"]],
  ["20 → 35 → 18 → 33 → 21", "fluctuated", ["remained constant", "rose steadily", "fell steadily"]],
  ["10 → 20 → 30 → 40", "rose steadily", ["fluctuated", "peaked", "plateaued"]],
  ["50 → 70 → 70 → 70", "levelled off", ["kept rising", "plunged", "fluctuated"]],
  ["60 → 30", "halved", ["doubled", "tripled", "stabilised"]],
  ["15 → 45", "tripled", ["doubled", "halved", "quadrupled"]],
  ["up to 90, then down", "peaked at 90", ["bottomed out at 90", "levelled off at 90", "hit a low of 90"]]
];
