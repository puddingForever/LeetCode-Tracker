class Solution {
    public void moveZeroes(int[] nums) {
        
        //shift all the elements to front
        int posNum = 0;
        
        for(int num : nums){
            if(num != 0) nums[posNum++] = num;
        }
        
        //fill the left elements to 0 
        while(posNum<nums.length){
            nums[posNum++] = 0;
        }
        
        
        
    }
}