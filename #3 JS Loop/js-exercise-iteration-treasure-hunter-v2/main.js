function trasureHunter(dailyLog) {
  let price = 0;
  for (let i = 0; i < dailyLog.length; i++) {
    if (dailyLog[i] == "$") {
      price += 100;
    } else if (dailyLog[i] == "x") {
      if (price == 0) {
        continue;
      }
      price -= 10;
    } else if (dailyLog[i] == "#") {
      price /= 2;
    }
  }
  return price; // TODO: replace this
}

console.log(trasureHunter("$x$#x$")); // 185
console.log(trasureHunter("$$#x$$")); // 290
console.log(trasureHunter("x$#x$#x$")); // 160
console.log(trasureHunter("xx$#$#$#$###xx")); // 3.4375

module.exports = trasureHunter;
