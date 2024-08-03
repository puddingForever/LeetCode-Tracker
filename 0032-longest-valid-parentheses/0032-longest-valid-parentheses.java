class Solution {
    public int longestValidParentheses(String s) {
        
       // (()) => 4 
       // (() => 2 
        
        // get the longest valid parentheses
                
        // store in a stack when the value is ( <-- 
        // when meets ending tag , remove it from the stack 
        
//        0 1 2 3 4 5 
//         == 1 2 2 
        
        
        // )()()
        
        // 
        
        Stack<Integer> myStack = new Stack();
        myStack.push(-1); // prevent when the stack is empty 
        int ans = 0;
        
        for(int i=0; i<s.length(); i++){
            
            if(s.charAt(i) == '('){
                myStack.push(i);   // 0 3
            }else if(s.charAt(i) == ')'){
                myStack.pop(); 
                if(myStack.size() == 0 ){
                    myStack.push(i); // 0
                }else{ // ans =  2-1 = 1
                    ans = Math.max(ans,i-myStack.peek()); 
                }
            }
            
        }
        
        
        return ans;
       
    }
}