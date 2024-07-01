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
const result = longestSubstring("ababbc", 2);
console.log(result);  // Output will be the length of the longest substring
