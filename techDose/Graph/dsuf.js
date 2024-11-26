class DSU {
    constructor(n) {
        this.parent = Array.from({ length: n }, (_, i) => i); // Every element is its own parent initially
        this.rank = Array(n).fill(0); // Rank array initialized to 0
    }

    // Find operation with path compression
    find(x) {
        if (this.parent[x] !== x) {
            this.parent[x] = this.find(this.parent[x]); // Path compression
        }
        return this.parent[x];
    }

    // Union operation by rank
    unionByRank(x, y) {
        const rootX = this.find(x);
        const rootY = this.find(y);

        if (rootX !== rootY) {
            if (this.rank[rootX] > this.rank[rootY]) {
                this.parent[rootY] = rootX;
            } else if (this.rank[rootX] < this.rank[rootY]) {
                this.parent[rootX] = rootY;
            } else {
                this.parent[rootY] = rootX;
                this.rank[rootX]++;
            }
        }
    }

    // Utility function to print the parent and rank arrays
    print() {
        console.log("Parent: ", this.parent);
        console.log("Rank:   ", this.rank);
    }
}

// Example usage
const n = 7; // Number of elements (0 to n-1)
const dsu = new DSU(n);

dsu.unionByRank(0, 1);
dsu.unionByRank(1, 2);
dsu.unionByRank(3, 4);
dsu.unionByRank(4, 5);
dsu.unionByRank(5, 6);

console.log("Find(2):", dsu.find(2)); // Output: representative of 2
console.log("Find(5):", dsu.find(5)); // Output: representative of 5

dsu.print(); // Displays parent and rank arrays for debugging
