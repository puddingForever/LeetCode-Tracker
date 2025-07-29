function containsDuplicate(nums: number[]): boolean {

   let origin = nums.length;
   let set = new Set<number>(nums);
   return set.size !== origin 

};