

//Q.NO: 2401
var longestNiceSubarray = function(nums) {
    let s = 0, e = 0;
    let ans = 0;
    let n = nums.length;
    let prev = 0;
    
    while (e < n) {
        if ((nums[e] & prev) === 0) {
            prev |= nums[e];
            ans = Math.max(ans, e - s + 1);
            e++;
        } else {
            while (s < e && (nums[e] & prev) !== 0) {
                prev &= (~nums[s]);

                s++;
            }
            prev |= nums[e];
            e++;
        }
    }
    
    return ans;
};
console.log(longestNiceSubarray([1, 3, 8, 48, 10]))
//approach : 2



class Solution {
    longestNiceSubarray(nums) {
        let res = 1;
        let start = 0, end = 0;
        let bMap = new Array(31).fill(0); // Binary frequency Map

        while (end < nums.length) {
            let flag = false;

            // Storing the binary representation of the current number
            for (let i = 0; i < 31; i++) {
                if (nums[end] & (1 << i)) {
                    bMap[i]++;

                    if (bMap[i] > 1) {
                        flag = true;
                    }
                }
            }

            // Check if any bit is repeating
            while (flag) {
                let num = nums[start];

                for (let i = 0; i < 31; i++) {
                    if (num & (1 << i)) {
                        bMap[i]--;
                    }
                }

                let f = false;
                for (let i = 0; i < 31; i++) {
                    if (bMap[i] > 1) {
                        f = true;
                    }
                }

                start++;

                if (!f) { 
                    flag = false;
                }
            }

            res = Math.max(res, end - start + 1);
            end++;
        }

        return res;
    }
}

// Example usage:
const solution = new Solution();
const nums = [1, 3, 8, 48, 10];
console.log(solution.longestNiceSubarray(nums)); // Output: 3
