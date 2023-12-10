import {
  // callbackNormalization,
  // dirname,
  // puzzleInput,
  beatBoatRecord,
} from "../../src/06";
// import { readFileContent } from "../../src/utils";

describe("--- Day 6: Wait For It ---", () => {
  it("P1: Basic, dummy input should return 288", () => {
    // const input = ["Time:      7  15   30", "Distance:  9  40  200"];

    const input = {
      time: [7, 15, 30],
      distance: [9, 49, 200],
    };
    const res = beatBoatRecord(input);
    expect(res).toBe(288);
  });
  it("P1: Should decode puzzle input", async () => {
    // const normalizedData = await readFileContent({
    //   paths: [dirname, puzzleInput],
    //   normalizeDataCallback: callbackNormalization,
    // });
    // if (normalizedData.err) {
    //   console.log(normalizedData.val);
    //   fail(normalizedData.val);
    // }
    const normalizedData = {
      val: {
        time: [38, 67, 76, 73],
        distance: [234, 1027, 1027, 1236],
      },
    };

    const res = beatBoatRecord(normalizedData.val);
    console.log(res);
    expect(res).toBe(303600);
  });

  it("P2: Basic, dummy input should return 71503", () => {
    const input = {
      time: [71530],
      distance: [949200],
    };
    const res = beatBoatRecord(input);
    expect(res).toBe(71503);
  });
});
