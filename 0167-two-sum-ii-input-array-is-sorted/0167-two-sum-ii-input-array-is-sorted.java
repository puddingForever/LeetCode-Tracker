class Solution {
    public int[] twoSum(int[] numbers, int target) {
        
        int[] arr = new int[2];
        int left = 0;
        int right =numbers.length-1;
        
        while(numbers[left]+numbers[right] != target && left < right){
            
            if(numbers[left] + numbers[right] > target){
                right--;
            }else if(numbers[left] + numbers[right] < target){
                left++;
            }
            
        }
        
         arr[0] = left+1;
         arr[1] = right+1;
        return arr;
    }
}