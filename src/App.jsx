import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { Quotes } from "./components/Quotes";
import { QuotesByAuthor } from "./components/QuotesByAuthor";
import { Footer } from "./components/Footer";

export const App = () => {
  const [quote, setQuote] = useState([]);
  const [quoteTags, setQuoteTags] = useState([]);
  const [showQuotesByAuthor, setShowQuotesByAuthor] = useState(false);

  useEffect(() => {
    getRandomQuote();
  }, []);

  const getRandomQuote = () => {
    fetch("https://api.quotable.io/random")
      .then((response) => response.json())
      .then((data) => {
        setQuote(data), setQuoteTags(data.tags);
      });

    setShowQuotesByAuthor(false);
  };

  return (
    <div className="px-20 py-8 min-h-screen flex flex-col">
      <Header getRandomQuote={getRandomQuote} />
      {showQuotesByAuthor ? (
        <QuotesByAuthor author={quote.author} />
      ) : (
        <Quotes quote={quote} quoteTags={quoteTags} setShowQuotesByAuthor={setShowQuotesByAuthor} />
      )}
      <Footer />
    </div>
  );
};
