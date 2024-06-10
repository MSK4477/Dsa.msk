function partion(arr, l, h) { 
    let pivot = arr[h]

    let i = l-1, j = h+1;


    while(true) { 
        do{
            i++
        }while(arr[i] < pivot)
    
    do{
        j--
    }while(arr[j] > pivot)

        if(i>=j) { 
            return j
        }
        [arr[i], arr[j]] = [arr[j], arr[i]]
    }
}
let arr = [10, 7, 8, 6, 9, 1, 2, 5];
let l = 0 ;
let h = arr.length -1

console.log(partion(arr, l, h))
