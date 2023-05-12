function printNumber(totalNumber) {
  let result = "";
  for (let i = 1, j = 0; j < totalNumber; i++, j++) {
    result += String(i);
    if (i == 3) {
      i = 0;
    }
  }
  return result; // TODO: replace this
}
// 4, 7, 10
console.log(printNumber(2));
console.log(printNumber(3));
console.log(printNumber(6));
console.log(printNumber(10));
console.log(printNumber(30));

module.exports = printNumber;
