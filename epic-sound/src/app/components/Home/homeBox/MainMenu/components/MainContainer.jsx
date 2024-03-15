import React from "react";
import Image from "next/image";
import coverImage from "../../../../../../../public/assets/images/big-dollar-sign.jpg";

function MainContainer() {
  return (
    <div className="col-span-3 row-span-5 flex ml-28">
      <div className=" rounded-md">
        <Image src={coverImage} alt="logo"  className="object-none h-64 w-[800px] rounded-xl"/>
      </div>
    </div>
  );
}

export default MainContainer;
