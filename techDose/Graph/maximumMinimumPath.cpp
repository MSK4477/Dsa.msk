#include <iostream>
#include <vector>
#include <queue>
#include <algorithm>

using namespace std;

class Solution {
public:
    int maximumMinimumPath(vector<vector<int>>& grid) {
       
       int min = 0;
       int maxx = 1e9;

       auto isValid = [&](int mid) -> bool { 
        int n = grid.size();
        int m = grid[0].size();
        vector<vector<bool>>visited(n, vector<bool>(m, false));
        vector<vector<int>>directions = {{0,1}, {0,-1}, {-1,0}, {1,0}};
        queue<pair<int, int>> q;

        q.push({0, 0});
        visited[0][0] = true;

        while (!q.empty()) {
            auto [x, y] = q.front();
            q.pop();

            for (auto& direction : directions) { 
                int dr = x + direction[0];
                int dc = y + direction[1];

                if (dr == n-1 && dc == m-1) {
                    return true;
                }

                if (dr >= 0 && dr < n && dc >= 0 && dc < m && !visited[dr][dc] && grid[dr][dc] >= mid) { 
                    visited[dr][dc] = true;
                    q.push({dr, dc});
                }
            }
        }

        return false;
       };

       int result = -1;
       while (min <= maxx) { 
           int mid = (min + maxx) / 2;
     cout<<mid<<" This is the MID"<<endl;
     cout<<min << " Min"<<endl;
     cout<<maxx << " Max"<<endl;
           if (isValid(mid)) { 
               result = mid;
               min = mid + 1;
           } else { 
               maxx = mid - 1;
           }
       }

       return result; 
    }
};

int main() {
    // Define the grid directly in the main function
    vector<vector<int>> grid = {
        {5, 4, 5},
        {1, 2, 6},
        {7, 4, 6}
    };

    Solution solution;
    int result = solution.maximumMinimumPath(grid);

    cout << "Maximum Minimum Value: " << result << endl;

    return 0;
}
