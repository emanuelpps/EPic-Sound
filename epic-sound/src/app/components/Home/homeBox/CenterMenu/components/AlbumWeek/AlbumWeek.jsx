import React, { useState, useEffect } from "react";
import trendingAlbums from "@/services/trendingAlbums";
import { useAlbumStore } from "@/store/albumStore";
import { usePlaylistStore } from "@/store/playlistStore";
import { usePageSelectionStore } from "@/store/pageSelectionStore";

function AlbumWeek() {
  const { setPage } = usePageSelectionStore();
  const { setPlaylist } = usePlaylistStore();
  const { setAlbum } = useAlbumStore();
  const [albumList, setAlbumList] = useState([{}]);
  const [apiResponse, setApiResponse] = useState({
    isLoading: true,
    response: "Loading...",
  });

  useEffect(() => {
    const getTrendingAlbums = async () => {
      try {
        const response = await trendingAlbums();
        setAlbumList(response.data.slice(0, 6));
        setApiResponse({ isLoading: false });
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
        <div className="h-full flex flex-col justify-center items-center ">
          <p>{apiResponse.response}</p>
        </div>
      ) : (
        <div className=" pr-10 pl-10 pt-5 pb-5 ml-24 bg-[#2d1b30] rounded-xl p-3">
          <h2 className="text-lg font-light text-[#F7D8D6]">
            Albums of the Week
          </h2>
          <div className="flex flex-row justify-center items-center flex-wrap gap-5 mt-2">
            {albumList.map((album) => (
              <div
                onClick={() => {
                  setAlbum(album.id), setPlaylist(album.id), setPage(2);
                }}
                key={album.id}
                className="cursor-pointer items-center hover:bg-[#2d1631] hover:shadow-md rounded-lg w-[150px] max-w-[150px] min-w-[150px] flex flex-col justify-center p-2"
              >
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
                  <h3 className="text-[0.9rem] text-[#F7D8D6] w-[fit-content]">
                    {album.user?.name}
                  </h3>
                  <p className="text-[0.7rem] w-[fit-content]  text-[#b1a4b4]">
                    {album.playlist_name}
                  </p>
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
