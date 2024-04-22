function countInt(x){
var res = 0;

while(x > 0) { 
    x = Math.floor(x/10)
    res ++
}
return res
}
console.log(countInt(1234))

// Time Complexity is Theta(n)