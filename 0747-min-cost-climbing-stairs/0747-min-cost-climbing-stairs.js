/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {

    /* the problem */ 
    // the problem is about climbing moutain where each step has a cost 
    // my goal is to reach the top with the minimum cost 
   
    /* approch */
    // i used the dynamic programming 
    // i made an array for storing minimum cost for each steps 
    // to reach to the exact step , i made this relation 
    //  dp[i] = min(dp[i-1], dp[i-2]) + cost[i]
    // it means to reach step i , we take the minimum cost between step i-1 and i-2 , and add the current step

    // Implementation 

   // I created a dp array where we can store the minmum cost for each step  
    const lastIndex = cost.length;
    const dp = new Array(lastIndex).fill(0);

    // the first step and second step does not cost anything so i initialized the base cases. 
    dp[0] = cost[0];
    dp[1] = cost[1];

    // we iterate from step 2 to the last step 
    for(let i=2; i<lastIndex; i++){
            // i used the formula 
        dp[i] = Math.min(dp[i-1], dp[i-2]) + cost[i] ;  
    }

    // since we can finish at the last step or the second-to-last step , return with math.min method. 
    return  Math.min(dp[lastIndex-2],dp[lastIndex-1]);
};

