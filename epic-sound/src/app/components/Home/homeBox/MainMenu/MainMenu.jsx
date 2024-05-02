import React from "react";
import MainContainer from "../CenterMenu/components/MainContainer/MainContainer";
import TrendingPlaylist from "./components/TrendingPlaylist";
import MiniPlayer from "./components/MiniPlayer/MiniPlayer";

function MainMenu() {
  return (
    <div className="grid grid-cols-1 grid-rows-4 gap-4">
      <TrendingPlaylist />
      <MiniPlayer />
    </div>
  );
}

export default MainMenu;
