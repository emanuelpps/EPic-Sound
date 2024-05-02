import React from "react";
import SearchBar from "./components/SearchBar";
import BackFoward from "./components/BackFoward";
import Bell from "./components/Bell";

function HeaderBar() {
  return (
    <div className="max-w-[90vw] min-w-[300px] ml-24 pt-3 pb-2 flex justify-between items-center">
      <div className="flex flex-row gap-10 justify-start min-w-full">
        <BackFoward />
        <SearchBar />
      </div>
      <div className="flex justify-end items-center w-screen">
        <Bell />
      </div>
    </div>
  );
}

export default HeaderBar;
