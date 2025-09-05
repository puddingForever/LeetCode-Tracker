function uniqueOccurrences(arr: number[]): boolean {
  const myMap = arr.reduce((acc,curr) => acc.set(curr, ( acc.get(curr) || 0 ) + 1 )
                             ,new Map())   

    return myMap.size ===  new Set(myMap.values()).size
};