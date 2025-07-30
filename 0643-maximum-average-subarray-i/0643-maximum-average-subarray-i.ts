function findMaxAverage(nums: number[], k: number): number {
    
       let init = 0
       let max = -Infinity;

       for(let i=0; i<k; i++){
            init += nums[i]
        }

       max =  init/ k;

      for(let i=k; i<nums.length; i++){
            init = init + nums[i] - nums[i-k];
            let localAvg = init/k;
            max = Math.max(localAvg,max);
       }    

     return max;
    
};