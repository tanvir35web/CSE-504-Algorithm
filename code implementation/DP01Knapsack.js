function knapsack(weights, values, capacity) {
    const n = weights.length;

    // Create a 2D DP table initialized with 0
    const dp = Array.from({ length: n + 1 }, () => Array(capacity + 1).fill(0));

    // Build the DP table
    for (let i = 1; i <= n; i++) {
        for (let w = 0; w <= capacity; w++) {
            // If the current item's weight is less than or equal to the current capacity
            if (weights[i - 1] <= w) {
                // Choose the maximum between including or excluding the current item
                dp[i][w] = Math.max(
                    dp[i - 1][w], // Exclude the current item
                    dp[i - 1][w - weights[i - 1]] + values[i - 1] // Include the current item
                );
            } else {
                // If the current item's weight exceeds the capacity, exclude it
                dp[i][w] = dp[i - 1][w];
            }
        }
    }

    // The maximum value is stored in dp[n][capacity]
    return dp[n][capacity];
}



// Example usage:
const weights = [3,2,5,4];; 
const values = [3,4,5,7];  
const capacity = 9;      

const maxValue = knapsack(weights, values, capacity);
console.log("Maximum value in the knapsack:", maxValue);