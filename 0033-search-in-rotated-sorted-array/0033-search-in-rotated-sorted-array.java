class Solution {
    public int search(int[] nums, int target) {
        
      int left = 0;
      int right = nums.length-1;
        
      while(left <= right){ 
          int mid = left + (right-left) / 2;
          if(nums[mid] == target){
              return mid;
          }else if(nums[left] <= nums[mid]){ // left is sorted 
              if(nums[left]<= target && target < nums[mid]){
                  right = mid - 1;
              }else{
                  left = mid + 1;     
              }
          }else{ // right is sorted 
              if(target <= nums[right] && target > nums[mid]){
                left = mid + 1;   
              }else{
                right = mid - 1;
              }
          }
       }
       
      return -1;
        
    }
}