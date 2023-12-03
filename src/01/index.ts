export const puzzleInput = "./input.txt";
export const dirname = __dirname;
export const callbackNormalization = (data: string) => data.split("\n");

export const extractCalibrationValue = (data: Array<string>): number => {
  let result: number = 0;
  const digitRegEx = /[0-9]/g;
  for (const serie of data) {
    const digits = serie.match(digitRegEx);
    if (!!digits) {
      let twoDigits;
      if (digits.length === 1) {
        twoDigits = [digits[0], digits[0]];
      } else {
        twoDigits = [digits[0], digits[digits.length - 1]];
      }
      //console.log(serie, +twoDigits.join(""));
      result += +twoDigits.join("");
    }
  }
  return result;
};
