class Solution {
    public int[] asteroidCollision(int[] asteroids) {
       
        Stack<Integer> st = new Stack();
        
        for(int asteroid : asteroids){
            
            if(asteroid > 0){ // if asteroid is positive
                st.push(asteroid);
            }else{ // if asteroid is negative
                
              //check with all the values of stack 
              while( !st.isEmpty() && st.peek() > 0 && Math.abs(asteroid) > st.peek()){
                  st.pop();
              }
                
               if(st.isEmpty() || st.peek() < 0){ // when stack is empty and previous val is negative 
                   st.push(asteroid);
               }
           
            
                
               if(st.peek() + asteroid == 0){ // if both are same amount but different signs 
                   st.pop();
               }
                
            }
            
        }
        
        int[] ans = new int[st.size()];
        
        for(int i=ans.length-1; i>=0; i--){
            ans[i] = st.pop();
        }
        
        return ans;
    }
}