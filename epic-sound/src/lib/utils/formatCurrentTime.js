import formatDuration from "./formatDuration";

const formatCurrentTime = (currentDuration, totalDuration) => {
  const currentTime = (currentDuration / 100) * totalDuration;
  return formatDuration(currentTime);
};

export default formatCurrentTime;
