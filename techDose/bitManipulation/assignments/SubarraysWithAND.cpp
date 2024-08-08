#include <iostream>
#include <vector>
using namespace std;

int findAndOfTheSubArr (int k,vector<int> nums, int pointer) { 

long long count = 0;
int sum = nums[pointer];

if(sum == k) { 
    count++;
}

   
    while (pointer < nums.size() -1) { 
         sum &= nums[pointer+1];
         cout << sum << " this is the sum and the pointer " << pointer <<endl;
         if(sum == k) { 
            count ++;
         }
         pointer++;
    }

    return count;

}

int main () { 

vector<int> nums = {1,1,2};
int k = 1;
int count = 0;

for(int i = 0; i < nums.size(); ++i) {
int getAndedSubArrCount = findAndOfTheSubArr(k, nums, i);

cout << getAndedSubArrCount << " in each iterations"<< endl;
count += getAndedSubArrCount;
}
 
cout << "Total Count " << count <<endl;

}