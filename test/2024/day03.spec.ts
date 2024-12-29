import { readPlainTextInput } from "../../src/utils";


describe("--- Day 3: Mull It Over ---", () => {
  it("P1 Should run simple case", () => {
    const input ="xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))"

      const regexp = /(mul\((\d+),(\d+)\))/gm;

      const numbers =Array.from(input.matchAll(regexp), (m) => [Number(m[2]),Number(m[3])]);

      const res = numbers.reduce((acc,cur)=>{
        acc += cur[0]*cur[1]
        return acc
      },0)
      expect(res).toBe(161);

  });
  it("P1 Should resolve puzzle input", async () => {
    const inputStream = await readPlainTextInput({
      paths: ['/home/user/adventOfCode2023/src/2024/03/input.txt'],
    })
    if (inputStream.err) {
      console.log(inputStream.val);
      fail(inputStream.val);
    }
    const regexp = /(mul\((\d+),(\d+)\))/gm;

    const numbers =Array.from(inputStream.val.matchAll(regexp), (m) => [Number(m[2]),Number(m[3])]);

    const res = numbers.reduce((acc,cur)=>{
      acc += cur[0]*cur[1]
      return acc
    },0)
  expect(res).toBe(175615763);

  });
  it("P2 Should run simple case", async () => {
    function processCorruptedMemory(memory: string): number {
      // Regex patterns for do(), don't(), and mul(a, b)
      const doDontPattern = /do\(\)|don't\(\)/;
      const mulPattern = /mul\((\d+),(\d+)\)/;
  
      // Extract all tokens matching do(), don't(), and mul(a,b)
      const tokens = memory.match(/do\(\)|don't\(\)|mul\(\d+,\d+\)/gm);
      console.log('tokens', tokens)
      if (!tokens) return 0; // If no valid tokens, return 0
  
      let mulEnabled = true; // By default, mul instructions are enabled
      let totalSum = 0;
      
      for (const token of tokens) {
        console.log(token)
          if (doDontPattern.test(token)) {
              // Handle do() and don't()
              if (token === "do()") {
                  mulEnabled = true;
              } else if (token === "don't()") {
                  mulEnabled = false;
              }
          } else if (mulEnabled && mulPattern.test(token)) {
              // Handle enabled mul(a, b) instructions

              console.log(token.match(mulPattern))
              const found = token.match(mulPattern)
              if(found){
                const a = found[1]
                const b = found[2]
                totalSum += parseInt(a) * parseInt(b);  
              }
          }
      }
  
      return totalSum;
  }
  
  const memory = "xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))";
  const result = processCorruptedMemory(memory);
  expect(result).toBe(48);

  });

  it("P2 Should resolve puzzle input ", async () => {
    const inputStream = await readPlainTextInput({
      paths: ['/home/user/adventOfCode2023/src/2024/03/input.txt'],
    })
    if (inputStream.err) {
      console.log(inputStream.val);
      fail(inputStream.val);
    }
    function processCorruptedMemory(memory: string): number {
      // Regex patterns for do(), don't(), and mul(a, b)
      const doDontPattern = /do\(\)|don't\(\)/;
      const mulPattern = /mul\((\d+),(\d+)\)/;
  
      // Extract all tokens matching do(), don't(), and mul(a,b)
      const tokens = memory.match(/do\(\)|don't\(\)|mul\(\d+,\d+\)/gm);
      console.log('tokens', tokens)
      if (!tokens) return 0; // If no valid tokens, return 0
  
      let mulEnabled = true; // By default, mul instructions are enabled
      let totalSum = 0;
      
      for (const token of tokens) {
        console.log(token)
          if (doDontPattern.test(token)) {
              // Handle do() and don't()
              if (token === "do()") {
                  mulEnabled = true;
              } else if (token === "don't()") {
                  mulEnabled = false;
              }
          } else if (mulEnabled && mulPattern.test(token)) {
              // Handle enabled mul(a, b) instructions

              console.log(token.match(mulPattern))
              const found = token.match(mulPattern)
              if(found){
                const a = found[1]
                const b = found[2]
                totalSum += parseInt(a) * parseInt(b);  
              }
          }
      }
  
      return totalSum;
  }
  
  const result = processCorruptedMemory(inputStream.val);
  expect(result).toBe(74361272);
  });
});
