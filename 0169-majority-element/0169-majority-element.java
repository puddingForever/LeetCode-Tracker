class Solution { // [3,2,3]
    public int majorityElement(int[] nums) {
        
    int majNum = (int)Math.ceil((double)nums.length/2);
    Map<Integer,Integer> myMap = new HashMap();
        
    int result = 0;
    for(int i=0; i<nums.length; i++){
        int count = myMap.getOrDefault(nums[i],0);
        count++;
        myMap.put(nums[i], count);
        if(majNum == count){
            result = nums[i];   
            break;
        } 
    
     }
     
     return result;
    }
}