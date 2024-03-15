import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";

function BackFoward() {
  return (
    <div className="flex flex-row justify-center items-center ml-5">
      <button>
        <Link href={"#"}>
          <IoIosArrowBack />
        </Link>
      </button>
      <button>
        <Link href={"#"}>
          <IoIosArrowForward />
        </Link>
      </button>
    </div>
  );
}

export default BackFoward;
