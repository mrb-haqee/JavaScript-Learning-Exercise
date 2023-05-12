function profitMonitor(todayProfit, lastProfit) {
  if (todayProfit > lastProfit) {
    return `Profit naik sebanyak ${todayProfit - lastProfit} point`;
  } else if (todayProfit == lastProfit) {
    return "Profit stabil";
  } else {
    return `Profit turun sebanyak ${lastProfit - todayProfit} point`;
  }
  return null; // TODO: replace this
}

console.log(profitMonitor(100, 50));
console.log(profitMonitor(50, 100));
console.log(profitMonitor(100, 100));

module.exports = profitMonitor;
