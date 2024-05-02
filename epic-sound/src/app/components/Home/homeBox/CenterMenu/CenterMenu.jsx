import React from "react";
import AlbumWeek from "./components/AlbumWeek/AlbumWeek";
import PopularTracks from "./components/PopularTracks/PopularTracks";
import MainContainer from "./components/MainContainer/MainContainer";

function CenterMenu() {
  return (
    <div className="grid grid-cols-4 grid-rows-4 gap-4">
      <MainContainer />
      <AlbumWeek />
      <PopularTracks />
    </div>
  );
}

export default CenterMenu;
