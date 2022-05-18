class Node {
    constructor(value) {
        this._value = value;
        this._next = null;
    }

    get next() {
        return this._next;
    }

    set next(node) {
        this._next = node;
    }

    get value() {
        return this._value;
    }

    set value(val) {
        this._value = val;
    }
}

class LinkedList {
    constructor(value) {
        const node = new Node(value);
        this.tail = this.head = node;
        this.length = 1;
    }

    push(value) {
        const node = new Node(value);

        if (this.head === null) {
            this.tail = this.head = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }

        this.length += 1;
        return this;
    }

    pop() {
        if (this.head === null) {
            return null;
        } 
        
        if (this.head === this.tail) {
            const node = this.head;
            this.head = null;
            this.tail = null;
            this.length = 0;
            return node;
        }
        
        let previous = null;
        let current = this.head;

        while (current.next !== null) {
            previous = current;
            current = current.next;
        }
        
        this.tail = previous;
        this.tail.next = null;
        this.length -= 1;
        
        return current;
    }

    unshift(value) {
        const node = new Node(value);
        
        if (this.head === null) {
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            this.head = node;
        }

        this.length += 1;
        return this;
    }

    shift() {
        if (this.head === null) {
            return null;
        }

        if (this.head === this.tail) {
            const node = this.head;
            
            this.head = null;
            this.tail = null;
            this.length = 0;

            return node;
        }

        const node = this.head;
        this.head = this.head.next;
        node.next = null;
        this.length -= 1;

        return node;
    }

    get(index) {
        if (index < 0 || index >= this.length) {
            return null;
        }

        let current = this.head;
        for (let i = 0; i < index; i++) {
            current = current.next;
        }

        return current;
    }

    set(index, value) {
        let temp = this.get(index)

        if (temp !== null) {
            temp.value = value;
        }

        return this;
    }

    insert(index, value) {
        if (index === 0) {
            return this.unshift(value);
        }

        if (index === this.length) {
            return this.push(value);
        }

        if (index < 0 || index >= this.length) {
            return false;
        }

        const previous = this.get(index - 1);
        const node = new Node(value);
        node.next = previous.next;
        previous.next = node;
        this.length += 1;

        return this;
    }

    remove(index) {
        if (index < 0 || index >= this.length) {
            return false;
        }

        if (index === 0) {
            return this.shift();
        }

        if (index === this.length - 1) {
            return this.pop();
        }

        const previous = this.get(index - 1);
        previous.next = null;
        this.length -= 1;

        return this;
    }

    reverse() {
        if (this.length < 2) {
            const temp = this.tail;
            this.head = this.tail;
            this.tail = temp;
            return this;
        }

        let previous = null;
        let current = this.head;
        let next = current.next;

        this.tail = current;
        
        for (let i = 0; i < this.length - 1; i++) {
            current.next = previous;
            previous = current;
            current = next;
            next = next.next;
        }

        this.head = current;
        current.next = previous;

        return this;
    }
    
}

let linkedList = new LinkedList(0)
linkedList.push(1)
linkedList.push(2)
linkedList.push(3)
linkedList.push(4)
linkedList.push(5)