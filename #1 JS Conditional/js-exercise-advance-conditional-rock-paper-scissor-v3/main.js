function rockPaperScissor(player1, player2) {
  switch (player1) {
    case "rock":
      switch (player2) {
        case "rock":
          return "Draw!";
        case "paper":
          return "Player 2 Won!";
        case "scissor":
          return "Player 1 Won!";
      }
    case "paper":
      switch (player2) {
        case "rock":
          return "Player 1 Won!";
        case "paper":
          return "Draw!";
        case "scissor":
          return "Player 2 Won!";
      }
    case "scissor":
      switch (player2) {
        case "rock":
          return "Player 2 Won!";
        case "paper":
          return "Player 1 Won!";
        case "scissor":
          return "Draw!";
      }
  }
  return null; // TODO: replace this
}

console.log(rockPaperScissor("scissor", "paper")); // "Player 1 Won!"
console.log(rockPaperScissor("rock", "paper")); // "Player 2 Won!"
console.log(rockPaperScissor("paper", "paper")); // "Draw!"
console.log(rockPaperScissor("rock", "rock")); // "Draw!"

module.exports = rockPaperScissor;
