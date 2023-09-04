function guessingGame() {
  let answer = Math.floor(Math.random() * 100);
  let isEnd = false;
  let count = 0;

  return function game(guess) {
    if (isEnd) return "The game is over, you already won!";
    count++;

    if (guess === answer) {
      isEnd = true;
      return `You win! You found ${guess} in ${count} guesses.`;
    }

    if (guess < answer) return `${guess} is too low!`;
    if (guess > answer) return `${guess} is too high!`;
  };
}

module.exports = { guessingGame };
