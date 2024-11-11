#include <iostream>
#include <list>
#include <vector>

class UndirectedGraph {
public:
    int V; // Number of vertices
    std::vector<std::list<int>> adj; // Adjacency list

    // Constructor
    UndirectedGraph(int V) {
        this->V = V;
        adj.resize(V);
    }

    // Function to add an undirected edge
    void addEdge(int v, int w) {
        adj[v].push_back(w); // Add w to v's list
        adj[w].push_back(v); // Add v to w's list (undirected)
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

// Example usage of the undirected graph
int main() {
    UndirectedGraph g(5); // Create an undirected graph with 5 vertices
    g.addEdge(0, 1);
    g.addEdge(0, 4);
    g.addEdge(1, 2);
    g.addEdge(1, 3);
    g.addEdge(1, 4);
    g.addEdge(2, 3);
    g.addEdge(3, 4);

    std::cout << "Undirected Graph:\n";
    g.displayGraph();

    return 0;
}
