function resistorValue(bandColor1, bandColor2, bandColor3, bandColor4) {
  let color = [
    "black",
    "brown",
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "violet",
    "grey",
    "white",
  ];
  let significant_figure;
  for (let i = 0, n = 0; i < color.length; i++) {
    for (let j = 0; j < color.length; j++) {
      if (color[i] == bandColor1 && color[j] == bandColor2) {
        console.log(color[i], "=", bandColor1, color[j], "=", bandColor2);
        significant_figure = `${i}${j}`;
        n = 1;
        break;
      }
    }
    if (n == 1) {
      break;
    }
  }
  console.log(significant_figure, typeof significant_figure);
  console.log(parseInt(significant_figure));
  let nilai_resistor;
  if (bandColor3 == "gold") {
    nilai_resistor = parseInt(significant_figure) * 0.1;
  } else if (bandColor3 == "silver") {
    nilai_resistor = parseInt(significant_figure) * 0.01;
  } else {
    let multiplier = 1;
    for (let i = 0; i < color.length - 2; i++) {
      if (color[i] == bandColor3) {
        console.log(color[i]);
        nilai_resistor = parseInt(significant_figure) * multiplier;
        break;
      }
      multiplier *= 10;
    }
  }
  switch (bandColor4) {
    case "black":
      return `${nilai_resistor} ohm ±20%`;
    case "brown":
      return `${nilai_resistor} ohm ±1%`;
    case "red":
      return `${nilai_resistor} ohm ±2%`;
    case "gold":
      return `${nilai_resistor} ohm ±5%`;
    case "silver":
      return `${nilai_resistor} ohm ±10%`;
  }
  return null; // TODO: replace this
}

console.log(resistorValue("black", "brown", "red", "gold"));
// console.log(resistorValue("red", "red", "red", "gold"));
// console.log(resistorValue("yellow", "violet", "green", "silver"));
// console.log(resistorValue("blue", "grey", "green", "silver"));
// console.log("20");

module.exports = resistorValue;
