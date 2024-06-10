// function inversionCount(arr, N) {
//     // Helper function to merge and count inversions
//     function mergeAndCount(arr, tempArr, left, mid, right) {
//         let i = left; // Starting index for left subarray
//         let j = mid + 1; // Starting index for right subarray
//         let k = left; // Starting index to be sorted
//         let invCount = 0;

//         // Conditions are checked to ensure that i doesn't exceed mid and j doesn't exceed right
//         while (i <= mid && j <= right) {
//             if (arr[i] <= arr[j]) {
//                 tempArr[k++] = arr[i++];
//             } else {
//                 // There are mid - i inversions because all elements left to i in the left subarray
//                 // are greater than arr[j]
//                 tempArr[k++] = arr[j++];
//                 invCount += (mid - i + 1);
//             }
//         }

//         // Copy the remaining elements of left subarray, if any
//         while (i <= mid) {
//             tempArr[k++] = arr[i++];
//         }

//         // Copy the remaining elements of right subarray, if any
//         while (j <= right) {
//             tempArr[k++] = arr[j++];
//         }

//         // Copy the sorted subarray into Original array
//         for (i = left; i <= right; i++) {
//             arr[i] = tempArr[i];
//         }

//         return invCount;
//     }

//     // Helper function to sort the array and count inversions
//     function mergeSortAndCount(arr, tempArr, left, right) {
//         let mid, invCount = 0;
//         if (left < right) {
//             mid = Math.floor((left + right) / 2);

//             invCount += mergeSortAndCount(arr, tempArr, left, mid);
//             invCount += mergeSortAndCount(arr, tempArr, mid + 1, right);

//             invCount += mergeAndCount(arr, tempArr, left, mid, right);
//         }
//         return invCount;
//     }

//     // Initializing temporary array
//     let tempArr = Array.from(arr);
//     return mergeSortAndCount(arr, tempArr, 0, N - 1);
// }

// // Example usage:
// let arr = [1, 20, 6, 4, 5];
// let N = arr.length;
// console.log( inversionCount(arr, N));


function inversionCount(arr, N) {
    let tempArr = Array.from(arr);
    let invCount = 0;

    // Merge subarrays of size 1, 2, 4, 8, etc.
    for (let currSize = 1; currSize <= N - 1; currSize = 2 * currSize) {
        for (let leftStart = 0; leftStart < N - 1; leftStart += 2 * currSize) {
            let mid = Math.min(leftStart + currSize - 1, N - 1);
            let rightEnd = Math.min(leftStart + 2 * currSize - 1, N - 1);

            invCount += mergeAndCount(arr, tempArr, leftStart, mid, rightEnd);
        }
    }

    return invCount;
}

function mergeAndCount(arr, tempArr, left, mid, right) {
    let i = left; // Starting index for left subarray
    let j = mid + 1; // Starting index for right subarray
    let k = left; // Starting index to be sorted
    let invCount = 0;

    while (i <= mid && j <= right) {
        if (arr[i] <= arr[j]) {
            tempArr[k++] = arr[i++];
        } else {
            tempArr[k++] = arr[j++];
            invCount += (mid - i + 1);
        }
    }

    while (i <= mid) {
        tempArr[k++] = arr[i++];
    }

    while (j <= right) {
        tempArr[k++] = arr[j++];
    }

    for (i = left; i <= right; i++) {
        arr[i] = tempArr[i];
    }

    return invCount;
}

// Example usage:
let arr = [1, 20, 6, 4, 5];
let N = arr.length;
console.log("Number of inversions are " + inversionCount(arr, N));

