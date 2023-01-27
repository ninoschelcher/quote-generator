import { useEffect, useState } from "react";

export const QuotesByAuthor = ({ author }) => {
  const [authorQuotes, setAuthorQuotes] = useState([]);

  useEffect(() => {
    getQuotesByAuthor();
  }, []);

  const getQuotesByAuthor = () => {
    fetch("https://api.quotable.io/quotes?author=" + author)
      .then((response) => response.json())
      .then((data) => setAuthorQuotes(data.results));
  };

  return (
    <div className="items-center pt-20 max-w-2xl mx-auto mb-12">
      <h1 className="text-2xl md:text-4xl text-zinc-500 font-semibold pb-20">{author}</h1>

      {authorQuotes.map((quote) => (
        <div className=" border-l-yellow-500 border-l-8 mb-20">
          <h2 className="text-2xl md:text-4xl pl-12 md:pl-20">"{quote.content}"</h2>
        </div>
      ))}
    </div>
  );
};
