import {
  callbackNormalization,
  dirname,
  puzzleInput,
  scratchcardsWorthValue,
} from "../../src/04";
import { readFileContent } from "../../src/utils";

describe("--- Day 4: Scratchcards ---", () => {
  it("P1: Basic, should return 8", () => {
    const input = ["Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53"];

    const res = scratchcardsWorthValue(input);
    expect(res).toBe(8);
  });
  it("P1: Basic, should return 2", () => {
    const input = ["Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19"];

    const res = scratchcardsWorthValue(input);
    expect(res).toBe(2);
  });
  it("P1: Basic, should return 2", () => {
    const input = ["Card 3:  1 21 53 59 44 | 69 82 63 72 16 21 14  1"];

    const res = scratchcardsWorthValue(input);
    expect(res).toBe(2);
  });
  it("P1: Basic, should return 1", () => {
    const input = ["Card 4: 41 92 73 84 69 | 59 84 76 51 58  5 54 83"];

    const res = scratchcardsWorthValue(input);
    expect(res).toBe(1);
  });
  it("P1: Basic, should return 0", () => {
    const input = ["Card 5: 87 83 26 28 32 | 88 30 70 12 93 22 82 36"];

    const res = scratchcardsWorthValue(input);
    expect(res).toBe(0);
  });
  it("P1: Basic, should return 0", () => {
    const input = ["Card 6: 31 18 13 56 72 | 74 77 10 23 35 67 36 11"];

    const res = scratchcardsWorthValue(input);
    expect(res).toBe(0);
  });
  it("P1: Basic, dummy input should return 13", () => {
    const input = [
      "Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53",
      "Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19",
      "Card 3:  1 21 53 59 44 | 69 82 63 72 16 21 14  1",
      "Card 4: 41 92 73 84 69 | 59 84 76 51 58  5 54 83",
      "Card 5: 87 83 26 28 32 | 88 30 70 12 93 22 82 36",
      "Card 6: 31 18 13 56 72 | 74 77 10 23 35 67 36 11",
    ];

    const res = scratchcardsWorthValue(input);
    expect(res).toBe(13);
  });
  it("P1: hard, should return 516", () => {
    const input = [
      "Card   1: 13  4 61 82 80 41 31 53 50  2 | 38 89 26 79 94 50  2 74 31 92 80 41 13 97 61 82 68 45 64 39  4 53 90 84 54",
      "Card   2: 25 44 86 77 98 91 55 39 63 12 | 84 62 55 28 99 26 19 18 13 57 97 63 20 65 24 31 72 41 77 27 50 30 38  3 88",
    ];
    // 13 4 61 82 80 41 31 53 50 2  -- 18
    // 77 55 63 -- 4

    const res = scratchcardsWorthValue(input);
    expect(res).toBe(24);
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

    const res = scratchcardsWorthValue(normalizedData.val);
    console.log(res);
    //expect(res).toBe(2563);
  });
});
