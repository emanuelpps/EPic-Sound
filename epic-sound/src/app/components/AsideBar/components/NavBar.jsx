"use client";
import React from "react";
import { LuHome } from "react-icons/lu";
import { BiLibrary } from "react-icons/bi";
import { IoIosMusicalNotes } from "react-icons/io";
import Link from "next/link";
import { usePageSelectionStore } from "@/store/pageSelectionStore";
import { useTrackStore } from "@/store/trackStore";
import { usePlaylistStore } from "@/store/playlistStore";
import { PiPlaylist } from "react-icons/pi";

function NavBar() {
  const { track } = useTrackStore();
  const { playlist } = usePlaylistStore();
  const { page, setPage } = usePageSelectionStore();

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
      <div id="playlist-icon-container">
        <button onClick={() => setPage(2)}>
          <PiPlaylist
            className={`${
              page == 2 ? "text-[#F96985]" : "text-[#F7D8D6]"
            } hover:text-[#f88ea0] text-xl`}
          />
        </button>
      </div>
      <div
        id="music-icon-container"
        className="flex justify-center items-center"
      >
        {track || playlist ? (
          <button onClick={() => setPage(3)}>
            <IoIosMusicalNotes
              className={`${
                page == 3 ? "text-[#F96985]" : "text-[#F7D8D6]"
              } hover:text-[#f88ea0] text-xl`}
            />
          </button>
        ) : (
          <button disabled={true}>
            <IoIosMusicalNotes className="text-xl text-gray-600" />
          </button>
        )}
      </div>
    </div>
  );
}

export default NavBar;
