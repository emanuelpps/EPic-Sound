import React from "react";
import MainContainer from "./components/MainContainer";
import TrendingArtist from "./components/TrendingArtist";

function MainMenu() {
  return (
    <div className="grid grid-cols-5 grid-rows-5 gap-4">
      <MainContainer /> <TrendingArtist />
    </div>
  );
}

export default MainMenu;
