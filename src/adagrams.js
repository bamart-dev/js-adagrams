const LETTER_POOL = {
  'A': 9, 'B': 2, 'C': 2, 'D': 4, 'E': 12, 'F': 2, 'G': 3, 'H': 2, 'I': 9,
  'J': 1, 'K': 1, 'L': 4, 'M': 2, 'N': 6, 'O': 8, 'P': 2, 'Q': 1, 'R': 6,
  'S': 6, 'T': 6, 'U': 4, 'V': 2, 'W': 2, 'X': 1, 'Y': 2, 'Z': 1,
}
const POINTS = {
  'A': 1, 'B': 3, 'C': 3, 'D': 2, 'E': 1, 'F': 4, 'G': 2, 'H': 4, 'I': 1,
  'J': 8, 'K': 5, 'L': 1, 'M': 3, 'N': 1, 'O': 1, 'P': 3, 'Q': 10, 'R': 1,
  'S': 1, 'T': 1, 'U': 1, 'V': 4, 'W': 4, 'X': 8, 'Y': 4, 'Z': 10,
}
const FULL_HAND = 10;
const C_MIN = 65;
const C_MAX = 90;
const BONUS_CUTOFF = 7;
const LRG_WORD_BONUS = 8;

export const drawLetters = () => {
  const hand = [];
  const handHasLetter = {};

  for (let i = 0; i < FULL_HAND; i++) {
    const randomLetter = generateRandomLetter();

    if (handHasLetter[randomLetter] >= LETTER_POOL[randomLetter]) {
      i--;
      continue;
    } else if (handHasLetter[randomLetter]) {
      hand.push(randomLetter);
      handHasLetter[randomLetter] += 1;
    } else {
      hand.push(randomLetter);
      handHasLetter[randomLetter] = 1;
    }
  }

  return hand;

};

export const usesAvailableLetters = (input, lettersInHand) => {
  const letterCount = generateCounts(input);
  const lettersInHandCount = generateCounts(lettersInHand);

  for (const char in letterCount) {
    if (!lettersInHandCount[char] || letterCount[char] > lettersInHandCount[char]) {
      return false;
    }
  }

  return true;
};

export const scoreWord = (word) => {
  //* sum word total based on POINTS
  let score = 0;

  for (const char of word) {
    const letter = validateLetter(char);
    score += POINTS[letter];
  }

  return word.length < BONUS_CUTOFF ? score : score + LRG_WORD_BONUS;
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};


//* Helper Functions
const generateCounts = (iterable) => {
  const counts = {};

  for (const c of iterable) {
    const char = validateLetter(c);
    counts[char] = (counts[char] || 0) + 1;
  }

  return counts;
};

const generateRandomLetter = () => {
  const charCode = Math.floor(Math.random() * (C_MAX - C_MIN + 1) + C_MIN);

  return String.fromCharCode(charCode);
};

const validateLetter = (char) => {
  const upChar = char.toUpperCase();

  if (upChar.charCodeAt() < C_MIN || upChar.charCodeAt() > C_MAX) {
    throw new TypeError(`${char} is not a valid letter`);
  }

  return upChar;
};
