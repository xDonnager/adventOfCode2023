import {isReportSafe} from "../../src/2024/02/RedNoseReports";
import { readFileContent, splitcontentByNewLine  } from "../../src/utils";


describe("--- Day 1: Red-Nosed Reports ---", () => {
  it("P1 Should run simple case", () => {
    const input =[
      [7,6,4,2,1],
      [1,2,7,8,9],
      [9,7,6,2,1],
      [1,3,2,4,5], 
      [8,6,4,4,1],
      [1,3,6,7,9]];

      const res = input.reduce((acc,cur)=> {
        if(isReportSafe(cur)){
          acc++
        }
        return acc;
      },0)

      console.log(res)
      expect(res).toBe(2);

  });

  it("P1 Should resolve the puzzle input", async () => {
    const inputStream = await readFileContent({
      paths: ['/home/user/adventOfCode2023/src/2024/02/input.txt'],
      normalizeDataCallback: splitcontentByNewLine
    })
    if (inputStream.err) {
      console.log(inputStream.val);
      fail(inputStream.val);
    }

    const refurbish = inputStream.val.map((elements)=>{
      return elements.split(" ").map((el)=> Number(el))
    })
    console.log(refurbish)
    // const inputNums = convertStringsToNumbers(inputStream.val)
    // const res = inputNums.reduce((acc,cur)=> {
    //   if(isReportSafe(cur)){
    //     acc++
    //   }
    //   return acc;
    // },0)
    // console.log(res)

  })

});
