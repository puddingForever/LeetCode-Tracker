/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {

    if(s.length !== t.length ) return false;

    var charArr = new Array(26).fill(0);
    for(var i=0; i<s.length; i++){
        charArr[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        charArr[t.charCodeAt(i) - 'a'.charCodeAt(0)]--;
    }

    for(var i=0; i< charArr.length; i++){
        if(charArr[i] !== 0){
            return false;
        }
    }

    return true;

};