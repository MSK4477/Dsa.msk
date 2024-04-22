var digit  = [121];

let rev = 0, temp = digit

while (temp != 0) { 

    rev = rev * 10 + temp%10
    temp = Math.floor(temp/10)

}

console.log(rev === digit[0])