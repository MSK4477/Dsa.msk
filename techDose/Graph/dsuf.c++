#include <iostream>
#include <vector>
using namespace std;

class DSU {
private:
    vector<int> parent, rank;

public:
    // Constructor to initialize DSU
    DSU(int n) {
        parent.resize(n);
        rank.resize(n, 0);
        for (int i = 0; i < n; ++i) {
            parent[i] = i; // Every element is its own parent initially
        }
    }

    // Find operation with path compression
    int find(int x) {
        if (parent[x] != x) {
            parent[x] = find(parent[x]); // Path compression
        }
        return parent[x];
    }

    // Union operation by rank
    bool unionByRank(int x, int y) {
        int rootX = find(x);
        int rootY = find(y);

        if (rootX == rootY) {
            // Cycle detected
            return false;
        }

        if (rank[rootX] > rank[rootY]) {
            parent[rootY] = rootX;
        } else if (rank[rootX] < rank[rootY]) {
            parent[rootX] = rootY;
        } else {
            parent[rootY] = rootX;
            rank[rootX]++;
        }
        return true;
    }

    // Utility function to print parent and rank arrays
    void print() {
        cout << "Parent: ";
        for (int p : parent) cout << p << " ";
        cout << "\nRank:   ";
        for (int r : rank) cout << r << " ";
        cout << endl;
    }
};

int main() {
    int n = 7; // Number of vertices (0 to n-1)
    DSU dsu(n);

    // Edges in the graph
    vector<pair<int, int>> edges = {
        {0, 1},
        {1, 2},
        {2, 3},
        {3, 0}, // Adding this edge will form a cycle
        {4, 5},
        {5, 6}
    };

 
    // Process each edge and check for cycles
    bool cycleDetected = false;
    for (const auto& edge : edges) {
        if (!dsu.unionByRank(edge.first, edge.second)) {
            cycleDetected = true;
            cout << "Cycle detected when adding edge: " 
                 << edge.first << " - " << edge.second << endl;
        }
    }

    if (!cycleDetected) {
        cout << "No cycles detected in the graph.\n";
    }

    // Print the DSU state
    dsu.print();

    return 0;
}
