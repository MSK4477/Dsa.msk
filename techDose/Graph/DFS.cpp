#include <iostream>
#include <list>
#include <vector>

using namespace std;

class GraphDFS {
public:
    int V; // Number of vertices
    vector<list<int>> adj; // Adjacency list (vector of lists)

    // Constructor
    GraphDFS(int V) {
        this->V = V;
        adj.resize(V);
    }

    // Function to add an edge
    void addEdge(int v, int w) {
        adj[v].push_back(w);
    }

    // DFS function
    void DFSUtil(int v, vector<bool>& visited) {
        // Mark the current node as visited and print it
        visited[v] = true;
        cout << v << " ";

        // Recur for all vertices adjacent to this vertex
        for (auto adjVertex : adj[v]) {
            cout << "adj Vertex   " << adjVertex << " "<< v <<  endl;
            if (!visited[adjVertex]) {
                DFSUtil(adjVertex, visited);
            }
        }
    }

    // DFS traversal
    void DFS(int start) {
        vector<bool> visited(V, false); // Mark all vertices as not visited
        DFSUtil(start, visited); // Call the recursive helper function
    }
};

// Example usage of DFS
int main() {
    GraphDFS g(5); // Create a graph with 5 vertices
    g.addEdge(0, 1);
    g.addEdge(0, 4);
    g.addEdge(1, 2);
    g.addEdge(1, 3);
    g.addEdge(1, 4);
    g.addEdge(2, 3);
    g.addEdge(3, 4);

    cout << "Depth-First Search starting from vertex 0:\n";
    g.DFS(0);

    return 0;
}
