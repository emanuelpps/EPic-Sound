import React from "react";
import LogoContainer from "./components/LogoContainer";
import NavBar from "./components/NavBar";
import ProfileAvatar from "./components/ProfileAvatar";
import Exit from "./components/Exit";

function AsideBar() {
  return (
    <div className="flex flex-col backdrop-blur-[9px] backdrop-saturate-[135%] bg-[rgba(91,85,177,0.75)] border rounded-xl border-solid border-[rgba(255,255,255,0.125)];
    -webkit-backdrop-filter: blur(9px) saturate(135%)">
      <LogoContainer />
      <NavBar />
      <ProfileAvatar />
      <Exit />
    </div>
  );
}

export default AsideBar;
