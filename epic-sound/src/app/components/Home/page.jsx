import React, { useState } from "react";
import MainMenu from "./homeBox/MainMenu/MainMenu";
import CenterMenu from "./homeBox/CenterMenu/CenterMenu";

function StartContainer() {
  const [trackId, setTrackId] = useState();
  return (
    <div id="inside-box" className="grid grid-cols-5 grid-rows-4 gap-4">
      <div id="center-menu" className="col-span-4 row-span-3">
        <CenterMenu trackId={trackId} setTrackId={setTrackId} />
      </div>
      <div id="main-menu" className="row-span-4 col-start-5">
        <MainMenu trackId={trackId} setTrackId={setTrackId} />
      </div>
    </div>
  );
}

export default StartContainer;
