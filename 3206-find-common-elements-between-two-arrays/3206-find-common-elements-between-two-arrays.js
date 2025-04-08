/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var findIntersectionValues = function(nums1, nums2) {    
   let nums1Obj = {};
    let nums2Obj = {};
    let num1Cnt = 0
    let num2Cnt = 0;

   for(let i=0; i<nums1.length; i++){
     nums1Obj[nums1[i]] = true;
   }

    for(let i=0; i<nums2.length; i++){
     nums2Obj[nums2[i]] = true;
   }

  for(let i=0; i<nums2.length; i++){
     if(nums1Obj[nums2[i]]){
        num2Cnt++; 
     }
   }

    for(let i=0; i<nums1.length; i++){
        if(nums2Obj[nums1[i]]){
            num1Cnt++; 
        }
   }

    return [num1Cnt, num2Cnt];

}