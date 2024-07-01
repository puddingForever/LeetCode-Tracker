class Solution {
    public int findMin(int[] nums) {
        
        // base case
        if(nums.length == 1) return nums[0];
        if(nums[0] < nums[nums.length-1]) return nums[0];
            
        int left = 0;
        int right = nums.length - 1;
        
        while(left <= right){ //[4,5,6,7,0,1,2]
            int mid = left + (right - left) / 2;
            // find decreasing point 
            if(nums[mid+1] < nums[mid]){
                return nums[mid+1];
            }else if(nums[mid] < nums[mid-1]){
                return nums[mid];
            }else if(nums[left] < nums[mid] ){
                left = mid+1;
            }else if( nums[mid]<nums[right] ){
                right = mid - 1;
            }
            
        }
        
        return 1;
        
    }
}