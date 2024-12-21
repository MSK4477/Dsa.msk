#include <iostream>
#include <unordered_map>
#include <vector>
#include <string>
#include <set>

using namespace std;

class Solution {
public:
    double dfs(unordered_map<string, vector<pair<string, double>>>& adj, string src, string dest, set<string>& visited) {
        // Base case: if the source and destination are the same
        if (src == dest) {
            return 1.0;
        }
        double ans = -1;
        visited.insert(src);
        
        // Explore neighbors
        for (auto node : adj[src]) {
            if (visited.find(node.first) == visited.end()) {
                double temp_ans = dfs(adj, node.first, dest, visited);
                if (temp_ans != -1) {
                    ans = temp_ans * node.second;
                    break;
                }
            }
        }
        return ans;
    }

    vector<double> calcEquation(vector<vector<string>>& equations, vector<double>& values, vector<vector<string>>& queries) {
        unordered_map<string, vector<pair<string, double>>> adj;

        // Build the graph
        for (int i = 0; i < equations.size(); i++) {
            adj[equations[i][0]].push_back(make_pair(equations[i][1], values[i]));
            adj[equations[i][1]].push_back(make_pair(equations[i][0], 1.0 / values[i]));
        }

        vector<double> res;
        for (int i = 0; i < queries.size(); i++) {
            string src = queries[i][0];
            string dest = queries[i][1];
            
            if (adj.find(src) == adj.end() || adj.find(dest) == adj.end()) {
                res.push_back(-1.0); // Node not found in graph
            } else if (src == dest) {
                res.push_back(1.0); // Same source and destination
            } else {
                set<string> visited;
                res.push_back(dfs(adj, src, dest, visited));
            }
        }
        return res;
    }
};

// Example usage
int main() {
    Solution solution;
    vector<vector<string>> equations = {{"a", "b"}, {"b", "c"}};
    vector<double> values = {2.0, 3.0};
    vector<vector<string>> queries = {{"a", "c"}, {"b", "a"}, {"a", "e"}, {"a", "a"}, {"x", "x"}};

    vector<double> results = solution.calcEquation(equations, values, queries);

    for (double result : results) {
        cout << result << " ";
    }

    return 0;
}

