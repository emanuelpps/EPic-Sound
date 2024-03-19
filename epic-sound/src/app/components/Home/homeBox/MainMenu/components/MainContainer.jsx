import React from "react";
import Image from "next/image";
import coverImage from "../../../../../../../public/assets/images/big-dollar-sign.jpg";

function MainContainer() {
  return (
    <div className="col-span-3 row-span-5 flex mt-0">
      <div className=" rounded-md">
        <Image src={coverImage} alt="logo"  className="object-none h-56 w-[700px] rounded-xl"/>
      </div>
    </div>
  );
}

export default MainContainer;
