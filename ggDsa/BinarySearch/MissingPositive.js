function findMissingPos(arr, n) {
  arr.sort((a, b) => a - b);
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] <= 0) {
      arr.splice(i, 1);
    }
  }

  if (arr[0] !== 1) {
    return 1;
  }
  for (let i = 0; i < arr.length - 1; i++) {
    if (!arr.includes(arr[i] + 1)) {
      return arr[i] + 1;
    }
  }

  let x = arr.reduce((acc, cv) => {
    return acc + cv;
  });

  if (x === ((arr[arr.length - 1] + 1) * arr[arr.length - 1]) / 2) {
    return arr[arr.length - 1] + 1;
  }
}
let arr = [
  85, -47, 1, 4, 49, -18, 10, 26, 18, -11, -38, -24, 36, 44, -11, 45, 20, -16,
  28, 17, -49, 47, -48, -33, 42, 2, 6, -49, 30, 36, -9, 15, 39, -6, -31, -10,
  -21, -19, -33, 47, 21, 31, 25, -41, -23, 17, 6, 47, 3, 36, 15, -44, 33, -31,
  -26, -22, 21, -18, -21, -47, -31, 20, 18, -42, -35, -10, -1, 46, -27, -32, -5,
  -4, 1, -29, 5, 29, 38, 14, -22, -9, 0, 43, -50, -16, 14, -26,
];
// let arr = [1,2,3,4,5]
let n = 5;
console.log(findMissingPos(arr, n));
