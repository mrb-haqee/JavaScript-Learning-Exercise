function vocalCounter(array) {
  let vokal = ["a", "i", "u", "e", "o", "A", "I", "U", "E", "O"];
  let result = [];
  array.forEach((arr) => {
    vokal.forEach((v) => {
      if (arr == v) {
        result.push(arr);
      }
    });
  });
  if (result.length == 0) {
    return "Tidak ada huruf vokal yang ditemukan";
  } else {
    return `Jumlah vokal yang ditemukan sebanyak ${result.length} berupa ${result.join("")}`; // TODO: replace this
  }
}
console.log([] == undefined);
console.log(vocalCounter(["x", "A", 5, "o", 1, "T", "b"]));
console.log(vocalCounter([-10, "E", "e", "z", "p", "i", 4]));
console.log(vocalCounter(["q", "W", "r", "t", "Y"]));

module.exports = vocalCounter;
