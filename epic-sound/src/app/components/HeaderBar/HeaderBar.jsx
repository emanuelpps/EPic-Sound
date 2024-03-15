import React from "react";
import SearchBar from "./components/SearchBar";
import BackFoward from "./components/BackFoward";
import Bell from "./components/Bell";

function HeaderBar() {
  return (
    <div className="max-w-[1300px] min-w-[300px] w-screen flex justify-around">
      <div className="flex flex-row gap-10 justify-start">
        <BackFoward />
        <SearchBar />
      </div>
      <div className="flex justify-end items-center w-96">
        <Bell />
      </div>
    </div>
  );
}

export default HeaderBar;
