// #include <bits/stdc++.h>
// #include<vector>
// using namespace std;

// class Solution {

//     private :
//             int solve(int index,  vector<vector<vector<int>>>& dp,  int n, int m, vector<pair<int,int>>& zerosAndOnes){

//             if(index <= 0) { 
//                 return 0;
//             }

//             if(dp[index][n][m] != -1){
//                return dp[index][n][m];
//             }


//             auto [zeroes, ones] = zerosAndOnes[index -1];

//             int exclude = solve(index -1, dp, n, m, zerosAndOnes);
//             int include = 0;

//             if(ones <= n && zeroes <= m) {
//              include = 1 + solve(index - 1, dp, n - ones, m - zeroes, zerosAndOnes);  // ✅ Correct order
//             }
//             return dp[index][n][m] = max(include, exclude);
//         }

// public:
//     int findMaxForm(vector<string>& strs, int m, int n) {
        
//           int index = strs.size();
//          vector<vector<vector<int>>> dp(index + 1, vector<vector<int>>(n+  1, vector<int>(m + 1, -1)));
//          vector<pair<int, int>>zerosAndOnes(index+ 1);

//          for(int i = 0; i < index; ++i){
//             int zeroes = 0;
//             int ones = 0;

//             for(char str : strs[i]) { 
//                 if(str == '0'){
//                     zeroes++;
//                 }else { 
//                     ones++;
//                 }
//             }
//             zerosAndOnes[i] = {zeroes, ones};
//          }


//          return solve(index, dp, n, m, zerosAndOnes);
       
//     }
// };



#include <iostream>
#include <vector>
#include <string>
#include <algorithm>  // For std::count
using namespace std;

int findMaxSubset(vector<string>& strs, int m, int n, vector<vector<vector<int>>>& dp) {
    int size = strs.size();

    // Step 1: Convert strings into (zero count, one count)
    vector<pair<int, int>> zeroesAndOnes;
    for (auto &s : strs) {
        int zeros = std::count(s.begin(), s.end(), '0');
        int ones = std::count(s.begin(), s.end(), '1');
        zeroesAndOnes.push_back({zeros, ones});
    }

    // Step 2: Bottom-Up DP Filling
    for (int i = 1; i <= size; i++) {  // Processing i-th string
        int zero = zeroesAndOnes[i - 1].first;
        int one = zeroesAndOnes[i - 1].second;

        for (int j = m; j >= 0; j--) {  // Loop over available zeros
            for (int k = n; k >= 0; k--) {  // Loop over available ones
                // Exclude the current string
                dp[i][j][k] = dp[i - 1][j][k];

                // Include the current string (if it fits)
                if (j >= zero && k >= one) {
                    dp[i][j][k] = max(dp[i][j][k], 1 + dp[i - 1][j - zero][k - one]);
                }
            }
        }
    }

    // Step 3: Return final answer
    return dp[size][m][n];
}

// Function to Print the 3D DP Table in Your Requested Format
void printDPTable(vector<vector<vector<int>>>& dp, int size, int m, int n) {
    cout << "[\n";
    for (int i = 0; i <= size; i++) {
        cout << "  [\n";
        for (int j = 0; j <= m; j++) {
            cout << "    [";
            for (int k = 0; k <= n; k++) {
                cout << dp[i][j][k];
                if (k != n) cout << ", ";
            }
            cout << "]";
            if (j != m) cout << ",\n";
        }
        cout << "\n  ]";
        if (i != size) cout << ",\n";
    }
    cout << "\n]\n";
}

int main() {
    // Input
    vector<string> strs = {"10", "0001", "1"};
    int m = 3, n = 2;
    
    // DP Table Initialization
    int size = strs.size();
    vector<vector<vector<int>>> dp(size + 1, vector<vector<int>>(m + 1, vector<int>(n + 1, 0)));

    // Compute the answer using DP
    int result = findMaxSubset(strs, m, n, dp);

    // Print the 3D DP Table in Your Requested Format
    printDPTable(dp, size, m, n);

    // Print the final result
    cout << "Maximum subset size: " << result << endl;

    return 0;
}

int findMaxForm(vector<string>& strs, int zeros, int ones) 
    {
        int i,j,k,l,p=strs.size();
        vector<vector<int>> dp(zeros+1 , vector<int>(ones+1));
        
        for(auto &s:strs)
        {
            int currOnes = count(s.begin(),s.end(),'1');
            int currZeros = s.size()-currOnes;
            
            for(j=ones;j>=currOnes;j--)
            {
                for(i=zeros;i>=currZeros;i--)
                {
                    dp[i][j] = max(dp[i][j],1+dp[i-currZeros][j-currOnes]);
                }
            }
        }
        return dp[zeros][ones];
    }
