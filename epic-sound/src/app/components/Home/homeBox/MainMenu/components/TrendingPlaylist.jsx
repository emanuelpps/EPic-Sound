import React, { useState, useEffect } from "react";
import getNewTrendingPlaylist from "@/services/trendingPlaylist";
import { useTrackStore } from "@/store/trackStore";
import { usePlaylistStore } from "@/store/playlistStore";
import { usePageSelectionStore } from "@/store/pageSelectionStore";

function TrendingPlaylist() {
  const { page } = usePageSelectionStore();
  const { setPlaylist, isFirstLoad, setIsFirstLoad } = usePlaylistStore();
  const { track } = useTrackStore();
  const [trendingPlaylist, setTrendingPlaylist] = useState([]);
  const [apiResponse, setApiResponse] = useState({
    isLoading: true,
    response: "Loading...",
  });

  useEffect(() => {
    const getTrendingPlaylist = async () => {
      try {
        const response = await getNewTrendingPlaylist();
        setTrendingPlaylist(response.data.slice(0, 15));
        setApiResponse({ isLoading: false });
      } catch (error) {
        console.log("error", error);
        setApiResponse({ response: error.message });
      }
    };

    getTrendingPlaylist();
  }, []);
  return (
    <div className="row-span-1 flex w-[250px] flex-col bg-[#2d1b30] rounded-xl mr-5 p-2">
      <div className="">
        <div id="trending-artist-title" className="flex gap-10">
          <h2 className="text-lg font-light text-[#F7D8D6]">
            Trending Playlist
          </h2>
          <div className="flex justify-center items-center">
            <button className="text-[0.7rem]">See All</button>
          </div>
        </div>
        <div id="trending-artist-list">
          {trendingPlaylist.map((playlist, index) => {
            if (index < (track && page !== 2 ? 5 : 15)) {
              return (
                <div
                  className="flex gap-5 mt-2 justify-center cursor-pointer  hover:bg-[#2d1631] hover:shadow-md rounded-lg"
                  key={playlist.id}
                  onClick={() => {
                    setPlaylist(playlist.id);
                    setIsFirstLoad(!isFirstLoad);
                  }}
                >
                  <div>
                    {playlist.user &&
                      playlist.user.profile_picture["150x150"] && (
                        <img
                          src={playlist.user.profile_picture["150x150"]}
                          alt="logo"
                          width={30}
                          height={30}
                          className="rounded-lg"
                        />
                      )}
                  </div>
                  <h3 className="flex justify-start items-center text-[0.7rem] w-40 max-w-40">
                    {playlist.playlist_name}
                  </h3>
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default TrendingPlaylist;
