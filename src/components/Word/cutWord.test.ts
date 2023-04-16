import cutWord from "./cutWord";

describe("cutWord", () => {
  it("default", () => {
    const word = "яблуко";
    const { firstLetter, lastLetter, wordBody } = cutWord(word);
    expect(firstLetter).toBe("я");
    expect(lastLetter).toBe("о");
    expect(wordBody).toBe("блук");
  });

  it("one letter", () => {
    const word = "а";
    const { firstLetter, lastLetter, wordBody } = cutWord(word);
    expect(firstLetter).toBe("а");
    expect(lastLetter).toBe("а");
    expect(wordBody).toBe("");
  });

  it("two letters", () => {
    const word = "аб";
    const { firstLetter, lastLetter, wordBody } = cutWord(word);
    expect(firstLetter).toBe("а");
    expect(lastLetter).toBe("б");
    expect(wordBody).toBe("");
  });
});
