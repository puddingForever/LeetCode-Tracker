function isHappy(n: number): boolean {
     // Input: n = 19 -> true 
    let mySet = new Set();
    n = sumOfSqaure(n)
    while(n !== 1 && !mySet.has(n)){
        mySet.add(n);
        n = sumOfSqaure(n);
    }
    
    return n === 1;
};

function sumOfSqaure(num : number){
    return String(num)
            .split("")
            .map(num => parseInt(num))
            .reduce((acc,val) => acc + val * val,0)
}