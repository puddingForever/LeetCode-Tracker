function findDifference(nums1: number[], nums2: number[]): number[][] {
 const [only1,only2] = [new Set(nums1),new Set(nums2)];

 return [
     [...only1].filter(num => !only2.delete(num)), [...only2]
 ]
};