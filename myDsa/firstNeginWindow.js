let nums = [1, -2, -3, -4, 5, 6, -7];
let right = 3;
let ans = [];
let left = 0;
for(let i = 0; i < nums.length; i++) { 

left = i;
    while(right <= nums.length) { 
    if(nums[left] < 0) { 
        ans.push(nums[left])
        break;
    }
        left++
    }
    right++
}
console.log(ans)
