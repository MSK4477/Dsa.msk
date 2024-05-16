function sqrtBinary(x) { 
    let low = 1;
    let high = x;
    let res = 1;
    while(low <= high) { 
        let mid = Math.floor(low + high) /2
        if(mid * mid === x) { 
            return mid
        } else if (mid * mid > x) { 
            high = mid -1;
        }else { 
            low = mid + 1;
             res = mid;
        }
    }
    return res
}
console.log(sqrtBinary(8))