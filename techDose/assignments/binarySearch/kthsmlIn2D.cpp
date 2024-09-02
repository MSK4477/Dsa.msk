#include<iostream>
#include<vector>
using namespace std;

//  int findValidRow(int c, int r, int k, int rows){ 
//      while(r * c < k && c*rows >= k)  { 
//        r++;
//     }
//     return r;
//    }

// int findKthSmallestIn2D(vector<vector<int>>& nums, int k){

//     int rows = nums.size();
//     int c = nums[0].size();
//     int r = findValidRow(c,0,k, rows);
//     int indx = r*c;


//     return nums[r-1][c -1 - (indx-k)];
// }

// int main () { 
//     vector<vector<int>> nums = {
//         {1,2},{1,3}
//     };
//     int k = 2;

//     int res = findKthSmallestIn2D(nums, k);

//     cout << res << endl;

// }

class Solution {
public:

int check (vector<vector<int>>& matrix, int mid) { 

    int rows = matrix.size();
    int r = 0;
    int c = rows -1;
     int count = 0;
    while( r < rows && c >= 0 ) {
        if(matrix[r][c] <= mid) { 
        count += (c + 1);
            ++r;
        }else { 
            --c;
        }
    }
return count;
}
    int kthSmallest(vector<vector<int>>& matrix, int k) {
        int n = matrix.size();
        int low = matrix[0][0];
        int high = matrix[n-1][n-1];

        while(low <= high){
            int mid = low + (high - low) /2;

            if(check(matrix, mid) < k)  { 
                low = mid + 1;
            }else { 
                high = mid -1;
            }
         }

         return low;
    }


};