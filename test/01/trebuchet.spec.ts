import {
  callbackNormalization,
  dirname,
  extractCalibrationValue,
  extractCalibrationValueLetters,
  puzzleInput,
} from "../../src/01";
import { readFileContent } from "../../src/utils";

describe("--- Day 1: Trebuchet?! ---", () => {
  it("P1: Should decode the calibration values dummy input", () => {
    const input = ["1abc2", "pqr3stu8vwx", "a1b2c3d4e5f", "treb7uchet"];
    const res = extractCalibrationValue(input);
    //console.log(res);
    expect(res).toBe(142);
  });

  it("P1 Should pass the input puzzle challenge", async () => {
    const normalizedData = await readFileContent({
      paths: [dirname, puzzleInput],
      normalizeDataCallback: callbackNormalization,
    });
    if (normalizedData.err) {
      console.log(normalizedData.val);
      fail(normalizedData.val);
    }
    const res = extractCalibrationValue(normalizedData.val);
    //console.log(res);
    expect(res).toBe(53974);
  });

  it("P2: Should decode the calibration values spelled with letters dummy input", () => {
    const input = [
      "two1nine",
      "eightwothree",
      "abcone2threexyz",
      "xtwone3four",
      "4nineeightseven2",
      "zoneight234",
      "7pqrstsixteen",
    ];
    const res = extractCalibrationValueLetters(input);
    //console.log(res);
    expect(res).toBe(281);
  });

  it.only("P2: Should decode the calibration values spelled with letters edge case input", () => {
    const input = ["eighthree", "sevenine"];
    const res = extractCalibrationValueLetters(input);
    //console.log(res);
    expect(res).toBe(27);
  });

  it("P2: Should resolve the input puzzle challenge", async () => {
    const normalizedData = await readFileContent({
      paths: [dirname, puzzleInput],
      normalizeDataCallback: callbackNormalization,
    });
    if (normalizedData.err) {
      console.log(normalizedData.val);
      fail(normalizedData.val);
    }
    const res = extractCalibrationValueLetters(normalizedData.val);
    console.log(res);
    //expect(res).toBe(53974);
  });
});
