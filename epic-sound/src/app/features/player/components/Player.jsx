import React, { useRef } from "react";
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
import { togglePlay } from "@/lib/functions/togglePlay";
import { useAudioRefStore } from "@/store/audioRef";
import { toggleRepeat } from "@/lib/functions/toggleRepeat";
import { useIsRepeatTrackStore } from "@/store/isRepeatTrackStore";
import checkSeekBar from "@/lib/functions/checkSeekBar";
function Player() {
  const seekBarRef = useRef();
  const { isRepeating, setIsRepeating } = useIsRepeatTrackStore();
  const { audioRef } = useAudioRefStore();
  const { setIsPlaying, isPlaying } = useIsPlayingTrackStore();
  const {
    track,
    progress,
    setProgress,
    setLeftTime,
    setCurrentTime,
    leftTime,
    currentTime,
  } = useTrackStore();
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
          <div
            className="w-[800px] bg-[rgba(255,255,255,0.125)] rounded-full h-2.5 mb-10"
            onClick={(e) => checkSeekBar(e, seekBarRef, audioRef)}
            ref={seekBarRef}
          >
            <div
              className="bg-[#F96985] h-2.5 rounded-full"
              style={{ width: `${progress}%` }}
              role="progressbar"
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
            <div className="flex justify-between">
              <p className="text-[0.6rem]">{currentTime}</p>
              <p className="text-[0.6rem]">{leftTime}</p>
            </div>
          </div>
        </div>
        <div id="player-button-container" className="flex gap-5">
          <IoShuffleSharp className="text-[2rem] cursor-pointer hover:text-[#F96985]" />
          <CgPlayTrackPrev className="text-[2rem] cursor-pointer hover:text-[#F96985]" />
          {isPlaying ? (
            <CgPlayPauseO
              onClick={() => togglePlay(audioRef, setIsPlaying, isPlaying)}
              className="text-[2rem] cursor-pointer hover:text-[#F96985]"
            />
          ) : (
            <CgPlayButtonO
              onClick={() => togglePlay(audioRef, setIsPlaying, isPlaying)}
              className="text-[2rem] cursor-pointer hover:text-[#F96985]"
            />
          )}
          <CgPlayTrackNext className="text-[2rem] cursor-pointer hover:text-[#F96985]" />
          <CgRepeat
            className={`text-[2rem] cursor-pointer hover:text-[#F96985] ${
              isRepeating ? "text-[#F96985]" : ""
            }`}
            onClick={() => toggleRepeat(audioRef, setIsRepeating, isRepeating)}
          />
        </div>
      </div>
    </div>
  );
}

export default Player;
