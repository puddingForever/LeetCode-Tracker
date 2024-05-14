class Solution {
    public void sortColors(int[] nums) {
        
//         int red = 0;
//         int white = 0;
//         int blue = 0;
        
//         for(int i=0; i<nums.length; i++){
//            if(nums[i] == 0){
//                red++;
//            }else if(nums[i]==1){
//                white++;
//            }else{
//                blue++;
//            }
//         }
        
       for(int i=0; i<nums.length-1; i++){
           for(int j=i+1; j<nums.length; j++){
               if(nums[j] < nums[i]){
                   int temp = nums[i];
                   nums[i] = nums[j];
                   nums[j] = temp;
               }
           }
       }
    
    }
}