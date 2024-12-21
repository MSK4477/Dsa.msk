class Graph {
    constructor(vertices) {
        this.vertices = vertices; // Number of vertices
        this.adjList = Array.from({ length: vertices }, () => []); // Adjacency list for the graph
        this.vertexMap = new Map(); // Map from string labels to indices
        this.indexToVertex = []; // Reverse map for indices to string labels
    }

    // Function to add a vertex
    addVertex(label) {
        if (this.vertexMap.size >= this.vertices) {
            console.log("Error: Maximum number of vertices reached.");
            return;
        }
        const index = this.vertexMap.size;
        this.vertexMap.set(label, index);
        this.indexToVertex[index] = label;
    }

    // Function to add an edge with forward and backward weights
    addEdge(source, destination, forwardWeight) {
        if (!this.vertexMap.has(source) || !this.vertexMap.has(destination)) {
            console.log("Error: One or both vertices not found.");
            return;
        }
        const srcIndex = this.vertexMap.get(source);
        const destIndex = this.vertexMap.get(destination);

        // Add forward weight from source to destination and backward weight from destination to source
        this.adjList[srcIndex].push({ destination: destIndex, forwardWeight, backwardWeight: 1 / forwardWeight });
        this.adjList[destIndex].push({ destination: srcIndex, forwardWeight: 1 / forwardWeight, backwardWeight: forwardWeight });
    }

    // DFS function to traverse the graph
    DFS(vertexIndex, visited, endVertex, totalWeight) {
        visited.add(vertexIndex); // Mark the current vertex as visited
        console.log(this.indexToVertex[vertexIndex] + " "); // Print the current vertex
debugger
        // If the end vertex is reached, stop the DFS
        if (vertexIndex === endVertex) {
            console.log(totalWeight + " Total Weight");
            return totalWeight; // Return the accumulated weight when the destination is reached
        }

        // Visit all the adjacent vertices
        for (const edge of this.adjList[vertexIndex]) {
            if (!visited.has(edge.destination)) {
                // Accumulate the forward weight and recurse
                totalWeight *= edge.forwardWeight;
                console.log(edge.forwardWeight + " Forward Weight");

                // Pass the accumulated weight to the next DFS call
                const result = this.DFS(edge.destination, visited, endVertex, totalWeight);
                if (result !== -1) {
                    return result; // If a valid weight is found, return it
                }
            }
        }

        return -1; // If no valid path is found, return -1
    }

    // Function to start DFS from a vertex by label
    startDFS(startLabel, endLabel) {
        if (!this.vertexMap.has(startLabel) || !this.vertexMap.has(endLabel)) {
            return -1;
        }
        const startIndex = this.vertexMap.get(startLabel);
        const endIndex = this.vertexMap.get(endLabel);
        const visited = new Set(); // Set to keep track of visited vertices
        return this.DFS(startIndex, visited, endIndex, 1); // Start DFS with totalWeight initialized to 1
    }

    // Function to display the graph (Optional)
    displayGraph() {
        for (let i = 0; i < this.vertices; i++) {
            console.log("Vertex " + this.indexToVertex[i] + ":");
            for (const edge of this.adjList[i]) {
                console.log(` -> (Dest: ${this.indexToVertex[edge.destination]}, Forward: ${edge.forwardWeight}, Backward: ${edge.backwardWeight})`);
            }
        }
    }
}

const g = new Graph(4);

// Add vertices
g.addVertex("a");
g.addVertex("b");
g.addVertex("c");
g.addVertex("d");

// Add edges with forward and backward weights
g.addEdge("a", "b", 2);
g.addEdge("b", "c", 3);
g.addEdge("c", "d", 4);

// Display the graph (optional)
g.displayGraph();

// Start DFS traversal from vertex "a"
console.log("DFS traversal starting from vertex 'b': ");
g.startDFS("b", "c");
