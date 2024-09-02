#include <iostream>
#include <vector>
#include <algorithm>
#include <climits>
using namespace std;

int findMinNum(vector<int>& nums);

int main() { 
    // vector<int> nums = {3, 4, 5, 1, 2};
    vector<int> nums = {4, 5, 6, 7, 0, 1, 2};
    // vector<int> nums = {3,1,2};

    int minNum = findMinNum(nums);
    cout << minNum << endl;
}

int findMinNum(vector<int>& nums) { 
    int left = 0;
    int right = nums.size() - 1;
    int minN = INT_MAX;
    while (left < right) {
        int mid = left + (right - left) / 2;

        if (nums[mid] > nums[right]) {
            minN = min(minN, nums[right]);
            left = mid + 1;
        } else {
            minN = min(minN, nums[mid]);
            right = mid;
        }
    }

    return min(nums[left], minN);
}
