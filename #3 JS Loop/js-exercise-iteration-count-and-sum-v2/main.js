function countAndSum(number) {
  let sum = 0;
  for (i = 1, j = 1; j <= number; i++, j++) {
    sum += i;
    if (i == 3) {
      i=0
    }
  }
  //your code here
  return sum; // TODO: replace this
}

console.log(countAndSum(5)); // 9
console.log(countAndSum(10)); // 19
console.log(countAndSum(100)); // 199
console.log(countAndSum(17)); // 33
console.log(countAndSum(19)); // 0

module.exports = countAndSum;
