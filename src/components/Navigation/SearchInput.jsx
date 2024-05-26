import React, { useContext, useState } from "react";
import { useYoutubeSearch } from "../../hooks/useYoutubeSearch";
import { useNavigate } from "react-router-dom";
import { ResultsContext } from "../../context/ResultsContext";

export const SearchInput = () => {
  //const { searchResults, fetchSearchResults } = useYoutubeSearch();
  const { searchResults, fetchSearchResults } = useContext(ResultsContext);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = async (e) => {
    e.preventDefault();
    await fetchSearchResults(searchTerm);
    navigate("/search", { state: { searchResults } }); // Navigate to the search results page
    console.log(searchResults);
  };

  return (
    <div className="flex mx-5 basis-1/2 justify-center">
      {/* Search Field */}
      <form className="flex items-center h-10 z-10 basis-[90%] max-w-[600px]">
        <label className="flex rounded-l-full px-5 w-full h-full border border-gray-500 focus-within:border focus-within:border-blue-500 focus-within:outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 m-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-black text-left focus:outline-none"
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm}
          />
        </label>

        <button
          type="submit"
          className="rounded-r-full w-16 h-10 px-3 text-center justify-center border border-l-0 border-gray-500 bg-gray-800 hover:bg-gray-700"
          onClick={handleSearch}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </button>
      </form>

      {/* Microphone Button */}
      <button
        type="submit"
        className="z-10 rounded-full bg-gray-800 p-2 mx-3 hover:bg-gray-700"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z"
          />
        </svg>
      </button>
    </div>
  );
};
