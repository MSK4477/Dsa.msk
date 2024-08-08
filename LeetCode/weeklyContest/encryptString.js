let s = "dart", k = 3
let res = []
for(let i = 0; i < s.length; i++) { 
res.push(s.charAt((i+k)% s.length))
}
return res.join("")