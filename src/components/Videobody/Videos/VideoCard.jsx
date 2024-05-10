// VideoCard.js
import React, { useEffect } from "react";
import { useYoutubeSearch } from "../../../hooks/useYoutubeSearch";

export const VideoCard = () => {
    const { searchResults, fetchSearchResults } = useYoutubeSearch();

    useEffect(() => {
        fetchSearchResults('trending in kenya');
    }, []);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
            {searchResults.map((data) => (
                <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden" key={data.id}>
                    <img src={data.snippet.thumbnails.high.url} className="w-full" alt="youtube-thumbnail"/>
                    <div className="p-4">
                        <p className="text-xl font-semibold text-gray-200 line-clamp-2">{data.snippet.title}</p>
                        <p className="text-gray-400 text-sm line-clamp-1">{data.snippet.channelTitle}</p>
                        <div className="flex justify-between mt-2">
                            <p className="text-gray-400 text-sm">{data.statistics.viewCount} Views</p>
                            <p className="text-gray-400 text-sm">{data.statistics.likeCount} Likes</p>
                            <p className="text-gray-400 text-sm">{data.statistics.commentCount} Comments</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};
