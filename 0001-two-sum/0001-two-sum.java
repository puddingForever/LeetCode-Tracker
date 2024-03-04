class Solution {
    public int[] twoSum(int[] nums, int target) {
        
        Map<Integer,Integer> map = new HashMap();

        for(int i=0;i<nums.length; i++){
              int complacent = target - nums[i];
              if(map.containsKey(complacent)){
                  return new int[]{map.get(complacent),i};
              }
            map.put(nums[i],i);
        }

        return new int[]{};
        
    }
}