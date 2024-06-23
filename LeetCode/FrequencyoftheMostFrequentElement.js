function maxAverage(nums, k) {
    let res = 0;
    let start = 0;
    let end = 0;
    let sum = 0;

    nums.sort((a, b) => a - b);

    while (end < nums.length) {
        sum += nums[end++];

        if (k + sum < nums[end - 1] * (end - start)) {
            console.log(sum, "sum",k, nums[end - 1] * (end - start))
            sum -= nums[start++];
        }

        // Calculate current average and update res if larger
        console.log(sum, (end - start), "e and start")
        res = Math.max(res, (end - start));
    }

    return res;
}

// Example usage:
let nums = [1,2,4];
let k = 5;
let result = maxAverage(nums, k);
console.log(result);
