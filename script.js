const quotes = {
  encourage: [
    { text: "Encouragement quote 1", author: "Author 1" },
    { text: "Encouragement quote 2", author: "Author 2" },
    { text: "Encouragement quote 3", author: "Author 3" },
  ],
  inspire: [
    { text: "Inspiration quote 1", author: "Author 1" },
    { text: "Inspiration quote 2", author: "Author 2" },
    { text: "Inspiration quote 3", author: "Author 3" },
  ],
  support: [
    { text: "Support quote 1", author: "Author 1" },
    { text: "Support quote 2", author: "Author 2" },
    { text: "Support quote 3", author: "Author 3" },
  ],
  motivate: [
    { text: "Motivation quote 1", author: "Author 1" },
    { text: "Motivation quote 2", author: "Author 2" },
    { text: "Motivation quote 3", author: "Author 3" },
  ],
  praise: [
    { text: "Praise quote 1", author: "Author 1" },
    { text: "Praise quote 2", author: "Author 2" },
    { text: "Praise quote 3", author: "Author 3" },
  ],
};

function generateRandomQuote(option) {
  const quoteList = quotes[option];
  const randomIndex = Math.floor(Math.random() * quoteList.length);
  return quoteList[randomIndex];
}

function displayQuote() {
  const quoteContainer = document.getElementById("quote-container");
  const quoteText = document.getElementById("quote-text");
  const quoteAuthor = document.getElementById("quote-author");
  const quoteOptions = document.getElementById("quote-options");

  const selectedOption = quoteOptions.value;
  const quote = generateRandomQuote(selectedOption);

  quoteText.textContent = quote.text;
  quoteAuthor.textContent = quote.author;
}

const generateButton = document.getElementById("generate-button");
generateButton.addEventListener("click", displayQuote);
