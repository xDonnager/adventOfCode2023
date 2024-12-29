import {isReportSafe, isReportSafeWithDampener} from "../../src/2024/02/RedNoseReports";
import { readFileContentAndNormalizeData, splitcontentByNewLine  } from "../../src/utils";


describe("--- Day 2: Red-Nosed Reports ---", () => {
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

      expect(res).toBe(2);

  });

  it("P1 Should resolve the puzzle input", async () => {
    const inputStream= await readFileContentAndNormalizeData({
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

    const res = refurbish.reduce((acc,cur)=> {
      if(isReportSafe(cur)){
        acc++
      }
      return acc;
    },0)
    expect(res).toBe(282);

  })

  it("P2 Should run simple case, tolerates 1 failure level", () => {
    const input =[
      [7,6,4,2,1],
      [1,2,7,8,9],
      [9,7,6,2,1],
      [1,3,2,4,5], 
      [8,6,4,4,1],
      [1,3,6,7,9]];

      const res = input.reduce((acc,cur)=> {
        if(isReportSafeWithDampener(cur)){
          acc++
        }
        return acc;
      },0)

      expect(res).toBe(4);

  });

  it.only("P2 Should run complex case, tolerates 1 failure level", () => {
    const input =[
      [24,27,30,31,32,35,36,36],
      [80,82,85,86,87,90,94],
      [7,9,15,17,19,21], 
      [8,6,4,4,1]];

      const res = input.reduce((acc,cur)=> {
        if(isReportSafeWithDampener(cur)){
          acc++
        }
        return acc;
      },0)

      expect(res).toBe(4);

  });

  it.skip("P3 Should resolve the puzzle input", async () => {
    const inputStream = await readFileContentAndNormalizeData({
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

    const res = refurbish.reduce((acc,cur)=> {
      if(isReportSafeWithDampener(cur)){
        acc++
      }
      return acc;
    },0)
    expect(res).toBe(282);

  })
});
