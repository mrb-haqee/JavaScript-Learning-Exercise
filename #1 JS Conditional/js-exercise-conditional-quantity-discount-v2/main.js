function quantityDiscount(quantity, price) {
  if (quantity >= 10) {
    var hasil = (price - price * 0.2 + (price - price * 0.2) * 0.11) * quantity;
    return Math.round(hasil * 100) / 100;
  } else if (quantity >= 5 && quantity < 10) {
    var hasil =
      (price - price * 0.15 + (price - price * 0.15) * 0.11) * quantity;
    return Math.round(hasil * 100) / 100;
  } else {
    var hasil = (price + price * 0.11) * quantity;
    return Math.round(hasil * 100) / 100;
  }
  return null; // TODO: replace this
}

console.log(quantityDiscount(1, 100));
console.log(quantityDiscount(3, 100));
console.log(quantityDiscount(5, 100));
console.log(quantityDiscount(10, 100));
console.log(quantityDiscount(15, 3));
console.log(quantityDiscount(3, 10000));
console.log(quantityDiscount(12, 10000));

module.exports = quantityDiscount;
