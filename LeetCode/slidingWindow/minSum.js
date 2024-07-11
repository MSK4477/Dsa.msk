
//209. Minimum Size Subarray Sum

// approach : 1
let arr = [2,3,1,2,4,3];
let target = 7;
let l = 0;
let r = 0;
let sum = 0;
let window = arr.length + 1;
while (r < arr.length) {
  sum += arr[r];
  while(sum >= target) {
  window = Math.min(window, (r - l) + 1);
  sum -= arr[l++];
  } 
  r++
}
console.log(window);


// approach:2 
