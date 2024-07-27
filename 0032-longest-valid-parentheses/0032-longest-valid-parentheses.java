class Solution {
    public int longestValidParentheses(String s) {
        
      
        // remove from the stack when a paranthesis is closing tag
           // if current stack gets empty , store current index instead of calculating 
           // calculate the length (base)-(currentIndex) 
        // store into the stack when a paranthesis is opening tag
        
        Stack<Integer> mySt = new Stack();
        mySt.push(-1);
        int ans = 0;
        for(int i=0; i<s.length(); i++){
            
            if(s.charAt(i) == '('){
                mySt.push(i);
            }else{
                mySt.pop();
                if(mySt.size() == 0){
                    mySt.push(i);
                }else{
                    ans = Math.max(ans,i - mySt.peek());  
                }   
            }
        }
        
        return ans;
    }
}