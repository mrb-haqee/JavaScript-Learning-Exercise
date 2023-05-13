const clockConversion = (hour, params) => {
  if (hour >= 1) {
    if (params == "minutes") {
      return hour * 60;
    } else if (params == "seconds") {
      return hour * 3600;
    }
  } else {
    return "Hour cannot be under 1";
  }
};

// TODO: answer here

module.exports = clockConversion;
