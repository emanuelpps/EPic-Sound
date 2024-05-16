const formatDuration = (duration) => {
  if (!duration) return "00:00";
  const absoluteDuration = Math.abs(duration);
  const minutes = Math.floor(absoluteDuration / 60);
  const seconds = Math.floor(absoluteDuration % 60);
  return `${minutes >= 10 ? minutes : `0${minutes}`}:${
    seconds >= 10 ? seconds : `0${seconds}`
  }`;
};

export default formatDuration;
