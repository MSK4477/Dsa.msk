#include<queue>
#include<vector>
using namespace std;
#include<string>

class Solution {
    private :
        bool dfs(vector<vector<int>>& graph, string color, vector<string>& visited, int v)
    {        
        if (visited[v] != "Blue" && visited[v] != "Red") {
            visited[v] = color;
         } else {
             return visited[v] != color;
        }
         for (auto adjVertex : graph[v]) {
              string nextColor = color == "Red" ? "Blue" : "Red";
            if (dfs(graph, nextColor, visited, adjVertex)) {
                 return true;
            }
        }
        return false;
    }
public:
    bool isBipartite(vector<vector<int>>& graph) {
     vector<string> visited(graph.size(), "");

        // Check each component of the graph
        for (int i = 0; i < graph.size(); ++i) {
            if (visited[i] == "" && dfs(graph, "Blue", visited, i)) {
                return false; // Graph is not bipartite
            }
        }
        return true; // Graph is bipartite
    }
    
};
