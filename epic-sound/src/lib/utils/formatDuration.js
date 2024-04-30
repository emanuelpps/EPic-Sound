const formatDuration = (duration) => {
  const minutes = Math.floor(duration / 60);
  const seconds = Math.floor(duration % 60);
  return `${minutes}:${seconds >= 10 ? seconds : `0${seconds}`}`;
};

export default formatDuration;
