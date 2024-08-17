class Solution {
    public int climbStairs(int n) {
        
        Map<Integer,Integer> myMap = new HashMap();
        return checkStairs(n,myMap);
    
    }
    
    
    private int checkStairs(int n , Map<Integer,Integer> myMap){
        
        if(n == 0 || n == 1) return 1;
        
        if( !myMap.containsKey(n) ){
            myMap.put(n, checkStairs(n-1,myMap) + checkStairs(n-2,myMap));
        }
        
        return myMap.get(n);
        
    }
}