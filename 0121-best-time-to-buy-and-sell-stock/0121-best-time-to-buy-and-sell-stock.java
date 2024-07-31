class Solution {
    public int maxProfit(int[] prices) { 
        
       int profit = 0;
       int buyDay = 0;
        
       for(int sellDay=1; sellDay<prices.length; sellDay++){
           if(prices[buyDay] >= prices[sellDay]){ 
               buyDay = sellDay;
           }
            profit = Math.max(profit,prices[sellDay] - prices[buyDay]);
       }
        
        return profit;
   
    }
}


