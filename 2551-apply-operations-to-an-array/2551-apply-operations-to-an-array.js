/**
 * @param {number[]} nums
 * @return {number[]}
 */
var applyOperations = function(nums) {

   // [1,4,0,2,0,0]
    for(let i=0; i<nums.length-1; i++){
        if(nums[i] === nums[i+1]){
            nums[i] = nums[i] * 2;
            nums[i+1] = 0;
        }
    }

    let nonZeroIndex = 0;
    // [0,4,0,2,0,0] => [4,0,2, 0   
    for(let i=0; i<nums.length; i++){
        if(nums[i] !== 0){
           nums[nonZeroIndex] = nums[i];
            if(nonZeroIndex !== i){
                nums[i] = 0
            }
           nonZeroIndex++; 
        }    
    }
    
    return nums;
};