export const puzzleInput = "./input.txt";
export const dirname = __dirname;
//export const callbackNormalization = (data: string) => data.split("\n");

export const getOutOfThisDesert = (direction: string, data: string) => {

  let out = false;
  let steps = 0;
  const directions = direction.split("");
  const dataArr = data.split("\n").map((row) => {
    const [node, instructions] = row.split("=")
    return [node.trim(), instructions.replace("(", "").replace(")", "").split(",").map((el) => el.trim())]
  });

  console.log(direction)
  console.log(dataArr);

  let currentNode = 'AAA';
  while (!out) {

    for (let i = 0; i < directions.length; i++) {
      const position = directions[i] === "R" ? 1 : 0
      const possibleNodes = dataArr.filter((row) => row[0] === currentNode);
      const nextNode = possibleNodes[0][1][position];
      console.log(nextNode);
      steps += 1;
      currentNode = nextNode;
      if (currentNode === "ZZZ") {
        out = true;
        break;
      }

    }
  }
  return steps

};


export const getOutOfThisDesertAsAGhost = (direction: string, data: string) => {

  const directions = direction.split("");
  const dataArr = data.split("\n").map((row) => {
    const [node, instructions] = row.split("=")
    return [node.trim(), instructions.replace("(", "").replace(")", "").split(",").map((el) => el.trim())]
  });

  const startingANodes = dataArr.filter((row) => row[0][2] === "A").map((node) => node[0])

  console.log(startingANodes);

  let nodesToReview = [...startingANodes]

  let minimumSteps = [];
  for (const node of nodesToReview) {
    let steps = 0;
    let out = false;
    while (!out) {
      let currentNode = node;
      for (let i = 0; i < directions.length; i++) {
        const position = directions[i] === "R" ? 1 : 0
        const possibleNodes = dataArr.filter((row) => row[0] === currentNode);
        const nextNode = possibleNodes[0][1][position];
        console.log(nextNode);
        steps += 1;
        currentNode = nextNode;
        if (currentNode[2] === "Z") {
          out = true;
          minimumSteps.push(steps);
          break;
        }

      }
    }

  }

  return lcm(...minimumSteps)

};

const lcm = (...arr: number[]) => {
  const gcd = (x: number, y: number): number => (!y ? x : gcd(y, x % y));
  const _lcm = (x: number, y: number) => (x * y) / gcd(x, y);
  return [...arr].reduce((a, b) => _lcm(a, b));
};