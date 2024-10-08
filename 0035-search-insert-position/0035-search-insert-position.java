class Solution {
    public int searchInsert(int[] nums, int target) {

        
        int left = 0; 
        int right = nums.length - 1;

        
        while(left < right){ 
            
            int mid = left + (right - left) / 2; 
            
            if(nums[mid] == target){
                return mid;
            }else if(target > nums[mid]){
                left = mid + 1;      
            }else if(target< nums[mid]){
                right = mid; // right could be the result  
            }
         
        }
        
        // post-processing 
        return nums[left] < target ? left + 1 : left;
    }
}