class Solution {
    public void moveZeroes(int[] nums) {
     
        if(nums == null || nums.length == 0) return;
        
        int posNum = 0;
        for(int num : nums){
            if(num != 0) nums[posNum++] = num;
        }
        
        while(posNum < nums.length){
            nums[posNum++] = 0;   
        }
    }
}