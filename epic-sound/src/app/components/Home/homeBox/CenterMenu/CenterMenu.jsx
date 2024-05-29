import React from "react";
import AlbumWeek from "./components/AlbumWeek/AlbumWeek";
import PopularTracks from "./components/PopularTracks/PopularTracks";
import MainContainer from "./components/MainContainer/MainContainer";

function CenterMenu() {
  return (
    <div className="flex flex-col gap-3 w-[98%] max-w-[98%]">
      <MainContainer />
      <AlbumWeek />
      <PopularTracks />
    </div>
  );
}

export default CenterMenu;
