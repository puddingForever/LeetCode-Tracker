class Solution {
    public boolean isAnagram(String s, String t) {
        
        //count frequencies 
        int[] char_set = new int[26];
        
        if(s.length() != t.length()) return false;
        
        //rat
        //car
        for(int i=0; i<s.length(); i++){
           char_set[s.charAt(i)-'a']++;
           char_set[t.charAt(i)-'a']--;
        }
        
        
        for(int num : char_set){
            if(Math.abs(num) > 0) return false;
        }
        
        return true;
        
       
        
        
        
        
    }
}