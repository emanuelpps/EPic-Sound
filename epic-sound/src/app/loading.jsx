import React from "react";
import Image from "next/image";
import epicLogo from "../../public/assets/images/play-logo.png";

function loading() {
  return (
    <div className="flex flex-col w-screen h-screen justify-center items-center bg-[#171624]">
      <Image src={epicLogo} alt="logo" width={100} height={100} />
      <div className="flex justify-center items-center gap-1">
        <p className="text-center text-[2rem] text-[#F7D8D6]">EPic</p>
        <p className="text-center text-[2rem] text-[#F96985]">sound</p>
      </div>
      <div class="loadership_MPURR">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <p>loading</p>
    </div>
  );
}

export default loading;
