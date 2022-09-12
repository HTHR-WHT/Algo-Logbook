//use sliding window approach!

const maxProfit = (prices) => {
//start of window, aka our buy day
    let buy = 0;

//variable to track max profit so far
    let bestProfit = 0;

//we can't sell stock before we buy stock, so let's start our
//loop and set our sell day (window end) to index 1
    for(let sell = 1; sell <= prices.length -1; sell++) {

//if our sell price is less than or equal to our buy price, we can't make a profit here
//so let's move our buy day up to the current sell day index  
        if(prices[sell] <= prices[buy]) {
            buy = sell;
        }

//if our sell price is greater than the buy price of stock, 
//find the potential profit and keep track of it
//if better than previous profit
        if(prices[sell] > prices[buy]) {
            let difference = prices[sell] - prices[buy];
            bestProfit = Math.max(bestProfit, difference);
        }; 
    }
//output the maximum profit found
    return bestProfit;
};