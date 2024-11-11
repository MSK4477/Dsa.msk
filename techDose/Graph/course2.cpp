#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

class Solution {
public:
    vector<int> findOrder(int numCourses, vector<vector<int>>& prerequisites) {
        vector<vector<int>> adj(numCourses);
        vector<int> visited(numCourses, 0);
        vector<int> order;

        // Build adjacency list
        for (auto& pre : prerequisites) {
            adj[pre[1]].push_back(pre[0]);
        }

        // Perform DFS for each course
        for (int i = 0; i < numCourses; ++i) {
            if (visited[i] == 0) {
                if (!dfs(i, adj, visited, order)) {
                    return {}; // Return empty if a cycle is detected
                }
            }
        }

        reverse(order.begin(), order.end()); // Reverse to get the correct order
        return order;
    }

private:
    bool dfs(int course, vector<vector<int>>& adj, vector<int>& visited, vector<int>& order) {
        if (visited[course] == 1) return false; // Cycle detected
        if (visited[course] == 2) return true;  // Already processed, skip

        visited[course] = 1; // Mark as in-progress

        for (int next : adj[course]) {
            if (!dfs(next, adj, visited, order)) {
                return false; // Cycle detected
            }
        }

        visited[course] = 2; // Mark as fully processed
        order.push_back(course); // Add course to order in post-order
        return true;
    }
};

int main() {
    Solution sol;
    vector<vector<int>> prerequisites = {{1, 0}, {2, 0}, {3, 1}, {3, 2}};
    vector<int> order = sol.findOrder(4, prerequisites);

    for (int course : order) {
        cout << course << " ";
    }

    return 0;
}
