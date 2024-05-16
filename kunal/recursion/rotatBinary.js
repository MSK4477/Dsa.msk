function search(nums, target) {
    // Function to find the pivot point (minimum element) in the rotated sorted array
    function findPivot(nums, left, right) {
        if (left >= right) {
            return left;
        }
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] > nums[right]) {
            return findPivot(nums, mid + 1, right);
        } else {
            return findPivot(nums, left, mid);
        }
    }

    // Recursive binary search in rotated array
    function binarySearch(nums, target, left, right) {
        if (left > right) return -1;

        let mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            return binarySearch(nums, target, mid + 1, right);
        } else {
            return binarySearch(nums, target, left, mid - 1);
        }
    }

    const pivot = findPivot(nums, 0, nums.length - 1);
    if (nums[pivot] === target) {
        return pivot;
    }

    if (pivot === 0) {
        return binarySearch(nums, target, 0, nums.length - 1);
    }

    if (target >= nums[0]) {
        return binarySearch(nums, target, 0, pivot - 1);
    } else {
        return binarySearch(nums, target, pivot, nums.length - 1);
    }
}

// Example usage
let nums = [1,2,3,4,5,6];
let m = Math.min(...nums)
console.log(m, "min value", nums.indexOf(m), "this is the index of the element")
let target = 6;
console.log(search(nums, target)); // Output: 4 (index of target element)