import React from "react";
import { useState, useContext } from "react";
import { ResultsContext } from "../../context/ResultsContext";



const Subscriptions = () => {
const { searchResults } = useContext(ResultsContext);
const [ displayedResults, setDisplayedResults ] = useState(5); // State to display initial 5 results

const handleShowMore = () => { // Function to show more results
  setDisplayedResults(prevDisplayedResults => prevDisplayedResults + 5);
};


  return (
    <div className="border-b space-y-1 text-sm border-gray-700">
      <p className="rounded-lg p-2 text-lg items-center hover:bg-gray-800 cursor-pointer space-x-5">
        Subscriptions
      </p>
      {searchResults?.slice(0, displayedResults).map((data) => ( // Conditional rendering for searchResults and slice initial 5 results
        <section key={data.id} className="flex my-4 rounded-lg space-x-2 text-sm items-center pl-3 pb-2 cursor-pointer hover:bg-gray-800">
            <img
              src={data.snippet.thumbnails.default.url}
              className=" rounded-full w-[25px] h-[25px] "
              alt="channel_icon"
            />
            <div className="justify-items-center pl-4">
              <p className="text-wrap w-[272px] text-gray-50">{data.snippet.channelTitle}</p>
            </div>
          </section>
      ))}
      {/* Show More */}
      { searchResults?.length > displayedResults && ( // Conditional rendering for "Show More" button
      <div className="flex rounded-lg p-2 items-center text-sm pl-4 hover:bg-gray-800 cursor-pointer space-x-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
        <p className="pl-4" onClick={handleShowMore}>Show More</p>
      </div>
      )}

    </div>
  );
};

export default Subscriptions;
