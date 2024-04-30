import React, { useEffect, useState } from "react";
import Image from "next/image";
import coverImage from "../../../../../../../public/assets/images/big-dollar-sign.jpg";
import trendingMonth from "@/services/trendingThisMonth";

function MainContainer() {
  const [trendingThisMonth, setTrendingThisMonth] = useState([{}]);
  const [apiResponse, setApiResponse] = useState({
    isLoading: true,
    response: "Loading...",
  });

  useEffect(() => {
    const getTrendingThisMonth = async () => {
      try {
        const response = await trendingMonth();
        setTrendingThisMonth(response.data);
        setApiResponse({ isLoading: false });
        console.log("tredniung", response.data);
      } catch (error) {
        console.log("error", error);
        setApiResponse({ response: error.message });
      }
    };

    getTrendingThisMonth();
  }, []);
  return (
    <div className="col-span-3 row-span-5 flex mt-0">
      <div className="rounded-md relative">
        {trendingThisMonth[0].artwork &&
          trendingThisMonth[0].artwork["1000x1000"] && (
            <img
              src={trendingThisMonth[0].artwork["1000x1000"]}
              alt="logo"
              className="object-none h-56 w-[800px] rounded-xl"
            />
          )}
        <div className="absolute inset-0 flex flex-col justify-center items-start ml-24">
          <h3 className="text-white text-center">Track of the Month</h3>
          <p className="text-white text-center">{trendingThisMonth[0].title}</p>
          <p className="text-white text-center">
            {trendingThisMonth[0].user?.name}
          </p>
          <button className="bg-black text-white px-4 py-2">
            Listen Track
          </button>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
