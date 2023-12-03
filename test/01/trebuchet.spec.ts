import {
  callbackNormalization,
  dirname,
  extractCalibrationValue,
  puzzleInput,
} from "../../src/01";
import { readFileContent } from "../../src/utils";

describe("--- Day 1: Trebuchet?! ---", () => {
  it("Should decode the calibration values dummy inpuy", () => {
    const input = ["1abc2", "pqr3stu8vwx", "a1b2c3d4e5f", "treb7uchet"];
    const res = extractCalibrationValue(input);
    //console.log(res);
    expect(res).toBe(142);
  });

  it("Should pass the input puzzle challenge", async () => {
    const normalizedData = await readFileContent({
      paths: [dirname, puzzleInput],
      normalizeDataCallback: callbackNormalization,
    });
    if (normalizedData.err) {
      console.log(normalizedData.val);
      return;
    }
    const res = extractCalibrationValue(normalizedData.val);
    //console.log(res);
    expect(res).toBe(53974);
  });
});
