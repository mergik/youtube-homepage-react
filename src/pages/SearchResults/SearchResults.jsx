import React from "react";
import { useLocation } from "react-router-dom";

const SearchResults = () => {
  const location = useLocation();
  const searchResults = location.state?.searchResults || [];

  console.log(searchResults);

  return (
    <div className="flex flex-col w-full justify-items-start items-center overflow-auto text-xl pt-[7rem] px-5 bg-black"> /* max-w-[1096px]*/
      {searchResults.map((data) => (
        <section className="flex" key={data.id}>
          {/* Thumbnail & Video Length */}
          <div className="relative max-h-[201px] max-w-[360px]  m-2">
            <img
              className="rounded-xl max-h-[201px] max-w-[360px]"
              src={data.snippet.thumbnails.high.url}
              alt="thumbnail"
            />
            <p className="absolute bottom-0 right-0 rounded-[6px] m-2 p-[1.5px] bg-black text-white text-sm z-10">
              10:00
            </p>
          </div>

          <div className="flex flex-col px-1 py-2 text-gray-400">
            {/* Video Title */}
            <p className="text-xl font-normal line-clamp-1 text-white">
                {data.snippet.title}
            </p>

            {/* Views & Date */}
            <div className="flex space-x-1 text-sm items-center">
              <p>{data.statistics.viewCount} Views</p>
              <p>• {data.snippet.publishTime} ago</p>
            </div>

            {/* Channel Info */}
            <div className="flex my-4 space-x-2 text-lg items-center">
              <img
                className="rounded-full w-[25px] h-[25px]"
                src="https://picsum.photos/16"
                alt="channel_icon"
              />
              <p>{data.snippet.channelTitle}</p>
            </div>

            {/* Description */}
            <p className="text-sm line-clamp-1">
              {data.snippet.description}
            </p>
          </div>
        </section>
      ))}
    </div>
  );
};

export default SearchResults;
