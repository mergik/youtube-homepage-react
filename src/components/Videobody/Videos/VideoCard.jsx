import React from "react";
import { useEffect, useState } from 'react';



export const VideoCard = () => {

    //const { searchResults, fetchSearchResults } = useYouTubeSearch()
    // fetchSearchResults('trending')
    const [searchResults, setSearchResults] = useState([]);
    //const [searchQuery, setSearchQuery] = useState('');

    const fetchSearchResults = async(searchQuery) => {
        try{
            const response = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${searchQuery}&key={}`)
            const data = await response.json();
            console.log(data)
            setSearchResults(data.items || [])


        } catch (error) {
            console.error('ERROR FETCHING DATA FROM YOUTUBE API!', error)
        }
    }
    //return { searchResults, fetchSearchResults }
    //fetchSearchResults('trending')
    useEffect(() => {
        fetchSearchResults('trending');
    }, []);
      

  return (
    <div className="flex flex-row flex-wrap pt-24 px-3">
        {searchResults.map((data) => (
            <section className="flex flex-col justify-center m-2 bg-gray-800 rounded-lg">
            <section className="flex flex-col">
                <img src={data.snippet.thumbnails.high.url} className="w-[365px] h-[206px] cursor-pointer rounded-lg" alt="youtube-thumbnail"/>        
            </section>
            <section className="flex flex-row my-2 cursor-pointer">
                <img src={data.snippet.thumbnails.default.url} className="w-[36px] h-[36px] m-2 ml-0  rounded-full " alt="profile-pic"/>
            <div className="flex flex-col justify-start">
                <p className=" text-wrap text-xl w-[272px]  line-clamp-2  font-semibold text-gray-50">{data.snippet.title}</p>
                <a href="#" className="text-sm cursor-pointer text-gray-400">{data.snippet.channelTitle}</a>
                <div className="flex space-x-2 ">
                    <p className="text-sm font-thin text-gray-400">100k Views</p>
                    <p className="text-sm font-thin text-gray-400">• 8 months</p>
                </div>
            </div>
            </section>
        </section>
        ))}
        
    
    </div>
  )
}