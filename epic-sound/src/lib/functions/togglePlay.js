export const togglePlay = (audioRef, setIsPlaying, isPlaying) => {
  if (isPlaying) {
    audioRef?.current?.pause();
  } else {
    audioRef?.current?.play();
  }
  setIsPlaying(!isPlaying);
};
