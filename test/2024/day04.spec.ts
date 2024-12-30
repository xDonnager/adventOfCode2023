import {
  readFileContentAndNormalizeData,
  splitcontentByNewLine,
} from '../../src/utils'

function isMAS(
  wordSearch: Array<Array<string>>,
  i: number,
  j: number,
  di: number,
  dj: number
): boolean {
  // console.log('1', wordSearch[i - di]?.[j - dj])
  // console.log('2', wordSearch[i]?.[j])
  // console.log('3', wordSearch[i + 1 * di]?.[j + 1 * dj])
  return (
    (wordSearch[i - di]?.[j - dj] === 'M' &&
      wordSearch[i]?.[j] === 'A' &&
      wordSearch[i + di]?.[j + dj] === 'S')
  )
}
// .M.S......
// ..A..MSMS.
// .M.S.MAA..
// ..A.ASMSM.
// .M.S.M....
// ..........
// S.S.S.S.S.
// .A.A.A.A..
// M.M.M.M.M.
// ..........
function searchTwoXmas(wordSearch: Array<Array<string>>) {
  let hits = 0;
  for (let i = 0; i < wordSearch.length; i++) {
    if (i === 0 || i === wordSearch.length - 1) {
      continue;
    }
    for (let j = 0; j < wordSearch[i].length; j++) {
      let localHits = 0;
      if (j === 0 || j === wordSearch[i].length - 1 || wordSearch[i][j] !== "A") {
        continue;
      }
      console.log(`i ${i} - j ${j}`, wordSearch[i][j])
      if (isMAS(wordSearch, i, j, 1, 1)) localHits += 1;
      if (isMAS(wordSearch, i, j, 1, -1)) localHits += 1;
      if (isMAS(wordSearch, i, j, -1, -1)) localHits += 1;
      if (isMAS(wordSearch, i, j, -1, 1)) localHits += 1;

      if (localHits === 2) hits += 1;
    }
  }
  return hits;
}
function isXMAS(
  wordSearch: Array<Array<string>>,
  i: number,
  j: number,
  di: number,
  dj: number
): boolean {
  return (
    wordSearch[i]?.[j] === 'X' &&
    wordSearch[i + di]?.[j + dj] === 'M' &&
    wordSearch[i + 2 * di]?.[j + 2 * dj] === 'A' &&
    wordSearch[i + 3 * di]?.[j + 3 * dj] === 'S'
  )
}
function searchXmas(wordSearch: Array<Array<string>>) {
  let founds = 0
  for (let i = 0; i < wordSearch.length; i++) {
    //console.log(`row ${i}`, wordSearch[i])
    for (let j = 0; j < wordSearch[i].length; j++) {
      //console.log(`j ${j}`, wordSearch[i][j])
      // we can only search up when i >= 3
      if (i >= 3 && isXMAS(wordSearch, i, j, -1, 0)) {
        console.log('up tick!')
        founds += 1
      }
      // we can only search diagonal up right
      //if i >= 3 and j <= wordSearch[i].length - 4
      if (
        j <= wordSearch[i].length - 4 &&
        i >= 3 &&
        isXMAS(wordSearch, i, j, -1, 1)
      ) {
        console.log('diagonal R up tick!')
        founds += 1
      }

      // we can only search right if j <= wordSearch[i].length - 4
      if (
        j <= wordSearch[i].length - 4 &&
        isXMAS(wordSearch, i, j, 0, 1)
      ) {
        console.log('R tick!')
        founds += 1
      }

      // we can only search diagonal right down
      //if j <= wordSearch[i].length -4 AND i <= wordSearch.length - 4
      if (
        j <= wordSearch[i].length - 4 &&
        i <= wordSearch.length - 4 &&
        isXMAS(wordSearch, i, j, 1, 1)
      ) {
        console.log('diagonal R down tick!')
        founds += 1
      }
      // we can only search down when i <= wordSearch.length - 4
      if (i <= wordSearch.length - 4 && isXMAS(wordSearch, i, j, 1, 0)) {
        console.log('down tick!')
        founds += 1
      }

      // we can only search diagonal left down
      //if i <= wordSearch.length - 4 AND j >= 3
      if (
        j >= 3 &&
        i <= wordSearch.length - 4 &&
        isXMAS(wordSearch, i, j, 1, -1)
      ) {
        console.log('diagonal L down tick!')
        founds += 1
      }
      // we can only search left if j >= 3
      if (j >= 3 && isXMAS(wordSearch, i, j, 0, -1)) {
        console.log('L tick!')
        founds += 1
      }

      // we can only search diagonal left up
      //if j >= 3 AND i >=3
      //diagonal search left up
      if (j >= 3 && i >= 3 && isXMAS(wordSearch, i, j, -1, -1)) {
        console.log('diagonal L up tick!')
        founds += 1
      }
    }
  }
  return founds
}

describe('--- Day 4: Ceres Search ---', () => {
  it('P1 Should run simple case', () => {
    // ..X...
    // .SAMX.
    // .A..A.
    // XMAS.S
    // .X....
    const input = [
      ['.', '.', 'X', '.', '.', '.'],
      ['.', 'S', 'A', 'M', 'X', '.'],
      ['.', 'A', '.', '.', 'A', '.'],
      ['X', 'M', 'A', 'S', '.', 'S'],
      ['.', 'X', '.', '.', '.', '.'],
    ]

    const res = searchXmas(input)

    expect(res).toBe(4)
  })
  it('P1 Should complex case', () => {
    const input = [
      ['M', 'M', 'M', 'S', 'X', 'X', 'M', 'A', 'S', 'M'],
      ['M', 'S', 'A', 'M', 'X', 'M', 'S', 'M', 'S', 'A'],
      ['A', 'M', 'X', 'S', 'X', 'M', 'A', 'A', 'M', 'M'],
      ['M', 'S', 'A', 'M', 'A', 'S', 'M', 'S', 'M', 'X'],
      ['X', 'M', 'A', 'S', 'A', 'M', 'X', 'A', 'M', 'M'],
      ['X', 'X', 'A', 'M', 'M', 'X', 'X', 'A', 'M', 'A'],
      ['S', 'M', 'S', 'M', 'S', 'A', 'S', 'X', 'S', 'S'],
      ['S', 'A', 'X', 'A', 'M', 'A', 'S', 'A', 'A', 'A'],
      ['M', 'A', 'M', 'M', 'M', 'X', 'M', 'M', 'M', 'M'],
      ['M', 'X', 'M', 'X', 'A', 'X', 'M', 'A', 'S', 'X'],
    ]
    const res = searchXmas(input)

    expect(res).toBe(18)
  })
  it('P1 Should resolve puzzle input', async () => {
    const inputStream = await readFileContentAndNormalizeData({
      paths: ['/home/user/adventOfCode2023/src/2024/04/input.txt'],
      normalizeDataCallback: splitcontentByNewLine,
    })
    if (inputStream.err) {
      console.log(inputStream.val)
      fail(inputStream.val)
    }
    const input = inputStream.val.map((row) => row.split(''))
    const res = searchXmas(input)

    expect(res).toBe(2613)
  })

  it('P2 Should run simple case', () => {
    // ..X...
    // .SAMX.
    // .A..A.
    // XMAS.S
    // .X....
    const input = [
      ['.', '.', 'X', '.', '.', '.'],
      ['.', 'S', 'A', 'M', 'X', '.'],
      ['.', 'A', '.', '.', 'A', '.'],
      ['X', 'M', 'A', 'S', '.', 'S'],
      ['.', 'X', '.', '.', '.', '.'],
    ]

    const res = searchTwoXmas(input)

    expect(res).toBe(0)
  })
  it('P2 Should complex case', () => {
    const input = [
      ['M', 'M', 'M', 'S', 'X', 'X', 'M', 'A', 'S', 'M'],
      ['M', 'S', 'A', 'M', 'X', 'M', 'S', 'M', 'S', 'A'],
      ['A', 'M', 'X', 'S', 'X', 'M', 'A', 'A', 'M', 'M'],
      ['M', 'S', 'A', 'M', 'A', 'S', 'M', 'S', 'M', 'X'],
      ['X', 'M', 'A', 'S', 'A', 'M', 'X', 'A', 'M', 'M'],
      ['X', 'X', 'A', 'M', 'M', 'X', 'X', 'A', 'M', 'A'],
      ['S', 'M', 'S', 'M', 'S', 'A', 'S', 'X', 'S', 'S'],
      ['S', 'A', 'X', 'A', 'M', 'A', 'S', 'A', 'A', 'A'],
      ['M', 'A', 'M', 'M', 'M', 'X', 'M', 'M', 'M', 'M'],
      ['M', 'X', 'M', 'X', 'A', 'X', 'M', 'A', 'S', 'X'],
    ]
    const res = searchTwoXmas(input)

    expect(res).toBe(9)
  })

  it('P2 Should resolve puzzle input', async () => {
    const inputStream = await readFileContentAndNormalizeData({
      paths: ['/home/user/adventOfCode2023/src/2024/04/input.txt'],
      normalizeDataCallback: splitcontentByNewLine,
    })
    if (inputStream.err) {
      console.log(inputStream.val)
      fail(inputStream.val)
    }
    const input = inputStream.val.map((row) => row.split(''))
    const res = searchTwoXmas(input)

    expect(res).toBe(1905)
  })

})
