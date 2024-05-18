import React, { useRef } from "react";
import { useTrackStore } from "@/store/trackStore";
import { RiMenuAddFill, RiHeart3Fill, RiHeart3Line } from "react-icons/ri";
import { IoShuffleSharp } from "react-icons/io5";
import {
  CgPlayButtonO,
  CgPlayPauseO,
  CgPlayTrackNext,
  CgPlayTrackPrev,
  CgRepeat,
} from "react-icons/cg";
import { useIsPlayingTrackStore } from "@/store/isPlayingTrackStore";
import { togglePlay } from "@/lib/functions/togglePlay";
import { useAudioRefStore } from "@/store/audioRef";
import { toggleRepeat } from "@/lib/functions/toggleRepeat";
import { useIsRepeatTrackStore } from "@/store/isRepeatTrackStore";
import checkSeekBar from "@/lib/functions/checkSeekBar";
import { useIsPlaylistShownStore } from "@/store/isPlaylistShown";
import { CgChevronDoubleUpR } from "react-icons/cg";
import { usePlaylistStore } from "@/store/playlistStore";

function Player() {
  const { playlist } = usePlaylistStore();
  const { isPlaylistShown, setIsPlaylistShown } = useIsPlaylistShownStore();
  const seekBarRef = useRef();
  const { isRepeating, setIsRepeating } = useIsRepeatTrackStore();
  const { audioRef } = useAudioRefStore();
  const { setIsPlaying, isPlaying } = useIsPlayingTrackStore();
  const { track, progress, leftTime, currentTime } = useTrackStore();

  console.log("playlistshonw", isPlaylistShown);
  return (
    <div
      id="player-container"
      className={`flex gap-12 ${
        isPlaylistShown ? "" : "flex-col"
      } justify-center items-center ml-24 bg-[#2d1b30] rounded-xl h-full`}
    >
      <div
        id="track-image-container"
        className={`${isPlaylistShown ? "" : "mt-1"}`}
      >
        <img
          src={track?.artwork["1000x1000"]}
          className={`rounded-xl `}
          style={isPlaylistShown ? { width: "150px" } : { width: "350px" }}
        />
      </div>
      <div id="player-data-contaier">
        <div id="track-data" className="flex justify-between">
          <div className="flex gap-14">
            <h1
              className={`${
                isPlaylistShown ? "text-[0.8rem]" : "text-[1rem] "
              } font-light text-[#F7D8D6]`}
            >
              {track?.title}
            </h1>
            <h2
              className={` font-semibold ${
                isPlaylistShown ? "text-[0.8rem]" : "text-[1rem]"
              } font-light text-[#F7D8D6]`}
            >
              {track?.user.name}
            </h2>
          </div>
          <div className="flex gap-5">
            <RiMenuAddFill />
            <RiHeart3Line />
          </div>
        </div>
        <div
          id="player-progress"
          className="flex flex-col w-full justify-center items-center"
        >
          <div id="progress-bar" className="mt-1">
            <div
              className={`${
                isPlaylistShown ? "w-[500px]" : "w-[800px]"
              } bg-[rgba(255,255,255,0.125)] rounded-full h-2.5 mb-5`}
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
                <p className="text-[0.6rem] mt-2">{currentTime}</p>
                <p className="text-[0.6rem] mt-2">{leftTime}</p>
              </div>
            </div>
          </div>
          <div
            id="player-button-container"
            className={`flex gap-5 ${isPlaylistShown ? "mb-1" : ""}`}
          >
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
              onClick={() =>
                toggleRepeat(audioRef, setIsRepeating, isRepeating)
              }
            />
          </div>
        </div>
      </div>
      {playlist && !isPlaylistShown ? (
        <div
          id="playlist-show-button-container"
          className="flex justify-between w-full"
        >
          <div className="pl-3">
            <p className="text-lg font-light text-[#F7D8D6]">Playlist</p>
          </div>
          <div className="pr-10">
            <CgChevronDoubleUpR
              className="text-[1.5rem] text-[#F7D8D6] cursor-pointer"
              onClick={() => setIsPlaylistShown(!isPlaylistShown)}
            />
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Player;
