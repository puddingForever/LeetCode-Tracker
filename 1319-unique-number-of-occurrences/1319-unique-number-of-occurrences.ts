function uniqueOccurrences(arr: number[]): boolean {
    var obj = {};

    for(let i=0; i<arr.length; i++){
        obj[arr[i]] = ( obj[arr[i]] || 0 ) + 1;
    }

    let original = Object.keys(obj).length;
    let mySet = new Set(Object.values(obj));
    
    return original === mySet.size;
};