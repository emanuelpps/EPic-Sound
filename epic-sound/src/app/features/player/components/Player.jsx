import React from "react";
import { useTrackStore } from "@/store/trackStore";
import { RiMenuAddFill } from "react-icons/ri";
import { RiHeart3Line } from "react-icons/ri";
import { RiHeart3Fill } from "react-icons/ri";
import { IoShuffleSharp } from "react-icons/io5";
import { CgPlayButtonO } from "react-icons/cg";
import { CgPlayPauseO } from "react-icons/cg";
import { CgPlayTrackNext } from "react-icons/cg";
import { CgPlayTrackPrev } from "react-icons/cg";
import { CgRepeat } from "react-icons/cg";
import { useIsPlayingTrackStore } from "@/store/isPlayingTrackStore";

function Player() {
  const { setIsPlaying, isPlaying } = useIsPlayingTrackStore();
  const { track } = useTrackStore();
  console.log("track", track);
  return (
    <div
      id="player-container"
      className="flex flex-col justify-center items-center row-start-1 ml-24 bg-[#2d1b30] rounded-xl"
    >
      <div id="track-image-container">
        <img
          src={track?.artwork["1000x1000"]}
          className="rounded-xl w-[250px]"
        />
      </div>
      <div id="player-data-contaier" className="flex w-full justify-evenly">
        <div>
          <h1>{track?.title}</h1>
          <h2>{track?.user.name}</h2>
        </div>
        <div className="flex gap-5">
          <RiMenuAddFill />
          <RiHeart3Line />
        </div>
      </div>
      <div className="flex flex-col w-full justify-center items-center">
        <div id="progress-bar" className="mt-2">
          <div className="w-[800px] bg-[rgba(255,255,255,0.125)] rounded-full h-2.5 mb-10">
            <div
              className="bg-[#F96985] h-2.5 rounded-full"
              style={{ width: "45%" }}
              role="progressbar"
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              {/*<audio ref={audioRef} src={trackData} />*/}
            </div>
            <div className="flex justify-between">
              <p className="text-[0.6rem]">2:30</p>
              <p className="text-[0.6rem]">4:30</p>
            </div>
          </div>
        </div>
        <div id="player-button-container" className="flex gap-5">
          <IoShuffleSharp className="text-[2rem] cursor-pointer hover:text-[#F96985]" />
          <CgPlayTrackPrev className="text-[2rem] cursor-pointer hover:text-[#F96985]" />
          {isPlaying ? (
            <CgPlayPauseO
              onClick={() => setIsPlaying(!isPlaying)}
              className="text-[2rem] cursor-pointer hover:text-[#F96985]"
            />
          ) : (
            <CgPlayButtonO
              onClick={() => setIsPlaying(!isPlaying)}
              className="text-[2rem] cursor-pointer hover:text-[#F96985]"
            />
          )}
          <CgPlayTrackNext className="text-[2rem] cursor-pointer hover:text-[#F96985]" />
          <CgRepeat className="text-[2rem] cursor-pointer hover:text-[#F96985]" />
        </div>
      </div>
    </div>
  );
}

export default Player;
