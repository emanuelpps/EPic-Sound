import React from "react";
import MainContainer from "./components/MainContainer";
import TrendingArtist from "./components/TrendingArtist";

function MainMenu() {
  return (
    <div className="grid grid-cols-4 grid-rows-5 gap-2">
      <MainContainer /> <TrendingArtist />
    </div>
  );
}

export default MainMenu;
