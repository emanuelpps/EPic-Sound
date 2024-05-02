import React, { useState } from "react";
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

function MiniPlayer() {
  const [isLiked, setIsLiked] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isShuffle, setIsShuffle] = useState(false);
  const [isRepeat, setIsRepeat] = useState(false);
  const [artistList, setArtistList] = useState([
    {
      id: 1,
      nombre: "Artista 1",
      cancion: "Album 1",
      album: "Album 1",
      posicion: 1,
      imagenUrl: "url_de_la_imagen_1",
      tiempo: "2:30",
      listen: 1500,
      likes: 30,
      albumsComercializados: 10,
    },
  ]);
  return (
    <div className="row-span-2 row-start-2 justify-center items-center">
      <div className="flex justify-start w-[300px]">
        <h2 className="text-start">Now Playing</h2>
      </div>
      <div
        className="backdrop-blur-[10px] backdrop-saturate-[38%] bg-[rgba(248,142,160,0.22)] border rounded-xl border-[rgba(255,255,255,0.125)]
        -webkit-backdrop-filter: blur(10px) saturate(38%) h-[360px] w-[250px]"
      >
        <div className="flex justify-center items-center mt-5">
          <Image
            src={profilePicture}
            alt="logo"
            width={100}
            height={100}
            className="rounded-xl"
          />
        </div>
        <div id="player" className="ml-10 mr-10">
          <div className="flex flex-row w-full justify-around items-center mt-5">
            <div className="flex flex-col w-full items-center justify-center">
              <h3>{artistList[0].cancion}</h3>
              <p className="text-[0.7rem]">{artistList[0].nombre}</p>
            </div>
            <div className="flex flex-row w-full items-center justify-center gap-2">
              <RiMenuAddFill />
              {isLiked ? (
                <RiHeart3Fill
                  onClick={() => setIsLiked(!isLiked)}
                  className="cursor-pointer"
                />
              ) : (
                <RiHeart3Line
                  onClick={() => setIsLiked(!isLiked)}
                  className="cursor-pointer"
                />
              )}
            </div>
          </div>
          <div id="player-icons" className="flex flex-col w-full">
            <div id="progress-bar" className="mt-2">
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div
                  className="bg-blue-600 h-2.5 rounded-full w-[45%]"
                  role="progressbar"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
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
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="text-[2.5rem]"
                  />
                ) : (
                  <CgPlayButtonO
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="text-[2.5rem]"
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
