const checkSeekBar = (e, seekBarRef, audioRef) => {
  let widthBar = seekBarRef.current.clientWidth;
  const offset = e.nativeEvent.offsetX;
  const divProgress = (offset / widthBar) * 100;
  audioRef.current.currentTime =
    audioRef.current.duration * (divProgress / 100);
};


export default checkSeekBar;