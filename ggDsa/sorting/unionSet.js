function unionSize(a, b) { 

    let sett = new Set(a);
    for(let i = 0; i < b.length; i++) { 

        sett.add(b[i])
    }
    let arr = []
   sett.forEach((value) =>  { 
   arr.push(value)
   })

   return arr

}
let a = [15, 20, 5, 15];
let b = [15,15,15,20,10]

console.log(unionSize(a,b))