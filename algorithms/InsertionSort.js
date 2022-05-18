const runSort = require('../runSort').default;

function insertionSort(array) {
    let temp;
    let j;

    for (let i = 1; i < array.length; i++) {
        temp = array[i];

        j = i - 1;
        for (; temp < array[j] && j > -1; j--) {
            array[j + 1] = array[j];
        }

        array[j + 1] = temp;
    }
}

runSort(insertionSort);