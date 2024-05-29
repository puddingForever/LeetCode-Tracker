class Solution {
    public boolean containsDuplicate(int[] nums) {
        Map<Integer,Boolean> myMap = new HashMap<>();
        
        for(int num : nums){
            
            if(myMap.containsKey(num)){
                myMap.put(num,true);
            }else{
                myMap.put(num,false);
            }
           
        }
        
        for(boolean value : myMap.values()){
            
            if(value){
                return true;
            }
        }
        
        return false;
        
    }
}