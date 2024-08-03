class Solution {
    public int[] twoSum(int[] numbers, int target) {
        
        /*
        [2,7,11,15]
            9
            [1,0]
        */
        
      
      int left = 0;
      int right = numbers.length-1;
      
      int[] res = new int[2];
        
       while(left < right){
           if(numbers[left] + numbers[right] == target){
               res[0] = left + 1;
               res[1] = right + 1;
               break;
           }else if(numbers[left] + numbers[right] > target){
              right--;
           }else if(numbers[left] + numbers[right]  < target){
               left++;
           }
           
       }
        
    return res;  
        
    }
}