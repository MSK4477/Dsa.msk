#include <vector>;
#include <stack>;
using namespace std;



void dfs(vector<vector<int>>& adj, vector<int>&disc, vector<int>&low, int n, vector<int>&visited, stack<int>st){
    static int time = 0;
    low[n] = disc[n] = time++;
    st.push(n);
    for(auto next : adj[n]) { 

        if(!visited[n]) {
           
            dfs(adj, disc, low, n, visited, st);
        }else { 
            low[next] = disc[n] + low[next];
        }
    }


    if(low[n] == disc[n]) {
        stack<int>scc;
        do {
          int sc = st.top();
          st.pop();
          scc.push(sc);
        }while(sc == n)

    }
}

int main(){

}