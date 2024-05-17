import React from "react";
import Player from "../components/Player";
import PlaylistContainer from "../components/PlaylistContainer";
import { usePlaylistStore } from "@/store/playlistStore";
import { useAlbumStore } from "@/store/albumStore";

function PlayerLayout() {
  const { playlist } = usePlaylistStore();
  const { album } = useAlbumStore();
  console.log("playlist", playlist);
  return (
    <div
      className={`grid grid-cols-1 ${
        playlist ? "" : "h-full"
      } gap-4 max-h-[100vh] min-h-[100vh] h-[100vh]`}
    >
      <Player />
      {playlist || album ? <PlaylistContainer /> : null}
    </div>
  );
}

export default PlayerLayout;
