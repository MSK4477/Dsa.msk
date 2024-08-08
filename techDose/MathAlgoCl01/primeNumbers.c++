#include <iostream>
#include <vector>
#include <cmath>
using namespace std;

// Simple Sieve of Eratosthenes to find all primes up to sqrt(R)
vector<int> simpleSieve(int limit) {
    vector<bool> isPrime(limit + 1, true);
    vector<int> primes;

    for (int p = 2; p * p <= limit; p++) {
        if (isPrime[p]) {
            for (int i = p * p; i <= limit; i += p) {
                isPrime[i] = false;
            }
        }
    }

    for (int p = 2; p <= limit; p++) {
        if (isPrime[p]) {
            primes.push_back(p);
        }
    }
    return primes;
}

// Segmented Sieve to find all primes in range [L, R]
vector<int> segmentedSieve(int L, int R) {
    int limit = sqrt(R) + 1;
    vector<int> primes = simpleSieve(limit);
    vector<bool> isPrime(R - L + 1, true);

    for (int i = 0; i < primes.size(); i++) {
        int p = primes[i];
        int start = max(p * p, (L + p - 1) / p * p); // Find the starting point in the range [L, R]

        for (int j = start; j <= R; j += p) {
            isPrime[j - L] = false;
        }
    }

    // Collecting all prime numbers in the range [L, R]
    vector<int> result;
    for (int i = 0; i <= R - L; i++) {
        if (isPrime[i] && (i + L) != 1) {
            result.push_back(i + L);
        }
    }
    return result;
}

int main() {
    int L = 10;
    int R = 50;

    vector<int> primes = segmentedSieve(L, R);

    cout << "Primes in range [" << L << ", " << R << "] are: ";
    for (int i = 0; i < primes.size(); i++) {
        cout << primes[i] << " ";
    }
    cout << endl;

    return 0;
}
