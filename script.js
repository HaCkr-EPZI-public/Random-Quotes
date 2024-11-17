const quoteElement = document.getElementById('quote');
const authorElement = document.getElementById('author');
const newQuoteButton = document.getElementById('new-quote');

async function getQuote() {
  try {
    const response = await fetch('https://api.quotable.io/random');
    const data = await response.json();
    quoteElement.textContent = `"${data.content}"`;
    authorElement.textContent = `- ${data.author}`;
  } catch (error) {
    quoteElement.textContent = 'Oops! Something went wrong.';
    authorElement.textContent = '';
    console.error(error);
  }
}

// Load an initial quote
getQuote();

// Fetch a new quote on button click
newQuoteButton.addEventListener('click', getQuote);
