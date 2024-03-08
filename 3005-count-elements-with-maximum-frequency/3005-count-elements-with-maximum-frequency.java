class Solution {
    public int maxFrequencyElements(int[] nums) {
       //1.find the frequency of each element in nums
       //2.determine the maximum frequency
       //3.calculate the total frequencies of elements with the maximum frequency
        
        Map<Integer,Integer> frens = new HashMap();
        
        for(int num : nums){
            frens.put(num,frens.getOrDefault(num,0)+1);
        }
        
        int maxFren = 0;
        
        for(int fren : frens.values()){
            maxFren = Math.max(maxFren,fren);
        }
        
        //calculate total frenquencies of elements with the maximum frenquency
        int frenquencyOfMaxFrenquency = 0;
        for(int fren : frens.values()){
            if(fren == maxFren){
                frenquencyOfMaxFrenquency++;
            }
        
        }
        
        return frenquencyOfMaxFrenquency * maxFren;
        
    }
}