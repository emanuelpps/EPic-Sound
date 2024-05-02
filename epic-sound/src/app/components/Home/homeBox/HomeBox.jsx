import React from "react";
import AsideBar from "../../AsideBar/AsideBar";
import HeaderBar from "../../HeaderBar/HeaderBar";
import MainMenu from "./MainMenu/MainMenu";
import CenterMenu from "./CenterMenu/CenterMenu";

function HomeBox() {
  return (
    <div id="inside-box" className="flex flex-col">
      <div id="main-menu">
        <MainMenu />
      </div>
      <div id="center-menu">
        <CenterMenu />
      </div>
    </div>
  );
}

export default HomeBox;
