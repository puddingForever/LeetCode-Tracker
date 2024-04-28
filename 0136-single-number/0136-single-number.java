class Solution {
    public int singleNumber(int[] nums) {
        
        HashMap<Integer,Boolean> numsMap = new HashMap();
        int result = 0;
        
        for(int num : nums){
            
            if(numsMap.get(num) != null && numsMap.get(num)){
                numsMap.put(num,false);
            }else{
                numsMap.put(num,true);
            }
            
        }    

        for(int key : numsMap.keySet()){
            if(numsMap.get(key)){
                result = key;
            }
        }
      
        return result;
        
    }
}