#include <vector>
#include <queue>
using namespace std;

class Solution {
public:
    int minimumSemesters(int N, vector<vector<int>>& relations) {
        vector<int> inDegree(N + 1, 0); // In-degrees of each node (course)
        vector<vector<int>> adj(N + 1); // Adjacency list

        // Build graph and calculate in-degrees
        for (const auto& relation : relations) {
            int u = relation[0];
            int v = relation[1];
            adj[u].push_back(v);
            inDegree[v]++;
        }

        queue<int> q;
        // Start with all courses that have no prerequisites
        for (int i = 1; i <= N; ++i) {
            if (inDegree[i] == 0) {
                q.push(i);
            }
        }

        int semester = 0;    // Semester counter
        int completedCourses = 0; // Count of courses we can complete

        // Process courses level by level
        while (!q.empty()) {
            int size = q.size();
            semester++; // Each level represents one semester

            // Process all courses in this semester
            for (int i = 0; i < size; ++i) {
                int course = q.front();
                q.pop();
                completedCourses++;

                // Reduce in-degrees of neighboring nodes
                for (int nextCourse : adj[course]) {
                    inDegree[nextCourse]--;
                    if (inDegree[nextCourse] == 0) {
                        q.push(nextCourse);
                    }
                }
            }
        }

        // If we completed all courses, return semesters, otherwise -1
        return (completedCourses == N) ? semester : -1;
    }
};
