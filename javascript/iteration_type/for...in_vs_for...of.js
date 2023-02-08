let a=[10,42,20,30,52]
let b=[]
let c=[]
// here i will be index
for (i in a){
    b.push(i)
}

// here i will be value 
for(i of a){
    c.push(i)
}

console.log(b)
console.log(c)
