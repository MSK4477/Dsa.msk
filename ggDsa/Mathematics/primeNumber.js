function isPrime(num) { 
    for(let i = 2; i <= num; i++) { 
    let isP = true;
for(let j = 2; j < i; j++) { 
    if(i % j == 0) { 
        // console.log(i, j)
        isP = false
        break
    }
}
if(isP) { 
    console.log(i)
    // return i
}
    }
}
console.log(isPrime(10))