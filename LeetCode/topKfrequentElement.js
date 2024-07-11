    //347. Top K Frequent Elements

    var topKFrequent = function(nums, k) {
        let counts =  new Map()
        for(let i = 0; i < nums.length; i++) { 
                counts.set(nums[i], (counts.get(nums[i]) || 0) + 1);
        }
return [...counts].sort((a, b) => b[1] - a[1]).slice(0, k).map(item => item[0])
    };
    let nums = [5,3,1,1,1,3,5,73,1], k = 3
    console.log(topKFrequent(nums, k))