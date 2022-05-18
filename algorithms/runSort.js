const MAX_VALUE = 1000;
const NUM_ITEMS = 100000;

function getRandomInteger() {
    return Math.floor(Math.random() * MAX_VALUE);
}

function generateRandomList() {
    const items = new Array(NUM_ITEMS);

    for (let i = 0; i < NUM_ITEMS; i++) {
        items[i] = getRandomInteger();
    }

    return items;
}

class Timer {
    constructor() {
        this.startTime = null;
        this.endTime = null;
    }

    start() {
        this.startTime = new Date();
    }

    stop() {
        this.endTime = new Date();
    }

    getMs() {
        return this.endTime.getTime() - this.startTime.getTime();
    }
}

function verifySort(array, expectedLength = NUM_ITEMS) {
    if (array.length !== expectedLength) {
        throw new Error('Sorted array has an unexpected length');
    }

    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] > array[i + 1]) {
            throw new Error(`Value ${array[i]} at index ${i} is greater than value ${array[i + 1]} at index ${i + 1}`);
        }
    }
}

exports.default = (sortFunc) => {
    const items = generateRandomList();
    console.log(`Generated list of ${items.length} random integers`);

    const timer = new Timer();
    console.log('Sorting...');
    timer.start();
    let result = sortFunc(items);
    timer.stop();

    if (!result) {
        result = items;
    }

    verifySort(result);
    console.log(`Completed in ${timer.getMs()}ms!`);
}