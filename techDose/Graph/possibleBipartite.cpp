#include<queue>
#include<vector>
using namespace std;
class Solution {
public:
bool bipartite(vector<vector<int>>& adj, int n, int node, vector<int>& color) { 

    queue<int> q;

    q.push(node);
    color[node] = 1;

    while(!q.empty()) { 
        int curr = q.front();
        q.pop();


        for(auto& next : adj[curr]) { 

            if(color[next] == color[curr]) { 
                return false;
            }
            
            if(color[next] == -1)  { 
            q.push(next);
            color[next] = 1-color[curr];
            }
        }
    }
    return true;
}
    bool possibleBipartition(int n, vector<vector<int>>& dislikes) {

       vector<vector<int>> adj(n+1);

        for(int i = 0; i < dislikes.size(); ++i) {
            adj[dislikes[i][0]].push_back(dislikes[i][1]);
            adj[dislikes[i][1]].push_back(dislikes[i][0]);
        } 

        vector<int>color(n+1, -1);

        for(int i = 1; i <= n; ++i ) { 
            if(color[i] == -1) { 
                if(!bipartite(adj, n, i, color)){
                    return false;
                }
            }
        }

        return true;

        
    }
};