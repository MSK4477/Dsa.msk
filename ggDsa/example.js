let arr = [3, 9, 1,4,6];
let maxDiff = 0;
let minIndex = arr.length -1;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] < arr[minIndex]) {
        minIndex = i;
    } else {
        maxDiff = Math.max(maxDiff, i - minIndex);
    }
}

console.log(maxDiff);
