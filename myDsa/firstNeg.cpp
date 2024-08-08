#include <iostream>
using namespace std;
#include <vector>


int findNegativeInSubarray (vector<int> nums, int start, int end) { 
    for(int i = start; i < end; ++i) { 
        if(nums[i] < 0) { 
            return nums[i];
        }
    }
        return 0;

}

int  main () { 

     vector<int> nums = {1, 2, 3, -4, 5, 6, -7};
     int subArraySize = 3;
    vector<int> ans;
    for(int i = 0; i <= nums.size() - subArraySize; ++i) { 
        int negative = findNegativeInSubarray(nums, i, i+subArraySize);

        if(negative != 0) { 
            ans.push_back(negative);
        }
    }

      for (int num : ans) {
        cout << num << " ";
    }
    cout << endl;

    return 0;

}