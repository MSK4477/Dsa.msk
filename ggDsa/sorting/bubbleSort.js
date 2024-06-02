function bubbleSort (arr)  { 
    let n = arr.length;

    for(let i = 0; i < n; i++) { 
        let swap = false;
        for(j = 0; j < n -i -1; j++) { 
            if(arr[j] > arr[j+1]) { 
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
                swap = true;
            }
        }
        if(!swap) { 
            break;
        }
    }
    return arr
}
const arr = [3,2,1]
console.log(bubbleSort(arr))

 /* 3 > 2 so it swaps [2, 3, 1]

 3  > 1 so it swaps [2, 1, 3]

 last element was already in correct position so we omit that one

 in second iteration we only go n -1 -i times

 i = 1;
 
 2  > 1 so we swap [1, 2, 3]

 so the iteration was completed

 i = 2 j = 0 j < 3-2-1 = 0 0 < 0 condition breaks 
 
 */

