function findMajority(arr, n) {
  arr.sort((a, b) => a - b);

  let res = [];
  let count = 0;
  for (let i = 0; i < n; ) {
    let cnt = 1;
    while (i + 1 < n && arr[i] === arr[i + 1]) {
      cnt++;
      i++;
    }
    count = Math.max(count, cnt);
    if (cnt >= count) {
      res[0] = arr[i];
    }
    i++;
  }
  return res[0];
}
let arr = [3, 1, 3, 3, 2, 2, 2];
let n = 6;
console.log(findMajority(arr, n));
