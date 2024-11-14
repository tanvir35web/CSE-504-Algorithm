const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const linearSearch = (arr, target) => {
    for (i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
}

const arr = [1, 12, 3, 4, 54, 10, 7, -7, 0, 5]

rl.question('Enter the target number: ', (input) => {
    const target = parseInt(input, 10);

    const result = linearSearch(arr, target);

    if (result === -1) {
        console.log("Target not found in the array.");
    } else {
        console.log(`Target found at index ${result}.`);
    }
    rl.close();
});


