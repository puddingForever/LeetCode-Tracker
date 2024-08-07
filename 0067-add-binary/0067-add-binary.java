class Solution {
    public String addBinary(String a, String b) {
      StringBuilder sb = new StringBuilder();
      int i = a.length()-1, j = b.length()-1, carry = 0;
        
       while(i >= 0 || j >= 0){
           int sum = carry;   
           if( j >= 0) sum += b.charAt(j--) - '0'; // 49 - 48 
           if( i >= 0 ) sum += a.charAt(i--) - '0';
           sb.append(sum % 2); // current position 
           carry = sum / 2; // quotient 
       }
        
       if(carry != 0) sb.append(carry);
        
        return sb.reverse().toString();
      
            
    }
}
