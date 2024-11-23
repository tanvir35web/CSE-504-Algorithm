function mergeSortedArray(arr1, arr2) {
    const mergeArray = [];
    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            mergeArray.push(arr1[i]);
            i++;
        } else {
            mergeArray.push(arr2[j]);
            j++;
        }
    }

    while (i < arr1.length) {
        mergeArray.push(arr1[i]);
        i++;
    }

    while (i < arr2.length) {
        mergeArray.push(arr2[j]);
        j++;
    }

    return mergeArray;
}

const arr1 =[1, 3, 5, 7];
const arr2 = [2, 4, 6, 8];

const mergeArray = mergeSortedArray(arr1, arr2);
console.log("Merged Sorted Array: ", mergeArray);
