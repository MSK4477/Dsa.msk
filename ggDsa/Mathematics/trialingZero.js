function trialZeros(n) { 
     
    let res = 0;

    for(let i = 5; i <= n; i = i*5 ) { 
        res = res + Math.floor(n/i);

    }
    return res
}
console.log(trialZeros(251))

//2
/*while (fact % 10  == 0) { 
    let res = Math.floor(fact/10)

}
*/