function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
    let arr = [];
    let max = true;
    for(let i=0; i<candies.length; i++){
        let tmp = candies[i] + extraCandies; // 22 11 22
        for(let j=0; j<candies.length; j++){
            if(i !== j && tmp < candies[j] ){
                max = false;
                break;
            }
        }
        arr.push(max);
        max = true
    }

    return arr;
    
};