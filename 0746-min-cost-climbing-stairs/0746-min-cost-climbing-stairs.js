/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    let dp = [...cost];
    for(let i=2; i<cost.length; i++){
        dp[i] = cost[i] + Math.min(dp[i-1],dp[i-2]);
    }
    return Math.min(dp[cost.length - 1], dp[cost.length - 2]);
};