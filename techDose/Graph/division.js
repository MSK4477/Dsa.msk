class UnionFind {
    constructor() {
        this.parent = {}; // Stores the parent of each node
        this.weight = {}; // Stores the weight of each node relative to its parent
    }
    debugger;

    // Finds the root of the given node while applying path compression
    find(node) {
        if (!(node in this.parent)) {
            this.parent[node] = node; // Initialize parent of the node
            this.weight[node] = 1.0; // Initialize weight of the node
            return node;
        }

        if (this.parent[node] !== node) {
            const originalParent = this.parent[node];
            this.parent[node] = this.find(originalParent); // Path compression
            this.weight[node] *= this.weight[originalParent]; // Update the weight relative to the root
        }

        return this.parent[node];
    }

    // Unites two nodes with a given ratio
    union(node1, node2, value) {
        const root1 = this.find(node1);
        const root2 = this.find(node2);

        if (root1 !== root2) {
            this.parent[root1] = root2;
            this.weight[root1] = (value * this.weight[node2]) / this.weight[node1];
        }
    }

    // Checks if two nodes are connected and returns the division result if they are
    isConnected(node1, node2) {
        if (!(node1 in this.parent) || !(node2 in this.parent)) {
            return -1.0; // One of the nodes is not in the graph
        }

        const root1 = this.find(node1);
        const root2 = this.find(node2);

        if (root1 !== root2) {
            return -1.0; // Nodes are not connected
        }

        return this.weight[node1] / this.weight[node2];
    }
}

function calcEquation(equations, values, queries) {
    const uf = new UnionFind();

    // Build the union-find structure
    for (let i = 0; i < equations.length; i++) {
        const [var1, var2] = equations[i];
        uf.union(var1, var2, values[i]);
    }

    // Process the queries
    const results = [];
    for (const [var1, var2] of queries) {
        results.push(uf.isConnected(var1, var2));
    }

    return results;
}

// Example Input
const equations = [["a","b"],["b","c"]];
const values = [2.0,3.0];
const queries = [["a","c"],["b","a"],["a","e"],["a","a"],["x","x"]];

// Output the results
debugger;
console.log(calcEquation(equations, values, queries));
