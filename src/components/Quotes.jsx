import { BsArrowRight } from "react-icons/bs";

export const Quotes = ({ quote, setShowQuotesByAuthor, quoteTags }) => {
  return (
    <div className="flex justify-center items-center pt-28 max-w-2xl mx-auto">
      <div>
        <div className=" border-l-yellow-500 border-l-8">
          <h1 className="text-2xl md:text-4xl pl-12 md:pl-20">"{quote.content}"</h1>
        </div>
        <a href="#" onClick={() => setShowQuotesByAuthor(true)}>
          <div className="p-10 pl-20 mt-16 group hover:bg-neutral-700 duration-150 flex items-center">
            <div>
              <p className="text-lg md:text-2xl text-zinc-500 font-semibold group-hover:text-white">
                {quote.author}
              </p>
              {quoteTags.map((tag) => (
                <>
                  <span key={quote._id} className="text-sm text-gray-400 pt-2">
                    {tag}
                  </span>
                </>
              ))}
            </div>
            <BsArrowRight className="ml-auto w-6 h-6 fill-white hidden group-hover:block" />
          </div>
        </a>
      </div>
    </div>
  );
};
