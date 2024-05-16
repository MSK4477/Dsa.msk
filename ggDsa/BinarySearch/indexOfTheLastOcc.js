function rBinarySearch(arr, l, r, t) { 
    if(l >=r) { 
        return l
    }

    let mid = Math.floor((l + r) / 2);

    if(arr[mid] == t) { 
        if(mid == arr.length -1 || arr[mid +1] != t) { 
            return mid
        }else { 
            return rBinarySearch(arr,  mid +1,r, t)
        }
    }
    if(arr[mid] > t) { 

        return rBinarySearch(arr, l, mid -1, )
    }else { 
        return rBinarySearch(arr, mid+1, r, t)
    }
}
let arr = [10, 20, 20, 20, 20, 30, 30, 30, 30]
let left = 0;
let right = arr.length -1;
let target = 30
let count = 0;
console.log(rBinarySearch(arr,left,right,target, count ))

