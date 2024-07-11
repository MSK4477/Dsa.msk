function productOfArray(nums) { 

    let res =[];
    let product = 1;
    let window = 0;
    for(let i = 1; i < nums.length; i++) { 
        product *= nums[i]
        if(i + window > window) { 
let remain = (i + window) - window -1
console.log(remain, "remain")
            res.push([...nums.slice(i+1) ,...nums.slice(0, remain+1)].reduce((acc, cv) => acc * cv))
        }
    }
    // res.unshift(product)
    return res
}
let nums = [1,2,3,4]
console.log(productOfArray(nums))





// 238. Product of Array Except Self
// function productOfArray(nums) {
//     const n = nums.length;
//     const result = Array(n).fill(1);
    
//     let leftProduct = 1;
//     for (let i = 0; i < n; i++) {
//         result[i] = leftProduct;
//         leftProduct *= nums[i];
//     }
    
//     let rightProduct = 1;
//     for (let i = n - 1; i >= 0; i--) {
//         result[i] *= rightProduct;
//         rightProduct *= nums[i];
//     }
    
//     return result;
// }

// let nums = [1, 2, 3, 4];
// console.log(productOfArray(nums)); // Output: [24, 12, 8, 6]

