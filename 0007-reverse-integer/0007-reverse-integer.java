class Solution {
    public int reverse(int x) {
        
        int min = Integer.MIN_VALUE;
        int max = Integer.MAX_VALUE;
        
        if( x == min || x == max ) return 0;
        
        int reversed = 0;
        while(x != 0){
            int lastDigit = x % 10;
            
            if(reversed > max/10) return 0; // positive integer
            if(reversed < min/10) return 0; // negative integer   
            reversed = reversed * 10 + lastDigit;
            
            x = x/10;
        }
        return reversed;
    }
}