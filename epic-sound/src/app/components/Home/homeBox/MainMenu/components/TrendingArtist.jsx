import React, { useState } from "react";
import Image from "next/image";
import profilePicture from "../../../../../../../public/assets/images/photo-1570295999919-56ceb5ecca61.avif";

function TrendingArtist() {
  const [artistList, setArtistList] = useState([
    {
      nombre: "Artista 1",
      posicion: 1,
      imagenUrl: "url_de_la_imagen_1",
      albumsComercializados: 10,
    },
    {
      nombre: "Artista 2",
      posicion: 2,
      imagenUrl: "url_de_la_imagen_2",
      albumsComercializados: 8,
    },
    {
      nombre: "Artista 3",
      posicion: 3,
      imagenUrl: "url_de_la_imagen_3",
      albumsComercializados: 12,
    },
    {
      nombre: "Artista 4",
      posicion: 4,
      imagenUrl: "url_de_la_imagen_4",
      albumsComercializados: 6,
    },
    {
      nombre: "Artista 5",
      posicion: 5,
      imagenUrl: "url_de_la_imagen_5",
      albumsComercializados: 9,
    },
  ]);
  return (
    <div className="row-start-1 row-span-5 col-span-4 col-start-5 flex w-[250px] flex-col bg-[#2d1b30] rounded-xl mr-5">
      <div className="">
        <div id="trending-artist-title" className="flex gap-10">
          <h2 className="text-xs">Trending Artist</h2>
          <div className="flex justify-center items-center">
            <button className="text-[0.7rem]">See All</button>
          </div>
        </div>
        <div id="trending-artist-list">
          {artistList.map((artis) => (
            <div className="flex gap-10 mt-2 justify-center">
              <div>
                <Image
                  src={profilePicture}
                  alt="logo"
                  width={30}
                  height={50}
                  className="rounded-full"
                />
              </div>
              <h3>{artis.nombre}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TrendingArtist;
