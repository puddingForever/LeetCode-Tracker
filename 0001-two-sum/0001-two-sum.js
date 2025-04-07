/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
   let resultObj = {};

    for(let i=0 ; i < nums.length; i++){
        let complement = target - nums[i]
        if(resultObj.hasOwnProperty(complement)){
            return [resultObj[complement] , i];
        }
        resultObj[nums[i]] = i;
    }

    
};