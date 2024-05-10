import { useState, useEffect } from 'react';

export const useYoutubeSearch = () => {
    const [searchResults, setSearchResults] = useState([]);

    const fetchSearchResults = async (searchQuery) => {
        try {
            const response = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=50&q=${searchQuery}&key=${import.meta.env.VITE_APIKEY}`);
            const data = await response.json();
            
            const videoIds = data.items.map(item => item.id.videoId).join(',');

            const videoDetailsResponse = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${videoIds}&key=${import.meta.env.VITE_APIKEY}`);
            const videoDetailsData = await videoDetailsResponse.json();

            const searchResultsWithDetails = data.items.map((item, index) => {
                return {
                    id: item.id.videoId,
                    snippet: item.snippet,
                    statistics: videoDetailsData.items[index].statistics
                };
            });

            setSearchResults(searchResultsWithDetails);
        } catch (error) {
            console.error('ERROR FETCHING DATA FROM YOUTUBE API!', error);
        }
    };

    return { searchResults, fetchSearchResults };
};
