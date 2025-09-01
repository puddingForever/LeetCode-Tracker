function closeStrings(word1: string, word2: string): boolean {
    const charCounts1 = word1.split("")
                        .reduce((acc, val) => ({...acc, [val] : (acc[val] ?? 0 ) + 1}),{});

    const charCounts2 = word2.split("")
                        .reduce((acc, val) => ({...acc, [val] : (acc[val] ?? 0) + 1}),{});

    if (
        Object.keys(charCounts1).length !==  Object.keys(charCounts2).length ||
        ![...Object.keys(charCounts1)].every((char) => char in charCounts2)
    ) {
        return false;
    }

    const sortedArr1 = [...Object.values(charCounts1)].sort();
    const sortedArr2 = [...Object.values(charCounts2)].sort();

    return sortedArr1.every((val, index) => val === sortedArr2[index]);
}
