function containsDuplicate(nums: number[]): boolean {

   let origin = nums.length;
   let set = new Set(nums);
   return set.size !== origin 

};