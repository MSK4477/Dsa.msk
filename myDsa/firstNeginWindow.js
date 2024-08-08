function findNegativeInSubarray(nums, start, end) {
    for (let i = start; i < end; i++) {
        if (nums[i] < 0) {
            return nums[i];
        }
    }
    return null; 
}

let nums = [1, 2, 3, -4, 5, 6, -7];
let subarraySize = 3;
let ans = [];

for (let i = 0; i <= nums.length - subarraySize; i++) {
    let negative = findNegativeInSubarray(nums, i, i + subarraySize);
    if (negative !== null) {
        ans.push(negative);
    }
}

console.log(ans);
