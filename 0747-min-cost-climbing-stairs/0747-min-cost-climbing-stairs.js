/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
   

    // to reach top 
    // dp[i] = cost[i] + min(dp[i - 1], dp[i - 2])
    const lastIndex = cost.length;
    const dp = new Array(lastIndex).fill(0);

    // the first step does not cost anything . it is just to initialize the  cost 
    dp[0] = cost[0];
    dp[1] = cost[1];

    // start calculating from the index 2 
     // [10,15,20] ,  30 
    for(let i=2; i<lastIndex; i++){
        dp[i] = Math.min(dp[i-1], dp[i-2]) + cost[i] ;
    }

    return  Math.min(dp[lastIndex-2],dp[lastIndex-1]);
};

