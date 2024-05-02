import React, { useEffect, useState } from "react";
import Image from "next/image";
//import coverImage from "../../../../../../../../public/assets/images/big-dollar-sign.jpg";
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
        console.log("tredng", response.data);
      } catch (error) {
        console.log("error", error);
        setApiResponse({ response: error.message });
      }
    };

    getTrendingThisMonth();
  }, []);
  return (
    <div className="col-span-4 row-span-1 ml-24 rounded-md relative">
      {trendingThisMonth[0].artwork &&
        trendingThisMonth[0].artwork["1000x1000"] && (
          <img
            src={trendingThisMonth[0].artwork["1000x1000"]}
            alt="logo"
            className="object-cover rounded-xl w-[100%] h-[100%] absolute inset-0"
          />
        )}
      <div className="absolute inset-0 flex flex-col justify-center items-start ml-24">
        <h3
          className="text-[#F7D8D6] text-center text-1xl  mb-2  shadow-5xl font-light"
          style={{
            textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)",
            filter: "drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.5))",
          }}
        >
          Track of the Month
        </h3>
        <p
          className="text-[#F7D8D6] text-center text-3xl font-medium"
          style={{
            textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)",
            filter: "drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.5))",
          }}
        >
          {trendingThisMonth[0].title}
        </p>
        <p
          className="text-[#F7B3BB] text-center"
          style={{
            textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)",
            filter: "drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.5))",
          }}
        >
          {trendingThisMonth[0].user?.name}
        </p>
        <button className="font-semibold bg-[#F88EA0] hover:bg-[#F96985] rounded-lg text-[#171624] px-5 py-2 mt-3 border border-solid border-[#F96985]">
          Listen Track
        </button>
      </div>
    </div>
  );
}

export default MainContainer;
