import {
  distances,
  findSimilarityScore,
  splitContentByNewLineAndCreateArrays,
  splitContentByNewLineAndCreateLists
} from "../../src/2024/01/HistorianHysteria";
import { readFileContentAndNormalizeData, splitcontentByNewLine } from "../../src/utils";

describe("--- Day 1: Historian Hysteria ---", () => {
  it("P1 Should run simple case", async () => {
    //3   4
    //4   3
    //2   5
    //1   3
    //3   9
    //3   3
    const listA = [3,4,2,1,3,3]
    const listB = [4,3,5,3,9,3]
    const calculateDistance = distances(listA, listB)

    const sumDistances = calculateDistance.reduce((acc,cur)=>( acc + cur),0)
    //console.log(sumDistances)
  });
  it("P1 Should rsolve the input puzzle", async () => {
    const inputStream = await readFileContentAndNormalizeData({
      paths: ['/home/user/adventOfCode2023/src/2024/01/input.txt'],
      normalizeDataCallback: splitcontentByNewLine
    })

    if (inputStream.err) {
      console.log(inputStream.val);
      fail(inputStream.val);
    }
    
    const lists = splitContentByNewLineAndCreateArrays(inputStream.val)
    const calculateDistance = distances(lists.listA, lists.listB)
    const sumDistances = calculateDistance.reduce((acc,cur)=>( acc + cur),0)
    expect(sumDistances).toBe(2164381);
  });

  it("P2 Should run simple case", async () => {
    //3   4
    //4   3
    //2   5
    //1   3
    //3   9
    //3   3
    const listA = [3,4,2,1,3,3];
    const listB = {
      3:3,
      4:1,
      5:1,
      9:1
    };
    const similarityScore = findSimilarityScore(listA, listB)
    expect(similarityScore).toBe(31)

  });
  it("P2 Should resolve the input puzzle", async () => {
    const inputStream = await readFileContentAndNormalizeData({
      paths: ['/home/user/adventOfCode2023/src/2024/01/input.txt'],
      normalizeDataCallback: splitcontentByNewLine
    })

    if (inputStream.err) {
      console.log(inputStream.val);
      fail(inputStream.val);
    }
  
    const lists = splitContentByNewLineAndCreateLists(inputStream.val)

    const similarityScore = findSimilarityScore(lists.listA, lists.listB)
    console.log(similarityScore)
    expect(similarityScore).toBe(20719933);
  });

});
