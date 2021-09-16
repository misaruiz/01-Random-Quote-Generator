/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
Misael Ruiz
******************************************/


/*** 
 * `quotes` array 
 * Includes quotes from Steal Like an Artist from Austin Kleon
***/
const quotes = [
  {
    quote: 'The only art I\'ll ever study is stuff I can steal from.',
    source: 'David Bowie',
    bookChapterName: 'Steal Like an Artist',
    bookChapterNumber: '1',
    bookPage: '6'
  },
  {
    quote: 'Start copying what you love. Copy copy copy copy. At the end of the copy you will find your self.',
    source: 'Yohji Yamamoto',
    bookChapterName: 'Don\'t Wait Until You Are to Get Started',
    bookChapterNumber: '2',
    bookPage: '33'
  },
  {
    quote: 'My interest in making music has been to create something that does not exist that I would like to listen to.',
    source: 'Brian Eno',
    bookChapterName: 'Write the Book You Want to Read',
    bookChapterNumber: '3',
    bookPage: '46'
  },
  {
    quote: 'We don\'t know where we get our ideas from. What we do know is that we do not get them from our laptops.',
    source: 'John Cleese',
    bookChapterName: 'Use Your Hands',
    bookChapterNumber: '4',
    bookPage: '52'
  },
  {
    quote: 'The work you do while you procrastinate is probably the work you should be doing for the rest of your life.',
    source: 'Jessica Hische',
    bookChapterName: 'Side Projects and Hobbies are Important',
    bookChapterNumber: '5',
    bookPage: '64'
  },
  {
    quote: 'Don\'t Worry about people stealing your ideas. If your ideas were any good, you\'ll have to ram them down people\'s throats.',
    source: 'Howard Aiken',
    citation: 'Portraits in Silicon by Robert Slater',
    year: '1987',
    bookChapterName: 'The Secret: Do Good Work and Share it With People',
    bookChapterNumber: '6',
    bookPage: '85'
  },
  {
    quote: 'Distance and difference are the secret tonic of creativity. When we get home, homes is still the same. But something in our mind has been changed, and that canges everything.',
    source: 'Jonah Lehrer',
    bookChapterName: 'Geography is No Longer Our Master',
    bookChapterNumber: '7',
    bookPage: '93'
  },
  {
    quote: 'Complain about the way other people make software by making software.',
    source: 'Andre Torrez',
    bookChapterName: 'Be Nice. (The World is a Small Town.)',
    bookChapterNumber: '8',
    bookPage: '107'
  },
  {
    quote: 'Be regular and orderly in your life, so that you may be violent and original in your work.',
    source: 'Gustave Flaubert',
    citation: 'Correspondence to Gertrude Tennant',
    year: '1876',
    bookChapterName: 'Be Boring. (It\'s the Only Way to Get Work Done.)',
    bookChapterNumber: '9',
    bookPage: '118'
  },
  {
    quote: 'Telling yourself you have all the time in the world, all the money in the world, all the colors in the palette, anything you want—that just kills creativity.',
    source: 'Jack White',
    bookChapterName: 'Creativity is Subtraction',
    bookChapterNumber: '10',
    bookPage: '138'
  }
];


/***
 * `getRandomQuote` function
***/
function getRandomQuote() { 
  var randomNumber = Math.floor( Math.random() * (quotes.length - 1) );
  return quotes[randomNumber];
};
 
 /**
 * Code below is to load a new background color everything time the user clicks 'Show another quote'
 */
let randomValue = () => Math.floor( Math.random() * 256 );

  function getBgColor(value) {
    const color = `rgb( ${value()}, ${value()}, ${value()} )`;
    /** found a way to do it here https://www.w3schools.com/jsref/prop_style_backgroundcolor.asp */
    document.body.style.backgroundColor = color;
    document.getElementById('load-quote').style.backgroundColor = color;
  };

/***
 * `printQuote` function
***/

function printQuote() {
  let quote = getRandomQuote();
  let html = `
  <h2 class="quote">${quote.quote}</h2>
  <footer class="source blockquote-footer mt-2">${quote.source}`;
  if (quote.citation) {
    html += `, ${quote.citation}`;
  };
  if (quote.year) {
    html += `, ${quote.year}`;
  };
  html += `
  <cite title="Source Title">Austin Kleon. "${quote.bookChapterName} (Ch ${quote.bookChapterNumber})" Steal Like an Artist: 10 Things Nobody Told You About Being Creative, Workman Publishing Company Inc., 2012, pp. ${quote.bookPage}.</cite>
  </footer>`;
  document.getElementById('quote-box').innerHTML = html;
  getBgColor(randomValue);
}




// /** Auto-refreshed quotes: The quote on the page automatically updates at regular intervals */
setInterval(printQuote, 10000);



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);



