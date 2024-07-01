function longestSubstringWithKDistinct(s, k) {
    let left = 0;
    let maxLength = 0;
    let charMap = {};
    let distinctCount = 0;

    for (let right = 0; right < s.length; right++) {
        let char = s[right];

        if (!charMap[char]) {
            charMap[char] = 0;
        }
        charMap[char]++;

        if (charMap[char] === 1) {
            distinctCount++;
        }
console.log(charMap,"mapp" , distinctCount, "count", charMap[char], char)
        while (distinctCount > k) {
            let leftChar = s[left];
            charMap[leftChar]--;
            if (charMap[leftChar] === 0) {
                distinctCount--;
            }
            left++;
        }

        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}

// Example usage:
let s = "eceba";
let k = 2;
console.log(longestSubstringWithKDistinct(s, k)); // Output: 3 (longest substring with exactly 2 distinct characters is "ece")
