class Node {
    constructor(val) {
        this.val = val;
        this.neighbors = [];
    }
}

// Helper function to print the graph
function printGraph(visited) {
    console.log("Graph Structure (Visited):");
    for (let [key, node] of visited.entries()) {
        const neighborVals = node.neighbors.map(neighbor => neighbor.val);
        console.log(`Node ${key} --> [${neighborVals.join(" ")}]`);
    }
}

// Main function to clone the graph
function cloneGraph(node, visited = new Map()) {
    if (!node) return null;

    if (visited.has(node.val)) {
        return visited.get(node.val);
    }

    const cloneNode = new Node(node.val);
    visited.set(node.val, cloneNode);

    for (let neighbor of node.neighbors) {
        cloneNode.neighbors.push(cloneGraph(neighbor, visited));
    }

    return cloneNode;
}

// Example usage
// Create the original graph
const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);

node1.neighbors.push(node2, node4);
node2.neighbors.push(node1, node3);
node3.neighbors.push(node2, node4);
node4.neighbors.push(node1, node3);

const visited = new Map(); // To store cloned nodes

// Clone the graph
const clonedGraph = cloneGraph(node1, visited);

// Print the visited nodes and their neighbors
printGraph(visited);
