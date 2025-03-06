#include <bits/stdc++.h>
using namespace std;
class Solution {
    public:
    
    int solve(int index, vector<vector<int>>& dp, int amount,vector<int>& coins) { 
    
        if(amount == 0) { 
            return 0;
        }
    
        if(index == 0)  { 
             if(amount % coins[0] == 0) { 
                return amount / coins[0];
            }else { 
                return 1e9;
          }
        }
    
        if(dp[index][amount] != -1 ) { 
            return dp[index][amount];
        }
    
        int exclude = solve(index -1, dp, amount, coins);
        int include = 1e9;
    
          if(coins[index] <= amount) { 
            include = solve(index, dp, amount - coins[index], coins) + 1;
        }
    
        return dp[index][amount] = min(include, exclude);
    }
        int coinChange(vector<int>& coins, int amount) {
         int index = coins.size();
         vector<vector<int>> dp(index+1, vector<int>(amount+1,-1));
          int result = solve(index - 1, dp, amount, coins);
            return (result >= 1e9) ? -1 : result;
        }
    };