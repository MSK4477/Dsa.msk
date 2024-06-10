function intersection(a,b) { 
    let m = a.length, n = b.length;

    let i = 0, j = 0 ;

    while(i < m && j < n) { 
    if(i > 0 && a[i] === b[i-1]) { 
            i++
        }else if(a[i] < b[j]) { 
            i++
        }else if(a[i] > b[j]) { 
            j++
        }else {
          console.log(a[i])
            i++;
            j++;
        }
    }
}
let a = [10, 20, 20,40, 60];
let b = [2,20,20,20];

console.log(intersection(a, b))