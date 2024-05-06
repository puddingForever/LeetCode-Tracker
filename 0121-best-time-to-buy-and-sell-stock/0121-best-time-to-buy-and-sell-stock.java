class Solution {
    public int maxProfit(int[] prices) {
        
        // cant make transaction 
        if(prices.length == 1) return 0;
        
       
        int profit = 0;
        int buyStock = 0 ;
        int sellStock = 1;
        
        while(sellStock < prices.length){
         
          if(prices[sellStock]> prices[buyStock]){
              profit = Math.max(profit,prices[sellStock] - prices[buyStock]);
          }else{
            buyStock = sellStock;
          }
            
          sellStock++;
            
        }
        
        return profit;
        
     
    }
}