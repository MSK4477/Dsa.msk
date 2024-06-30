// leetcode: 3149 

let nums =  [7,8,3,4,15,13,4,1]

function minimumAverage (nums) { 
    nums.sort((a,b) => a - b)

    let avg = 1000;
  let s = 0, e=nums.length -1
    while(s < e) { 
        avg = Math.min(avg, (nums[s] + nums[e]) / 2)
      s++
      e--
    }
    return avg
}
console.log(minimumAverage(nums))