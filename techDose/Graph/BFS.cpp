#include <iostream>
#include <list>
#include <vector>
#include <queue>

class GraphBFS {
public:
    int V; // Number of vertices
    std::vector<std::list<int>> adj; // Adjacency list

    // Constructor
    GraphBFS(int V) {
        this->V = V;
        adj.resize(V);
    }

    // Function to add an edge
    void addEdge(int v, int w) {
        adj[v].push_back(w);
    }

    // BFS function
    void BFS(int start) {
        std::vector<bool> visited(V, false); // Mark all vertices as not visited
        std::queue<int> q; // Create a queue for BFS

        // Mark the current node as visited and enqueue it
        visited[start] = true;
        q.push(start);

        while (!q.empty()) {
            // Dequeue a vertex from the queue and print it
            int vertex = q.front();
            std::cout << vertex << " ";
                std::cout << "The size of the queue is: " << q.size() << std::endl;

            q.pop();

            // Get all adjacent vertices of the dequeued vertex
            for (auto adjVertex : adj[vertex]) {
                std::cout << adjVertex << "AADJ" << std::endl;
                if (!visited[adjVertex]) {
                    visited[adjVertex] = true;
                    q.push(adjVertex);
                }
            }
        }
    }
};

// Example usage of BFS
int main() {
    GraphBFS g(5); // Create a graph with 5 vertices
    g.addEdge(0, 1);
    g.addEdge(0, 4);
    g.addEdge(1, 2);
    g.addEdge(1, 3);
    g.addEdge(1, 4);
    g.addEdge(2, 3);
    g.addEdge(3, 4);

    std::cout << "Breadth-First Search starting from vertex 0:\n";
    g.BFS(0);

    return 0;
}
;