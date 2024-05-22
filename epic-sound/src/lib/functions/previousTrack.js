export default function previousTrack(currentTrack, playlistTracks, setTrack) {
  const currentIndex = playlistTracks?.findIndex(
    (track) => track.id === currentTrack.id
  );
  const prevIndex = (currentIndex - 1 + playlistTracks.length) % playlistTracks.length;
  setTrack(playlistTracks[prevIndex]);
}
