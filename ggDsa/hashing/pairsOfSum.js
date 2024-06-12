let sum = 14;
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function summ(arr, sum) { 
    let seen = new Set();

    for (let num of arr) {
        let complement = sum - num;
        if (seen.has(complement)) {
            console.log(complement,num, sum);
            return 1; // Found the pair, return 1
        }
        seen.add(num);
    }
    
    return 0; // No pair found, return 0
}

console.log(summ(arr, sum)); // Output: 1 (if pair is found) or 0 (if no pair is found)
