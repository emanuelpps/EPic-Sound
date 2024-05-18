const seekBarFormat = (totalDuration, currentDuration) => {
  return (currentDuration / totalDuration) * 100;
};

export default seekBarFormat;
