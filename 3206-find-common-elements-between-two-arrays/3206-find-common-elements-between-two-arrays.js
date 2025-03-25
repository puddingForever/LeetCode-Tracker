/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var findIntersectionValues = function(nums1, nums2) {    
    let ans = []; 
    let nums1Obj = {}
    let nums2Obj = {}
    for(let i=0; i<nums1.length; i++){
        nums1Obj[nums1[i]] = true;
    }

    for(let i=0; i<nums2.length; i++){
        nums2Obj[nums2[i]] = true;
    }
    
    let cnt = 0
    for(let i=0; i<nums1.length; i++){
        if(nums2Obj[nums1[i]]){
            cnt++;
        }
    }
    ans.push(cnt);

    let cnt2 = 0;
    for(let i=0; i<nums2.length; i++){
        if(nums1Obj[nums2[i]]){
            cnt2++;
        }
    }

    ans.push(cnt2);
    return ans
};