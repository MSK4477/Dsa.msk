class OpenAddressingHashTable {
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
  
      while (this.keyMap[index]) {
        index = (index + 1) % this.keyMap.length;
      }
  
      this.keyMap[index] = [key, value];
    }
  
    get(key) {
      let index = this._hash(key);
  
      while (this.keyMap[index]) {
        if (this.keyMap[index][0] === key) {
          return this.keyMap[index][1];
        }
        index = (index + 1) % this.keyMap.length;
      }
      return undefined;
    }
  
    display() {
      console.log(this.keyMap);
    }
  }
  
  // Sample usage
  const ht = new OpenAddressingHashTable();
  ht.set("hello", "world");
  ht.set("goodbye", "world");
  ht.set("foo", "bar");
  ht.set("fizz", "buzz");
  
  console.log(ht.get("hello")); // Output: world
  console.log(ht.get("goodbye")); // Output: world
  console.log(ht.get("foo")); // Output: bar
  console.log(ht.get("fizz")); // Output: buzz
  
  ht.display();
  