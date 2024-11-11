#include <iostream>
#include <vector>
#include <stack>
using namespace std;

class Graph {
private:
    int numVertices;                       // Number of vertices in the graph
    vector<vector<int>> adjList;           // Adjacency list representation of the graph

    // Helper function for DFS
    void topologicalSortUtil(int v, vector<bool>& visited, stack<int>& Stack) {
        visited[v] = true;                 // Mark the current node as visited

        // Recursively visit all adjacent vertices
        for (int next : adjList[v]) {
            if (!visited[next]) {
                topologicalSortUtil(next, visited, Stack);
            }
        }

        // Push the current node to the stack after all descendants are visited
        Stack.push(v);
    }

public:
    // Constructor
    Graph(int vertices) : numVertices(vertices) {
        adjList.resize(vertices);
    }

    // Add an edge to the directed graph
    void addEdge(int u, int v) {
        adjList[u].push_back(v);
    }

    // Perform topological sort and print the sorted order
    void topologicalSort() {
        stack<int> Stack;                  // Stack to store the topological order
        vector<bool> visited(numVertices, false); // Track visited nodes

        // Call the recursive helper function for each vertex
        for (int i = 0; i < numVertices; i++) {
            if (!visited[i]) {
                topologicalSortUtil(i, visited, Stack);
            }
        }

        // Print the contents of the stack, which is the topological order
        cout << "Topological Sort: ";
        while (!Stack.empty()) {
            cout << Stack.top() << " ";
            Stack.pop();
        }
        cout << endl;
    }
};

int main() {
    // Create a graph with 6 vertices
    Graph g(7);

    // Add edges to the graph
    g.addEdge(5, 2);
    g.addEdge(5, 0);
    g.addEdge(4, 0);
    g.addEdge(4, 1);
    g.addEdge(2, 3);
    g.addEdge(3, 1);

    // Perform topological sort
    g.topologicalSort();

    return 0;
}
