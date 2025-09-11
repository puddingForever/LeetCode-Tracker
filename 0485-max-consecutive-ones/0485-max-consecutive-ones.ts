function findMaxConsecutiveOnes(nums: number[]): number {
     let cnt = 0, max = 0;
    for(let i=0; i<nums.length; i++){ 
        if(nums[i] === 0) {
            cnt = 0; // 0
        }else{
            cnt++; // 1, 2
        }
        max = Math.max(max,cnt)
    }

    return max;
};