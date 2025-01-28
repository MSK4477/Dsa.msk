
// 1334. Find the City With the Smallest Number of Neighbors at a Threshold Distance

#include <iostream>
#include <vector>
#include <queue>
#include <climits>
using namespace std;

// Function to implement Dijkstra's algorithm for a single source
vector<int> dijkstra(int src, int n, vector<vector<pair<int, int>>>& graph, int distanceThreshold) {
    vector<int> dist(n, INT_MAX); // Distance array
    dist[src] = 0;

    priority_queue<pair<int, int>, vector<pair<int, int>>, greater<>> pq; // Min-heap
    pq.push({0, src}); // {distance, node}

    while (!pq.empty()) {
        auto [currentDist, u] = pq.top();
        pq.pop();

        if (currentDist > dist[u]) continue; // Skip outdated entries

        for (auto [v, weight] : graph[u]) {
            if (dist[u] + weight < dist[v] && dist[u] + weight <= distanceThreshold) {
                dist[v] = dist[u] + weight;
                pq.push({dist[v], v});
            }
        }
    }

    return dist;
}

int findTheCity(int n, vector<vector<int>>& edges, int distanceThreshold) {
    // Build the graph as an adjacency list
    vector<vector<pair<int, int>>> graph(n);
    for (auto& edge : edges) {
        int u = edge[0], v = edge[1], weight = edge[2];
        graph[u].push_back({v, weight});
        graph[v].push_back({u, weight});
    }

    int resultCity = -1, minReachable = INT_MAX;

    // Perform Dijkstra's for each city
    for (int i = 0; i < n; ++i) {
        vector<int> dist = dijkstra(i, n, graph, distanceThreshold);

        // Count the number of reachable cities within the distance threshold
        int reachableCount = 0;
        for (int d : dist) {
            if (d <= distanceThreshold) ++reachableCount;
        }

        // Update result based on the problem statement
        if (reachableCount < minReachable || (reachableCount == minReachable && i > resultCity)) {
            minReachable = reachableCount;
            resultCity = i;
        }
    }

    return resultCity;
}

int main() {
    int n = 4;
    vector<vector<int>> edges = {{0, 1, 3}, {1, 2, 1}, {1, 3, 4}, {2, 3, 1}};
    int distanceThreshold = 4;

    cout << "The city with the smallest number of reachable cities is: " 
         << findTheCity(n, edges, distanceThreshold) << endl;

    return 0;
}

