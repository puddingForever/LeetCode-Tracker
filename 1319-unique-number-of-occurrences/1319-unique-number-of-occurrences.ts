function uniqueOccurrences(arr: number[]): boolean {
   let obj = {};
    for(let i=0; i<arr.length; i++){
        obj[arr[i]] = (obj[arr[i]] || 0) + 1;
    } // [1,2,2,1,1,3] 
    // obj = { 1 : 3 ,  2 : 2, 3 : 1 }
    var mySet = new Set([...Object.values(obj)])

    return mySet.size === Object.values(obj).length
};