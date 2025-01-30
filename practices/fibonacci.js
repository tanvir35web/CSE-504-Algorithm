/**
 * Calculates the nth Fibonacci number using an iterative approach.
 *
 * @param {number} n - The position of the Fibonacci number to calculate.
 * @returns {number} The nth Fibonacci number.
 *
 * @example
 * const result = fibonacci(6);
 * console.log(`Fibonacci = ${result}`); // Output: Fibonacci = 8
 */
 // Iterative approach to calculate the nth Fibonacci number.
 // The time complexity of this approach is O(n).
 // The space complexity is O(1) as we only use a constant amount of memory.
 // The Fibonacci sequence starts with 0 and 1.
 // For example, the first 10 Fibonacci numbers are 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.
 // The Fibonacci sequence can be generated using the formula Fn = Fn-1 + Fn-2.
 
function fibonacci(n) {
    if (n <= 1) {
        return n;
    }

    let F1 = 1, F2 = 1, Fi = 1;

    for (let i = 3; i <= n; i++) {
        Fi = F1 + F2;  // Calculate the next Fibonacci number
        F1 = F2;       // Shift the values
        F2 = Fi;
    }

    return Fi;
}


// Example usage:
const result = fibonacci(6);
console.log(`Fibonacci = ${result}`);
