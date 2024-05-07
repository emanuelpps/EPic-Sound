"use client";
import React, { useState, useEffect } from "react";
import profilePicture from "../../../../../../../../public/assets/images/photo-1570295999919-56ceb5ecca61.avif";
import { FaRegCirclePlay } from "react-icons/fa6";
import Image from "next/image";
import trendingTracks from "@/services/trendingTracks";
import { FaHeart } from "react-icons/fa6";
import formatNumbers from "@/lib/utils/formatNumers";
import formatDuration from "@/lib/utils/formatDuration";
import trackHandler from "@/lib/functions/trackHandler";
import { useTrackStore } from "@/store/trackStore";

function PopularTracks() {
  const { setTrack } = useTrackStore();
  //const [isLoading, setIsLoading] = useState(true);
  const [popularTracks, setPopularTracks] = useState([{}]);
  const [apiResponse, setApiResponse] = useState({
    isLoading: true,
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
        <div className="flex flex-col justify-center items-center">
          <p>{apiResponse.response}</p>
        </div>
      ) : (
        <div className="col-span-4 row-start-3 ml-24 bg-[#2d1b30] rounded-xl p-3">
          <h2 className="text-lg fonnt-light text-[#F7D8D6]">Popular Tracks</h2>
          <div className="flex flex-col gap-2">
            {popularTracks?.map((track, index) => (
              <div
                className="flex flex-row gap-14 justify-start items-center max-h-[fit-content] cursor-pointer hover:bg-[#2d1631] hover:shadow-md rounded-lg"
                onClick={() => setTrack(track)}
              >
                <p className="text-[0.6rem] text-[#b1a4b4]">{index + 1}</p>
                {track.artwork && track.artwork["150x150"] && (
                  <img
                    src={track.artwork["150x150"]}
                    alt="logo"
                    width={45}
                    height={50}
                    className="rounded-xl"
                  />
                )}
                <h2 className="flex text-[0.7rem] w-[200px] text-[#F7D8D6]">
                  {track.title}
                </h2>
                <p className="flex text-[0.6rem] w-[150px] text-[#b1a4b4]">
                  {track.user?.name}
                </p>
                <p className="flex text-[0.6rem] w-[100px]  text-[#b1a4b4]">
                  {formatDuration(track.duration)}
                </p>
                <p className="flex text-[0.6rem] w-[100px]  text-[#b1a4b4]">
                  {formatNumbers(track.play_count)}
                </p>
                <div className="flex flex-col">
                  <FaHeart className="text-[0.6rem]  text-[#b1a4b4]" />
                  <p className="flex text-[0.6rem]  text-[#b1a4b4]">
                    {formatNumbers(track.favorite_count)}
                  </p>
                </div>
                <FaRegCirclePlay className="text-[1.2rem] w-[100px]  text-[#b1a4b4]" />
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default PopularTracks;
