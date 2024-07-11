

let s = "bcbbbcba"

function topMostTwoStr(s)  { 
    let charMap = new Map()
let start = 0 ;
let res = 0;
    for(let i = 0; i < s.length; i++) { 
        charMap.set(s[i], (charMap.get(s[i]) || 0) + 1)

       while(Array.from(charMap.values()).some(count => count > 2)) { 
        let left = s[start]
            charMap.set(left, charMap.get(left) -1)
            if (charMap.get(left) === 0) {
                charMap.delete(left);
            }
           start++
       }
        res = Math.max(res, (i - start) + 1)
    }
    return res
}

console.log(topMostTwoStr(s))