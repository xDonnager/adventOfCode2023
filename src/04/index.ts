export const puzzleInput = "./input.txt";
export const dirname = __dirname;
export const callbackNormalization = (data: string) => data.split("\n");
//TODO
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

    const winners = scratchNumbers.reduce((acc, cur) => {
      const winner = winnerNumbers.includes(cur);
      if (!winner) {
        return acc;
      }
      return (acc = [...acc, cur]);
    }, [] as Array<number>);

    if (winners.length === 0) {
      res.push(0);
    } else if (winners.length === 1) {
      res.push(1);
    } else {
      //const cardScore = 1 * 2 * (winners.length-1);
      const cardScore = Math.pow(2, winners.length - 1);
      res.push(cardScore);
    }
  }
  return res.reduce((acc, cur) => (acc += cur), 0);
};
