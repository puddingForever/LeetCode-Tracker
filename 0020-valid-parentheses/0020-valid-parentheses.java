class Solution {
    public boolean isValid(String s) {
        
        HashMap<Character, Character> myMap = new HashMap();
        myMap.put(')','(');
        myMap.put('}','{');
        myMap.put(']','[');
        
        Stack<Character> myStack = new Stack();
        
        for(int i=0; i<s.length(); i++){
            char curr = s.charAt(i);
            if(myMap.containsKey(curr)){
                char pop = myStack.size() != 0 ? myStack.pop() : '#';
                if(pop != myMap.get(curr)){
                    return false;
                }
                
            }else{
                myStack.push(curr);
            }
            
        }
        
        return myStack.isEmpty();
        
    }
}