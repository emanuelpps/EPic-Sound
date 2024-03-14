import React from "react";
import AsideBar from "../../AsideBar/AsideBar";
import HeaderBar from "../../HeaderBar/HeaderBar";
import MainMenu from "./MainMenu/MainMenu";
import CenterMenu from "./CenterMenu/CenterMenu";
import FooterMenu from "./FooterMenu/FooterMenu";

function HomeBox() {
  return (
    <div
      className="flex w-[full] h-[full] backdrop-blur-[6px] backdrop-saturate-[135%] bg-[rgba(23,22,36,0.29)] border rounded-xl border-solid border-[rgba(255,255,255,0.125)];
      -webkit-backdrop-filter: blur(6px) saturate(135%);"
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
        <div id="footer-menu">
          <FooterMenu />
        </div>
      </div>
    </div>
  );
}

export default HomeBox;
