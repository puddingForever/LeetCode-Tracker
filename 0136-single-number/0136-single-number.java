class Solution {
    public int singleNumber(int[] nums) {
        
        HashMap<Integer,Boolean> map = new HashMap();
        
        for(int num : nums){
            if(map.containsKey(num)){
                map.put(num,true);
            }else{
                map.put(num,false);
            }
        }
        
        int result = 0;
        for(int num : nums){
            if(map.get(num) == false){
                result = num;
            }
        }
        
        return result;
    }
}