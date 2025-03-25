/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    
    let uniqObj = {};
    for(let i=0; i<s.length; i++){
        uniqObj[s[i]] =  (uniqObj[s[i]] || 0 ) + 1;
    }

    for(let i=0; i<s.length; i++){
        if(uniqObj[s[i]] === 1) return i;
    }

    return -1;
};