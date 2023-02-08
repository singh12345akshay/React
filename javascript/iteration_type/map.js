
// return an array
// map function iteratable all element of the array and perform the function
// on each element of the array
// doesn't modify original array
let a=[20,13,6,9,14]
let b=a.map(f)

function f(value){
    return(value*value)
}
console.log(b)

// another way of writing this

console.log([6, 7, 4, 5].map((val)=>{
    return val*val;
}))

// we can take value(required),index, array itself (both optional) arguments in the callback function
var arr = [2, 5, 6, 3, 8, 9];
 var newArr = arr.map((val, index)=>{
    return {key:index, value:val*val };
})
 
console.log(newArr)



// It returns a new array and elements of arrays are the result of the callback function. 






