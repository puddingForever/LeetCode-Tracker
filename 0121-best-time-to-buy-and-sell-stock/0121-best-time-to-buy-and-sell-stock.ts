function maxProfit(prices: number[]): number {
    let minPrice = Number.MAX_VALUE;
    let maxProfit = 0;

    for(let price of prices){
        minPrice = Math.min(minPrice,price);
        let currentPrice = price - minPrice;
        maxProfit = Math.max(maxProfit,currentPrice);
    }

    return maxProfit;
};