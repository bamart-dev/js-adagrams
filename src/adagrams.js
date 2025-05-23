const LETTER_DISTRIBUTION = {
    'A': 9, 'B': 2, 'C': 2, 'D': 4, 'E': 12, 'F': 2, 'G': 3, 'H': 2, 'I': 9,
    'J': 1, 'K': 1, 'L': 4, 'M': 2, 'N': 6, 'O': 8, 'P': 2, 'Q': 1, 'R': 6,
    'S': 6, 'T': 6, 'U': 4, 'V': 2, 'W': 2, 'X': 1, 'Y': 2, 'Z': 1,
};
const FULL_HAND = 10;
const C_MIN = 65;
const C_MAX = 91;

export const drawLetters = () => {
  const hand = [];
  const seen = {};

  for (let i = 0; i < FULL_HAND; i++) {
    const randomLetter = (() => {
      let charCode = Math.floor(Math.random() * (C_MAX - C_MIN) + C_MIN);
      return String.fromCharCode(charCode);
    })();

    if (seen[randomLetter] >= LETTER_DISTRIBUTION[randomLetter]) {
      i--;
      continue;
    } else if (seen[randomLetter]) {
      hand.push(randomLetter);
      seen[randomLetter] += 1;
    } else {
      hand.push(randomLetter);
      seen[randomLetter] = 1;
    }
  }

  return hand;

};

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
