#include<iostream>
#include<vector>
using namespace std;

bool findin2D(vector<vector<int>>& nums, int target) {
int rows = nums.size()-1;
int r = 0;
int c = nums[0].size()-1;

while(r <= rows && c >= 0) { 
    if(nums[r][c] == target) { 
        return true;
    }
    if(nums[r][c] > target) { 
         --c;
    }else { 
        ++r;
    }
}

return false;
}

int main () { 
    vector<vector<int>> nums =
    {
    {1,4,7,11,15},
    {2,5,8,12,19},
    {3,6,9,16,22},
    {10,13,14,17,24},
    {18,21,23,26,30}
    };
    int target = 8;

    bool is_target_preesent = findin2D(nums, target);

cout << is_target_preesent<<endl;
}