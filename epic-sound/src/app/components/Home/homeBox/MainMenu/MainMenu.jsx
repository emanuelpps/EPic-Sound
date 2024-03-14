import React from "react";
import MainContainer from "./MainContainer";
import TrendingArtist from "./TrendingArtist";

function MainMenu() {
  return (
    <div className="flex flex-row gap-10">
      <MainContainer /> <TrendingArtist />
    </div>
  );
}

export default MainMenu;
