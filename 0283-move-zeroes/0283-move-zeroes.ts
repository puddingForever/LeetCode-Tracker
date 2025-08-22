/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
       
        let left = 0;
        
        for(let i=0; i<nums.length; i++){
            if(nums[i] !== 0){
                nums[left] = nums[i];
                left++;
            }
        }
    
        for(let i=left; i<nums.length; i++){
            nums[i] = 0;
        }
    
};