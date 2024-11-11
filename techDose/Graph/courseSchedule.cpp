#include <iostream>
#include <list>
#include <vector>
using namespace std;

class Solution {
    bool isCyclic(vector<vector<int>>& adj, vector<int>& visited, int curr) {
        if (visited[curr] == 2) { 
            return true; // Cycle detected
        }
        
        visited[curr] = 2; // Mark the current node as being visited

        for (int i = 0; i < adj[curr].size(); ++i) {
            if (visited[adj[curr][i]] != 1) {
                if (isCyclic(adj, visited, adj[curr][i])) {
                    return true; // Cycle found in recursion
                }
            }
        }

        visited[curr] = 1; // Mark the current node as fully visited
        return false;
    }

public:
    bool canFinish(int numCourses, vector<vector<int>>& prerequisites) {
        vector<vector<int>> adj(numCourses);

        // Construct adjacency list for the graph
        for (int i = 0; i < prerequisites.size(); ++i) {
            adj[prerequisites[i][1]].push_back(prerequisites[i][0]);
        }

        vector<int> visited(numCourses, 0);

        // Check for cycles in all components of the graph
        for (int i = 0; i < numCourses; ++i) {
            if (visited[i] == 0) { 
                if (isCyclic(adj, visited, i)) {
                    return false; // Cycle detected, cannot finish all courses
                }
            }
        }

        return true; // No cycles detected, all courses can be finished
    }
};
