// VideoCard.js
import React, { useEffect } from "react";
import { useYoutubeSearch } from "../../../hooks/useYoutubeSearch";

export const VideoCard = () => {
  const { searchResults, fetchSearchResults } = useYoutubeSearch();

  useEffect(() => {
    fetchSearchResults("trending in kenya");
  }, []);

  const formatViewsCount = (viewsCount) => {
    if (viewsCount < 1000) {
      return viewsCount;
    } else if (viewsCount < 1000000) {
      const thousands = Math.floor(viewsCount / 1000);
      const remainder = viewsCount % 1000;
      const decimal = remainder >= 100 ? `.${Math.floor(remainder / 100)}` : "";
      return `${thousands}${decimal}k`;
    } else if (viewsCount < 1000000000) {
      const millions = Math.floor(viewsCount / 1000000);
      const remainder = viewsCount % 1000000;
      const decimal =
        remainder >= 100000 ? `.${Math.floor(remainder / 100000)}` : "";
      return `${millions}${decimal}m`;
    } else {
      const billions = Math.floor(viewsCount / 1000000000);
      const remainder = viewsCount % 1000000000;
      const decimal =
        remainder >= 100000000 ? `.${Math.floor(remainder / 100000000)}` : "";
      return `${billions}${decimal}b`;
    }
  };

  return (
    <div className="flex flex-row flex-wrap pt-24 px-3">
      {searchResults.map((data) => (
        <section
          className="flex flex-col justify-center m-2 rounded-lg"
          key={data.id}
        >
          <section className="flex flex-col">
            <img
              src={data.snippet.thumbnails.high.url}
              className="w-[365px] h-[206px] cursor-pointer rounded-lg"
              alt="youtube-thumbnail"
            />
          </section>
          <section className="flex flex-row my-2 cursor-pointer">
            <img
              src={data.snippet.thumbnails.default.url}
              className="w-[36px] h-[36px] m-2 ml-0  rounded-full "
              alt="profile-pic"
            />
            <div className="flex flex-col justify-start">
              <p className="text-wrap text-xl w-[272px]  line-clamp-2  font-semibold text-gray-50">
                {data.snippet.title}
              </p>
              <a href="#" className="text-sm cursor-pointer text-gray-400">
                {data.snippet.channelTitle}
              </a>
              <div className="flex space-x-2">
                <p className="text-gray-400 text-sm">
                  {formatViewsCount(data.statistics.viewCount)} Views
                </p>
                {/* <p className="text-gray-400 text-sm">{data.statistics.likeCount} Likes</p>
                        <p className="text-gray-400 text-sm">{data.statistics.commentCount} Comments</p> */}
              </div>
            </div>
          </section>
        </section>
      ))}
    </div>
  );
};