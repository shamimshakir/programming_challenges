/**
 * @param {number[]} prices
 * @return {number[]}
 */
 
 // Runtime: 72 ms	
 // Memory: 36.5 MB	
var finalPrices = function(prices) {
    let discounts = [];
    
    prices.forEach((price, index) => {
        let discount = 0;
        for(let i = index + 1; i < prices.length; i++){
            if(price >= prices[i]){
                discount = prices[i];
                break;
            }
        }
        discounts.push(price - discount)
    })
    return discounts
};
