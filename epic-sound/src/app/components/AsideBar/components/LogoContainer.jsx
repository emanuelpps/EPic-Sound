import React from "react";
import Image from "next/image";
import epicLogo from "../../../../../public/assets/images/play-logo.png";

function LogoContainer() {
  return (
    <div className="flex justify-center items-center w-full h-full">
      <Image
        className="justify-center items-center"
        src={epicLogo}
        alt="logo"
        width={50}
        height={50}
      />
    </div>
  );
}

export default LogoContainer;
