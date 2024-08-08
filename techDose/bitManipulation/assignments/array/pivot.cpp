//quick sort partion 
#include <iostream>
#include <vector>
#include <cmath>
using namespace std;

int main ()  {
  vector<int> nums = {5,1,4,2,8,3};
  int p = nums.back();
  
  int i = 0;
  int j = nums.size() - 1;
  
  while(i <= j) {
      
    while(i <= j && nums[i] < p)  { 
        i++;
    }

    while(i <= j && nums[i] > p) { 
        j--;
        break;
    }
      if (i < j) {
            int temp = nums[i];
            nums[i] = nums[j];
            nums[j] = temp;
        }
      }
      nums[nums.size() -1] = nums[i];
      nums[i] = p;
      for(int num :nums) { 
          cout << num << " ";
      }
    }