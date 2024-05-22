import React from "react";
import { VideoCard } from "./Videos/VideoCard";
import Chip from "./ChipsMenu/Chip";


export const Videobody = () => {
  
  return (
    <div className="relative flex flex-col bg-black mt-16 w-screen">
      <Chip />
      <VideoCard />
    </div>
  )
}
