// FSJS - Random Quote Generator

// Create the array of quote objects and name it quotes
var quotes = [
{ quote: "And in the morning, I'm making waffles!", source: "Donkey",
citation: "Shrek", year: 2001 },
{ quote: "Yayyy! I'm a llama again!! Oh wait...", source: "Kuzco",
citation: "The Emperor's New Groove", year: 2000 },
{ quote: "Help me I'm poor!", source: "Kristen Wiig",
citation: "Bridesmaids", year: 2011 },
{ quote: "It's an avocado!!! Thaaaankkkss!", source: "Vine" },
{ quote: "Road work ahead?! Well yeah I sure hope it does!", source: "Vine" }
]


// Create the getRandomQuote function and name it getRandomQuote
function getRandomQuote (array) {
var randomQuote = array[Math.floor(Math.random() * quotes.length)];
return randomQuote;
}
// Checking to make sure the random quote function works properly
console.log(getRandomQuote(quotes));

// Create the printQuote funtion and name it printQuote
function printQuote () {
var randomQuote = getRandomQuote(quotes);
var stringOfQuoteProperties;
stringOfQuoteProperties += "<p class='quote'>" + randomQuote.quote + "</p>";
stringOfQuoteProperties += "<p class='source'>" + randomQuote.source;

//Determining if the object contains a citation or year and adding that html if it does
if (randomQuote.citation) {
  stringOfQuoteProperties += "<span class='citation'>" + randomQuote.citation + "</span>";
}
else { stringOfQuoteProperties += " "}

if (randomQuote.year) {
  stringOfQuoteProperties += "<span class='year'>" + randomQuote.year + "</span>"
}
else { stringOfQuoteProperties += " "}

/* Adding the final html paragraph syntax - as it's not included in the earlier parts of the string, so that if a quote
does or does not have a citation or year, it will still be formatted in the same div.
*/
stringOfQuoteProperties += "</p>"

document.getElementById('quote-box').innerHTML = stringOfQuoteProperties;
}


// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
