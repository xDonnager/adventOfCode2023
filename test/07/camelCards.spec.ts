import {
  // callbackNormalization,
  // dirname,
  // puzzleInput,
  camelCards,
} from "../../src/07";
// import { readFileContent } from "../../src/utils";

describe("--- Day 7: Camel Cards ---", () => {
  it("P1: Basic, dummy input should return 6440", () => {

    const input = 
    ["32T3K 765",
    "T55J5 684",
    "KK677 28",
    "KTJJT 220",
    "QQQJA 483"];
    const res = camelCards(input);
    expect(res).toBe(6440);
  });
  // it("P1: Should decode puzzle input", async () => {
  //   const normalizedData = {
  //     val: {
  //       time: [38, 67, 76, 73],
  //       distance: [234, 1027, 1157, 1236],
  //     },
  //   };

  //   const res = beatBoatRecord(normalizedData.val);
  //   console.log(res);
  //   expect(res).toBe(303600);
  // });

  // it("P2: Basic, dummy input should return 71503", () => {
  //   const input = {
  //     time: [71530],
  //     distance: [949200],
  //   };
  //   const res = beatBoatRecord(input);
  //   expect(res).toBe(71503);
  // });
  // it("P2: puzzle input", () => {
  //   const input = {
  //     time: [38677673],
  //     distance: [234102711571236],
  //   };
  //   const res = beatBoatRecord(input);
  //   console.log(res);
  //   //expect(res).toBe(71503);
  // });
});
