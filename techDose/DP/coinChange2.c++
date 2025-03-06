#include <bits/stdc++.h>
using namespace std;

class Solution {
    private: 
    
    int solve(int index, vector<vector<int>>& dp, int sum, int target, vector<int>& coins) { 
    
        if(index == 0) {
          return sum % coins[0] == 0 ? 1 : 0;
        }
        if(sum == 0) { 
            return 1;
        }
    
        if(dp[index][sum] != -1) {
            return dp[index][sum];
         }
         int include = 0;
         int exclude = solve(index -1, dp,sum, target, coins);
    
         if(coins[index] <= sum) {
            include = solve(index, dp, sum - coins[index], target, coins);
         }
    
         return dp[index][sum] = include+exclude;
    
    }
    
    public:
        int change(int amount, vector<int>& coins) {
    
            int index = coins.size();
            vector<vector<int>>dp(index +1, vector<int>(amount+1, -1));
    
            return solve(index -1, dp, amount, amount, coins);
            
        }
    };