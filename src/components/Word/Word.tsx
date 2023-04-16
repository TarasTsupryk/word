import React from "react";
import cutWord from "./cutWord";
import {
  StyledWord,
  FirstLetter,
  LastLetter,
  WordWithoutLastLetter,
} from "./Word.styles";

interface Props {
  word: string;
}

const Word: React.FC<Props> = ({ word }) => {
  const { firstLetter, lastLetter, wordBody } = cutWord(word);
  return (
    <StyledWord data-testId={"word"}>
      <FirstLetter>{firstLetter.toLocaleUpperCase()}</FirstLetter>
      <WordWithoutLastLetter>{wordBody}</WordWithoutLastLetter>
      <LastLetter>{lastLetter}</LastLetter>
    </StyledWord>
  );
};

export default Word;
