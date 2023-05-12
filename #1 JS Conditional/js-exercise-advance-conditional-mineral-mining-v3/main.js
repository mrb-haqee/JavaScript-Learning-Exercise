function mineralMining(mineral, miningPower, duration, cost) {
  let income;
  switch (mineral) {
    case "gold":
      income = (duration / 30) * miningPower;
      if (income * 1 < cost) {
        return `Mineral mining at a loss ${income * 1 - cost}`;
      } else if (income * 1 > cost) {
        return `Mineral mining profit ${income * 1 - cost}`;
      } else {
        return "Mineral mining get nothing";
      }
    case "silver":
      income = (duration / 20) * miningPower;
      if (income * 0.6 < cost) {
        return `Mineral mining at a loss ${income * 0.6 - cost}`;
      } else if (income * 0.6 > cost) {
        return `Mineral mining profit ${income * 0.6 - cost}`;
      } else {
        return "Mineral mining get nothing";
      }
    case "copper":
      income = (duration / 5) * miningPower;
      if (income * 0.3 < cost) {
        return `Mineral mining at a loss ${income * 0.3 - cost}`;
      } else if (income * 0.3 > cost) {
        return `Mineral mining profit ${income * 0.3 - cost}`;
      } else {
        return "Mineral mining get nothing";
      }
    case "uranium":
      income = (duration / 75) * miningPower;
      if (income * 3 < cost) {
        return `Mineral mining at a loss ${income * 3 - cost}`;
      } else if (income * 3 > cost) {
        return `Mineral mining profit ${income * 3 - cost}`;
      } else {
        return "Mineral mining get nothing";
      }
    case "platinum":
      income = (duration / 15) * miningPower;
      if (income * 2 < cost) {
        return `Mineral mining at a loss ${income * 2 - cost}`;
      } else if (income * 2 > cost) {
        return `Mineral mining profit ${income * 2 - cost}`;
      } else {
        return "Mineral mining get nothing";
      }
    case "titanium":
      income = (duration / 55) * miningPower;
      if (income * 1.5 < cost) {
        return `Mineral mining at a loss ${income * 1.5 - cost}`;
      } else if (income * 1.5 > cost) {
        return `Mineral mining profit ${income * 1.5 - cost}`;
      } else {
        return "Mineral mining get nothing";
      }
  }
  return "Invalid mineral name"; // TODO: replace this
}

console.log(mineralMining("gold", 10, 70, 59)); // Mineral mining at a loss -35.666666666666664
console.log(mineralMining("rock", 10, 70, 40)); // Invalid mineral name
console.log(mineralMining("uranium", 10, 70, 150)); // Mineral mining at a loss -122
console.log(mineralMining("silver", 33, 200, 30)); // Mineral mining profit 168
console.log(mineralMining("titanium", 25, 100, 200)); // Mineral mining at a loss -131.8181818181818
console.log(mineralMining("gold", 1, 100, 15)); // Mineral mining at a loss -11.666666666666666
console.log(mineralMining("titanium", 20, 350, 150)); // Mineral mining at a loss 40.90909090909091

module.exports = mineralMining;
