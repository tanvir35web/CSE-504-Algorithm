
function knapSack(maxWeight, weights, profit, itemCount) {
    let dp = Array(itemCount + 1).fill().map(() => Array(maxWeight + 1).fill(0));

    for (let i = 0; i <= itemCount; i++) {
        for (let w = 0; w <= maxWeight; w++) {
            if (i === 0 || w === 0) {
                dp[i][w] = 0;
            } else if (weights[i - 1] <= w) {
                dp[i][w] = Math.max(profit[i - 1] + dp[i - 1][w - weights[i - 1]], dp[i - 1][w]);
            } else {
                dp[i][w] = dp[i - 1][w];
            }
        }
    }

    return dp[itemCount][maxWeight];
}

// Example usage:
const weights = [3,2,5,4];
const profit = [3,4,5,7];
const maxWeight = 9;
const itemCount = profit.length;

console.log(knapSack(maxWeight, weights, profit, itemCount)); 