function quicksort(arr, low, high) {
    if (low < high) {
        // pi is partitioning index, arr[pi] is now at right place
        let pi = lomutoPartition(arr, low, high);
        
        // Recursively sort elements before
        // partition and after partition
        quicksort(arr, low, pi - 1);
        quicksort(arr, pi + 1, high);
    }
}

function lomutoPartition(arr, low, high) {
    // Pivot (Element to be placed at right position)
    let pivot = arr[high];
    console.log(pivot, "pivot")
    let i = low - 1;  // Index of smaller element
    console.log(low, "low", high, "high", "from 1")
    for (let j = low; j < high; j++) {
        // If current element is smaller than or
        // equal to pivot
        if (arr[j] <= pivot) {
            i++;
            // Swap arr[i] and arr[j]
            [arr[i], arr[j]] = [arr[j], arr[i]];
            console.log(i, "i", j)
console.log(arr, "arr")
        }
    }
    
    // Swap arr[i + 1] and arr[high] (or pivot)
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    console.log(arr, "arr2")
    console.log(i, "2nd i")
    console.log(low, "low", high, "high", "from 2")

    return i + 1;
}

// Example usage
let arr = [10, 7, 8, 9, 1, 5];
quicksort(arr, 0, arr.length - 1);
console.log("Sorted array:", arr);
