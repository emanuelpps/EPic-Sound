import React, { useState, useRef, useEffect } from "react";
import profilePicture from "../../../../../../../../public/assets/images/photo-1570295999919-56ceb5ecca61.avif";
import Image from "next/image";
import { RiMenuAddFill } from "react-icons/ri";
import { RiHeart3Line } from "react-icons/ri";
import { RiHeart3Fill } from "react-icons/ri";
import { IoShuffleSharp } from "react-icons/io5";
import { CgPlayButtonO } from "react-icons/cg";
import { CgPlayPauseO } from "react-icons/cg";
import { CgPlayTrackNext } from "react-icons/cg";
import { CgPlayTrackPrev } from "react-icons/cg";
import { CgRepeat } from "react-icons/cg";
import streamTrack from "@/services/streamTrack";
import fetchTrackData from "@/services/getTrack";
import { useTrackStore } from "@/store/trackStore";
import { useAlbumStore } from "@/store/albumStore";
import { Fira_Code } from "next/font/google";

function MiniPlayer(props) {
  const { track } = useTrackStore();
  const { getAlbumId } = useAlbumStore();
  const audioRef = useRef();
  const [isLiked, setIsLiked] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [trackData, setTrackData] = useState({});
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    if (track?.id) {
      (async () => {
        try {
          const response = await streamTrack(track.id);
          setTrackData(response);
          if (audioRef.current.src) {
            togglePlay();
            setIsFirstLoad(false);
          }
        } catch (error) {
          console.log(error);
        }
      })();
    }
  }, [track?.id, isFirstLoad]);

  console.log("trackadataAaa", trackData);

  useEffect(() => {
    if (trackData) {
      audioRef.current.src = trackData;
      togglePlay();
    }
  }, [trackData]);

  return (
    <div
      className={`${
        track ? "row-span-2 row-start-2 justify-center items-center" : "hidden"
      }`}
    >
      <div className="flex justify-start w-[300px]">
        {track ? <h2 className="text-start">Now Playing</h2> : <></>}
      </div>
      <div
        className={`backdrop-blur-[10px] backdrop-saturate-[38%] bg-[rgba(248,142,160,0.22)] border rounded-xl border-[rgba(255,255,255,0.125)]
        -webkit-backdrop-filter: blur(10px) saturate(38%) ${
          track ? "h-[360px] w-[250px]" : "pb-10"
        }  flex flex-col justify-center items-center`}
      >
        <div className="flex justify-center items-center mt-5 w-full">
          {track?.artwork && track.artwork["480x480"] && (
            <img
              src={track.artwork["480x480"]}
              alt="logo"
              className="object-cover rounded-xl h-40"
            />
          )}
        </div>
        <div id="player" className="ml-10 mr-10">
          <div className="flex flex-row w-full justify-around items-center mt-5">
            <div className="flex flex-col w-[fit-content] items-center justify-center">
              <h3 className="text-[0.7rem] w-40 min-w-20 max-w-40 ">
                {track?.title}
              </h3>
              <p className="text-[0.7rem] w-40 min-w-20 max-w-40 ">
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
              <div className="w-full bg-[rgba(255,255,255,0.125)] rounded-full h-2.5 ">
                <div
                  className="bg-[#F96985] h-2.5 rounded-full"
                  style={{ width: "45%" }}
                  role="progressbar"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <audio ref={audioRef} src={trackData} />
                </div>
                <div className="flex justify-between">
                  <p className="text-[0.6rem]">2:30</p>
                  <p className="text-[0.6rem]">4:30</p>
                </div>
              </div>
            </div>
            <div
              id="player-buttons"
              className="flex flex-row w-full mt-5 justify-between items-center"
            >
              <div>
                <IoShuffleSharp className="text-xl" />
              </div>
              <div>
                <CgPlayTrackPrev className="text-xl" />
              </div>
              <div>
                {isPlaying ? (
                  <CgPlayPauseO
                    onClick={() => togglePlay()}
                    className="text-[2.5rem]"
                  />
                ) : (
                  <CgPlayButtonO
                    className="text-[2.5rem]"
                    onClick={() => togglePlay()}
                  />
                )}
              </div>
              <div>
                <CgPlayTrackNext className="text-xl" />
              </div>
              <div>
                <CgRepeat className="text-xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MiniPlayer;
