#include <bits/stdc++.h>
using namespace std;

class Solution {
    public:
        bool canPartition(vector<int>& nums) {
            
            int sum =  accumulate(nums.begin(), nums.end(), 0); 
            int n = nums.size();
            int target = sum / 2;
            vector<vector<int>>dp(n + 1, vector<int>(target+1, 0));
    
                 if(sum % 2 != 0) return false;
               
                  for (int i = 0; i < n; ++i) {
                    dp[i][0] = 1;
                  }
    
            //  if (nums[0] <= target) {
            //     dp[0][nums[0]] = 1;
            // }
    
    
    
            for(int i = 1; i < n; ++i){
                for(int j = 0; j <= target; ++j) { 
                    if(nums[i] <= j){
                        dp[i][j] = dp[i-1][j] || dp[i -1][j - nums[i]];
                    }else { 
                       dp[i][j] =  dp[i-1][j];
                    }
                }
            }
    
            return dp[n -1][target];
        }
    };