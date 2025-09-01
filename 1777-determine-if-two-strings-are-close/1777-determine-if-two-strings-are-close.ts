function closeStrings(word1: string, word2: string): boolean {
 
    let charCounts1 = word1.split("")
                           .reduce((acc,val) => acc.set( val, (acc.get(val) ?? 0 ) + 1 ),new Map<string,number>());
    let charCounts2 = word2.split("")
                           .reduce((acc,val) =>  acc.set( val, ( acc.get(val) ?? 0) + 1),new Map<string,number>());


    if(charCounts1.size !== charCounts2.size || ![...charCounts1.keys()].every((char) => charCounts2.has(char))){
        return false;
    }

    let sortedArr1 = [...charCounts1.values()].sort();
    let sortedArr2 = [...charCounts2.values()].sort();

    return sortedArr1.every((val,index) => val === sortedArr2[index])
};