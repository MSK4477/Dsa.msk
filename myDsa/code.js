// let n = 3;
// let first = [];
// for (let i = n; i >= 1; i--) {
//   let string = [];

//   first.push(i);
//   for (let j = 1; j < i; j++) {
//     string.push(i);
//   }

//   var diff;
//   if (i === n && i === 1) {
//     diff = null;
//   }

//   diff = n - first.length;

//   let last = string.slice(-diff , string.length);

//   let final = [...first, ...last].join(" ");
//   console.log(final);
// }

// let n = 5;

// let first = [];

// for (let i = n; i >= 1; i--) {
//   first.push(i);
//   let string = [];

//   for (let j = 1; j < n; j++) {
//     string.push(i);
//   }

//   let sum;
//   if (i === n || i === 1) {
//     sum = null;
//   }
//   sum = n - first.length;
//   let second = string.slice(-sum, string.length);

//   if (i === 1) {
//     console.log(first);
//   } else {
//     console.log([...first, ...second]);
//   }
// }
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

// let a = [12, 13, 14, 15, 16]
// let k = 3;

// let arr = [];
// for (let i = 0; i < a.length - 1; i++) {
//   if (i + k <= a.length) {
//     arr.push(a.slice(i, k + i));
//   }

//   if (i + k > a.length - 1) {
//     let x = a.length;
//     let s = i + k;

//     console.log(`this is x ${x} and this S ${s} this is ${i} ${k}`)

//     if(x >= s) { 
//         arr.push([...a.slice(i +1), ...a.slice(0, x-s + 1)])
//         console.log(s-x, "x")
        
//     }if(s  > x) { 
//         arr.push([...a.slice(i +1), ...a.slice(0, s-x+1)])
//         console.log(s-x, "x")
//     }
  
//   }
// }
// console.log(arr);

// function fact(n) {
//     if (n <= 1) {
//         return 1;
//     }
//     return fact(n - 1) + fact(n - 2);
// }

// console.log(fact(3)); 


// let arr = [1,2,3];
// let res = []
// for(let i = 0; i < arr.length; i++) { 
//     var product = 1;

//     for(j = i+1; j < arr.length; j++) {
//         product *= arr[j]
//         console.log(product, arr[j])
//     }
//     for(let j =0; j < i; j++) { 
//         product *= arr[j]
//     }
//     res.push(product)
// }
// console.log(res)

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


// let a = [12, 13, 14, 15, 16]
// let k = 3;

// let arr = [];
// for (let i = 0; i < a.length - 1; i++) {
//   if (i + k <= a.length) {
//     arr.push(a.slice(i, k + i));
//   }

//   if (i + k > a.length - 1) {
//     let x = a.length;
//     let s = i + k;

//     console.log(`this is x ${x} and this S ${s} this is ${i} ${k}`)

//     if(x >= s) { 
//         arr.push([...a.slice(i +1), ...a.slice(0, x-s + 1)])
        
//     }if(s  > x) { 
//         arr.push([...a.slice(i +1), ...a.slice(0, s-x+1)])
//     }
  
//   }
// }
// console.log(arr);

 
 	
// const obj = {
//     value: 42,
//     getValue: function() {
//       name:this.value
//     }
//   };
  
//   const getValueFn = obj.getValue;
//   getValueFn();
