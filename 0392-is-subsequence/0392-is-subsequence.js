/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {

    var cnt = 0;
    var j = 0;
    for(var i=0; i<t.length; i++){
        if(t[i] === s[j]) j++;
    }

   return j === s.length ? true : false;
};