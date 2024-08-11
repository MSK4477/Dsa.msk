#include <iostream>
#include <vector>
using namespace std;


int foundTarget (vector<int>& nums, int target) { 

    int left = 0;
    int right = nums.size() -1;
    if(nums.size() ==1) { 
        if(nums[0] == target) { 
            return 0;
        }else { 
            return -1;
        }
    }

    while (left <= right) 
    {
        int mid = left + (right - left) /2;

        if(nums[mid] == target) { 
            return mid;
        }else if(nums[left] <= nums[mid]) { 

            if(target >= nums[left] && target <= nums[mid]) { 
                right = mid-1;
            }else { 
                left = mid +1;
            }

        }else if(target >= nums[mid] && target <= nums[right])  { 
            left = mid +1;
           }else { 
            right = mid -1;
           }
    }
  return -1;
}
int main () { 
    vector<int> nums = {1};
    int target = 0;

    int foundedTarget = foundTarget(nums,target);

    cout << foundedTarget << " this is the founded Target " << endl;

} 

