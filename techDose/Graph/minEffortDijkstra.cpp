#include <iostream>
#include <vector>
#include <queue>
#include <cmath>
#include <climits>

using namespace std;

int minimumEffortPath(vector<vector<int>>& heights) {
    int rows = heights.size();
    int cols = heights[0].size();
    
    // Directions for moving up, down, left, right
    vector<pair<int, int>> directions = {{1, 0}, {-1, 0}, {0, 1}, {0, -1}};
    
    // Priority queue: (effort, row, col)
    priority_queue<tuple<int, int, int>, vector<tuple<int, int, int>>, greater<>> pq;
    
    // Distance array to store the minimum effort for each cell
    vector<vector<int>> distance(rows, vector<int>(cols, INT_MAX));
    distance[0][0] = 0;
    
    // Push the starting cell (0, 0) into the priority queue
    pq.push({0, 0, 0}); // {effort, row, col}
    
    while (!pq.empty()) {
        auto [effort, row, col] = pq.top();
        pq.pop();
        
        // If we reached the bottom-right cell, return the effort
        if (row == rows - 1 && col == cols - 1) {
            return effort;
        }
        
        // If current effort is greater than recorded, skip this cell
        if (effort > distance[row][col]) {
            continue;
        }
        
        // Process neighbors
        for (auto [dr, dc] : directions) {
            int new_row = row + dr;
            int new_col = col + dc;
            
            // Check if the neighbor is within bounds
            if (new_row >= 0 && new_row < rows && new_col >= 0 && new_col < cols) {
                // Calculate the new effort
                int new_effort = max(effort, abs(heights[row][col] - heights[new_row][new_col]));
                
                // Update the distance and push to priority queue if a smaller effort is found
                if (new_effort < distance[new_row][new_col]) {
                    distance[new_row][new_col] = new_effort;
                    pq.push({new_effort, new_row, new_col});
                }
            }
        }
    }
    
    // If no path is found (though the problem guarantees a path exists)
    return -1;
}

int main() {
    vector<vector<int>> heights = {
        {1, 2, 2},
        {3, 8, 2},
        {5, 3, 5}
    };
    
    cout << "Minimum Effort Path: " << minimumEffortPath(heights) << endl;
    return 0;
}
