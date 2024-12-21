#include <iostream>
#include <vector>
#include <unordered_map>
#include <string>
#include <set> // To track visited vertices
using namespace std;

// Define a structure for storing edges with weights
struct Edge {
    int destination;
    double forwardWeight;
    double backwardWeight;
};

class Graph {
private:
    int vertices; // Number of vertices
    vector<vector<Edge>> adjList; // Adjacency list for the graph
    unordered_map<string, int> vertexMap; // Map from string labels to indices
    vector<string> indexToVertex;         // Reverse map for indices to string labels

public:
    Graph(int v) : vertices(v), adjList(v) {
        indexToVertex.resize(v);
    }

int DFS(int vertexIndex, set<int>& visited, int endVertex, double totalWeight) {
    visited.insert(vertexIndex); // Mark the current vertex as visited
    cout << indexToVertex[vertexIndex] << " "; // Print the current vertex

    // If the end vertex is reached, stop the DFS
    if (vertexIndex == endVertex) {
        cout << totalWeight << " Total Weight" << endl;
        return totalWeight;  // Return the accumulated weight when the destination is reached
    }

    // Visit all the adjacent vertices
    for (const auto& edge : adjList[vertexIndex]) {
        if (visited.find(edge.destination) == visited.end()) {
            // Accumulate the forward weight and recurse
            totalWeight *= edge.forwardWeight;
            // cout << edge.destination << endl;
            cout << edge.forwardWeight << " Forward Weigth BROclear" << endl;
            // cout << edge.backwardWeight << " Backward" << endl;

            // Pass the accumulated weight to the next DFS call
            int result = DFS(edge.destination, visited, endVertex, totalWeight); 
            if (result != -1) {
                return result;  // If a valid weight is found, return it
            }
        }
    }

    return -1;  // If no valid path is found, return -1
}

// Function to start DFS from a vertex by label
int startDFS(const string& startLabel, const string& endLabel) {
    if (vertexMap.find(startLabel) == vertexMap.end() || vertexMap.find(endLabel) == vertexMap.end()) {
         return -1;
    }
    int startIndex = vertexMap[startLabel];
    int endIndex = vertexMap[endLabel];
    set<int> visited; // Set to keep track of visited vertices
    return DFS(startIndex, visited, endIndex, 1); // Start DFS with totalWeight initialized to 0
}


    // Function to add a vertex
    void addVertex(const string& label) {
        if (vertexMap.size() >= vertices) {
            // cout << "Error: Maximum number of vertices reached.\n";
            return;
        }
        int index = vertexMap.size();
        vertexMap[label] = index;
        indexToVertex[index] = label;
    }

    // Function to add an edge with forward and backward weights
    void addEdge(const string& source, const string& destination, double forwardWeight) {
        if (vertexMap.find(source) == vertexMap.end() || vertexMap.find(destination) == vertexMap.end()) {
            // cout << "Error: One or both vertices not found.\n";
            return;
        }
        int srcIndex = vertexMap[source];
        int destIndex = vertexMap[destination];
        
        // Add forward weight from source to destination and backward weight from destination to source
        adjList[srcIndex].push_back({destIndex, forwardWeight, 1.0 / forwardWeight}); // Forward weight from source to destination
        adjList[destIndex].push_back({srcIndex, 1.0 / forwardWeight, forwardWeight}); // Backward weight from destination to source
    }

    // Function to display the graph
    void displayGraph() {
        for (int i = 0; i < vertices; i++) {
            // cout << "Vertex " << indexToVertex[i] << ":\n";
            for (const auto& edge : adjList[i]) {
                // cout << " -> (Dest: " << indexToVertex[edge.destination]
                //      << ", Forward: " << edge.forwardWeight
                //      << ", Backward: " << edge.backwardWeight << ")\n";
            }
        }
    }
};

int main() {
    int vertices = 4;
    Graph g(vertices);

    // Add vertices
    g.addVertex("a");
    g.addVertex("b");
    g.addVertex("c");
    g.addVertex("d");

    // Add edges with forward and backward weights
    g.addEdge("a", "b", 2);
    g.addEdge("b", "c", 3);
    g.addEdge("c", "d", 4);

    // Display the graph
    g.displayGraph();

    // Start DFS traversal from vertex "a"
    cout << "DFS traversal starting from vertex 'a': ";
    g.startDFS("b", "c");   

    return 0;
}
