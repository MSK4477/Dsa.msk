// function gcd(n, x)  { 

    // let num;
    // let num2  ;
    // if(n > x) num = n,num2 = x ;
    // else num = x, num2 = n

    // while (num2 != 0)   { 

    //     let temp = num2;
    //       num2 = num % num2
    //       num = temp
    // }
    // return num


// }
// console.log(gcd(100, 20))

function gcd(n, x) {

let g;
    for (let i = 1; i <= n; i++) {

        if (n % i === 0 && x % i === 0) {
            g = i
        }
    }

    return g; 
}

console.log(gcd(496,24)); 
