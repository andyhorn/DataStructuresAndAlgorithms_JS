const runSort = require('../runSort').default;

function merge(array1, array2) {
    const combined = [];
    let i = 0;
    let j = 0;

    while (i < array1.length && j < array2.length) {
        if (array1[i] < array2[j]) {
            combined.push(array1[i++]);
        } else {
            combined.push(array2[j++]);
        }
    }

    while (i < array1.length) {
        combined.push(array1[i++]);
    }
    while (j < array2.length) {
        combined.push(array2[j++]);
    }

    return combined;
}

function mergeSort(items) {
    if (items.length == 1) {
        return items;
    }

    const half = Math.floor(items.length / 2);
    let front = items.slice(0, half);
    let back = items.slice(half);

    front = mergeSort(front);
    back = mergeSort(back);

    return merge(front, back);
}

runSort(mergeSort);