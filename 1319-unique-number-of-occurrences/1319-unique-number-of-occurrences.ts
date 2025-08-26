function uniqueOccurrences(arr: number[]): boolean {
    let obj = {};
    var mySet = new Set()
    
    for(let i=0; i<arr.length; i++){
        obj[arr[i]] = (obj[arr[i]] || 0) + 1;
    } 
    
    for(let cnt of Object.values(obj)){
        if(mySet.has(cnt)) return false; // end early
        mySet.add(cnt);
    }
    

    return true;
};