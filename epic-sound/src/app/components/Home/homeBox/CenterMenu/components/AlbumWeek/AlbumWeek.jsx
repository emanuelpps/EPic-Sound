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
        <div className="flex flex-col justify-center items-center ">
          <p>{apiResponse.response}</p>
        </div>
      ) : (
        <div className="col-span-4 row-start-2 ml-24 bg-[#2d1b30] rounded-xl p-3">
          <h2 className="text-lg font-light text-[#F7D8D6]">
            Albums of the Week
          </h2>
          <div className="flex flex-row justify-center items-center flex-wrap gap-10 mt-2">
            {albumList.map((album) => (
              <div
                onClick={() => {
                  setAlbum(album.id), setPlaylist(album.id), setPage(2);
                }}
                key={album.id}
                className="cursor-pointer items-center hover:bg-[#2d1631] hover:shadow-md rounded-lg w-[150px] max-w-[150px] min-w-[150px] flex flex-col justify-center"
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
                  <h3 className="text-[0.8rem] w[150px] text-[#F7D8D6]">
                    {album.user?.name}
                  </h3>
                  <p className="text-[0.6rem] w-[100px]  text-[#b1a4b4]">
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
