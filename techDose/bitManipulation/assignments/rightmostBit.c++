#include <iostream>

int getRightmostSetBit(int n) {
    return n & -n;
}

int main() {
    int num = 10; 
    int rightmostSetBit = getRightmostSetBit(num);
    std::cout << "The rightmost set bit of " << num << " is: " << rightmostSetBit << std::endl;
    return 0;
}
