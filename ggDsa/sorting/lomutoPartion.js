function lomutoPartition(arr, low, high) {
    const pivot = arr[high]; // Choosing the last element as pivot
    let i = low - 1; // Index of smaller element

    for (let j = low; j < high; j++) {
        // If current element is smaller than or equal to pivot
        if (arr[j] <= pivot) {
            i++;
            // Swap arr[i] and arr[j]
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    // Swap arr[i+1] and arr[high] (or pivot)
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    return i + 1;
}

// Example usage:
const arr = [10, 7, 8, 9, 1, 5];
const n = arr.length;
const partitionIndex = lomutoPartition(arr, 0, n - 1);
console.log("Partition Index:", partitionIndex); // This would give the index where partition is done
console.log("Array after partition:", arr); // This would show the array after partitioning
