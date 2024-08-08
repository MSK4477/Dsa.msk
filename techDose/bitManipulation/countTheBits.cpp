#include <iostream>

using namespace std;

int countSetBits(int n) { 
    int count = 0;
    while(n) { 
        n &= ( n - 1);
        count++;
    }
    return count;
}
int main () { 
    int number = 8;
    int count = countSetBits(number);
    cout<<"the number of set bits in " << number << " is " << count <<endl;
    return 0;
}