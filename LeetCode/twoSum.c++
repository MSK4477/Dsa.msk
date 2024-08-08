#include <iostream>
#include <vector>
#include <utility>
#include <algorithm>

using namespace std;

// Function to find two numbers that add up to the target
vector<int> twoSum(vector<int>& nums, int target) {
    vector<pair<int, int>> arr;
    
    // Pair each number with its index
    for (int i = 0; i < nums.size(); ++i) {
        arr.push_back(make_pair(nums[i], i));
    }
    
    // Sort the array of pairs by the numbers
    sort(arr.begin(), arr.end());
    
    int l = 0, r = nums.size() - 1;
    while (l < r) {
        int sum = arr[l].first + arr[r].first;
        if (sum == target) {
            return {arr[l].second, arr[r].second};
        } else if (sum > target) {
            --r;
        } else {
            ++l;
        }
    }
    
    // Return an empty vector if no solution is found
    return {};
}

int main() {
    vector<int> nums = {2, 7, 11, 15, 1, 3, 4};
    int target = 9;
    
    vector<int> result = twoSum(nums, target);
    
    if (!result.empty()) {
        cout << "Indices: " << result[0] << ", " << result[1] << endl;
    } else {
        cout << "No two sum solution found." << endl;
    }
    
    return 0;
}
