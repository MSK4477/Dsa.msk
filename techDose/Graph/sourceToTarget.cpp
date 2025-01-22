#include<vector>
using namespace std;
class Solution {
public:

void dfs(vector<vector<int>>& res,vector<vector<int>>& graph, int node, vector<bool> visited, vector<int>& nodes) { 
  
   nodes.push_back(node);
if(node == graph.size()-1) { 
        res.push_back(nodes);
}else { 
    for(auto& next : graph[node]) { 
        dfs(res, graph, next, visited, nodes);
    }
}
    nodes.pop_back();

}
    vector<vector<int>> allPathsSourceTarget(vector<vector<int>>& graph) {
        vector<vector<int>> res;
        vector<bool> visited(graph.size()+1, false);
            vector<int> nodes;

        dfs(res, graph, 0, visited, nodes);
    
    return res;
    }
};                                                                                                                                                                            