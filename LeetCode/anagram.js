//242. Valid Anagram


// let  s = "ab", t = "ab"
// function isAnagram (s, t){
// s = s.split('').sort().join('');
// t = t.split('').sort().join('');

// return s === t
// }
// console.log(isAnagram(s, t))

function areAnagrams(str1, str2) {
    // If lengths are different, they can't be anagrams
    if (str1.length !== str2.length) {
        return false;
    }

    // Count characters in str1
    let charCount = {};
    for (let char of str1) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Compare with str2
    for (let char of str2) {
        if (!charCount[char]) {
            return false; // Character not found or count exhausted
        } else {
            charCount[char]--;
        }
    }
console.log(charCount, "char count")
    return true; // All characters matched
}

// Example usage:
console.log(areAnagrams("listen", "silent"));  // Output: true
console.log(areAnagrams("triangle", "integral"));  // Output: true
console.log(areAnagrams("hello", "world"));  // Output: false




