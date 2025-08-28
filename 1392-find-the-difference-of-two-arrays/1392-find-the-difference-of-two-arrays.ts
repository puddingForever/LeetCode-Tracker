function findDifference(nums1: number[], nums2: number[]): number[][] {

      let obj = {};
      let obj2 = {}

    // Store all elements from nums1 in obj
    for(let i=0; i<nums1.length; i++){
        obj[nums1[i]] = nums1[i];
    }
    
    // If an element of nums2 exists in obj, delete it
    for(let i=0; i<nums2.length; i++){
        if(obj[nums2[i]] || nums2[i] === 0){
            delete obj[nums2[i]]
        }
    }
    
   // Store all elements from nums2 in obj2   
    for(let i=0; i<nums2.length; i++){
        obj2[nums2[i]] = nums2[i];
    }
    
   // If an element of nums1 exists in obj2, delete it
    for(let i=0; i<nums1.length; i++){
        if(obj2[nums1[i]] || obj2[nums1[i]] === 0){
            delete obj2[nums1[i]];
        }
    }
    
   // Now both obj and obj2 contain only distinct keys
    return [ [...Object.keys(obj).map(Number)] , [...Object.keys(obj2).map(Number)] ];
};