import React, { useState } from "react";
import Image from "next/image";
import profilePicture from "../../../../../../../../public/assets/images/photo-1570295999919-56ceb5ecca61.avif";

function AlbumWeek() {
  const [artistList, setArtistList] = useState([
    {
      nombre: "Artista 1",
      album: "Album 1",
      posicion: 1,
      imagenUrl: "url_de_la_imagen_1",
      albumsComercializados: 10,
    },
    {
      nombre: "Artista 2",
      album: "Album 2",
      posicion: 2,
      imagenUrl: "url_de_la_imagen_2",
      albumsComercializados: 8,
    },
    {
      nombre: "Artista 3",
      album: "Album 3",
      posicion: 3,
      imagenUrl: "url_de_la_imagen_3",
      albumsComercializados: 12,
    },
    {
      nombre: "Artista 4",
      album: "Album 4",
      posicion: 4,
      imagenUrl: "url_de_la_imagen_4",
      albumsComercializados: 6,
    },
    {
      nombre: "Artista 5",
      album: "Album 5",
      posicion: 5,
      imagenUrl: "url_de_la_imagen_5",
      albumsComercializados: 9,
    },
  ]);
  return (
    <div className="flex flex-col col-span-3 row-span-2 pt-5">
      <h2 className="text-xs">Album of the Week</h2>
      <div className="flex gap-24 pt-2">
        {artistList.map((artis) => (
          <div id="albumWeek-title-container" className="flex flex-col">
            <Image src={profilePicture} alt="logo" width={50} height={50} className="rounded-xl"/>
            <div className="flex flex-col">
              <h3 className="text-[0.7rem]">{artis.nombre}</h3>
              <p className="text-[0.5rem]">{artis.album}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AlbumWeek;
