import React from "react";
import MainContainer from "../CenterMenu/components/MainContainer/MainContainer";
import TrendingPlaylist from "./components/TrendingPlaylist";
import MiniPlayer from "./components/MiniPlayer/MiniPlayer";

function MainMenu(props) {
  return (
    <div className="flex flex-col items-center h-screen gap-3">
      <TrendingPlaylist />
      <MiniPlayer {...props}/>
    </div>
  );
}

export default MainMenu;
