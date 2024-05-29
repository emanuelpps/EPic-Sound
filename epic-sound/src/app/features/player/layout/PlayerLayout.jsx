import React, { useEffect, useState } from "react";
import Player from "../components/Player";
import PlaylistContainer from "../components/PlaylistContainer";
import { usePlaylistStore } from "@/store/playlistStore";
import { useAlbumStore } from "@/store/albumStore";
import { useIsPlaylistShownStore } from "@/store/isPlaylistShown";

function PlayerLayout() {
  const { isPlaylistShown, setIsPlaylistShown } = useIsPlaylistShownStore();
  const { playlist } = usePlaylistStore();
  const { album } = useAlbumStore();

  useEffect(() => {
    if (playlist) {
      setIsPlaylistShown(true);
    } else {
      setIsPlaylistShown(false);
    }
  }, [playlist, album]);

  return (
    <div
      className={`grid grid-cols-1 gap-4 max-h-[100vh] min-h-[100vh] h-[100vh] max-w-[98%]`}
    >
      <Player />
      {isPlaylistShown ? <PlaylistContainer /> : null}
    </div>
  );
}

export default PlayerLayout;
