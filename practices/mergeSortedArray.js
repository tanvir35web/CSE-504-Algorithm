const mergeTwoLists = function(list1, list2){
    const mergeArray = [];
    let i = 0;
    let j = 0;

    while (i < list1.length && j < list2.length) {
        if (list1[i] < list2[j]) {
            mergeArray.push(list1[i]);
            i++;
        } else {
            mergeArray.push(list2[j]);
            j++;
        }
    }

    while (i < list1.length) {
        mergeArray.push(list1[i]);
        i++;
    }

    while (i < list2.length) {
        mergeArray.push(list2[j]);
        j++;
    }

    return mergeArray;
}

const list1 =[1,2,4]
const list2 = [1,3,4]
const mergeArray = mergeTwoLists(list1, list2);
console.log("Merged Sorted Array: ", mergeArray);
