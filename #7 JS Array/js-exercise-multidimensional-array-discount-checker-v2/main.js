function discountChecker(costumers, date) {
  let result = [];
  costumers.forEach((value) => {
    if (value[1] == "member") {
      result.push(value);
    } else if (
      Number(value[0].slice(2)) % 2 === 0 &&
      Number(date.split("-")[0]) % 2 === 0
    ) {
      result.push(value);
    } else if (
      Number(value[0].slice(2)) % 2 === 1 &&
      Number(date.split("-")[0]) % 2 === 1
    ) {
      result.push(value);
    }
  });
  return result; // TODO: replace this
}

let costumers = [
  ["$ 228", "member"],
  ["$ 19", "non-member"],
  ["$ 238", "non-member"],
  ["$ 49", "member"],
];

console.log(discountChecker(costumers, "28-10-2022"));

var costumers2 = [
  ["$ 754", "member"],
  ["$ 233", "member"],
  ["$ 31", "non-member"],
  ["$ 332", "non-member"],
];

console.log(discountChecker(costumers2, "11-06-2022"));

module.exports = discountChecker;
