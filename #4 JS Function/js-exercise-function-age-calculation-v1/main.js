// TODO: answer here
const calcAge = (age, params) => {
  if (age >= 1) {
    if (params == "days") {
      return age * 365;
    } else if (params == "months") {
      return age * 12;
    } else {
    }
  } else {
    return "Age cannot be under 1 year";
  }
};
module.exports = calcAge;
