function fun(arr, target, i, e) { 

    if (i === arr.length -1) return e;

    if(arr[i] === target) { 
        e.push(arr[i])
    }

    return fun(arr, target, i + 1, e)
}
let arr = [1,2,3,3,3,3,3,4,5,6,7];
let e = []
console.log(fun(arr, 3, 0, e))