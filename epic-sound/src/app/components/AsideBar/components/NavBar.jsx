"use client";
import React from "react";
import { LuHome } from "react-icons/lu";
import { BiLibrary } from "react-icons/bi";
import { IoIosMusicalNotes } from "react-icons/io";
import Link from "next/link";
import { usePageSelectionStore } from "@/store/pageSelectionStore";

function NavBar() {
  const { page, setPage } = usePageSelectionStore();

  console.log("page", page);
  return (
    <div
      id="nav-bar-container"
      className="mt-20 mb-10 flex flex-col gap-10 justify-center items-center"
    >
      <div id="home-icon-container">
        <button onClick={() => setPage(0)}>
          <LuHome
            className={`${
              page == 0 ? "text-[#F96985]" : "text-[#F7D8D6]"
            } hover:text-[#f88ea0] text-xl`}
          />
        </button>
      </div>
      <div
        id="library-icon-container"
        className="flex justify-center items-center"
      >
        <button onClick={() => setPage(1)}>
          <BiLibrary
            className={`${
              page == 1 ? "text-[#F96985]" : "text-[#F7D8D6]"
            } hover:text-[#f88ea0] text-xl`}
          />
        </button>
      </div>
      <div
        id="music-icon-container"
        className="flex justify-center items-center"
      >
        <button onClick={() => setPage(2)}>
          <IoIosMusicalNotes
            className={`${
              page == 2 ? "text-[#F96985]" : "text-[#F7D8D6]"
            } hover:text-[#f88ea0] text-xl`}
          />
        </button>
      </div>
    </div>
  );
}

export default NavBar;
