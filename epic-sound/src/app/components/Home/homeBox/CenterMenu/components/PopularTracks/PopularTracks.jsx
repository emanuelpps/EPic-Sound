"use client";
import React, { useState, useEffect } from "react";
import { FaRegCirclePlay } from "react-icons/fa6";
import trendingTracks from "@/services/trendingTracks";
import { FaHeart } from "react-icons/fa6";
import formatNumbers from "@/lib/utils/formatNumers";
import formatDuration from "@/lib/utils/formatDuration";
import { useTrackStore } from "@/store/trackStore";

function PopularTracks() {
  const { setTrack, track } = useTrackStore();
  const [popularTracks, setPopularTracks] = useState([{}]);
  const [apiResponse, setApiResponse] = useState({
    isLoading: true,
  });

  useEffect(() => {
    const getPopularTracks = async () => {
      try {
        const response = await trendingTracks();
        setPopularTracks(response.data.slice(0, 10));
        setApiResponse({ isLoading: false });
      } catch (error) {
        console.log("error", error);
        setApiResponse({ response: error.message });
      }
    };

    getPopularTracks();
  }, []);

  console.log("popuuuuuuu", track);

  return (
    <div className="flex ">
      {apiResponse.isLoading ? (
        <div className="flex flex-col justify-center items-center">
          <p>{apiResponse.response}</p>
        </div>
      ) : (
        <div className="h-[190px] max-h-[200px] pl-10 pr-10 ml-24 bg-[#2d1b30] rounded-xl pt-5 pb-5  scrollBar-gutter">
          <h2 className="text-lg font-light text-[#F7D8D6]">Popular Tracks</h2>
          <div className="flex flex-col gap-2 mt-2">
            {popularTracks?.map((popularTrack, index) => (
              <div
                className="flex flex-row gap-14 justify-start items-center max-h-[fit-content] cursor-pointer hover:bg-[#2d1631] hover:shadow-md rounded-2xl pl-5"
                onClick={() => setTrack(popularTrack)}
              >
                <p
                  className={`text-[0.7rem] ${
                    popularTrack.id === track?.id
                      ? "text-[#F96985] font-semibold"
                      : ""
                  } text-[#b1a4b4]`}
                >
                  {index + 1}
                </p>
                {popularTrack.artwork && popularTrack.artwork["150x150"] && (
                  <img
                    src={popularTrack.artwork["150x150"]}
                    alt="logo"
                    width={40}
                    height={50}
                    className="rounded-xl"
                  />
                )}
                <h2
                  className={`${
                    popularTrack.id === track?.id
                      ? "text-[#F96985] font-semibold"
                      : ""
                  } flex text-[0.7rem] w-[200px] text-[#F7D8D6]`}
                >
                  {popularTrack.title}
                </h2>
                <p className="flex text-[0.7rem] w-[120px] text-[#b1a4b4]">
                  {popularTrack.user?.name}
                </p>
                <p className="flex text-[0.7rem] w-[100px]  text-[#b1a4b4]">
                  {formatDuration(popularTrack.duration)}
                </p>
                <p className="flex text-[0.7rem] w-[100px]  text-[#b1a4b4]">
                  {formatNumbers(popularTrack.play_count)}
                </p>
                <div className="flex flex-col justify-center items-center">
                  <FaHeart className="text-[0.7rem]  text-[#b1a4b4]" />
                  <p className="flex text-[0.7rem]  text-[#b1a4b4]">
                    {formatNumbers(popularTrack.favorite_count)}
                  </p>
                </div>
                <FaRegCirclePlay className="text-[1rem] w-[100px] text-[#b1a4b4]" />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default PopularTracks;
