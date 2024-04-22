//function for sum of digits;

function fun(n) {
    if(n < 1) return n;

    return fun(Math.floor(n/10)) + n % 10
}
console.log(fun(1234));