class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor(value) {
        const node = new Node(value);
        this.head = this.tail = node;
        this.length = 1;
    }

    push(value) {
        const node = new Node(value);

        if (this.head === null) {
            this.head = this.tail = node;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }

        this.length += 1;

        return this;
    }

    pop() {
        if (this.tail === null) {
            return null;
        }

        const node = this.tail;
        this.tail = this.tail.prev;
        node.prev = null;
        this.length -= 1;

        if (this.length === 0) {
            this.head = this.tail = null;
        } else {
            this.tail.next = null;
        }

        return node;
    }

    unshift(value) {
        const node = new Node(value);

        if (this.head !== null) {
            node.next = this.head;
            this.head.prev = node;
        } else {
            this.tail = node;
        }

        this.head = node;
        this.length += 1;
        return this;
    }

    shift() {
        if (this.length === 0) {
            return null;
        }

        const node = this.head;

        if (this.length === 1) {
            this.head = this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.prev = null;
        }

        node.next = null;
        this.length -= 1;

        return node;
    }

    get(index) {
        if (this.length == 0 || index < 0 || index >= this.length) {
            return null;
        }

        if (index < this.length / 2) {
            let node = this.head;

            for (let i = 0; i < index; i++) {
                node = node.next;
            }

            return node;
        } else {
            let node = this.tail;

            for (let i = this.length - 1; i > index; i--) {
                node = node.prev;
            }

            return node;
        }
    }

    set(index, value) {
        const node = this.get(index);

        if (node !== null) {
            node.value = value;
            return true;
        }

        return false;
    }

    insert(index, value) {
        if (index < 0 || index > this.length) {
            return null;
        }

        if (index == 0) {
            this.unshift(value);
        } else if (index == this.length) {
            this.push(value);
        } else  {
            const node = new Node(value);
            const previous = this.get(index - 1);
            node.next = previous.next;
            node.next.previous = node;
            previous.next = node;
            this.length += 1;
        } 

        return this;
    }

    remove(index) {
        if (this.length === 0 || index < 0 || index >= this.length) {
            return false;
        }

        if (this.length === 1) {
            this.head = this.tail = null;
        } else if (index === 0) {
            this.head = this.head.next;
            this.head.prev = null;
        } else if (index === this.length - 1) {
            this.tail = this.tail.prev;
            this.tail.next = null;
        } else {
            const node = this.get(index);
            const prev = node.prev;
            const next = node.next;
            prev.next = next;
            next.prev = prev;
        }

        this.length -= 1;
        return true;
    }
}

let linkedList = new DoublyLinkedList(1);
linkedList.push(2);
linkedList.push(3);