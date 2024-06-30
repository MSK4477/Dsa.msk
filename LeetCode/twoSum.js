//1. Two Sum

var twoSum = function(nums, target) {
    
let arr = []
    nums.forEach((num, i) => { 
arr.push([num,i])
    })
    arr.sort((a,b) => a[0] - b[0])

    let l = 0, r = nums.length -1;
    while(l < r) { 
        if(arr[l][0] + arr[r][0] === target) {
            return [arr[l][1] , arr[r][1]]

        }else if(arr[l][0] + arr[r][0] > target){ 
            r--
        }else { 
            l++
        }
    }
    return arr;
};
console.log(twoSum([2,7,11,15,1, 3,4], 9))