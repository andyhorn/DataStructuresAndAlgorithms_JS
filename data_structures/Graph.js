class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
            return true;
        }

        return false;
    }

    addEdge(vertex1, vertex2) {
        if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) {
            return false;
        }

        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
        return true;
    }

    removeEdge(vertex1, vertex2) {
        if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) {
            return false;
        }

        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(x => x != vertex2);
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(x => x != vertex1);
        return true;
    }

    removeVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            return false;
        }

        while (this.adjacencyList[vertex].length) {
            const connection = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, connection);
        }

        delete this.adjacencyList[vertex];
        return true;
    }
}

let graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addEdge('A', 'B');
graph.addEdge('B', 'C');
graph.addEdge('C', 'A');