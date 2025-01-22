let k = -2
// let coins =[2,4,9,3];
// let arr = []
// for(let i = 0; i < coins.length; i++) { 

//   if( k > 0) { 
//     if(i + k <= coins.length) { 
// arr.push(coins.slice(i, k + i).reduce((acc, cv) => acc + cv))
//     }
//     if(i + k  > coins.length -1) { 
//         let x = coins.length;
//         let s = i + k

//         if(x >= s) { 
//             arr.push([...coins.slice(i+1), ...coins.slice(0,x -s+1)].reduce((acc, cv) => acc + cv))
//         }
//         if(s  > x) { 
//                     arr.push([...coins.slice(i+1), ...coins.slice(0, s-x+1)].reduce((acc, cv) => acc + cv))
//                 }
//     }
// }else { 

//   if(i == 0) { 
//     arr.push(coins[0] + coins[coins.length -1])
//   }else { 
//   arr.push(coins[i] + coins[i-1])
    
//   }
// }
// }
// console.log(arr)