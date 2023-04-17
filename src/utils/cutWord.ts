const cutWord = (word: string) => {
  const firstLetter = word[0];
  const lastLetter = word[word.length - 1];
  const wordBody = word.slice(1, word.length - 1);

  return {
    firstLetter,
    lastLetter,
    wordBody,
  };
};

export default cutWord;
