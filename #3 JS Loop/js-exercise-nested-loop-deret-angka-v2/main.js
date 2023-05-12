function deretanAngkaHinggaN(n) {
  if (n <= 1) {
    return "Incorrect param";
  }
  let str = "";
  for (let i = n; i > 0; i--) {
    for (j = i - 1; j > 0; j--) {
      str += String(j);
    }
  }
  return str; // TODO: replace this
}

console.log(deretanAngkaHinggaN(5));

module.exports = deretanAngkaHinggaN;
