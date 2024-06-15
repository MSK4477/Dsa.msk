class DoubleHashingHashTable {
    constructor(size = 53) {
      this.keyMap = new Array(size);
      this.size = size;
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
  
    _hash2(key) {
      let R = this.size - 2;
      let hash = 0;
      for (let i = 0; i < key.length; i++) {
        hash = (hash * R + key.charCodeAt(i)) % this.size;
      }
      return R - (hash % R);
    }
  
    set(key, value) {
      let index = this._hash(key);
      let stepSize = this._hash2(key);
  
      while (this.keyMap[index]) {
        index = (index + stepSize) % this.size;
      }
  
      this.keyMap[index] = [key, value];
    }
  
    get(key) {
      let index = this._hash(key);
      let stepSize = this._hash2(key);
  
      while (this.keyMap[index]) {
        if (this.keyMap[index][0] === key) {
          return this.keyMap[index][1];
        }
        index = (index + stepSize) % this.size;
      }
      return undefined;
    }
  
    display() {
      console.log(this.keyMap);
    }
  }
  
  // Sample usage
  const ht = new DoubleHashingHashTable();
  ht.set("hello", "world");
  ht.set("goodbye", "world");
  ht.set("foo", "bar");
  ht.set("fizz", "buzz");
  
  console.log(ht.get("hello")); // Output: world
  console.log(ht.get("goodbye")); // Output: world
  console.log(ht.get("foo")); // Output: bar
  console.log(ht.get("fizz")); // Output: buzz
  
  ht.display();
  