/**
 * Reverses a given string using a recursive approach.
 *
 * @param {string} str - The string to be reversed.
 * @returns {string} The reversed string.
 *
 * @example
 * stringReverse("ABCDE"); // returns "EDCBA"
 */

function stringReverse(str){
    if(str === ''){
        return '';
    }
    return stringReverse(str.substr(1)) + str.charAt(0);
}


console.log(stringReverse("ABCDE"));
