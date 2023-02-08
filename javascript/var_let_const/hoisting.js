// hoisting in var vs let vs cons 

console.log(a) // here hoisting will take place and a will initialized with undefined
a=10
var a;

// console.log(b);  here we'll get error "ReferenceError: Cannot access 'b' before initialization" 
// here hositing take place but not initialized with undefined same for const keyword
let b=30
console.log(b)


