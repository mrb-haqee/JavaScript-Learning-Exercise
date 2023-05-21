function travelSeat(passengers, seatColumn) {
  if (seatColumn <= 0) {
    return "Invalid number";
  }
  if (passengers.length <= 0) {
    return "Oops! tickets not sold!";
  }
  passengers.sort();
  let result = [],
    arr = [];
  while (passengers.length > 0) {
    arr.push(passengers.shift());
    if (arr.length == seatColumn) {
      result.push(arr);
      arr = [];
    }
    if (passengers.length == 0) {
      if (arr.length == 0) {
        break;
      }
      for (let i = arr.length; i < seatColumn; i++) {
        arr.push("Seat available");
      }
      result.push(arr);
    }
  }

  return result; // TODO: replace this
}

console.log(travelSeat(["Djalal", "Ismet", "Hengky", "Romli"], 2));
console.log(travelSeat(["Karin", "Naila", "Indah", "Inezka", "Nisa"], 5));
console.log(travelSeat(["Waluyo", "Alvin", "Arda", "Irfan", "Hilmi"], 3));
console.log(travelSeat(["Zona", "Retha", "Yoga"], 0));
console.log(travelSeat([], 4));
console.log(travelSeat(["Ayah", "Ibu", "Kakak", "Adik"], 3));

module.exports = travelSeat;
