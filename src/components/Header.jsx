import { BiRefresh } from "react-icons/bi";

export const Header = ({ getRandomQuote }) => {
  return (
    <div>
      <nav className="flex justify-end">
        <li className="flex items-center group cur">
          <button onClick={getRandomQuote} className="text-lg flex">
            random
            <BiRefresh className="w-8 h-8 ml-1 rotate-90 group-hover:rotate-180 duration-150" />
          </button>
        </li>
      </nav>
    </div>
  );
};
