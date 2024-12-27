export const puzzleInput = "./input.txt";


export const splitContentByNewLineAndCreateArrays = (content: Array<string>) => {
    // each element in the array is a line 
    //["35039   67568", 
    // "61770   80134", 
    // and so on...]
    const listA:Array<number> = [];
    const listB:Array<number> = [];
    return content.reduce((acc,cur)=>{
        const firstElement = Number(cur.slice(0,5));
        const secondElement = Number(cur.slice(8));
        acc.listA.push(firstElement)
        acc.listB.push(secondElement)
        return acc;
    }, {
        listA,
        listB,
    })
};

export const distances = (lOne: Array<number>, lTwo:Array<number>) =>{
    const results = [];

    while (lOne.length > 0){
        const numOneMin = Math.min(...lOne);
        const numTwoMin = Math.min(...lTwo);
        const numOne = lOne.indexOf(numOneMin);
        const numTwo = lTwo.indexOf(numTwoMin);
        lOne.splice(numOne, 1);
        lTwo.splice(numTwo, 1);

        const abs = Math.abs(numOneMin - numTwoMin)
        results.push(abs);
    }
    return results;
}

type list = {
    [key: number]: number;
}
export const splitContentByNewLineAndCreateLists = (content: Array<string>) => {
    // each element in the array is a line 
    //["35039   67568", 
    // "61770   80134", 
    // and so on...]
    const listA: Array<number> = [];
    const listB: list = {};
    return content.reduce((acc,cur)=>{
        const firstElement = Number(cur.slice(0,5));
        const secondElement = Number(cur.slice(8));
        acc.listA.push(firstElement)
        if(!acc.listB[secondElement]){
            acc.listB[secondElement] = 1;
        }else{
            acc.listB[secondElement] += 1;
        }
        return acc;
    }, {
        listA,
        listB,
    })
};

export const findSimilarityScore = (listArray: Array<number>, listObject: list) => {
    return listArray.reduce((acc,cur)=>{
        if(listObject[cur]){
            acc += listObject[cur]* cur;
        }
        return acc;
    }, 0)
}