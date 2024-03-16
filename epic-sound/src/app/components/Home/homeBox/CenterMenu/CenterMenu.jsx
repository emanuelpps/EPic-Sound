import React from "react";
import AlbumWeek from "./components/AlbumWeek/AlbumWeek";
import PopularTracks from "./components/PopularTracks/PopularTracks";
import MiniPlayer from "./components/MiniPlayer/MiniPlayer";

function CenterMenu() {
  return (
    <div className="grid grid-cols-5 grid-rows-5 gap-4 pl-10">
      <AlbumWeek />
      <PopularTracks />
      <MiniPlayer />
    </div>
  );
}

export default CenterMenu;
