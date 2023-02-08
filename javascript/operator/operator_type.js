//  ! Not operator
console.log("NOT operator")
let p="akshay"
console.log(!p) //this will print false

// != not equal operator
console.log("NOT Equal operator")
let a=10;
if(a!=0){
    console.log("this is if")
}
else{
    console.log("else printed")
}



//  '==' Equal to operator
console.log("Equal to operator")
let x='5'
if(x==5){
    console.log(typeof(x))
    console.log("this will check only value not type")
}
else{
    console.log("this is else")
}



// '===' equal value and equal type (Strict Equal)
console.log("'===' Equal value and equal type (strict Equal)")
let y='25'
if(y===25){
    console.log("this will not be printed")
}
else if (y==='25'){
    console.log("this will check value as well as type")
}

console.log(1===1) //return true
console.log(0===false) //return false
console.log(null===0)  //return false
console.log(true===1)  // return false


// || OR operator "return value of operand"
console.log("OR operator")
console.log(1 || 3)
console.log(null || undefined)
console.log(null || 1)
console.log(-1 || 3)
console.log(1 || 0)


//  && AND operator 
console.log("AND operator")
console.log( 1 && 0)
console.log(undefined && null)
console.log(null && false)
console.log(null && true)

// ternary operator
let max=function Max_in_three(x,y,z){
    return ((x>y && x>z)?x+" is greater":(y>z && y>x)?y+" is greater":z+"is greater")
}

console.log(max(12,64,56))