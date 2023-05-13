function kelvinToCelsius(kelvin) {
  // your code here
  return Math.round((kelvin - 273.15) * 100) / 100; // TODO: replace this
}

function kelvinToFahrenheit(kelvin) {
  // your code here
  return Math.round((((kelvin - 273.15) * 9) / 5 + 32) * 100) / 100; // TODO: replace this
}

function celsiusToFahrenheit(celsius) {
  // your code here
  return Math.round((celsius * (9 / 5) + 32) * 100) / 100; // TODO: replace this
}

function celsiusToKelvin(celsius) {
  // your code here
  return Math.round((celsius + 273.15) * 100) / 100; // TODO: replace this
}

function fahrenheitToKelvin(fahrenheit) {
  // your code here
  let result=Math.round(((fahrenheit - 32) * (5 / 9) + 273.15) * 100) / 100; // TODO: replace this
  if (result==-0){
    return 0
  }else{
    return result
  }
}

function fahrenheitToCelsius(fahrenheit) {
  // your code here
  return Math.round((fahrenheit - 32) * (5 / 9) * 100) / 100; // TODO: replace this
}

function convertTemperature(temperature, initialUnit, finalUnit) {
  // your code here
  switch (initialUnit) {
    case "K":
      switch (finalUnit) {
        case "K":
          return temperature;
        case "C":
          return kelvinToCelsius(temperature);
        case "F":
          return kelvinToFahrenheit(temperature);
      }
    case "C":
      switch (finalUnit) {
        case "K":
          return celsiusToKelvin(temperature);
        case "C":
          return temperature;
        case "F":
          return celsiusToFahrenheit(temperature);
      }
    case "F":
      switch (finalUnit) {
        case "K":
          return fahrenheitToKelvin(temperature);
        case "C":
          return fahrenheitToCelsius(temperature);
        case "F":
          return temperature;
      }
  }
  return null; // TODO: replace this
}

console.log(convertTemperature(0, "C", "K")); // 273.15
console.log(convertTemperature(0, "C", "F")); // 32

console.log(convertTemperature(0, "F", "C")); // -17.78
console.log(convertTemperature(0, "F", "K")); // 255.37

console.log(convertTemperature(0, "K", "C")); // -273.15
console.log(convertTemperature(0, "K", "F")); // -459.67

module.exports = {
  kelvinToCelsius,
  kelvinToFahrenheit,
  celsiusToFahrenheit,
  celsiusToKelvin,
  fahrenheitToKelvin,
  fahrenheitToCelsius,
  convertTemperature,
};
