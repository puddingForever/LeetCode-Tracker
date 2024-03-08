class Solution {
    public void moveZeroes(int[] nums) {
      //shift all the numbers to front
     //fill up the rest with 0 
        
     int posNum = 0;
     
     for(int num : nums){
         if(num != 0) nums[posNum++] = num;
     }
        
     while(posNum < nums.length){
         nums[posNum] = 0;
         posNum++;
     }
        
    }
}