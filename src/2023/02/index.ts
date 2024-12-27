export const puzzleInput = "./input.txt";
export const dirname = __dirname;
export const callbackNormalization = (data: string) => data.split("\n");

const bagCubesContent: { [key: string]: number } = {
  red: 12,
  blue: 14,
  green: 13,
};

// type GameSet = {
//   red: number;
//   blue: number;
//   green: number;
// };
// //a game is composed by 3 sets
// type Game = [number, GameSet];
// type GameRow = [number, Game];

//"Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green",
export const findPossibleMatches = (data: Array<string>) => {
  let possibleGames: Array<number> = [];
  for (const row of data) {
    let possibleGame = true;
    const [gameId, gameSets] = row.split(":");
    const gameNum = +gameId.split(" ")[1];
    const sets = gameSets.split(";");

    for (const set of sets) {
      let validSet = true;
      const turns = set.split(",");

      for (const turn of turns) {
        const [numCubes, colorCubes] = turn.trim().split(" ");
        if (+numCubes > bagCubesContent[colorCubes]) {
          validSet = false;
          break;
        }
      }

      if (!validSet) {
        possibleGame = false;
        break;
      }
    }

    if (possibleGame) {
      possibleGames.push(gameNum);
    }
  }

  return possibleGames.reduce((acc, cur) => {
    return (acc = acc + cur);
  }, 0);
};

//"Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green",
export const findPowerOfCubeSet = (data: Array<string>) => {
  let results = [];
  for (const row of data) {
    const minCubesXGame: { [key: string]: number } = {
      red: 0,
      blue: 0,
      green: 0,
    };
    const [_gameId, gameSets] = row.split(":");
    //const gameNum = +gameId.split(" ")[1];
    const sets = gameSets.split(";");

    //3 blue, 4 red;
    for (const set of sets) {
      const turns = set.split(",");

      //3 blue
      for (const turn of turns) {
        const [numCubes, colorCubes] = turn.trim().split(" ");
        if (+numCubes > minCubesXGame[colorCubes]) {
          minCubesXGame[colorCubes] = +numCubes;
        }
      }
    }
    const cubeCount = Object.values(minCubesXGame);
    const gamePower = cubeCount.reduce((acc, cur) => (acc *= cur), 1);
    results.push(gamePower);
  }

  return results.reduce((acc, cur) => (acc += cur), 0);
};
