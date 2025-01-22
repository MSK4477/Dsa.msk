#include <bits/stdc++.h>
using namespace std;

int main() {
    vector<vector<int>> times = {{2, 1, 1}, {2, 3, 1}, {3, 4, 1}};
    int n = 3; // number of nodes
    int k = 2; // starting node

    int maxNode = 0;
    for (auto& edge : times) {
        maxNode = max(maxNode, max(edge[0], edge[1]));
    }

    // Adjust n to include the highest node number in the graph
    vector<vector<pair<int, int>>> adj(maxNode + 1);

    // Building the adjacency list
    for (int i = 0; i < times.size(); ++i) {
        adj[times[i][0]].push_back({times[i][1], times[i][2]});
    }
    
    cout << "Adjacency List:\n";
    for (int i = 1; i <= maxNode; ++i) {
        cout << "Node " << i << ": ";
        for (auto& [next, weight] : adj[i]) {
            cout << "[" << next << ", " << weight << "] ";
        }
        cout << endl;
    }

    // Priority queue stores pairs of (weight, node)
    priority_queue<pair<int, int>, vector<pair<int, int>>, greater<pair<int, int>>> q;
    vector<int> weights(maxNode + 1, INT_MAX);

    // Initialize starting node
    q.push({0, k});  // Store the starting node with weight 0
    weights[k] = 0;

    cout << "\nInitial Weights:\n";
    for (int i = 1; i <= maxNode; ++i) {
        cout << "Node " << i << ": " << (weights[i] == INT_MAX ? "INF" : to_string(weights[i])) << endl;
    }

    cout << "\nProcessing nodes:\n";
    while (!q.empty()) {
        int curr = q.top().second;  // Get the node
        int currWeight = q.top().first;  // Get the weight
        q.pop();

        cout << "Current node: " << curr << "\n";
        cout << "Current weight: " << currWeight << "\n";

        // Process neighbors of the current node
        for (auto& [next, weight] : adj[curr]) {
            int newWeight = currWeight + weight;
            cout << "  Checking neighbor " << next << " with edge weight " << weight << "\n";
            cout << "  Current path weight: " << weights[next] << ", New path weight: " << newWeight << "\n";

            if (newWeight < weights[next]) {
                cout << "  Updating weight of node " << next << " to " << newWeight << "\n";
                weights[next] = newWeight;
                q.push({newWeight, next});  // Push updated weight and node
            }
        }
    }

    cout << "\nFinal Weights:\n";
    for (int i = 1; i <= maxNode; ++i) {
        if (weights[i] == INT_MAX) {
            cout << "Node " << i << ": Unreachable\n";
        } else {
            cout << "Node " << i << ": " << weights[i] << endl;
        }
    }

    return 0;
}
 