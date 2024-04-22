function mergeSort(nums1, m, nums2, n) {
  let last = m + n - 1;

  while (m > 0 && n > 0) {
  if(nums1[m -1]  > nums2[n-1]) { 

    nums1[last--] = nums1[--m]

  }else { 
    nums1[last--] = nums2[--n] 
  }
  }

  while (n > 0) { 
    console.log(last, "last", "n", n)
    nums1[last--] = nums2[--n]
  }
  
  return nums1;
}
let nums1 = [2, 2, 3, 0, 0,0];
let m = 3;
let nums2 = [1, 5, 6];
let n = 3;
console.log(mergeSort(nums1, m, nums2, n));
