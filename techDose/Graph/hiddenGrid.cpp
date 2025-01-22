#include <iostream>
#include <vector>
#include <queue>
#include <unordered_set>
using namespace std;

int shortestPath(vector<vector<char>>& grid) {
    int rows = grid.size(), cols = grid[0].size();
    vector<pair<int, int>> directions = {{0, 1}, {1, 0}, {0, -1}, {-1, 0}};
    queue<pair<int, int>> q;
    vector<vector<bool>> visited(rows, vector<bool>(cols, false));
    q.push({0, 0});  // Starting point
    visited[0][0] = true;
    int steps = 0;

    while (!q.empty()) {
        int size = q.size();
        while (size--) {
            auto [r, c] = q.front();
            q.pop();

            if (grid[r][c] == 'D') return steps;  // Destination found

            for (auto [dr, dc] : directions) {
                int nr = r + dr, nc = c + dc;
                if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && !visited[nr][nc] && grid[nr][nc] != '#') {
                    visited[nr][nc] = true;
                    q.push({nr, nc});
                }
            }
        }
        steps++;
    }
    return -1;  // If destination is unreachable
}

int main() {
    vector<vector<char>> grid = {
        {'S', '.', '.', '.', '.'},
        {'*', '.', '#', '*', '.'},
        {'.', '*', '.', '.', '*'},
        {'*', '.', '#', '.', 'D'}
    };

    cout << "Minimum steps from S to D: " << shortestPath(grid) << endl;
    return 0;
}
