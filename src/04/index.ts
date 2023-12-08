export const puzzleInput = "./input.txt";
export const dirname = __dirname;
export const callbackNormalization = (data: string) => data.split("\n");

//"Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53"
export const scratchcardsWorthValue = (data: Array<string>) => {
  let res = [];
  for (const card of data) {
    const [_cardNum, numSeries] = card.split(":");
    const [scratchResult, winnerResult] = numSeries.split("|");

    const winnerNumbers = winnerResult
      .trim()
      .split(" ")
      .map((num) => +num);
    const scratchNumbers = scratchResult
      .trim()
      .split(" ")
      .map((num) => +num);

    const cardPoints = scratchNumbers.reduce((acc, cur) => {
      const winner = winnerNumbers.includes(cur);
      if (!winner) {
        return acc;
      }
      if (acc === 0) {
        return (acc += 1);
      }
      return (acc *= 2);
    }, 0);

    if (cardPoints > 0) {
      res.push(cardPoints);
    }
  }
  return res.reduce((acc, cur) => (acc += cur), 0);
};
