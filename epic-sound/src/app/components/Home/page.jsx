import React, { useState } from "react";
import MainMenu from "./homeBox/MainMenu/MainMenu";
import CenterMenu from "./homeBox/CenterMenu/CenterMenu";
import { usePageSelectionStore } from "@/store/pageSelectionStore";
import PlayerLayout from "@/app/features/player/layout/PlayerLayout";
import LibraryLayout from "@/app/features/library/layout/LibraryLayout";

function StartContainer() {
  const { page } = usePageSelectionStore();
  const [trackId, setTrackId] = useState();
  return (
    <div id="inside-box" className="flex gap-5">
      <div id="center-menu">
        {page === 0 ? (
          <CenterMenu trackId={trackId} setTrackId={setTrackId} />
        ) : page === 1 ? (
          <LibraryLayout trackId={trackId} setTrackId={setTrackId} />
        ) : page === 2 ? (
          <PlayerLayout trackId={trackId} setTrackId={setTrackId} />
        ) : page === 3 ? (
          <ProfilePage trackId={trackId} setTrackId={setTrackId} />
        ) : null}
      </div>
      <div id="main-menu" className="">
        <MainMenu trackId={trackId} setTrackId={setTrackId} />
      </div>
    </div>
  );
}

export default StartContainer;
