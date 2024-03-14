import React from "react";
import PopularTracks from "./PopularTracks";
import MiniPlayer from "./MiniPlayer";

function FooterMenu() {
  return (
    <div className="flex flex-row gap-10">
      <PopularTracks />
      <MiniPlayer />
    </div>
  );
}

export default FooterMenu;
