
function groupAnagram (str){ 
let strMap = new Map();

for(let i = 0; i < str.length; i++) { 
    let sortedStr = str[i].split("").sort().join("")

    if(!strMap.has(sortedStr)) { 
strMap.set(sortedStr, [str[i]])
    }
    else { 
strMap.get(sortedStr).push(str[i])
    }
}
return [...strMap.values()]
}
let str = ["act","pots","tops","cat","stop","hat"];
console.log(groupAnagram(str))