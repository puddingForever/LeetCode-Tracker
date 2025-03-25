/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let numsObj = {};
    for(let i=0; i<nums.length; i++){
        if(numsObj[nums[i]]){
            return true;
        }else{
            numsObj[nums[i]] = true;
        }
    }

    return false;
};