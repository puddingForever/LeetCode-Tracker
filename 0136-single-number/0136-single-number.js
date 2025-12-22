/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
     if(nums.length === 1) return nums[0];

    var myMap = new Map();

    for(let i=0; i<nums.length; i++){
        myMap.set(nums[i] , ( myMap.get(nums[i]) || 0 ) + 1)
    }

    for(const [key, value] of myMap) {
        if(value === 1) return key;
    }
    
};