// TODO: answer here

const checkDatatype = (param) => {
  if (Array.isArray(param)) {
    return "array";
  } else if (param === null) {
    return "null";
  } else {
    return typeof param;
  }
};
module.exports = checkDatatype;
