const formatNumbers = (numbers) => {
  if (numbers >= 1000000) {
    return (numbers / 1000000).toFixed(1) + "M";
  } else if (numbers >= 1000) {
    return (numbers / 1000).toFixed(1) + "K";
  } else {
    return numbers;
  }
};

export default formatNumbers;
