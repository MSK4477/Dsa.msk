#include <bits/stdc++.h>
using namespace std;
class Solution {
    private:
        int solve(int index, int currentSum, vector<vector<int>>& dp, vector<int>& nums, int target, int sumOffset) {
            
            int dpIndex = sumOffset + currentSum;
    
             if (index < 0) { 
                return (currentSum == target) ? 1 : 0;
            }
    
            if(dp[index][dpIndex] != -1) { 
                return dp[index][dpIndex];
            }
    
            int subtract = solve(index -1, currentSum - nums[index], dp, nums, target,sumOffset);
            int add = solve(index -1, currentSum + nums[index], dp, nums, target, sumOffset);
    
            return dp[index][dpIndex] = subtract + add;
      
        }
    
    
    public:
        int findTargetSumWays(vector<int>& nums, int target) {
          int index = nums.size();
          int sumOffset = 1000;
          vector<vector<int>> dp(index+1, vector<int>(sumOffset * 2 + 1, -1));
    
    
          return solve(index -1, 0, dp, nums, target, sumOffset);
        }
    };
    