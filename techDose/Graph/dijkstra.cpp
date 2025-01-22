#include <bits/stdc++.h>
using namespace std;

vector<int> dijkstra(int V, vector<pair<int, int>> adj[], int src) {

    priority_queue<pair<int, int>, vector<pair<int, int>>, greater<pair<int, int>>> pq;

    vector<int> dist(V, INT_MAX);
    
    pq.push({0, src});

    dist[src] = 0;

    while (!pq.empty()) {
        int distance = pq.top().first;
        int node = pq.top().second;
        pq.pop();

        for (auto it : adj[node]) {
            int nextNode = it.first;
            int edgeWeight = it.second;

            if (dist[node] + edgeWeight < dist[nextNode]) {
                dist[nextNode] = dist[node] + edgeWeight;
                pq.push({dist[nextNode], nextNode});
            }
        }
    }

    return dist;
}

int main() {
    int V, E;
    cin >> V >> E;

    vector<pair<int, int>> adj[V];

    for (int i = 0; i < E; i++) {
        int u, v, w;
        cin >> u >> v >> w;
        adj[u].push_back({v, w});
        adj[v].push_back({u, w});
    }

    int src;
    cin >> src;

    vector<int> shortestDistances = dijkstra(V, adj, src);

    for (int i = 0; i < V; i++) {
        if (shortestDistances[i] == INT_MAX) {
            cout << "Node " << i << ": Infinity (Not Reachable)" << endl;
        } else {
            cout << "Node " << i << ": " << shortestDistances[i] << endl;
        }
    }

    return 0;
}
