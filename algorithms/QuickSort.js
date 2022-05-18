const runSort = require('./runSort').default;

function swap(array, left, right) {
    const temp = array[left];
    array[left] = array[right];
    array[right] = temp;
}

function pivot(array, pivotIndex = 0, end = array.length - 1) {
    let swapIndex = pivotIndex;

    for (let i = pivotIndex + 1; i <= end; i++) {
        if (array[i] < array[pivotIndex]) {
            swap(array, i, ++swapIndex);
        }
    }

    swap(array, pivotIndex, swapIndex);
    return swapIndex;
}

function quickSort(array, left = 0, right = array.length - 1) {
    if (left < right) {
        let pivotIndex = pivot(array, left, right);
        quickSort(array, left, pivotIndex - 1);
        quickSort(array, pivotIndex + 1, right);
    }
}

runSort(quickSort);