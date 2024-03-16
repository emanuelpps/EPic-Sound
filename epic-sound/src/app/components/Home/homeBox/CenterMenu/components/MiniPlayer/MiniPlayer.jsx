import React, { useState } from "react";
import profilePicture from "../../../../../../../../public/assets/images/photo-1570295999919-56ceb5ecca61.avif";
import Image from "next/image";

function MiniPlayer() {
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
    <div className="col-span-2 row-span-5 col-start-4 row-start-1 flex flex-col justify-center items-center">
      <div className="flex justify-start w-[300px]">
        <h2 className="text-start">Now Playing</h2>
      </div>
      <div
        className="backdrop-blur-[10px] backdrop-saturate-[38%] bg-[rgba(248,142,160,0.22)] border rounded-xl border-[rgba(255,255,255,0.125)]
        -webkit-backdrop-filter: blur(10px) saturate(38%) h-[300px] w-[300px]"
      >
        <div className="flex justify-center items-center">
          <Image
            src={profilePicture}
            alt="logo"
            width={100}
            height={100}
            className="rounded-xl"
          />
        </div>
        <div>
          <div className="flex flex-col justify-center items-center">
            <h3>{artistList[0].cancion}</h3>
            <p>{artistList[0].nombre}</p>
          </div>
          <div id="player-icons"></div>
        </div>
      </div>
    </div>
  );
}

export default MiniPlayer;
