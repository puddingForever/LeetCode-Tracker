class Solution {
    public int findPermutationDifference(String s, String t) {
        
       char[] s_arr  =  s.toCharArray();
       char[] t_arr  =  t.toCharArray();
    
        int sum = 0;
        
        for(int i=0; i<s_arr.length; i++){
            for(int j=0; j<t_arr.length; j++){
                if(s_arr[i] == t_arr[j]){
                    sum += Math.abs(i-j);
                }
                
            }
        }
        
        return sum;
        
    }
    
   
}