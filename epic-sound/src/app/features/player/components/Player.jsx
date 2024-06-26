import React, { useRef, useEffect } from "react";
import { useTrackStore } from "@/store/trackStore";
import { RiMenuAddFill, RiHeart3Fill, RiHeart3Line } from "react-icons/ri";
import { IoShuffleSharp } from "react-icons/io5";
import { LuDot } from "react-icons/lu";
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
import nextTrack from "@/lib/functions/nextTrack";
import { usePlaylistTracksStore } from "@/store/playlistTrackStore";
import previousTrack from "@/lib/functions/previousTrack";

function Player() {
  const { playlistTracks } = usePlaylistTracksStore();
  const { playlist, isFirstLoad, setIsFirstLoad } = usePlaylistStore();
  const { isPlaylistShown, setIsPlaylistShown } = useIsPlaylistShownStore();
  const seekBarRef = useRef();
  const { isRepeating, setIsRepeating } = useIsRepeatTrackStore();
  const { audioRef } = useAudioRefStore();
  const { setIsPlaying, isPlaying } = useIsPlayingTrackStore();
  const { track, progress, leftTime, currentTime, setTrack } = useTrackStore();
  ///const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    if (isFirstLoad) {
      setTrack(playlistTracks?.data[0]);
      setIsFirstLoad(!isFirstLoad);
    }
  }, [playlist, playlistTracks]);

  console.log("PLAYTRACKS", playlistTracks);
  console.log("PLAYLIST", playlist);
  console.log("tracks", track);

  return (
    <>
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
            className={`rounded-2xl `}
            style={isPlaylistShown ? { width: "150px" } : { width: "320px" }}
          />
        </div>
        <div id="player-data-contaier">
          <div id="track-data" className="flex justify-between">
            <div className="flex flex-col justify-start">
              <h1
                className={`${
                  isPlaylistShown ? "text-[0.8rem]" : "text-[1rem] "
                } font-light text-[#F7D8D6]`}
              >
                {track?.title}
              </h1>
              <h2
                className={` ${
                  isPlaylistShown ? "text-[0.8rem]" : "text-[0.9rem]"
                } font-thin text-[#F7D8D6]`}
              >
                {track?.user.name}
              </h2>
            </div>
            <div className="flex gap-5">
              <RiMenuAddFill
                className={`${
                  isPlaylistShown ? "text-[1.2rem]" : "text-[1.5rem]"
                }`}
              />
              <RiHeart3Line
                className={`${
                  isPlaylistShown ? "text-[1.2rem]" : "text-[1.5rem]"
                }`}
              />
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
                  <p className="text-[0.8rem] font-thin mt-2">{currentTime}</p>
                  <p className="text-[0.8rem] font-thin mt-2">{leftTime}</p>
                </div>
              </div>
            </div>
            <div
              id="player-button-container"
              className={`flex gap-5 ${isPlaylistShown ? "mb-1" : ""}`}
            >
              <IoShuffleSharp
                className={`text-[2rem] ${
                  playlistTracks === null
                    ? "disabled text-gray-600"
                    : "cursor-pointer hover:text-[#F96985] "
                }`}
              />
              <CgPlayTrackPrev
                className={`text-[2rem] ${
                  playlistTracks === null
                    ? "disabled text-gray-600"
                    : "cursor-pointer hover:text-[#F96985] "
                }`}
                onClick={() => {
                  if (playlistTracks?.data.length) {
                    previousTrack(track, playlistTracks.data, setTrack);
                  }
                }}
              />
              {isPlaying ? (
                <CgPlayPauseO
                  onClick={() => togglePlay(audioRef, setIsPlaying, isPlaying)}
                  className="text-[2rem] cursor-pointer hover:text-[#F96985]"
                />
              ) : (
                <CgPlayButtonO
                  onClick={() => togglePlay(audioRef, setIsPlaying, isPlaying)}
                  className="text-[2.2rem] cursor-pointer hover:text-[#F96985]"
                />
              )}
              <CgPlayTrackNext
                className={`text-[2rem]  ${
                  playlistTracks === null
                    ? "disabled text-gray-600"
                    : "cursor-pointer hover:text-[#F96985] "
                }`}
                onClick={() => {
                  if (playlistTracks?.data.length) {
                    nextTrack(track, playlistTracks.data, setTrack);
                  }
                }}
              />
              <div className="flex flex-col items-center h-[50px]">
                <CgRepeat
                  className={`text-[2rem] cursor-pointer hover:text-[#F96985] ${
                    isRepeating ? "text-[#F96985]" : ""
                  }`}
                  onClick={() =>
                    toggleRepeat(audioRef, setIsRepeating, isRepeating)
                  }
                />
                {isRepeating ? <LuDot className="text-[#F96985]" /> : ""}
              </div>
            </div>
          </div>
        </div>
      </div>
      {playlist && !isPlaylistShown ? (
        <div
          id="playlist-show-button-container"
          className="flex justify-between  pl-10 pr-10 pt-5 ml-24 bg-[#2d1b30] rounded-xl"
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
    </>
  );
}

export default Player;
