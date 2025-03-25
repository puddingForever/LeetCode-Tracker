/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var findIntersectionValues = function(nums1, nums2) {    
    let set1 = new Set(nums1)
    let set2 = new Set(nums2)

    let count = 0, count2 = 0;

    for(let num of nums1){
        if(set2.has(num)){
            count++;
        }
    }

    for(let num of nums2){
        if(set1.has(num)){
            count2++;
        }
    }

    return [count,count2];
};