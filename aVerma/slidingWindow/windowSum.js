const arr = [23,45,67,12,34,89]

let maxSum  = 0;

let windowSum = 0;

let n = 3;

for(let i = 0; i < n; i++)  {
    windowSum += arr[i]
}

maxSum = windowSum

for(let i = n; i < arr.length; i++) { 
    console.log(windowSum, "this is window Sum bro ")
    windowSum += arr[i] - arr[i-n]

    maxSum = Math.max(maxSum, windowSum)
}

console.log(maxSum, "this is the max sum feom the ")