function numIdenticalPairs(nums: number[]): number {
    let goodpair = 0;
    let obj = {};

    for(let num of nums){
        if(obj[num]){
            goodpair += obj[num]
            obj[num]++;
        }else{
            obj[num] = 1;
        }
    }
    return goodpair;
};
