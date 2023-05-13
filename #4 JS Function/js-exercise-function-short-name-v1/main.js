// TODO: answer here

const shortName = (name, options) => {
  if (name.search(" ") == -1) {
    return "Invalid Name";
  }
  let result = "";
  if (options == "first") {
    result = name[0] + ". ";
    for (let i = name.search(" ") + 1; i < name.length; i++) {
      result += name[i];
    }
    return result;
  } else if (options == "last") {
    for (let i = 0; i < name.search(" "); i++) {
      result += name[i];
    }
    result += " " + name[name.search(" ") + 1] + ".";
    return result;
  }else{
    return name
  }
};

console.log(shortName("Rafli Baihaqi", "last"));

module.exports = shortName;
