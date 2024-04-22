function primeFactors(n) {
    const factors = [];
    let divisor = 2;

    while (n >= 2) {
        if (n % divisor === 0) {
            factors.push(divisor);
            n = n / divisor;
            console.log(n, "this is n")
        } else {
            divisor++;
        }
    }
    return factors;
}

const number = 160;
const result = primeFactors(number);
console.log( result);
