const loadQuotes = () => {
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data => displayQuote(data));
}
const displayQuote = quote => {
    // console.log(quote);
    const quoteElement = document.getElementById('quote');
    quoteElement.innerText = quote.quote; //ekta quote oi link er objet are akta quote id te submit korsi.

}