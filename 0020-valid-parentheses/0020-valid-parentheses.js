/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if(s.length % 2 === 1) return false;
    const pairs = {
        ')' : '(',
        '}' : '{',
        ']' : '['
    }
    const myStack = [];
    for(var i=0; i<s.length; i++){
        if(s[i] === '(' || s[i] === '{' || s[i] === '['){
            myStack.push(s[i]);
        }else{ // closed parentheses ([]) myStack (   
            if( myStack.pop() !== pairs[s[i]]){
                return false;
            }
        }
    }
    return myStack.length === 0;
};