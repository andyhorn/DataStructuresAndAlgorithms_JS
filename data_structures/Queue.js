class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor(value) {
        const node = new Node(value);
        this.first = this.last = node;
        this.length = 1;
    }

    enqueue(value) {
        const node = new Node(value);

        if (this.length === 0) {
            this.first = this.last = node;
        } else {
            this.last.next = node;
            this.last = node;
        }

        this.length += 1;
        return this;
    }

    dequeue() {
        if (this.length === 0) {
            return null;
        }

        const node = this.first;

        if (this.length === 1) {
            this.first = this.last = null;
        } else {
            this.first = this.first.next;
        }
        
        node.next = null;
        this.length -= 1;
        return node;
    }
}

let queue = new Queue(4);
queue.enqueue(12);