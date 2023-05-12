function generateParenthesesPair(numberOfPairs) {
  let i = 0;
  let bracket = "";
  while (i < numberOfPairs) {
    bracket += "(";
    i++;
  }
  i = 0;
  while (i < numberOfPairs) {
    bracket += ")";
    i++;
  }
  //your code here
  return bracket; // TODO: replace this
}

console.log(generateParenthesesPair(0)); // ''
console.log(generateParenthesesPair(1)); // '()'
console.log(generateParenthesesPair(2)); // '(())'
console.log(generateParenthesesPair(3)); // '((()))'
console.log(generateParenthesesPair(12)); // '(((((((((((())))))))))))'

module.exports = generateParenthesesPair;
