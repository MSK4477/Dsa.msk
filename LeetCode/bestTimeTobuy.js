let prices =[9,9,7,3,9,9,6,7]
var maxProfit = function (prices) {
    if (prices.length <= 1) {
      return 0;
    }
  
    let max = 0;
    let min = prices[0];
    for (let i = 1; i <= prices.length -1; i++) {
      min = Math.min(min, prices[i]);
  
      max = Math.max(max, prices[i] - min);
    }
    return max;
  };
  console.log(maxProfit(prices));

