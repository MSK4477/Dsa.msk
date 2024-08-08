// function defuseTheBomb(code, k) { 
// if(k < 0)return caseTwo(code, k)

//     return caseOne(code, k)
// }


// function caseOne(arr, k) {
//     let sumOfK = 0;
//     for (let i = 0; i < k; i++) {
//         sumOfK += arr[i];
//     }
//     let res = [];
//     for (let i = 0; i < arr.length; i++) {
//         sumOfK -= arr[i];
//         sumOfK += arr[(i + k) % arr.length];
//         res.push(sumOfK);
//     }
//     return res;
// }

// function caseTwo(arr, k) {
//     return caseOne(arr.reverse(), -k).reverse();
// }
// console.log(defuseTheBomb([2,4,9,3], -3))



var decrypt = function (code, k) {
    let decoded = Array(code.length).fill(0)
    if (k == 0) return decoded

    let direction = k < 0 ? 1 : -1

    for (let i = 0; i < code.length; i++)
        for (j = k; j != 0; j += direction) {
            let idx = (i + j) % code.length // lower index
            idx < 0 ? idx += code.length : idx // increase index
            decoded[i] += code[idx]
        }
    return decoded
};
console.log(decrypt([2,4,9,3], -2))


