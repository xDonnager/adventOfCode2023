import {
  findPossibleMatches,
  dirname,
  puzzleInput,
  callbackNormalization,
  findPowerOfCubeSet,
} from "../../src/02";
import { readFileContent } from "../../src/utils";

describe("--- Day 2: Cube Conundrum ---", () => {
  it("P1: should return 0", () => {
    const input = [
      "Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red",
    ];

    const res = findPossibleMatches(input);
    //console.log(res);
    expect(res).toBe(0);
  });

  it("P1: Should find the possibel game ids sum - dummy input", () => {
    const input = [
      "Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green",
      "Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue",
      "Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red",
      "Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red",
      "Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green",
    ];

    const res = findPossibleMatches(input);
    //console.log(res);
    expect(res).toBe(8);
  });

  it("P1: Should find the possibel game ids sum - puzzle input", async () => {
    const normalizedData = await readFileContent({
      paths: [dirname, puzzleInput],
      normalizeDataCallback: callbackNormalization,
    });
    if (normalizedData.err) {
      console.log(normalizedData.val);
      fail(normalizedData.val);
    }

    const res = findPossibleMatches(normalizedData.val);
    //console.log(res);
    expect(res).toBe(2563);
  });

  it("P2: should return 48", () => {
    const input = ["Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green"];

    const res = findPowerOfCubeSet(input);
    //console.log(res);
    expect(res).toBe(48);
  });

  it("P2: Should find needed minimum cubes per game in order to be possible - dummy input", () => {
    const input = [
      "Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green",
      "Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue",
      "Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red",
      "Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red",
      "Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green",
    ];

    const res = findPowerOfCubeSet(input);
    //console.log(res);
    expect(res).toBe(2286);
  });

  it("P2: Should find needed minimum cubes per game in order to be possible - puzzle input", async () => {
    const normalizedData = await readFileContent({
      paths: [dirname, puzzleInput],
      normalizeDataCallback: callbackNormalization,
    });
    if (normalizedData.err) {
      console.log(normalizedData.val);
      fail(normalizedData.val);
    }

    const res = findPowerOfCubeSet(normalizedData.val);
    //console.log(res);
    expect(res).toBe(70768);
  });
});
