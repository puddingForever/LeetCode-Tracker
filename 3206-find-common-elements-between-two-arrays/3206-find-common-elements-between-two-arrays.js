/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var findIntersectionValues = function(nums1, nums2) {    
    
    let res1 = 0;
    let res2 = 0;

   for(let i=0; i<nums1.length; i++){
     if(nums2.includes(nums1[i])) res1++;
   }

    for(let i=0; i<nums2.length; i++){
      if(nums1.includes(nums2[i])) res2++;
   }

 
    return [res1, res2];

}