/*import { useEffect, useState } from 'react';

const useYouTubeSearch = () => {
    const [searchResults, setSearchResults] = useState([]);
    //const [searchQuery, setSearchQuery] = useState('');

    const fetchSearchResults = async(searchQuery) => {
        try{
            const response = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${searchQuery}&key=${}`)
            const data = await response.json();
            console.log(data)
            setSearchResults(data.items || [])


        } catch (error) {
            console.error('ERROR FETCHING DATA FROM YOUTUBE API!', error)
        }
    }
    //return { searchResults, fetchSearchResults }
    //fetchSearchResults('trending')
    /*useEffect(() => {
        fetchSearchResults(searchQuery || 'trending');
    }, []);
     
}

export default useYouTubeSearch; 

*/