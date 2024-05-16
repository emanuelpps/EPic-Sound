export const toggleRepeat = (audioRef, setIsRepeating, isRepeating) => {
  audioRef.current.loop = !audioRef.current.loop;
  setIsRepeating(!isRepeating);
};
