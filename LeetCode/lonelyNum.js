function findLonely(nums) {
    const freq = {};
    const result = [];

    // Populate the frequency map
    for (const num of nums) {
        if (freq[num] === undefined) {
            freq[num] = 0;
        }
        freq[num]++;
    }

    for (const num of nums) {
        if (
            freq[num] === 1 && 
            (freq[num - 1] === undefined ) &&
            (freq[num + 1] === undefined )
        ) {
            result.push(num);
        }
    }

    return result;
}

// Example 1
console.log(findLonely([10, 6, 5, 8])); // Output: [10, 8]

// Example 2
console.log(findLonely([1, 3, 5, 3])); // Output: [1, 5]


//approach 2


var findLonely = function(nums) {
    nums.sort((a, b) => a - b);  // Sort the array
    let list = [];  // Initialize an empty list

    for (let i = 0; i < nums.length; i++) {
        let isLonely = true;

        // Check the left neighbor
        if (i > 0 && (nums[i] === nums[i - 1] + 1 || nums[i] === nums[i - 1])) {
            isLonely = false;
        }

        // Check the right neighbor
        if (i < nums.length - 1 && (nums[i] === nums[i + 1] - 1 || nums[i] === nums[i + 1])) {
            isLonely = false;
        }

        // If the number is lonely, add it to the list
        if (isLonely) {
            list.push(nums[i]);
        }
    }

    return list;
};

// Example usage:
console.log(findLonely([10, 6, 5, 8])); // Output: [10, 8]
