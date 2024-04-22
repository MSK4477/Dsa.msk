


function fun(s, start, end) {
    if(start >= end) return true;

    return(s[start] == s[end]) && fun(s, start + 1, end - 1);
}
console.log(fun("abbam", 0, 4));
let a = "abac"

let s = a.slice(1, -1)
console.log(s, "Ss")

function power(n, k) {
    // Base case: if k is 0, return 1 (anything raised to the power of 0 is 1)
    if (k === 0) {
        return 1;
    }

    // Recursive case: multiply n with the result of power(n, k-1)
    // This effectively calculates n raised to the power of (k-1), and then multiplies it by n
    return n * power(n, k - 1);
}









  