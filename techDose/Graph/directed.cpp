#include <iostream>
#include <list>
#include <vector>

class DirectedGraph {
public:
    int V; // Number of vertices
    std::vector<std::list<int>> adj; // Adjacency list

    // Constructor
    DirectedGraph(int V) {
        this->V = V;
        adj.resize(V);
    }

    // Function to add a directed edge
    void addEdge(int v, int w) {
        adj[v].push_back(w); // Add w to v's list (directed: from v to w)
    }

    // Function to display the adjacency list of the graph
    void displayGraph() {
        for (int i = 0; i < V; i++) {
            std::cout << "Vertex " << i << ":";
            for (auto v : adj[i]) {
                std::cout << " -> " << v;
            }
            std::cout << std::endl;
        }
    }
};

// Example usage of the directed graph
int main() {
    DirectedGraph g(5); // Create a directed graph with 5 vertices
    g.addEdge(0, 1);
    g.addEdge(0, 4);
    g.addEdge(1, 2);
    g.addEdge(1, 3);
    g.addEdge(1, 4);
    g.addEdge(2, 3);
    g.addEdge(3, 4);

    std::cout << "Directed Graph:\n";
    g.displayGraph();

    return 0;
}
