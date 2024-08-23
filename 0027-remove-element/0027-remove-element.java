class Solution {
    public int removeElement(int[] nums, int val) {
     
        int target = val;
        int count = 0;

        for(int i=0; i<nums.length; i++){
            if(nums[i] != target){
              nums[count] = nums[i];
              count++;
            }
        }
        
        
        return count;
    }
}