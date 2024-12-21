#include <iostream>
#include <unordered_map>
#include <vector>
#include <string>
using namespace std;

class UnionFind {
private:
    unordered_map<string, string> parent; // Parent of each node
    unordered_map<string, double> weight; // Weight of each node relative to its parent

public:
    // Find the root of the node with path compression
    string find(const string& node) {
        if (parent.find(node) == parent.end()) {
            this->parent[node] = node;
            weight[node] = 1.0;
            return node;
        }

        if (parent[node] != node) {
            string originalParent = parent[node];
            parent[node] = find(originalParent);
            weight[node] *= weight[originalParent];
        }
        return parent[node];
    }

    // Unite two nodes with a given ratio
    void unionNodes(const string& node1, const string& node2, double value) {
        string root1 = find(node1);
        string root2 = find(node2);

        if (root1 != root2) {
            parent[root1    ] = root2;
            weight[root1] = (value * weight[node2]) / weight[node1];
        }
    }

    // Check if two nodes are connected and return their division result if they are
    double isConnected(const string& node1, const string& node2) {
        if (parent.find(node1) == parent.end() || parent.find(node2) == parent.end()) {
            return -1.0; // One of the nodes is not in the graph
        }

        string root1 = find(node1);
        string root2 = find(node2);

        if (root1 != root2) {
            return -1.0; // Nodes are not connected
        }

        return weight[node1] / weight[node2];
    }
};

vector<double> calcEquation(
    vector<pair<string, string>>& equations, 
    vector<double>& values, 
    vector<pair<string, string>>& queries
) {
    UnionFind uf;

    // Build the union-find structure
    for (size_t i = 0; i < equations.size(); ++i) {
        const string& var1 = equations[i].first;
        const string& var2 = equations[i].second;
        uf.unionNodes(var1, var2, values[i]);
    }

    // Process the queries
    vector<double> results;
    for (const auto& query : queries) {
        results.push_back(uf.isConnected(query.first, query.second));
    }

    return results;
}

int main() {
    vector<pair<string, string>> equations = {{"a", "b"}, {"b", "c"}};
    vector<double> values = {2.0, 3.0};
    vector<pair<string, string>> queries = {{"a", "c"}, {"b", "a"}};

    vector<double> results = calcEquation(equations, values, queries);

    for (double result : results) {
        cout << result << endl;
    }

    return 0;
}
