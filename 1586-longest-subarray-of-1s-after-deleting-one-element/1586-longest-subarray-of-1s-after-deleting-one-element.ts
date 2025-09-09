function longestSubarray(nums: number[]): number {
    let left = 0;
    let maxLen = 0;
    let zeroCnt = 0;
    for(let right = 0; right < nums.length; right++){
        if(nums[right] === 0) zeroCnt++;

        while(zeroCnt > 1){
            if(nums[left] === 0) zeroCnt--;
            left++;
        }

        maxLen = Math.max(maxLen,right - left);
    }

    return maxLen;
    
};