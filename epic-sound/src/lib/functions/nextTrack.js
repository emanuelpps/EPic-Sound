

export default async function nextTrack(currentTrack, playlistTracks, setTrack) {
  const currentIndex = playlistTracks?.findIndex(
    (track) => track.id === currentTrack.id
  );
  const nextIndex = (currentIndex + 1) % playlistTracks.length;
  setTrack(playlistTracks[nextIndex]);
}
