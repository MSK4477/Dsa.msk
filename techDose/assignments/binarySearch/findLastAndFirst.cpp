#include <iostream>
#include <vector>
using namespace std;

vector<int> findFirstAndLastIdx(vector<int>& nums, int target) {
    vector<int> res(2, -1); // Initialize result vector with two -1s

    int left = 0;
    int right = nums.size() - 1;

    // Find the first occurrence
    while (left <= right) { 
        int mid = left + (right - left) / 2;

        if (nums[mid] == target) { 
            res[0] = mid;
            right = mid - 1; // Continue searching in the left half
        } else if (nums[mid] < target) { 
            left = mid + 1;
        } else { 
            right = mid - 1;
        }
    }

    left = 0;
    right = nums.size() - 1;

    // Find the last occurrence
    while (left <= right) { 
        int mid = left + (right - left) / 2;

        if (nums[mid] == target) { 
            res[1] = mid;
            left = mid + 1; // Continue searching in the right half
        } else if (nums[mid] < target) { 
            left = mid + 1;
        } else { 
            right = mid - 1;
        }
    }

    return res;
}

int main () { 
    vector<int> nums = {5, 7, 7, 8, 8, 10};
    int target = 8;
    vector<int> res = findFirstAndLastIdx(nums, target);
    
    for (int idx : res) {
        cout << idx << " ";
    }
    cout << endl;

    return 0;
}
