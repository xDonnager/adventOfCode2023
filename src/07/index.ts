export const puzzleInput = "./input.txt";
export const dirname = __dirname;
export const callbackNormalization = (data: string) => data.split("\n");

// 32T3K 765
// T55J5 684
// KK677 28
// KTJJT 220
// QQQJA 483

const initHandMap = () => {
  const handMap = new Map<string | number, number>();
  for (let i = 2; i <= 9; i++) {
    handMap.set(i, 0);
  }
  handMap.set("A", 0);
  handMap.set("K", 0);
  handMap.set("Q", 0);
  handMap.set("J", 0);
  handMap.set("T", 0);
  return handMap;
};

export const camelCards = (data: Array<string>) => {
  //const totalHands = data.length;
  for (const game of data) {
    const [hand, _bid] = game.split(" ");

    const handMap = initHandMap();

    for (const char of hand) {
      if (!isNaN(Number(char))) {
        handMap.set(Number(char), handMap.get(Number(char))! + 1);
      } else {
        handMap.set(char, handMap.get(char)! + 1);
      }
    }
    console.log(handMap);
  }
};
