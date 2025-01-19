/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) { 
    const myStack = [];
    for(const chr of s){
        myStack.push(chr);
    }
    let cnt = 0;
    for(var i=myStack.length-1; i>=0; i--){
        s[cnt] = myStack[i];
        cnt++;
    }
    
};