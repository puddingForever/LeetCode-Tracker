function uniqueOccurrences(arr: number[]): boolean {

   let obj = {};
   // store in obj 
    for(let i=0; i<arr.length; i++){
        obj[arr[i]] = (obj[arr[i]] || 0) + 1;
    } 

    // filter dups 
    var mySet = new Set([...Object.values(obj)])

   // if length is diff , then there's dups 
    return mySet.size === Object.values(obj).length
};