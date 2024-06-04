class Solution { // a c
    // count 2
    public int longestPalindrome(String s) {
      if(s == null || s.length()==0) return 0;
      HashSet<Character> hs = new HashSet<Character>();
      int count = 0;
      for(int i=0; i<s.length(); i++){ // a b b b c 
          if(hs.contains(s.charAt(i))){
              hs.remove(s.charAt(i)); // 
              count++; // 1 
          }else{
              hs.add(s.charAt(i)); 
          }
      }
        
     if(!hs.isEmpty()) return count*2 + 1;
     return count*2;
    }
}