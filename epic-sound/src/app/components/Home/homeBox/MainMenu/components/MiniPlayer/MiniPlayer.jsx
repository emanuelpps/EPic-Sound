import React, { useState, useRef, useEffect } from "react";
import { RiMenuAddFill, RiHeart3Fill, RiHeart3Line } from "react-icons/ri";
import { IoShuffleSharp } from "react-icons/io5";
import {
  CgPlayButtonO,
  CgPlayPauseO,
  CgPlayTrackNext,
  CgPlayTrackPrev,
} from "react-icons/cg";
import { CgRepeat } from "react-icons/cg";
import streamTrack from "@/services/streamTrack";
import { useTrackStore } from "@/store/trackStore";
import { useIsPlayingTrackStore } from "@/store/isPlayingTrackStore";
import seekBarFormat from "@/lib/utils/seekBarFormat";
import formatCurrentTime from "@/lib/utils/formatCurrentTime";
import formatLeftTime from "@/lib/utils/formatLeftTime";
import checkSeekBar from "@/lib/functions/checkSeekBar";
import { togglePlay } from "@/lib/functions/togglePlay";
import { useAudioRefStore } from "@/store/audioRef";
import { useIsRepeatTrackStore } from "@/store/isRepeatTrackStore";
import { toggleRepeat } from "@/lib/functions/toggleRepeat";
import { usePageSelectionStore } from "@/store/pageSelectionStore";
import { usePlaylistTracksStore } from "@/store/playlistTrackStore";
import nextTrack from "@/lib/functions/nextTrack";

function MiniPlayer(props) {
  const { playlistTracks } = usePlaylistTracksStore();
  const { page } = usePageSelectionStore();
  const { setIsRepeating, isRepeating } = useIsRepeatTrackStore();
  const { setAudioRef } = useAudioRefStore();
  const {
    track,
    progress,
    setProgress,
    leftTime,
    setCurrentTime,
    currentTime,
    setLeftTime,
    setTrack,
  } = useTrackStore();
  const { setIsPlaying, isPlaying } = useIsPlayingTrackStore();
  const audioRef = useRef();
  const seekBarRef = useRef();
  const [isLiked, setIsLiked] = useState(false);
  const [trackData, setTrackData] = useState({});
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  useEffect(() => {
    if (track?.id) {
      (async () => {
        try {
          const response = await streamTrack(track.id);
          setAudioRef(audioRef);
          setTrackData(response);
          if (audioRef.current.src) {
            togglePlay(audioRef, setIsPlaying, isPlaying);
            setIsFirstLoad(false);
          }
        } catch (error) {
          console.log(error);
        }
      })();
    }
  }, [track?.id, isFirstLoad]);

  useEffect(() => {
    if (trackData) {
      audioRef.current.src = trackData;
      togglePlay(audioRef, setIsPlaying, isPlaying);
    }
  }, [trackData]);

  const onPlaying = () => {
    const { duration, currentTime } = audioRef.current;
    setProgress(seekBarFormat(duration, currentTime));
    setCurrentTime(formatCurrentTime(currentTime, duration));
    setLeftTime(formatLeftTime(duration, currentTime));
  };

  return (
    <div
      className={`${
        track && page !== 2 ? "justify-center items-center" : "hidden"
      }`}
    >
      <div className="flex items-center w-full">
        {track ? <h2 className="text-start">Now Playing</h2> : <></>}
      </div>
      <div
        className={`backdrop-blur-[10px] backdrop-saturate-[38%] bg-[rgba(248,142,160,0.22)] border rounded-xl border-[rgba(255,255,255,0.125)]
        -webkit-backdrop-filter: blur(10px) saturate(38%) ${
          track ? "h-[325px] w-[250px]" : "pb-10"
        }  flex flex-col justify-center items-center`}
      >
        <div className="flex justify-center items-center mt-5 w-full">
          {track?.artwork && track.artwork["480x480"] && (
            <img
              src={track.artwork["480x480"]}
              alt="logo"
              className="object-cover rounded-2xl h-[140px]"
            />
          )}
        </div>
        <div id="player" className="ml-10 mr-10">
          <div className="flex flex-row w-full justify-around items-center mt-5">
            <div className="flex flex-col w-[fit-content] items-center justify-center">
              <h3 className="text-[0.7rem] w-40 min-w-20 max-w-40 ">
                {track?.title}
              </h3>
              <p className="font-thin text-[0.7rem] w-40 min-w-20 max-w-40 ">
                {track?.user?.name}
              </p>
            </div>
            <div className="flex flex-row w-full items-center justify-center gap-2">
              <RiMenuAddFill
                className={`${track ? "cursor-pointer" : "hidden"}`}
              />
              {isLiked ? (
                <RiHeart3Fill
                  onClick={() => setIsLiked(!isLiked)}
                  className={`${track ? "cursor-pointer" : "hidden"}`}
                />
              ) : (
                <RiHeart3Line
                  onClick={() => setIsLiked(!isLiked)}
                  className={`${track ? "cursor-pointer" : "hidden"}`}
                />
              )}
            </div>
          </div>
          <div id="player-icons" className="flex flex-col w-full">
            <div id="progress-bar" className="mt-2">
              <div
                className="w-full bg-[rgba(255,255,255,0.125)] rounded-full h-2.5 "
                onClick={(e) => checkSeekBar(e, seekBarRef, audioRef)}
                ref={seekBarRef}
              >
                <div
                  className="bg-[#F96985] h-2.5 rounded-full"
                  role="progressbar"
                  style={{ width: `${progress}%` }}
                >
                  <audio
                    ref={audioRef}
                    src={trackData}
                    onTimeUpdate={onPlaying}
                    onEnded={() => {
                      if (playlistTracks?.data.length)
                        nextTrack(track, playlistTracks.data, setTrack);
                    }}
                    autoPlay
                  />
                </div>
                <div className="flex justify-between">
                  <p className="text-[0.6rem]">{currentTime}</p>
                  <p className="text-[0.6rem]">{leftTime}</p>
                </div>
              </div>
            </div>
            <div
              id="player-buttons"
              className="flex flex-row w-full mt-5 justify-between items-center"
            >
              <div>
                <IoShuffleSharp className="text-xl cursor-pointer hover:text-[#F96985]" />
              </div>
              <div>
                <CgPlayTrackPrev className="text-xl cursor-pointer hover:text-[#F96985]" />
              </div>
              <div>
                {isPlaying ? (
                  <CgPlayPauseO
                    onClick={() =>
                      togglePlay(audioRef, setIsPlaying, isPlaying)
                    }
                    className="text-[2.5rem] cursor-pointer hover:text-[#F96985]"
                  />
                ) : (
                  <CgPlayButtonO
                    className="text-[2.5rem] cursor-pointer hover:text-[#F96985]"
                    onClick={() =>
                      togglePlay(audioRef, setIsPlaying, isPlaying)
                    }
                  />
                )}
              </div>
              <div>
                <CgPlayTrackNext className="text-xl cursor-pointer hover:text-[#F96985]" />
              </div>
              <div>
                <CgRepeat
                  className={` cursor-pointer hover:text-[#F96985] text-xl ${
                    isRepeating ? "text-[#F96985]" : ""
                  }`}
                  onClick={() =>
                    toggleRepeat(audioRef, setIsRepeating, isRepeating)
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MiniPlayer;
