import { useState, useEffect } from 'react';

export const useYoutubeSearch = () => {
    const [searchResults, setSearchResults] = useState([]);

    const fetchSearchResults = async (searchQuery) => {
        try {
            const response = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${searchQuery}&key=${import.meta.env.VITE_APIKEY}`);
            const data = await response.json();
            setSearchResults(data.items || []);
        } catch (error) {
            console.error('ERROR FETCHING DATA FROM YOUTUBE API!', error);
        }
    };

    useEffect(() => {
        fetchSearchResults('trending');
    }, []);

    return { searchResults, fetchSearchResults };
};
