// return an array
let a=[23,19,10,32,62,20,18]

function iseven(value){
    if(value%2===0){
        return value
    }
}

let even_num=a.filter(iseven)
console.log(even_num)

// using arrow function

let b=a.filter((value) =>{ 
    return value%3===0
})
console.log(b)

let students=[{name:"akshay",marks:"90"},
    {name:"dushyant",marks:"78"},
    {name:"aman",marks:"91"},
    {name:"neharika",marks:"93"},
    {name:"sambhav",marks:"92"}]
// find name of student who got 90+

let toppers=students.filter((students)=>students.marks>90)
// in above line it return the object for which their marks is > 90
for(let i=0;i<toppers.length;i++){
    console.log(toppers[i].name)
}



