import React, { useState } from "react";
import profilePicture from "../../../../../../../../public/assets/images/photo-1570295999919-56ceb5ecca61.avif";
import { FaRegCirclePlay } from "react-icons/fa6";
import Image from "next/image";

function PopularTracks() {
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
    {
      id: 2,
      nombre: "Artista 2",
      cancion: "Album 2",
      album: "Album 2",
      posicion: 2,
      imagenUrl: "url_de_la_imagen_2",
      tiempo: "2:30",
      listen: 1500,
      likes: 30,
      albumsComercializados: 8,
    },
    {
      id: 3,
      nombre: "Artista 3",
      cancion: "Album 3",
      album: "Album 3",
      posicion: 3,
      imagenUrl: "url_de_la_imagen_3",
      tiempo: "2:30",
      listen: 1500,
      likes: 30,
      albumsComercializados: 12,
    },
  ]);
  return (
    <div className="col-span-3 row-span-3 col-start-1 row-start-3">
      <h2 className="text-xs">Popular Tracks</h2>
      <div className="flex flex-col gap-2 mt-2">
        {artistList.map((artis) => (
          <div className="flex flex-row gap-20 justify-start items-center mb-2">
            <p className="text-[0.7rem]">{artis.id}</p>
            <Image
              src={profilePicture}
              alt="logo"
              width={50}
              height={50}
              className="rounded-xl"
            />
            <h2 className="flex text-[0.7rem]">{artis.cancion}</h2>
            <p className="flex text-[0.7rem]">{artis.nombre}</p>
            <p className="flex text-[0.7rem]">{artis.listen}</p>
            <p className="flex text-[0.7rem]">{artis.likes}</p>
            <FaRegCirclePlay />
          </div>
        ))}
      </div>
    </div>
  );
}

export default PopularTracks;
