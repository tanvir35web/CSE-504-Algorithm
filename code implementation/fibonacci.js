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
