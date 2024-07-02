// 395. Longest Substring with At Least K Repeating Characters

function longestSubstring(s, k) {
    const n = s.length;
    if (n === 0 || n < k) return 0;
    if (k <= 1) return n;

    const counts = new Map();
    for (const c of s) {
        counts.set(c, (counts.get(c) || 0) + 1);
    }

    let l = 0;
    while (l < n && counts.get(s.charAt(l)) >= k) l++;
    if (l >= n - 1) return l;

    const ls1 = longestSubstring(s.substring(0, l), k);
    while (l < n && counts.get(s.charAt(l)) < k) l++;
    const ls2 = (l < n) ? longestSubstring(s.substring(l), k) : 0;

    return Math.max(ls1, ls2);
}

// Example usage
const result = longestSubstring("ababbdsksfksdkkbksfdfbjkfbsdfkfbkc", 2);
console.log(result);  // Output will be the length of the longest substring

//appraoch:2 sliding window

function longestSubstring(s, k) {
    function findUniqChars(s) {
        const uniq = new Map();
        for (let i = 0; i < s.length; i++) {
            if (!uniq.has(s[i])) {
                uniq.set(s[i], 0);
            }
            uniq.set(s[i], uniq.get(s[i]) + 1);
        }
        return uniq.size;
    }

    const totalUniq = findUniqChars(s);
    let maxLen = 0;

    for (let uniqAllowed = 1; uniqAllowed <= totalUniq; uniqAllowed++) {
        const uniqCharCnt = new Map();
        let currUniq = 0, currUniqK = 0;
        let l = 0, r = 0;

        while (r < s.length) {
            if (!uniqCharCnt.has(s[r])) {
                uniqCharCnt.set(s[r], 0);
            }
            uniqCharCnt.set(s[r], uniqCharCnt.get(s[r]) + 1);

            if (uniqCharCnt.get(s[r]) === 1) {
                currUniq++;
            }
            if (uniqCharCnt.get(s[r]) === k) {
                currUniqK++;
            }

            while (currUniq > uniqAllowed) {
                if (uniqCharCnt.get(s[l]) === k) {
                    currUniqK--;
                }
                uniqCharCnt.set(s[l], uniqCharCnt.get(s[l]) - 1);
                if (uniqCharCnt.get(s[l]) === 0) {
                    currUniq--;
                }
                l++;
            }

            if (currUniq === uniqAllowed && currUniqK === uniqAllowed) {
                maxLen = Math.max(maxLen, r - l + 1);
            }
            r++;
        }
    }
    return maxLen;
}

// Usage example:
const s = "ababbdsksfksdkkbksfdfbjkfbsdfkfbkc";
const k = 2;
console.log(longestSubstring(s, k)); // Output: 5

