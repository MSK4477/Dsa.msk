// 1876. Substrings of Size Three with Distinct Characters || Java


function findUniqueSubstrings(s, k) {
    const result = [];
    const counts = new Map();
    
    for (let i = 0; i < s.length; i++) {
        // Add the current character to the map
        counts.set(s[i], (counts.get(s[i]) || 0) + 1);
        
        // Remove the character that is out of the current window
        if (i >= k) {
            const charToRemove = s[i - k];
            console.log(counts, "before ", charToRemove, "this is ii", i)
            if (counts.get(charToRemove) === 1) {
 console.log(counts, "before ", charToRemove, i, "this is ii")

                counts.delete(charToRemove);
            } else {
                counts.set(charToRemove, counts.get(charToRemove) - 1);
                            console.log(counts, "after",charToRemove )

            }
        }
        
        // Check if the current window has exactly k unique characters
        if (i >= k - 1 && counts.size === k && [...counts.values()].every(count => count === 1)) {
            console.log(i, counts, k,i - k + 1 )
            result.push(s.substring(i - k + 1, i + 1));
        }
    }
    
    return result;
}

// Example usage
let s = "aabc";
let k = 3;
console.log(findUniqueSubstrings(s, k)); // Output: ["aba", "bds", "dsk", "ksf", "sfk", "fks", "ksd", "sdf", "dfb"]
