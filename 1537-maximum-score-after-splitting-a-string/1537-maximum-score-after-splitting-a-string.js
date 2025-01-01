/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function(s) {

    var ones = 0;
    var zeros = 0;
    var max = -1;

    for(var i=0; i<s.length-1; i++){
        if(s.charAt(i) === '1'){
            ones++;
        }else{
            zeros++;
        }
        max = Math.max(max , zeros-ones);
    }

    if(s.charAt(s.length-1) === '1'){
        ones++;
    }

    return max + ones;

    
};