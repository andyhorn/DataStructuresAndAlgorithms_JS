class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const node = new Node(value);

        if (this.root === null) {
            this.root = node;
        } else {
            let temp = this.root;

            while (temp !== null && temp.value !== node.value) {
                if (node.value < temp.value) {
                    if (temp.left === null) {
                        temp.left = node;
                        temp = null;
                    } else {
                        temp = temp.left;    
                    }
                } else {
                    if (temp.right === null) {
                        temp.right = node;
                        temp = null;
                    } else {
                        temp = temp.right;    
                    }
                }
            }
        }

        return this;
    }

    contains(value) {
        if (this.root === null) {
            return false;
        }

        let temp = this.root;
        while (temp !== null) {
            if (temp.value === value) {
                return true;
            }

            if (value < temp.value) {
                temp = temp.left;
            } else {
                temp = temp.right;
            }
        }

        return false;
    }

    minimumValue() {
        if (this.root === null) {
            return null;
        }

        let currentNode = this.root;
        while (currentNode.left !== null) {
            currentNode = currentNode.left;
        }

        return currentNode.value;
    }

    breadthFirstSearch() {
        const queue = [this.root];
        const results = [];
             
        while (queue.length) {
            let currentNode = queue.shift();

            if (!currentNode) {
                continue;
            }
            
            results.push(currentNode.value);

            if (currentNode.left) {
                queue.push(currentNode.left);
            }
            if (currentNode.right) {
                queue.push(currentNode.right);
            }
        }

        return results;
    }

    preOrderDepthFirstSearch() {
        const results = [];

        function traverse(node) {
            if (!node) {
                return;
            }
            
            results.push(node.value);

            if (node.left) {
                traverse(node.left);
            }

            if (node.right) {
                traverse(node.right);
            }
        }

        traverse(this.root);
        return results;
    }

    postOrderDepthFirstSearch() {
        const results = [];

        function traverse(node) {
            if (!node) {
                return;
            }
            
            if (node.left) {
                traverse(node.left);
            }

            if (node.right) {
                traverse(node.right);
            }

            results.push(node.value);
        }

        traverse(this.root);
        return results;
    }

    inOrderDepthFirstSearch() {
        const results = [];

        function traverse(node) {
            if (!node) {
                return;
            }
            
            if (node.left) {
                traverse(node.left);
            }

            results.push(node.value);

            if (node.right) {
                traverse(node.right);
            }
        }

        traverse(this.root);
    }
}

let bst = new BinarySearchTree();