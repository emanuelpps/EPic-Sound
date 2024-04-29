"use client";
import React, { useState, useEffect } from "react";
import profilePicture from "../../../../../../../../public/assets/images/photo-1570295999919-56ceb5ecca61.avif";
import { FaRegCirclePlay } from "react-icons/fa6";
import Image from "next/image";
import trendingTracks from "@/services/trendingTracks";
import { FaHeart } from "react-icons/fa6";
import formatNumbers from "@/lib/utils/formatNumers";
import formatDuration from "@/lib/utils/formatDuration";
//import { apiStore } from "@/store/apiStore";

function PopularTracks() {
  //const [isLoading, setIsLoading] = useState(true);
  const [popularTracks, setPopularTracks] = useState([{}]);
  const [apiResponse, setApiResponse] = useState({
    isLoading: true,
    response: "Loading...",
  });

  useEffect(() => {
    const getPopularTracks = async () => {
      try {
        const response = await trendingTracks();
        setPopularTracks(response.data.slice(0, 3));
        setApiResponse({ isLoading: false });
        console.log("response", response.data);
      } catch (error) {
        console.log("error", error);
        setApiResponse({ response: error.message });
      }
    };

    getPopularTracks();
  }, []);

  console.log(popularTracks);

  return (
    <>
      {apiResponse.isLoading ? (
        <div className="flex flex-col justify-center items-center ol-span-3 row-span-3 col-start-1 row-start-2">
          <p>{apiResponse.response}</p>
        </div>
      ) : (
        <div className="col-span-3 row-span-3 col-start-1 row-start-2 o">
          <h2 className="text-xs">Popular Tracks</h2>
          <div className="flex flex-col gap-2 mt-2">
            {popularTracks?.map((track, index) => (
              <div
                className="flex flex-row gap-10 justify-start items-center mb-2 max-h-[fit-content] cursor-pointer"
                onClick={""}
              >
                <p className="text-[0.6rem]">{index + 1}</p>
                {track.artwork && track.artwork["150x150"] && (
                  <img
                    src={track.artwork["150x150"]}
                    alt="logo"
                    width={50}
                    height={50}
                    className="rounded-xl"
                  />
                )}
                <h2 className="flex text-[0.6rem] w-20">{track.title}</h2>
                <p className="flex text-[0.6rem] w-20">{track.user?.name}</p>
                <p className="flex text-[0.6rem] w-20">
                  {formatDuration(track.duration)}
                </p>
                <p className="flex text-[0.6rem] w-20">
                  {formatNumbers(track.play_count)}
                </p>
                <div className="flex flex-col">
                  <FaHeart className="text-[0.7rem]" />
                  <p className="flex text-[0.6rem]">
                    {formatNumbers(track.favorite_count)}
                  </p>
                </div>
                <p className="flex text-[0.6rem]"></p>
                <FaRegCirclePlay className="text-[1.5rem]" />
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default PopularTracks;
