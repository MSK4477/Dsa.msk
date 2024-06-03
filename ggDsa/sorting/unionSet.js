function unionSize(a, b) { 

    let sett = new Set(a);
    console.log(sett, "0")
    for(let i = 0; i < b.length; i++) { 
        console.log(sett, "sett 1")

        sett.add(b[i])
        // sett.add(a[i])
        console.log(sett, "sett")
    }
    return sett.size;


}
let a = [15, 20, 5, 15];
let b = [15,15,15,20,10]

console.log(unionSize(a,b))