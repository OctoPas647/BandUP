/* Writing Lab prompts. t1 items carry a chart (ch), t2 items a question type (ty). */
const WLAB = {
  t1: [
    { title: "Coffee shops vs tea rooms", ch: { t: "line", title: "Number of coffee shops and tea rooms in a city", x: ["2000", "2005", "2010", "2015", "2020"], s: [{ n: "Coffee shops", v: [40, 75, 120, 160, 210] }, { n: "Tea rooms", v: [60, 55, 50, 38, 30] }] }, p: "The graph shows the number of coffee shops and tea rooms in one city between 2000 and 2020. Summarise the information by selecting and reporting the main features, and make comparisons where relevant." },
    { title: "Household spending", ch: { t: "pie", title: "Average household spending, 2024 (%)", s: [{ n: "Housing", v: 32 }, { n: "Food", v: 18 }, { n: "Transport", v: 15 }, { n: "Leisure", v: 12 }, { n: "Energy", v: 9 }, { n: "Other", v: 14 }] }, p: "The pie chart shows how an average household's spending was divided in 2024. Summarise the information by selecting and reporting the main features." },
    { title: "University degrees by subject", ch: { t: "bar", title: "Graduates by subject (thousands)", x: ["Engineering", "Business", "Arts", "Medicine", "Computing"], s: [{ n: "Men", v: [42, 30, 15, 12, 38] }, { n: "Women", v: [14, 34, 32, 18, 11] }] }, p: "The chart compares the number of male and female graduates in five subjects. Summarise the information and make comparisons where relevant." },
    { title: "Making chocolate", ch: { t: "flow", title: "From cocoa pod to chocolate bar", steps: ["Pods harvested", "Beans fermented (5–7 days)", "Dried in sun", "Roasted", "Ground into paste", "Mixed with sugar & milk", "Moulded into bars"] }, p: "The diagram shows how chocolate is produced. Summarise the information by selecting and reporting the main features." },
    { title: "Energy sources", ch: { t: "table", title: "Electricity generation by source (%)", head: ["Source", "2005", "2015", "2025"], rows: [["Coal", "55", "38", "12"], ["Gas", "25", "30", "28"], ["Nuclear", "15", "17", "18"], ["Wind & solar", "2", "12", "38"], ["Other", "3", "3", "4"]] }, p: "The table shows the sources used to generate electricity in one country in three years. Summarise the information and make comparisons where relevant." },
    { title: "Museum visitors by age", ch: { t: "bar", title: "Museum visitors by age group (%)", x: ["Under 18", "18–34", "35–54", "55+"], s: [{ n: "Science museum", v: [38, 22, 26, 14] }, { n: "Art gallery", v: [8, 27, 30, 35] }] }, p: "The chart shows the age profile of visitors to a science museum and an art gallery. Summarise the information and make comparisons where relevant." }
  ],
  t2: [
    { ty: "Opinion", p: "Some people believe that studying at university abroad is more valuable than studying in your home country. To what extent do you agree or disagree?" },
    { ty: "Discussion", p: "Some people think governments should invest in space exploration. Others believe the money should be spent on problems on Earth. Discuss both views and give your own opinion." },
    { ty: "Advantages/Disadvantages", p: "More and more people are choosing to work from home. Do the advantages of this trend outweigh the disadvantages?" },
    { ty: "Problem/Solution", p: "In many countries, young people are spending less time outdoors. What are the causes of this, and what can be done to encourage them to be more active?" },
    { ty: "Two-part", p: "Artificial intelligence is increasingly used to make decisions in areas such as hiring and lending. Why is this happening? Is it a positive or negative development?" },
    { ty: "Opinion", p: "University education should be free for all students. Do you agree or disagree?" },
    { ty: "Discussion", p: "Some argue that the best way to learn a language is to live in a country where it is spoken. Others think classroom study is more effective. Discuss both views and give your opinion." },
    { ty: "Opinion", p: "Technology has made people less creative. To what extent do you agree or disagree?" },
    { ty: "Problem/Solution", p: "Traffic congestion is a growing problem in large cities. What are the main causes, and what solutions can you suggest?" },
    { ty: "Two-part", p: "Many people now get their news from social media rather than newspapers. What are the reasons for this? What problems could it cause?" },
    { ty: "Advantages/Disadvantages", p: "Some schools now teach mainly through computer-based learning. What are the advantages and disadvantages of this?" },
    { ty: "Opinion", p: "Governments should require all citizens to learn first aid. To what extent do you agree or disagree?" }
  ]
};
