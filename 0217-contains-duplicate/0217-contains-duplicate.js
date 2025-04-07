/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
   let resultObj = {};

   for(let i=0; i<nums.length; i++){

     if(resultObj[nums[i]]){
        return true;
     }  
      resultObj[nums[i]] = true;

   }


   return false;
};