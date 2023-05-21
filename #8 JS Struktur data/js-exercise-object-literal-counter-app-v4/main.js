function counterApp(arr) {
    if (arr === undefined) {
      return "Invalid input";
    }
  if (arr.length == 0) {
    return "Data not found";
  }
  let result = {};
  arr.forEach((value) => {
    if (result[value] === undefined) {
      result[value] = 1;
    } else {
      result[value]++;
    }
  });
  return result; // TODO: replace this
}

console.log(
  counterApp([
    "Hikman",
    "Naufal",
    "Kanda",
    "Arya",
    "Kanda",
    "Hikman",
    "Naufal",
    "Hikman",
    "Kanda",
    "Kanda",
  ])
);
console.log(counterApp([5, 6, 7, 5, 5, 7, 6, 7, 7, 7, 5, 6]));
console.log(counterApp([]));
console.log(counterApp());

module.exports = counterApp;
