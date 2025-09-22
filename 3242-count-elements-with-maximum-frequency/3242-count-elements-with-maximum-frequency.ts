function maxFrequencyElements(nums: number[]): number {
     /* use maps to store count 
    { 1 : 2 , 2 : 2 , 4 : 1}
    get max using values() 
    again use values() if max === value[] then add to res 
    return res 
    */
    let myMap = new Map();
    for(let num of nums){
        myMap.set(num, (myMap.get(num) || 0 ) + 1);
    }

    const arr = [...myMap.values()].sort((a,b) => b-a);
    let max = arr[0];
    let res = 0;
    for(let num of arr){
        if(max === num) res += num; 
    }

    return res;
};