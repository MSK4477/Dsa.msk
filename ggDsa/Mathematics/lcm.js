// Function to find GCD using Euclidean algorithm
function gcd(a, b) {
    if (b === 0) {
        return a;
    } else {
        console.log(gcd(b, a % b), "thos o s");
        return gcd(b, a % b);
    }
}

// Function to find LCM
function lcm(a, b) {
    return (a * b) / gcd(a, b);
}

// Example usage
const num1 = 12;
const num2 = 18;
const result = lcm(num1, num2);
console.log("LCM of", num1, "and", num2, "is:", result);
