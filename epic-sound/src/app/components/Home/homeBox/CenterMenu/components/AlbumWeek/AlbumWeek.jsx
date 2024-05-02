import React, { useState, useEffect } from "react";
import Image from "next/image";
import profilePicture from "../../../../../../../../public/assets/images/photo-1570295999919-56ceb5ecca61.avif";
import trendingAlbums from "@/services/trendingAlbums";

function AlbumWeek() {
  const [albumList, setAlbumList] = useState([{}]);
  const [apiResponse, setApiResponse] = useState({
    isLoading: true,
    response: "Loading...",
  });

  useEffect(() => {
    const getTrendingAlbums = async () => {
      try {
        const response = await trendingAlbums();
        setAlbumList(response.data.slice(0, 5));
        setApiResponse({ isLoading: false });
        console.log("response", response.data);
      } catch (error) {
        console.log("error", error);
        setApiResponse({ response: error.message });
      }
    };

    getTrendingAlbums();
  }, []);
  return (
    <>
      {apiResponse.isLoading ? (
        <div className="flex flex-col justify-center items-center col-span-3 row-span-3 col-start-1 row-start-2">
          <p>{apiResponse.response}</p>
        </div>
      ) : (
        <div className="flex flex-col col-span-4 col-start-1 row-start-1 pt-2  ml-5 bg-[#2d1b30] rounded-xl  h-[fit-content] p-3">
          <h2 className="text-lg fonnt-light text-[#F7D8D6]">Albums of the Week</h2>
          <div className="flex flex-row justify-center items-center flex-wrap gap-20 mt-2">
            {albumList.map((album) => (
              <div key={album.id} className="cursor-pointer items-center hover:bg-[#272128] hover:shadow-md rounded-lg w-[150px] max-w-[150px] min-w-[150px] flex flex-col justify-center">
                {album.artwork && album.artwork["480x480"] && (
                  <img
                    src={album.artwork["480x480"]}
                    alt="logo"
                    width={80}
                    height={80}
                    className="rounded-xl"
                  />
                )}
                <div className="flex flex-col">
                  <h3 className="text-[0.8rem] w[150px] text-[#F7D8D6]">{album.user.name}</h3>
                  <p className="text-[0.6rem] w-[100px]  text-[#b1a4b4]">{album.playlist_name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default AlbumWeek;
