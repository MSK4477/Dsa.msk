//Find Pair Given Difference

let arr = [2,7,6,4]
let t = 9;

let newSet = new Set(arr);

for(let i = 0; i < arr.length; i++) {
    let diff = t - arr[i];

    if(newSet.has(diff))  { 
        // console.log(arr.indexOf(diff), arr.indexOf(arr[i]))

        return true
    }else { 
        false
    }
}