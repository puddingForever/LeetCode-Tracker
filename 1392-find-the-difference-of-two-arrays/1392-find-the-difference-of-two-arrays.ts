function findDifference(nums1: number[], nums2: number[]): number[][] {
      let obj = {};
    let obj2 = {}
    
    for(let i=0; i<nums1.length; i++){
        obj[nums1[i]] = nums1[i];
    }
    
    // if exists , delete property 
    for(let i=0; i<nums2.length; i++){
        if(obj[nums2[i]] || nums2[i] === 0){
            delete obj[nums2[i]]
        }
    }

    for(let i=0; i<nums2.length; i++){
        obj2[nums2[i]] = nums2[i];
    }
    
    // if exists , delete property 
    for(let i=0; i<nums1.length; i++){
        if(obj2[nums1[i]] || obj2[nums1[i]] === 0){
            delete obj2[nums1[i]];
        }
    }
    

    return [ [...Object.keys(obj).map(Number)] , [...Object.keys(obj2).map(Number)] ];
    

    
};