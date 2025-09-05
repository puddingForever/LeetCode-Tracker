function findDifference(nums1: number[], nums2: number[]): number[][] {
 // 1. set으로 각각 넣은 후 
  // 2. !set.has 인것만 array로 넣은 후  
  // 3. 리턴한다.
    const mySet1 = new Set(nums1);
    const mySet2 = new Set(nums2);

    let arr1 = [...mySet1].filter(num => !mySet2.has(num));
    let arr2 = [...mySet2].filter(num => !mySet1.has(num));

    return [arr1,arr2]

};