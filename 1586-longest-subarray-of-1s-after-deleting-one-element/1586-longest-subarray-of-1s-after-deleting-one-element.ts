function longestSubarray(nums: number[]): number {

     let left = 0 , zeroCnt = 0, max = 0; 
    for(let right = 0 ; right < nums.length; right ++ ){
        if(nums[right] === 0) zeroCnt++;
       
        while(zeroCnt > 1){
            if(nums[left] === 0) zeroCnt --; 
            left++;
        }


        max = Math.max(max, right - left);
        
    }

    return max;
    
};