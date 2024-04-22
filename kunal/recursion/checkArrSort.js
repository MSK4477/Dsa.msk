// check the array is sorted or not

function sArr(arr, i) {  
    if(i == arr.length -1) { 
        return true
    }
    


    if(arr[i] < arr[i + 1]) { 
        return sArr(arr, i + 1)
    }else { 
        return false
    }
}
let a = [1,5,3,4,5]
console.log(sArr(a, 0))