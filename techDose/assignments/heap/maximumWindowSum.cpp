#include <iostream>
#include <vector>
#include <queue>
using namespace std;

vector<int> maxSlidingWindow(vector<int> &nums, int k)
{

    priority_queue<pair<int, int>> q;
      vector<int> res;
    for (int i = 0; i < nums.size(); ++i)
    {
        q.push(make_pair(nums[i], i));

        while (!q.empty() && q.top().second <= (i - k))
        {
            q.pop();
        }
        q.push(make_pair(nums[i], i));
    
    if( i >= (k-1)) { 
        res.push_back(q.top().first);
    }
    }
    return res;
}

int main()
{

    vector<int> nums = {1, 3, -1, -3, 5, 3, 6, 7};
    int k = 3;

    vector<int> res = maxSlidingWindow(nums, k);

    for (int re : res)
    {
        cout << re << endl;
    }
}