var numberOfSteps = function(num) {
    return rZero(num, 0);
};

function rZero(n, count) {
    if (n < 1) {
        return count;
    }
    if (n % 2 === 0) { 
        n = n / 2;
        count++;
    } else { 
        n = n - 1;
        count++;
    }
    return rZero(n, count);
}
console.log(numberOfSteps(8));
