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

const letterDigits: { [key: string]: number } = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
};

export const extractCalibrationValueLetters = (data: Array<string>): number => {
  let result: number = 0;
  const digitRegEx = /(one|two|three|four|five|six|seven|eight|nine|[1-9])/;
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
      const parsed: Array<string> = twoDigits.map((digit: string) => {
        const parseInteger = Number.parseInt(digit, 10);
        if (Number.isNaN(parseInteger)) {
          return `${letterDigits[digit]}`;
        }
        return digit;
      });
      result += +parsed.join("");
    }
  }
  return result;
};

// export const extractCalibrationValueLetters = (data: Array<string>): number => {
//   let result: number = 0;
//   const digitRegEx = /(one|two|three|four|five|six|seven|eight|nine|\b[1-9]\b)/ig
//   for (const serie of data) {
//     const digits = serie.match(digitRegEx);
//     if (!!digits) {
//       let twoDigits;
//       if (digits.length === 1) {
//         twoDigits = [digits[0], digits[0]];
//       } else {
//         twoDigits = [digits[0], digits[digits.length - 1]];
//       }
//       //console.log(serie, +twoDigits.join(""));
//       result += +twoDigits.join("");
//     }
//   }
//   return result;
// };

// export const extractCalibrationValueLetters = (data: Array<string>): number => {
//   let result = 0;

//   for (const serie of data) {
//     let acumulated: Array<string> = [];
//     let tempStack: string = "";

//     serie.split("").reduce((acc, cur) => {
//       if (letterDigits[tempStack]) {
//         acc.push(tempStack);
//         tempStack = "";
//         return acc;
//       }
//       tempStack = tempStack + cur;
//       return acc;
//     }, acumulated);

//     console.log("acc", acumulated);
//   }

//   return result;
// };
