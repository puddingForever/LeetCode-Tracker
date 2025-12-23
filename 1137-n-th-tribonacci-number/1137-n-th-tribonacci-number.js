/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) { 
    let memo = [0,1,1];

    function trib(n,memo){

        if(memo[n] !== undefined){
            return memo[n];
        }

        memo[n] = trib(n-1 , memo) 
                + trib(n-2 , memo)
                + trib(n-3 , memo);

       return memo[n];
    }

    return trib(n, memo);

};