import formatDuration from "./formatDuration";
const formatLeftTime = (currentTime, totalDuration) => {
  const leftTime = (totalDuration - currentTime);
  return formatDuration(leftTime);
};

export default formatLeftTime;
