import React from "react";
import MainMenu from "./homeBox/MainMenu/MainMenu";
import CenterMenu from "./homeBox/CenterMenu/CenterMenu";

function StartContainer() {
  return (
    <div id="inside-box" className="grid grid-cols-5 grid-rows-4 gap-4">
      <div id="center-menu" className="col-span-4 row-span-3">
        <CenterMenu />
      </div>
      <div id="main-menu" className="row-span-4 col-start-5">
        <MainMenu />
      </div>
    </div>
  );
}

export default StartContainer;
