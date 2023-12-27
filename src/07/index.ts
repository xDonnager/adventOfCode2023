export const puzzleInput = "./input.txt";
export const dirname = __dirname;
export const callbackNormalization = (data: string) => data.split("\n");

// 32T3K 765
// T55J5 684
// KK677 28
// KTJJT 220
// QQQJA 483

// const input =
//     ["32T3K 765",
//         "T55J5 684",
//         "KK677 28",
//         "KTJJT 220",
//         "QQQJA 483"]

const cardPowerMap: Record<string | number, number> = {
  '2': 2,
  '3': 3,
  '4': 4,
  '5': 5,
  '6': 6,
  '7': 7,
  '8': 8,
  '9': 9,
  'T': 10,
  'J': 11,
  'Q': 12,
  'K': 13,
  'A': 14,
};
enum HandType {
  FIVE_OF_A_KIND = "five-of-a-kind",
  FOUR_OF_A_KIND = "four-of-a-kind",
  FULL_HOUSE = "full-house",
  THREE_OF_A_KIND = "three-of-a-kind",
  TWO_PAIRS = "two-pairs",
  ONE_PAIR = "one-pair",
  HIGH_CARD = "high-card",
}
const handTypePowerMap: Record<HandType, number> = {
  [HandType.FIVE_OF_A_KIND]: 6,
  [HandType.FOUR_OF_A_KIND]: 5,
  [HandType.FULL_HOUSE]: 4,
  [HandType.THREE_OF_A_KIND]: 3,
  [HandType.TWO_PAIRS]: 2,
  [HandType.ONE_PAIR]: 1,
  [HandType.HIGH_CARD]: 0,
};

interface HandWithBid {
  hand: string;
  handType: HandType;
  bid: number;
}

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

const classifyHand = (mappedHand: Map<string | number, number>) => {
  let aux = [];
  for (const entry of mappedHand.entries()) {
    aux.push(entry);
  }

  const fiveKind = aux.filter((entry) => entry[1] === 5);
  if (fiveKind.length === 1) {
    return HandType.FIVE_OF_A_KIND;
  }

  const fourKind = aux.filter((entry) => entry[1] === 4);
  if (fourKind.length === 1) {
    return HandType.FOUR_OF_A_KIND;
  }

  const threeKind = aux.filter((entry) => entry[1] === 3);
  const pairs = aux.filter((entry) => entry[1] === 2);
  if (threeKind.length === 1 && pairs.length === 1) {
    return HandType.FULL_HOUSE;
  }
  if (threeKind.length === 1) {
    return HandType.THREE_OF_A_KIND;
  }
  if (pairs.length === 2) {
    return HandType.TWO_PAIRS;
  }
  if (pairs.length === 1) {
    return HandType.ONE_PAIR;
  }

  return HandType.HIGH_CARD;
};

const sortHandsByStrength = (a: HandWithBid, b: HandWithBid): number => {
  if (a.handType !== b.handType) {
    return handTypePowerMap[a.handType] - handTypePowerMap[b.handType];
  }

  const aCards = a.hand.split("");
  const bCards = b.hand.split("");


  for (let i = 0; i < aCards.length; i++) {
    if (cardPowerMap[aCards[i]] < cardPowerMap[bCards[i]]) {
      return -1;
    }
    else if (cardPowerMap[aCards[i]] > cardPowerMap[bCards[i]]) {
      return 1;
    }
    //else eval next element
  }

  return 0;
};

const parseGameData = (gameData: string) => {
  const [hand, bid] = gameData.split(" ");

  const handMap = initHandMap();

  for (const char of hand) {
    if (!isNaN(Number(char))) {
      handMap.set(Number(char), handMap.get(Number(char))! + 1);
    } else {
      handMap.set(char, handMap.get(char)! + 1);
    }
  }
  console.log(handMap);
  const handType = classifyHand(handMap);
  console.log(handType);

  const workableHand: HandWithBid = {
    hand: hand,
    handType: handType,
    bid: +bid,
  };
  return workableHand;
};

export const camelCards = (data: Array<string>) => {
  const parsedData = data.map((game) => parseGameData(game));
  //console.log(parsedData);

  const sortedHands = parsedData.sort(sortHandsByStrength);
  console.log(sortedHands);

  const totalWinnings = sortedHands
    .map((hand, index) => hand.bid * (index + 1))
    .reduce((acc, cur) => (acc += cur), 0);
  console.log(totalWinnings);
  return totalWinnings;
};

// const res = camelCards(input);
