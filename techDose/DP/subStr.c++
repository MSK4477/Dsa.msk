#include <bits/stdc++.h>
using namespace std;

class Solution {
    int local = 0;

private:
    int solve(int n, int m, vector<vector<int>>& dp, vector<int>& n1, vector<int>& n2) { 
        if (n < 0 || m < 0) { 
            return 0;
        }
         if (dp[n][m] != -1) {
            return dp[n][m];
        }
          solve(n-1, m, dp, n1, n2);
         solve(n, m-1, dp, n1, n2);
        if (n1[n] == n2[m]) { 
            dp[n][m] = 1 + solve(n - 1, m - 1, dp, n1, n2);
            local = max(local, dp[n][m]);
             return dp[n][m];  
        } else { 
            return dp[n][m] = 0;
        }   
    }

public:
    int findLength(vector<int>& nums1, vector<int>& nums2) {
        int n = nums1.size();
        int m = nums2.size();
        vector<vector<int>> dp(n + 1, vector<int>(m + 1, -1));

        solve(n - 1, m - 1, dp, nums1, nums2);
        return local;
    }
};

int main() {
    Solution sol;
    vector<int> nums1 = {1, 2, 3, 2, 1};
    vector<int> nums2 = {3, 2, 1, 4, 7};

    cout << sol.findLength(nums1, nums2) << endl;  // Print output

    return 0;
}
