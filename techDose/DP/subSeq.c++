#include <bits/stdc++.h>
using namespace std;

class Solution {
    int local = 0;
    private:
int solve(int n, int m, vector<vector<int>>& dp, string& s1, string& s2 ) { 

    if(n < 0 ||  m < 0) { 
        return 0;
    }
    if (dp[n][m] != -1) {
            return dp[n][m];
        }
    
    if(s1[n] == s2[m]) { 
        return dp[n][m] =  1 + solve(n-1, m-1, dp, s1, s2);
    }else { 

        dp[n][m] = max(solve(n - 1, m, dp, s1, s2), solve(n, m - 1, dp, s1, s2));
    }
    return dp[n][m];
    
}

public:
    int longestCommonSubsequence(string text1, string text2) {
    int n = text1.size();
    int m = text2.size();
    vector<vector<int>>dp(n+1, vector<int>(m+1, -1));

    return solve(n-1, m-1, dp, text1, text2);
    }
};