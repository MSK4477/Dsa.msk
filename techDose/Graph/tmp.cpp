#include <iostream>
#include <vector>
using namespace std;

vector<int> arr;
vector<int> parent, rank;

int find(int x) {

    if(arr[x] == -1)  {
        return x;
    }

    find(arr[x]);

}

bool unionFind(int x, int y) { 
    int rootX = find(x);
    int rootY = find(y);

if(rootY == rootX) { 
    return false;
}

    if(rank[rootX] > rank[rootY]) { 
       parent[rootY] = rootX;
    }else if(rank[rootX] < rank[rootY]){
       parent[rootX] = rootY;
    }else { 
       parent[rootX] = rootY;
       rank[rootY]++;
    }

}