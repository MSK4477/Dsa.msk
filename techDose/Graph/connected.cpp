#include <iostream>
#include <vector>
using namespace std;

bool dfs(vector<vector<int>> adj, vector<bool> visited, int node) { 
    visited[node] = true;

    for(auto& neighbour : adj[node]) { 
            if(!visited[neighbour]) { 
                dfs(adj, visited, neighbour);
            }
    }

}


int connectedComponents(int n, vector<vector<int>>& edges) { 

    vector<vector<int>> adj;

    for(auto& edge : edges) { 
        adj[edge[0]].push_back(edge[1]);
        adj[edge[1]].push_back(edge[0]);
    }
    vector<bool> visited(n, false);
int count = 0 ;
    for(int i = 0; i < adj.size(); ++i) { 
        if(!visited[i]) { 
            dfs(adj, visited, i);
            count++;
        }
    }

}
