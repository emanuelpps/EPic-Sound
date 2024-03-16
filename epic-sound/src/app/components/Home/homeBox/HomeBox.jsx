import React from "react";
import AsideBar from "../../AsideBar/AsideBar";
import HeaderBar from "../../HeaderBar/HeaderBar";
import MainMenu from "./MainMenu/MainMenu";
import CenterMenu from "./CenterMenu/CenterMenu";

function HomeBox() {
  return (
    <div
      className="flex w-auto h-[full]  backdrop-blur-[9px] backdrop-saturate-[200%] bg-[rgba(23,22,36,0.88)] rounded-[50px] 
      -webkit-backdrop-filter: blur(9px) saturate(200%)"
    >
      <aside id="aside-container">
        <AsideBar />
      </aside>
      <div id="inside-box">
        <div id="header">
          <HeaderBar />
        </div>
        <div id="main-menu">
          <MainMenu />
        </div>
        <div id="center-menu">
          <CenterMenu />
        </div>
      </div>
    </div>
  );
}

export default HomeBox;
