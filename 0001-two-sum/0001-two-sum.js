/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const sumObj = {};

 
    // [3,2,4]
    // { 3 : 0 , 2 : 1 ,   }
    for(let i=0; i<nums.length; i++){
        let num = nums[i]
        let complement = target - num;
        if(sumObj.hasOwnProperty(complement)){
            return  [sumObj[complement],i];
        }
        sumObj[num] = i;
    }

    return [];
    
};