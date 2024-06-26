class HashTable {
    constructor(size = 53) {
      this.keyMap = new Array(size);
    }
  
    _hash(key) {
      let total = 0;
      let WEIRD_PRIME = 31;
      for (let i = 0; i < Math.min(key.length, 100); i++) {
        let char = key[i];
        let value = char.charCodeAt(0) - 96;
        total = (total * WEIRD_PRIME + value) % this.keyMap.length;
      }
      return total;
    }
  
    set(key, value) {
      let index = this._hash(key);
      if (!this.keyMap[index]) {
        this.keyMap[index] = [];
      }
      this.keyMap[index].push([key, value]);
    }
  
    get(key) {
      let index = this._hash(key);
      if (this.keyMap[index]) {
        for (let i = 0; i < this.keyMap[index].length; i++) {
          if (this.keyMap[index][i][0] === key) {
            return this.keyMap[index][i][1];
          }
        }
      }
      return undefined;
    }
  
    display() {
      console.log(this.keyMap);
    }
  }
  
  // Sample usage
  const ht = new HashTable();
  ht.set("hello", "world");
  ht.set("goodbye", "world");
  ht.set("foo", "bar");
  ht.set("fizz", "buzz");
  
  console.log(ht.get("hello")); // Output: world
  console.log(ht.get("goodbye")); // Output: world
  console.log(ht.get("foo")); // Output: bar
  console.log(ht.get("fizz")); // Output: buzz
  
  ht.display();
  