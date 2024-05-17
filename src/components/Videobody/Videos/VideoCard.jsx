// VideoCard.js
import React, { useContext, useEffect } from "react";
import { ResultsContext } from "../../../context/ResultsContext";
import { useFormatUploadDate, useFormatViewCount } from "../../../hooks/useFormattingHelpers";

export const VideoCard = () => {
    // const { searchResults, fetchSearchResults } = useYoutubeSearch();

    //step 3 consuming ResultsContext
    const { searchResults, fetchSearchResults } = useContext(ResultsContext)

    useEffect(() => {
        fetchSearchResults("news in kenya");
    }, []);

    return (
        <div className="flex flex-row flex-wrap pt-24 px-3">
            {searchResults.map((data) => (
                <section
                    className="flex flex-col justify-center m-2 rounded-lg"
                    key={data.id}
                >
                    <section className="flex flex-col w-[365px] h-[206px]">
                        <img
                            src={data.snippet.thumbnails.high.url}
                            className="w-full h-full cursor-pointer rounded-lg"
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
                            <a
                                href="#"
                                className="text-sm cursor-pointer text-gray-400"
                            >
                                {data.snippet.channelTitle}
                            </a>
                            <div className="flex space-x-2">
                                <p className="text-gray-400 text-sm">
                                    {useFormatViewCount(data.statistics.viewCount)}{' '}
                                    Views
                                </p>
                                <p className="text-gray-400 text-sm">
                                • {useFormatUploadDate(data.snippet.publishedAt)}
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
