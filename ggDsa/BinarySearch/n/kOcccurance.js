
// function findNByKTimesOccurances(n,k,arr) { 

//     let nByk = Math.floor(n/k);

// let left = 0;
// let right  = arr.length -1;
// let res = 0;
// let count = 1;
// let temp;
// let a = [];
// while (right > left) {

   
//     if(arr[left] === arr[right]) { 
//         a.push(arr[left],arr[right])
//         if(arr[left] != null || arr[right] != null){
//         count++
//         }
//         arr[left] = null
//         left++
//         if(count > nByk) { 
//             res++
//                 }
        
//     }
//     if(arr[left] != arr[right]) { 
//         temp = left
//         left++
//     }
  
//     if(left === right -1  ) {

//         if(arr[left] === arr[right]) { 
//             a.push(arr[left],arr[right])
//             arr[left] = null
//             count++
//             if(count > nByk) { 
//                 res++
//                     }
//                     left = 0;
//                     right = temp
//                     temp = null;
//                     count = 1;
//         }else { 
//         left = 0
//         right = temp +1;
//         temp = null;
//         count = 1;
//         }
//     }

// }

// return res
    
// }
// const n = 15;
// const k = 5;
// const arr = [3, 2, 4, 1, 2,7 ,8 ,4 ,5 ,0, 7, 4, 0, 9, 9]
// console.log(findNByKTimesOccurances(n,k,arr))

function solution(arr, n, k) {
    arr.sort((a, b) => a - b);

    let count = 0;
  
    for (let i = 0; i < n;) {
      let cnt = 1;
  
      while ((i + 1) < n && arr[i] === arr[i + 1]) {
        cnt++;
        i++;
      }
  
      if (cnt > (n / k)) {
        count++
      }
      i++;
    }
    return count
  }
  
    const n = 8;
    const k = 4;
    
    const arr = [3, 1, 2, 2, 1, 2, 3, 3];
    
    console.log(solution(arr, n, k))

  