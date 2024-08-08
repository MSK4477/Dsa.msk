#include <iostream>
using namespace std;

class Solution {
public:
    int bitWiseAdd(int a, int b) { 
        while(b != 0) { 
            int carry = a & b;
            a ^= b;
            b = carry << 1;
        }
        return a;
    }
};

int main() { 
    Solution *sol = new Solution(); 
    int a, b;

    cout << "Enter first number (a): ";
    cin >> a;

    cout << "Enter second number (b): ";
    cin >> b;

    int sum = sol->bitWiseAdd(a, b); 

    cout << "Sum of " << a << " and " << b << " is " << sum << endl;

    delete sol; 

    return 0;
}
