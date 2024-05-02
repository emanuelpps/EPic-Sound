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
    <div className="col-span-4 col-start-1 row-span-5  ml-5 mb-5 rounded-md relative">
        {trendingThisMonth[0].artwork &&
          trendingThisMonth[0].artwork["1000x1000"] && (
            <img
              src={trendingThisMonth[0].artwork["1000x1000"]}
              alt="logo"
              className="object-cover rounded-xl w-[100%] h-[100%] absolute inset-0"
            />
          )}
        <div className="absolute inset-0 flex flex-col justify-center items-start ml-24">
          <h3 className="text-white text-center text-2xl  mb-2  shadow-5xl font-light">Track of the Month</h3>
          <p className="text-white text-center text-3xl font-medium">{trendingThisMonth[0].title}</p>
          <p className="text-white text-center">
            {trendingThisMonth[0].user?.name}
          </p>
          <button className="bg-black text-white px-4 py-2">
            Listen Track
          </button>
        </div>
      </div>
  );
}

export default MainContainer;
