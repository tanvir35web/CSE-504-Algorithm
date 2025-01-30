// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// const linearSearch = (arr, target) => {
//     for (i = 0; i < arr.length; i++) {
//         if (arr[i] === target) {
//             return i;
//         }
//     }
//     return -1;
// }

// const arr = [1, 12, 3, 4, 54, 10, 7, -7, 0, 5]

// rl.question('Enter the target number: ', (input) => {
//     const target = parseInt(input, 10);

//     const result = linearSearch(arr, target);

//     if (result === -1) {
//         console.log("Target not found in the array.");
//     } else {
//         console.log(`Target found at index ${result}.`);
//     }
//     rl.close();
// });



const linearSearch = (X, n, key) => {
    let location = -1; // Default location if the key is not found

    // Loop through the array
    for (let i = 0; i <= n; i++) {
        if (X[i] === key) {
            location = i; // Key is found; update location
            break; // Exit the loop since the key is found
        }
    }

    return location; // Return the location (-1 if not found)
};

// Example Usage
const X = [5, 12, 7, 3, 8]; // Array
const key = 7; // Element to find
const n = X.length - 1; // Last index of the array

const location = linearSearch(X, n, key);

if (location !== -1) {
    console.log(`Key found at index ${location}`);
} else {
    console.log('Key not found');
}

