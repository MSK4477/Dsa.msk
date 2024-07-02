// leetcode: 340

function longestSubstringWithKDistinct(s, k) {
   let left = 0;
   let maxLength = 0;
   let charMap = {};
   let distinctCount = 0;

   for(let i = 0; i < s.length; i++) {
    
    let char = s[i]

    if(!charMap[char]) { 
        charMap[char] = 0;
    }
    charMap[char]++


    if(charMap[char] === 1)  {
        distinctCount++
    }

    while(distinctCount > k) { 
        let leftChar = s[left];

        charMap[leftChar]--


// we are reducing because we want only k === distinct so we wanna start fresh
        if(charMap[leftChar] == 0) { 
            distinctCount--
        }
        left++
    }

    maxLength = Math.max(maxLength, (i - left) + 1);

   }

   return maxLength;
}

let s = "aaabb";
let k = 3;
console.log(longestSubstringWithKDistinct(s, k)); // Output: 3 (longest substring with exactly 2 distinct characters is "ece")
