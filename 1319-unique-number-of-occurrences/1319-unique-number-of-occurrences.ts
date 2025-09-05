function uniqueOccurrences(arr: number[]): boolean {
    // map에 넣은 후에 
    // map의 길이와 , set에 넣어둔 후의 길이를 비교해서 같으면 true, 
    // 아니면 false 
    // 중복값이 나오면 , 값이 사라지기 때문에 
    const myMap = arr.reduce((acc,curr) => acc.set(curr, ( acc.get(curr) || 0 ) + 1 )
                             ,new Map())   
    const mySet = new Set([...myMap.values()]);

    return myMap.size === mySet.size
};