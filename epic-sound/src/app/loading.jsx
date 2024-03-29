import React from "react";
import Image from "next/image";
import epicLogo from "../../public/assets/images/play-logo.png";

function loading() {
  return (
    <div className="flex flex-col w-screen h-screen justify-center items-center bg-[#171624]">
      <Image src={epicLogo} alt="logo" width={500} height={500} />
      <p>loading</p>
    </div>
  );
}

export default loading;
