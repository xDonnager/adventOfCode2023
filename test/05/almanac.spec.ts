import {
  callbackNormalization,
  dirname,
  puzzleInput,
  scratchcardsWorthValue,
} from "../../src/05";
import { readFileContent } from "../../src/utils";

describe("--- Day 5: If You Give A Seed A Fertilizer ---", () => {
  it("P1: Basic, should return 8", () => {
    const input = ["Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53"];

    const res = scratchcardsWorthValue(input);
    expect(res).toBe(8);
  });

  // it("P1: Should decode puzzle input", async () => {
  //   const normalizedData = await readFileContent({
  //     paths: [dirname, puzzleInput],
  //     normalizeDataCallback: callbackNormalization,
  //   });
  //   if (normalizedData.err) {
  //     console.log(normalizedData.val);
  //     fail(normalizedData.val);
  //   }

  //   const res = scratchcardsWorthValue(normalizedData.val);
  //   console.log(res);
  //   //expect(res).toBe(2563);
  // });
});
