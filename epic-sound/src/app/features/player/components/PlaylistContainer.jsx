import React, { useEffect } from "react";
import { usePlaylistStore } from "@/store/playlistStore";
import { usePlaylistTracksStore } from "@/store/playlistTrackStore";
import formatDuration from "@/lib/utils/formatDuration";
import { CgChevronDoubleDownR } from "react-icons/cg";
import { useTrackStore } from "@/store/trackStore";
import { useIsPlaylistShownStore } from "@/store/isPlaylistShown";
function PlaylistContainer() {
  const { isPlaylistShown, setIsPlaylistShown } = useIsPlaylistShownStore();
  const { setTrack } = useTrackStore();
  const { setPlaylistTracks, playlistTracks } = usePlaylistTracksStore();
  const { playlist } = usePlaylistStore();

  useEffect(() => {
    setPlaylistTracks(playlist.data[0].id);
  }, [playlist.data[0].id]);

  return (
    <div
      id="playlist-container"
      className="flex flex-col ml-24 bg-[#2d1b30] rounded-xl"
    >
      <div id="playlist-data-contaier">
        <div id="title-playlist-container" className="flex justify-evenly pt-5">
          <div className="w-full pl-3 pb-3">
            <h1 className="text-lg font-light text-[#F7D8D6]">Playlist</h1>
          </div>
          <div className="justify-end items-center pr-10">
            <CgChevronDoubleDownR
              className="text-[1.5rem] text-[#F7D8D6] cursor-pointer"
              onClick={() => setIsPlaylistShown(!isPlaylistShown)}
            />
          </div>
        </div>
        <div id="playlist-header" className="flex items-center ml-5 gap-5">
          <div id="playlist-title">
            <h2 className="text-md font-light text-[#F7D8D6]">
              {playlist?.data[0].playlist_name}
            </h2>
            <p className="text-[0.8rem] font-light text-[#F7D8D6]">
              {playlist.data[0].user.name}
            </p>
          </div>
        </div>
        <div id="playlist-songs">
          <div
            id="playlist-songs-container"
            className="flex flex-col bg-[#161526] m-5 rounded-lg p-2 overflow-y-auto max-h-[300px] min-h-[300px] "
          >
            {playlistTracks?.data?.map((track, index) => (
              <div className="cursor-pointer" onClick={() => setTrack(track)}>
                <div
                  id="playlist-songs-item"
                  className="flex justify-start gap-10 items-center h-7 hover:bg-[#2d1631] hover:shadow-md rounded opacity-500"
                >
                  <p className="w-[10px] text-[0.8rem] ml-5 font-light text-[#F7D8D6]">
                    {index + 1}
                  </p>
                  <p className="w-[800px] text-[0.8rem] font-light ml-5 text-[#F7D8D6]">
                    {track.title}
                  </p>
                  <p className="w-[200px] text-[0.8rem] font-light ml-5 text-[#F7D8D6]">
                    {track.user.name}
                  </p>
                  <p className="w-[100px] text-[0.8rem] font-light ml-5 text-[#F7D8D6]">
                    {formatDuration(track.duration)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlaylistContainer;
