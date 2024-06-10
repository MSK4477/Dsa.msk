// class MyHash {
//     constructor(b) {
//       this.BUCKET = b;
//       this.table = [];
//       for (let i = 0; i < b; i++) {
//         this.table[i] = [];
//       }
//     }
  
//     // Insert method
//     insert(x) {
//       let i = x % this.BUCKET;
//       this.table[i].push(x);
//     }
  
//     // Search method
//     search(x) {
//       let i = x % this.BUCKET;
//       for (let j = 0; j < this.table[i].length; j++) {
//         if (this.table[i][j] === x) {
//           return true;
//         }
//       }
//       return false;
//     }
  
//     // Remove method
//     remove(x) {
//       let i = x % this.BUCKET;
//       let index = this.table[i].indexOf(x);
//       if (index !== -1) {
//         this.table[i].splice(index, 1);
//       }
//     }
//   }
  
//   // Example usage
//   const hashTable = new MyHash(7);
  
//   // Insert values
//   hashTable.insert(10);
//   hashTable.insert(20);
//   hashTable.insert(15);
//   hashTable.insert(7);
  
//   // Search values
//   console.log(hashTable.search(10)); // Output: true
//   console.log(hashTable.search(14)); // Output: false
  
//   // Remove values
//   hashTable.remove(15);
//   console.log(hashTable.search(15)); // Output: false
  
//   // Check the hash table structure
//   console.log(hashTable.table);
  

class MyHash {
    constructor(b) {
      this.BUCKET = b;
      this.table = [];
      for (let i = 0; i < b; i++) {
        this.table[i] = [];
      }
    }
  
    // Insert method
    insert(x) {
      let i = x % this.BUCKET;
      this.table[i].push(x);
    }
  
    // Search method
    search(x) {
      let i = x % this.BUCKET;
      for (let j = 0; j < this.table[i].length; j++) {
        if (this.table[i][j] === x) {
          return true;
        }
      }
      return false;
    }
  
    // Remove method
    remove(x) {
      let i = x % this.BUCKET;
      let index = this.table[i].indexOf(x);
      if (index !== -1) {
        this.table[i].splice(index, 1);
      }
    }
  }
  
  // Example usage
  const hashTable = new MyHash(10); // Set the bucket size to 10 for better visualization
  
  // Insert large number of values
  for (let i = 0; i < 100; i++) {
    hashTable.insert(i);
  }
  
  // Check the hash table structure
  console.log(hashTable.table);
  
  // Visualize the table structure
  hashTable.table.forEach((bucket, index) => {
    console.log(`Bucket ${index}: ${bucket}`);
  });
  