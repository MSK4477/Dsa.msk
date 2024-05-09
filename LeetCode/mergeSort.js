function mergeSort(nums1, m, nums2, n) {
  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1;

  while (i >= 0 && j >= 0) {
      if (nums1[i] > nums2[j]) {
          nums1[k--] = nums1[i--];
      } else {
          nums1[k--] = nums2[j--];
      }
  }

  while (j >= 0) {
      nums1[k--] = nums2[j--];
  }

  return nums1;
}

let nums1 = [2, 2, 3, 0, 0, 0];
let m = 3;
let nums2 = [1, 5, 6];
let n = 3;

console.log(mergeSort(nums1, m, nums2, n));

// https://wbd.ms/share/v2/aHR0cHM6Ly93aGl0ZWJvYXJkLm1pY3Jvc29mdC5jb20vYXBpL3YxLjAvd2hpdGVib2FyZHMvcmVkZWVtL2Q0NGExNWQyMjFmYzRjN2I4YjY1NjRmMTEzYzk2YmQ0X0JCQTcxNzYyLTEyRTAtNDJFMS1CMzI0LTVCMTMxRjQyNEUzRF9jODBiYTY2Yy1iYzJhLTQxY2ItOGM0ZS1jNzRkYTZkNTIxZTg=
