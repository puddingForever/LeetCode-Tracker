/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}

 */
var twoSum = function(nums, target) {
    var resArr = [];
    var myMap = new Map();
    for(var i=0; i<nums.length; i++){
        var res = target - nums[i];
        if(myMap.has(res) && myMap.get(res) !== i){
            resArr.push(myMap.get(res));
            resArr.push(i);
             return resArr;
        }
        myMap.set(nums[i], i);
    }
    return resArr;
};