/**
 * Prints the numbers from 10 to 1 in a recursive manner.
 *
 * @param {number} n - The starting number. It should be 10 for this function.
 * @returns {undefined} This function does not return a value. It only prints the numbers.
 */

function fibonacciOfOneToTen(n) {
    if(n==0) {
        return;
    } else {
        console.log(n); 
        fibonacciOfOneToTen(n-1);
    }
}


fibonacciOfOneToTen(10); 

