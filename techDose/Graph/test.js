let grid = [[5,1,0],[-5,-5,-5]]


let r = 0;
let right = grid[0].length -1;
let left = 0;
let count = 0;
while(left  <= right && r <= grid.length -1) { 
    let mid = Math.floor((left + right) / 2);

    if(grid[r][0] < 0) {
        count += grid[r].length
            left = 0;
            right = grid[0].length -1
            r++
    }
    if(grid[r][1] < 0) {
        count += grid[r].length -1
            left = 0;
            right = grid[0].length -1
            r++
    }
    else { 
    
    if(grid[r][mid]  < 0) { 
        count++
        if(left == right) { 
            left = 0;
            right = grid[0].length -1
            r++
        }else { 
        left = mid + 1;
        }
    }else if(grid[r][mid] >=  0){
        if(left == right) { 
            left = 0;
            right = grid[0].length -1
            r++
        }else { 
        left = mid + 1;
        }
    }
}   
    }
    
    console.log(count)
