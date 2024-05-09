let n = 5;
let first = [];

for (let i = n; i >= 1; i--) {
  let string = [];

  first.push(i);

  for (let j = 1; j < i; j++) {
    string.push(i);
  }

  let sum;

  sum = n - first.length;

  let last = string.slice(-sum, string.length);

  console.log([...first, ...last]);
}

let k =3
let coins = [1,3,5,7,9,8];
let arr = []
for(let i = 0; i < coins.length -1; i++) { 
    if(i + 3 <= coins.length) { 
arr.push(coins.slice(i, k + i))
    }
    if(i + k  > coins.length -1) { 
        let x = coins.length;
        let s = i + k

        if(x >= s) { 
            arr.push([...coins.slice(i+1), ...coins.slice(0,x -s+1)])
        }
        if(s  > x) { 
                    arr.push([...coins.slice(i+1), ...coins.slice(0, s-x+1)])
                }
    }
}
console.log(arr)
