import React from "react";
import GenreContainer from "../components/GenreContainer";
import PlaylistContainer from "../components/PlaylistContainer";

function LibraryLayout() {
  return (
    <div>
      <GenreContainer />
      <PlaylistContainer />
    </div>
  );
}

export default LibraryLayout;
