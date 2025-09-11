function findMaxAverage(nums: number[], k: number): number {
// [1,12,-5,-6,50,3] 4 
    let max = 0; 
    for(let i=0; i<k; i++){
        max += nums[i];
    }    
    let tmp = max;
    for(let j=k; j<nums.length; j++){
        tmp += nums[j] - nums[j-k]
        max = Math.max(max,tmp);
    }
        
    return max/k;
    
      
};