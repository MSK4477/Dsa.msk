function mergeSort (arr, low, mid, high) { 
    
    let a1 = mid - low + 1

    // left arr size till mid  2 - 0 + 1 three elemenst 

    let a2 = high - mid;

    //right arr size  till high 4 - 2 = 2 two elements

    let left = [];
    let right = [];

    for(let i = 0; i < a1; i++) { 
left.push(arr[low + i])
    }

    for(let i = 0; i < a2; i++) {  
right.push(arr[mid + i + 1])
    }
let i = 0, j = 0, k = low;

while (i < a1  &&  j < a2) { 
    if(left[i] <= right[j]) { 
        arr[k] = left[i];
        i++;
    }else { 
        arr[k] = right[j];
        j++;
    }
    k++
}
while(i < a1) { 
    arr[k] = left[i];
    i++;
    k++
}
while(j < a2) { 
    arr[k] = right[j];
    j++;
    k++
}

return arr
}

let arr = [10, 20, 40, 20, 30]
let low = 0
let high = arr.length -1;
let mid = Math.floor(low + high / 2)
console.log(mergeSort(arr, low, mid, high))