function maxSubArray(nums: number[]): number {
    let max = -Infinity;
    let local = 0;

    for(let num of nums){
        // if current value is smaller than the aggregated one , start new
        local = Math.max(num, local+num);
        if(local > max) max = local;
    }

    return max;
};