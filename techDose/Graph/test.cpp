#include <iostream>
#include <unordered_map>
#include <vector>
#include <string>
using namespace std;

class partiteFind
{
public:
    bool dfs(vector<vector<int>>& graph, string color, vector<string> visited, int v)
    {
        cout << "DFS called with vertex: " << v << " and color: " << color << endl;
        
        if (visited[v] != "Blue" && visited[v] != "Red") {
            visited[v] = color;
            cout << "Node " << v << " marked as " << visited[v] << endl;
        }  
        else if (visited[v] != color) {
            cout << "Conflict detected at node " << v << ". Expected: " << color << ", Found: " << visited[v] << endl;
            return true;
        } else {
            cout << "Node " << v << " already visited with correct color: " << visited[v] << endl;
            return false;
        }

        cout << "Exploring adjacent vertices of node " << v << endl;
        for (auto adjVertex : graph[v]) {
            cout << "Adjacent vertex: " << adjVertex << " of node: " << v << endl;
            cout << color << " color before the change" <<endl;
            color = color == "Red" ? "Blue" : "Red";
            if (dfs(graph, color, visited, adjVertex)) {
                cout << "Conflict propagated from vertex: " << adjVertex << " to vertex: " << v << endl;
                return true;
            }else { 
            color = color == "Red" ? "Blue" : "Red";
            }
        }

        cout << "Finished processing node " << v << ". No conflicts found." << endl;
        return false;
    }
};

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
