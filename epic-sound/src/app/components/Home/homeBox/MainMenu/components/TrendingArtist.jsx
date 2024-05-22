import React, { useState, useEffect } from "react";
import trendingPlaylist from "@/services/trendingPlaylist";

function TrendingArtist() {
  const [artistList, setArtistList] = useState([]);
  const [apiResponse, setApiResponse] = useState({
    isLoading: true,
    response: "Loading...",
  });

  useEffect(() => {
    const getTrendingArtist = async () => {
      try {
        const response = await trendingPlaylist();
        setArtistList(response.data.slice(0, 5));
        setApiResponse({ isLoading: false });
      } catch (error) {
        console.log("error", error);
        setApiResponse({ response: error.message });
      }
    };

    getTrendingArtist();
  }, []);
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
                {artis.user && artis.user.profile_picture["150x150"] && (
                  <img
                    src={artis.user.profile_picture["150x150"]}
                    alt="logo"
                    width={50}
                    height={50}
                    className="rounded-xl"
                  />
                )}
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
