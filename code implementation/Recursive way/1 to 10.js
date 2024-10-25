/**
 * Prints the numbers from 1 to the given number 'n' in a recursive manner.
 *
 * @param {number} n - The upper limit of the range of numbers to print.
 * @returns {undefined} This function does not return a value. It only prints the numbers.
 *
 * @example
 * fibonacciOfOneToTen(10);
 * // Output: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
 */

function fibonacciOfOneToTen(n) {
    if(n==0) {
        return;
    } 
    fibonacciOfOneToTen(n-1);
    console.log(n); 
}

fibonacciOfOneToTen(10);