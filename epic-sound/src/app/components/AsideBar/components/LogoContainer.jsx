import React from "react";
import Image from "next/image";
import epicLogo from "../../../../../public/assets/images/play-logo.png";

function LogoContainer() {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <Image
        className="justify-center items-center"
        src={epicLogo}
        alt="logo"
        width={50}
        height={50}
      />
      <div className="flex justify-center items-center gap-1">
        <p className="text-center text-[0.7rem] text-[#F7D8D6]">EPic</p>
        <p className="text-center text-[0.7rem] text-[#F96985]">sound</p>
      </div>
    </div>
  );
}

export default LogoContainer;
