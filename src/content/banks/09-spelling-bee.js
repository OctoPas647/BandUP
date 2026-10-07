/* Spelling Bee material (uses SPELL from 03-quickfire-banks). */
const BEE = {
  surnames: ["Thornton", "Gallagher", "Whitfield", "Ashworth", "Kowalski", "Pemberton", "Fairbanks", "Haverford", "Lindqvist", "McBride", "Osborne", "Rutherford", "Delaney", "Kingsley", "Brackett", "Ellwood", "Hargreaves", "Penrose"],
  streets: ["Lynwood", "Barrington", "Chesterfield", "Hollis", "Greaves", "Ashby", "Mortimer", "Quayside", "Riverside", "Bellamy"],
  words: SPELL.map(s => s[0]).concat(["questionnaire", "souvenir", "biodiversity", "itinerary", "excursion", "laboratory", "conservation", "renewable", "deposit", "insurance"])
};
