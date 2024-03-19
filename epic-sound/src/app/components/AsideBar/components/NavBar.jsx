import React from "react";
import { LuHome } from "react-icons/lu";
import { BiLibrary } from "react-icons/bi";
import { IoIosMusicalNotes } from "react-icons/io";
import Link from "next/link";

function NavBar() {
  return (
    <div
      id="nav-bar-container"
      className="mt-20 mb-10 flex flex-col gap-10 justify-center items-center"
    >
      <div id="home-icon-container">
        <button>
          <Link href={"#"}>
            <LuHome className="hover:text-[#f88ea0] text-xl" />
          </Link>
        </button>
      </div>
      <div
        id="library-icon-container"
        className="flex justify-center items-center"
      >
        <button>
          <Link href={"#"}>
            <BiLibrary className="hover:text-[#f88ea0] text-xl" />
          </Link>
        </button>
      </div>
      <div
        id="music-icon-container"
        className="flex justify-center items-center"
      >
        <button>
          <Link href={"#"}>
            <IoIosMusicalNotes className="hover:text-[#f88ea0] text-xl" />
          </Link>
        </button>
      </div>
    </div>
  );
}

export default NavBar;
