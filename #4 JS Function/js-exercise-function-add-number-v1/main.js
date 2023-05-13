// TODO: answer here
const addNumber = (numStr, option) => {
  let newStr = "";
  if (option == "left") {
    for (let i = 0; i < numStr.length - 1; i++) {
      newStr += String(Number(numStr[i]) + Number(numStr[i + 1]));
    }
    return newStr;
  } else if (option == "right") {
    for (let i = numStr.length - 1; i > 0; i--) {
      newStr += String(Number(numStr[i]) + Number(numStr[i - 1]));
    }
    return newStr;
  }
};
console.log(addNumber("672318", "right"));
module.exports = addNumber;
