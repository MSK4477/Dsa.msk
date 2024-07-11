// let n = 5;
// let first = [];

// for (let i = n; i >= 1; i--) {
//   let string = [];

//   first.push(i);

//   for (let j = 1; j < i; j++) {
//     string.push(i);
//   }

//   let sum;

//   sum = n - first.length;

//   let last = string.slice(-sum, string.length);

//   console.log([...first, ...last]);
// }

let k = -2
let coins =[2,4,9,3];
let arr = []
for(let i = 0; i < coins.length; i++) { 

  if( k > 0) { 
    if(i + k <= coins.length) { 
arr.push(coins.slice(i, k + i).reduce((acc, cv) => acc + cv))
    }
    if(i + k  > coins.length -1) { 
        let x = coins.length;
        let s = i + k

        if(x >= s) { 
            arr.push([...coins.slice(i+1), ...coins.slice(0,x -s+1)].reduce((acc, cv) => acc + cv))
        }
        if(s  > x) { 
                    arr.push([...coins.slice(i+1), ...coins.slice(0, s-x+1)].reduce((acc, cv) => acc + cv))
                }
    }
}else { 

  if(i == 0) { 
    arr.push(coins[0] + coins[coins.length -1])
  }else { 
  arr.push(coins[i] + coins[i-1])
    
  }
}
}
console.log(arr)

// let k = 3;
// let coins = [5,7,1,4]
// let arr = [];

// for (let i = 0; i < coins.length - 1; i++) {
//   if (i + k <= coins.length) {
//     arr.push(coins.slice(i, i + k).reduce((acc, cv) => acc + cv, 0));
//   }
//   if (i + k > coins.length - 1) {
//     let x = coins.length;
//     let s = i + k;

//     if (x >= s) {
//       let slicedArray = [...coins.slice(i + 1), ...coins.slice(0, x - s + 1)];
//       arr.push(slicedArray.reduce((acc, cv) => acc + cv, 0));
//     }
//     if (s > x) {
//       let slicedArray = [...coins.slice(i + 1), ...coins.slice(0, s - x + 1)];
//       arr.push(slicedArray.reduce((acc, cv) => acc + cv, 0));
//     }
//   }
// }

// console.log(arr);

