const alphabet = "abcdefghijklmnopqrstuvwxyz";

function calculateCharacterValueLinear(character: string): number | Error {
  if (character.length !== 1) {
    throw new Error("Character must be a single character");
  }

  if (character.toLowerCase() !== character) {
    throw new Error("Character must be lowercase");
  }

  return alphabet.indexOf(character);
}

const alphabetHashMap = alphabet.split("").reduce((acc, character, index) => {
  acc[character] = index;
  return acc;
}, {});

function calculateCharacterValueHashMap(character: string): number | Error {
  return alphabetHashMap[character];
}

export function calculateWordValueLinear(word: string): number | Error {
  const lowerCaseWord = word.toLowerCase();
  return lowerCaseWord.split("").reduce((acc, character, index) => {
    const characterValue = calculateCharacterValueLinear(character);

    if (characterValue instanceof Error) {
      throw characterValue;
    }

    return acc + characterValue + index * alphabet.length;
  }, 0);
}

export function calculateWordValueHashMap(word: string): number | Error {
  const lowerCaseWord = word.toLowerCase();
  return lowerCaseWord.split("").reduce((acc, character, index) => {
    const characterValue = calculateCharacterValueHashMap(character);

    if (characterValue instanceof Error) {
      throw characterValue;
    }

    return acc + characterValue + index * alphabet.length;
  }, 0);
}
