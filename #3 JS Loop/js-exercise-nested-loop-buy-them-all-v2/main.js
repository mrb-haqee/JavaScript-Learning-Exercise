function buyThemAll(books, budget) {
  if (budget == 0) {
    return "Afista tidak bisa membeli buku sama sekali, sisa uang Afista adalah 0.";
  }
  let basket = [];
  let totalPrice = 0;
  for (let i = 0; i < books.split(",").length; i++) {
    budget -= Number(books.split(",")[i].split(":")[1]);
    console.log(i, budget);
    if (budget < 0) {
      budget += Number(books.split(",")[i].split(":")[1]);
      continue;
    }
    totalPrice += Number(books.split(",")[i].split(":")[1]);
    basket.push(books.split(",")[i].split(":")[0]);
  }
  console.log(basket);
  if (basket.length == 2) {
    return `Afista membeli 2 buku yaitu ${basket[0]}, ${basket[1]}. Total belanja ${totalPrice}, sisa uang Afista adalah ${budget}.`;
  } else if (basket.length == 3) {
    return `Afista membeli 3 buku yaitu ${basket[0]}, ${basket[1]}, ${basket[2]}. Total belanja ${totalPrice}, sisa uang Afista adalah ${budget}.`;
  } else if (basket.length == 4) {
    return `Afista membeli 4 buku yaitu ${basket[0]}, ${basket[1]}, ${basket[2]}, ${basket[3]}. Total belanja ${totalPrice}, sisa uang Afista adalah ${budget}.`;
  }
  // TODO: replace this
  return `Afista tidak bisa membeli buku sama sekali, sisa uang Afista adalah ${budget}.`;
}

// console.log(buyThemAll('The Alchemist:55000,The Hobit:20000,The Power of Habit:10000', 100000)); //Afista membeli 3 buku yaitu The Alchemist, The Hobit, The Power of Habit. Total belanja 85000, sisa uang Afista adalah 15000.
// console.log(buyThemAll('Javascript itu asik:143200,Belajar HTML5:78000,Lebih Mengenal CSS3:123000', 300000)); // Afista membeli 2 buku yaitu Javascript itu asik, Belajar HTML5. Total belanja 221200, sisa uang Afista adalah 78800.
// console.log(buyThemAll('Javascript itu asik:143200,Belajar HTML5:78000,Lebih Mengenal CSS3:123000', 20000)); // Afista tidak bisa membeli buku sama sekali, sisa uang Afista adalah 20000.
// console.log(buyThemAll('Javascript itu asik:143200,Belajar HTML5:78000,Lebih Mengenal CSS3:123000', 0)); // Afista tidak bisa membeli buku sama sekali, sisa uang Afista adalah 0.

console.log(
  buyThemAll(
    "Javascript itu asik:143200,Lebih Mengenal CSS3:123000,Belajar HTML5:78000",
    300000
  )
); // Afista membeli 3 buku yaitu The Alchemist, The Hobbit, The Power of Habit. Total belanja 125000, sisa uang Afista adalah 25000.

module.exports = buyThemAll;
