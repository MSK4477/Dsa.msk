#include<iostream>
#include<vector>
using namespace std;


bool findTargetInMatrix(const vector<vector<int>>& nums, int target) {
 int rows = nums.size();
 int cols = nums[0].size();
 int r = 0;
 int c = cols-1;

 while(r < rows && c >=0) { 

    if(nums[r][c] == target) { 
        return true;
    }else if(nums[r][c] <= target) { 
        ++r;
    }else { 
      --c;
    }
 }


 return false;

}
int main () { 
   vector<vector<int>> nums = {{1,3,5,7},{10,11,16,20},{23,30,34,60}};
   int target = 113;
   bool res = findTargetInMatrix(nums, target);

    cout << boolalpha << res << " this is res " << endl; // Print true or false

}