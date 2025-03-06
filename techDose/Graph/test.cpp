#include <iostream>
#include <unordered_map>
#include <vector>
#include <string>
using namespace std;

class partiteFind
{
public:
 int solve(int index, vector<vector<int>>& dp, vector<int>& weight, vector<int>& value, int w) { 
    if(index == 0) { 
        return  (w / weight[index]) * value[index];
    }
int include = 0;
int exclude = solve(index -1, dp, weight, value, w);
    if(weight[index] <= w) { 
        include = solve(index, dp, weight, value, w - weight[index]) + value[index];
    }else { 
        include = solve(index -1, dp, weight, value, w-weight[index]) + value[index -1];
    }
    return dp[index][w] = include + exclude;
 }

bool isBipartite()
{
    cout << "Starting isBipartite check..." << endl;
    partiteFind pf;

    vector<vector<int>> graph = {
        {1, 3},
        {0, 2},
        {1, 3},
        {0, 2}
    };

    cout << "Graph size: " << graph.size() << endl;
    for (int i = 0; i < graph.size(); ++i) {
        cout << "Node " << i << " has neighbors: ";
        for (auto neighbor : graph[i]) {
            cout << neighbor << " ";
        }
        cout << endl;
    }

    vector<string> visited(graph.size(), "");
    cout << "Visited vector initialized with size: " << visited.size() << " and default values: \"\"" << endl;

    if (!pf.dfs(graph, "Blue", visited, 0)) {
        cout << "Graph is bipartite. Returning true." << endl;
        return true;
    }

    cout << "Graph is not bipartite. Returning false." << endl;

    cout << "Visited vector after processing:" << endl;
    for (int i = 0; i < visited.size(); ++i) {
        cout << "Node " << i << ": " << visited[i] << endl;
    }

    return false;
}

int main()
{
    cout << "Program started." << endl;
    bool result = isBipartite();
    cout << "Final result: " << result << endl;
    return result;
}
