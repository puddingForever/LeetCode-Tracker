class Solution {
    public boolean isSubsequence(String s, String t) {
       
        
      int count = 0; 
      for(int i=0; i<t.length(); i++){
          
          char targetChar = t.charAt(i);
          
          if(count == s.length()) break;
          
          if(targetChar == s.charAt(count)){
              count++;
          }
      }
        
        return count == s.length();
        
    }
}