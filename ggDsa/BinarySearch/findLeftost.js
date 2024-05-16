let arr = [1 ,1 ,2 ,2, 3, 4, 5, 5, 6, 7];
let x = 1;
let left = 0;
let right = arr.length - 1;

let result = -1;

while (left <= right) {
    let mid = Math.floor((left + right) / 2); // Corrected mid calculation
    if (arr[mid] === x) {
        result = mid; 
        right = mid - 1; 
    } else if (arr[mid] > x) {
        right = mid - 1;
    } else {
        left = mid + 1;
    }
}

console.log(result); 
