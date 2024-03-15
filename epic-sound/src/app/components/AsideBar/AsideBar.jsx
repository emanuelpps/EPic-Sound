import React from "react";
import LogoContainer from "./components/LogoContainer";
import NavBar from "./components/NavBar";
import ProfileAvatar from "./components/ProfileAvatar";
import Exit from "./components/Exit";

function AsideBar() {
  return (
    <div
      className="flex flex-col backdrop-blur-[9px] backdrop-saturate-[200%] bg-[rgba(23,22,36,0.88)] rounded-l-xl 
    -webkit-backdrop-filter: blur(9px) saturate(200%) w-20"
    >
      <LogoContainer />
      <NavBar />
      <hr className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400" />
      <ProfileAvatar />
      <Exit />
    </div>
  );
}

export default AsideBar;
