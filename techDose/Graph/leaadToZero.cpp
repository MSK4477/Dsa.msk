// 1466. Reorder Routes to Make All Paths Lead to the City Zero

class Solution {

     vector<vector<pair<int , int>>>createAdj(int n, vector<vector<int>>& connections)  { 

         vector<vector<pair<int, int>>> adj(n);

       for(auto& edge : connections) { 
        int u = edge[0];
        int v = edge[1];

        adj[u].push_back({v, 1});
        adj[v].push_back({u, 0});

       }

       return adj;
     }
public:
    int minReorder(int n, vector<vector<int>>& connections) {
        
        vector<vector<pair<int , int>>>adj = createAdj(n, connections);
        vector<bool>visited(n, false);
        queue<int>q;

        q.push(0);
        visited[0] = true;
        int count = 0;

       while(!q.empty()) { 
        int current = q.front();
        q.pop();

        for(auto& [next, needsRe] : adj[current]) { 

            if(!visited[next]) { 
                if(needsRe == 1) { 
                    count++;
                }
                visited[next] = true;
                q.push(next);
            }

        }
       }

       return count;

    }
};