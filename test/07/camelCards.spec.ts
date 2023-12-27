import {
  callbackNormalization,
  dirname,
  puzzleInput,
  camelCards,
} from "../../src/07";
import { readFileContent } from "../../src/utils";
// import { readFileContent } from "../../src/utils";

describe("--- Day 7: Camel Cards ---", () => {
  it("P1: Basic, dummy input should return 6440", () => {
    // const input =
    // ["32T3K 765"];
    const input = [
      "32T3K 765",
      "T55J5 684",
      "KK677 28",
      "KTJJT 220",
      "QQQJA 483",
    ];
    const res = camelCards(input);
    expect(res).toBe(6440);
  });

  it("P1: only highCards, dummy input should return 5479 ", () => {
    const input = ["7634K 905", "5643T 157", "486TK 358", "8J29Q 523"];
    const res = camelCards(input);
    //const winnings = 358*1 + 157*2 + 905*3 + 523*4
    expect(res).toBe(5479);
  });


  it("P1: Should decode puzzle input", async () => {
    const normalizedData = await readFileContent({
      paths: [dirname, puzzleInput],
      normalizeDataCallback: callbackNormalization,
    });
    if (normalizedData.err) {
      console.log(normalizedData.val);
      fail(normalizedData.val);
    }

    const res = camelCards(normalizedData.val);
    console.log(res);
    //expect(res).toBe(2563);
  });
});
