class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor(value) {
        const node = new Node(value);
        this.top = node;
        this.length = 1;
    }

    push(value) {
        const node = new Node(value);
        node.next = this.top;
        this.top = node;
        this.length += 1;
        return this;
    }

    pop() {
        if (this.length === 0) {
            return null;
        }

        const node = this.top;
        this.top = node.next;
        node.next = null;
        this.length -= 1;
        return node;
    }
}

let stack = new Stack(11);
stack.push(12);
stack.push(13);