class Solution {
    public int[] intersection(int[] nums1, int[] nums2) {
        
       HashMap<Integer,Boolean> map = new HashMap();
       
       for(int num : nums1){
           map.put(num,false);
       }

        int count = 0;
        for(int num:nums2){
            if(map.containsKey(num)&&map.get(num) == false){
                map.put(num,true);
                count++; 
            }
        }
        
        int index = 0;
        int[] result = new int[count];
        for(int key : map.keySet()){
            if(map.get(key) == true){
                result[index++] = key;
            }
        }
        
        
        return result;
        
    }
}