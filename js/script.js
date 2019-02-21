/******************************************
A Random Quote Generator
******************************************/

const quotes = [
  {
    // #1
    quote: `I hope you learn to make it on your own
    And if you love yourself just know you'll never be alone
    I hope that you get everything you want and that you chose
    I hope that it's the realest thing that you ever know`,
    source: "Big Sean",
    year: 2015,
    category: "music"
  },
  {
    // #2
    quote: "I change myself, I change the world",
    source: "Gloria Anzaldua",
    year: 1987,
    category: "sociology"
  },
  {
    // #3
    quote: `What's the price for a black man life?
    I check the toe tag, not one zero in sight
    I turn the TV on, not one hero in sight
    Unless he dribble or he fiddle with mics`,
    source: "J Cole",
    year: 2014,
    category: "music"
  },
  {
    // #4
    quote: `I think if you do something and it turns out pretty good, then you should go do something else wonderful, not dwell on it for too long. Just figure out what's next.`,
    source: "Steve Jobs",
    year: 2006,
    category: "leadership"
  },
  {
    // #5
    quote: `Patience and perseverance have a magical effect before which
    difficulties disappear and obstacles vanish.`,
    source: "John Quincy Adams",
    category: "motivation"
  },
  {
    // #6
    quote: `Arguing that you don't care about the right to privacy because you have nothing to hide is no different than saying you don't care about free speech because you have nothing to say.`,
    source: "Edward Snowden",
    category: "leadership"
  },
  {
    // #7
    quote: `When you want something, all the universe conspires in helping you to achieve it.`,
    source: "Paulo Coelho, The Alchemist",
    category: "motivation"
  },
  {
    // #8
    quote: `Your desires, whether or not you achieve them will determine who you become.`,
    source: "Octavia E. Butler, Parable of the Talents",
    category: "motivation"
  },
  {
    // #9
    quote: `Remember that wherever your heart is, there you will find your treasure.`,
    source: "Paulo Coelho, The Alchemist",
    category: "motivation"
  },
];

//Using MDN's implementation to get min-inclusive, max-exclusive random whole number
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

let lastSeenQuotes = new Set();

function getRandomQuote() {
  // if more 3 quotes have been seen, reset lastSeenQuotes
  if (lastSeenQuotes.size >= 3) lastSeenQuotes.clear();

  let randomIndex = getRandomInt(0, quotes.length);
  //if quote has been seen in last few clicks, change quote index
  while (lastSeenQuotes.has(randomIndex)){
    randomIndex = getRandomInt(0, quotes.length);
  }
  // add quoteIndex to lastSeenQuotes
  lastSeenQuotes.add(randomIndex);
  // returns quote object of {quote, source, year, category}
  return quotes[randomIndex];
}

function printQuote() {
  // get random quote through getRandomQuote func
  const quoteObject = getRandomQuote();
  // get random RBG color using our randomInt function
  let r = getRandomInt(0, 255);
  let g = getRandomInt(0, 255);
  let b = getRandomInt(0, 255);
  const randomColor = `rgb(${r},${g},${b})`

  // destruct quote properties from quoteObject
  const {quote, source, category, year} = quoteObject;
  // construct htmlString using template literals + str interpolation
  const htmlString =
  `<p class="quote">${quote}</p>
  <p class="source">${source}${year === undefined ? '' : `<span class="year">${year}</span>`}</p>`;
  // set quote-box innerHTML to htmlString
  const quoteBoxDOM = document.getElementById('quote-box');
  quoteBoxDOM.innerHTML = htmlString;
  // set body background color to a random RGB color
  document.getElementsByTagName("body")[0].style.backgroundColor = randomColor;
}

document.getElementById('loadQuote').addEventListener("click", printQuote, false);

setInterval(() => {
  printQuote();
}, 10000)