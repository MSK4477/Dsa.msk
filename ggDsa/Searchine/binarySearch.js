const arr = [1,2,3,4,5,6,7];

const target = 7;
let left = 0;
let right = arr.length -1;

while(left <= right) { 
    let mid = Math.floor((left + right) / 2);
    if(arr[mid] == target) { 
       console.log(mid, "we found it man")
       break;
    }else  if (arr[mid] < target){  
        left = mid +1
        console.log("hello2")
    }else { 
        right = mid -1
    }
   
}


