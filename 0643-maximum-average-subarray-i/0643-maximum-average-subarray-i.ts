function findMaxAverage(nums: number[], k: number): number {

    let max = 0;
    for(let i=0; i<k; i++){
        max += nums[i];
    }
   // console.log(max) 2 // 1,12,-5,-6
    let tmp = max; 
    for(let i=k; i<nums.length; i++){ 
        tmp = tmp + nums[i] - nums[i-k]; // 52
        max = Math.max(max,tmp);
    }

    return max/k;

    
      
};