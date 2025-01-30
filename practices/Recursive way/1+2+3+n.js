/**
 * Calculates the sum of all numbers from 1 to n using a recursive approach.
 *
 * @param {number} n - The upper limit of the range of numbers to sum.
 * @returns {number} The sum of all numbers from 1 to n.
 *
 * @example
 * sumUntilln(3); // returns 6
 * sumUntilln(5); // returns 15
 * sumUntilln(0); // returns 0
 */

function sumUntilln(n) {
    if (n == 0) {
        return 0;
    }
    return n + sumUntilln(n - 1);
}

console.log(sumUntilln(10));
