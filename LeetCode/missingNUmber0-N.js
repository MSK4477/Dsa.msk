// 268. Missing Number

var missingNumber = function(nums) {
    let total = 0;

    for(let i = 0; i <= nums.length; i++) { 
        total += i

        total -= i < nums.length ? nums[i] :0
    }
    return total
};