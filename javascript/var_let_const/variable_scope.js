
var a=10; //global variable
function f(){
    console.log(a) //this will print 10 we can access global variable everywhere in the global scope
    var b=20 //functional variable
    console.log(b) // this will print 20
}
console.log(a) // this will print 10
// console.log(b) // this will throw an error b can't access outside block scope
f()



let c=100
let d=400
function f2(){
    let d=200
    let e=500
    c=300
    console.log(c) // this will print 300 we can update the value using let keyword
    console.log(d) // this will print 200
}
f2()
console.log(d) // this will print 400
// console.log(e) //this will throw an error e can't access outside block scope


const g = 55;
function f3() {
    // g = 9 //this will throw an error because we can't update thsi value
    console.log(g)
}
f3();



{
    let f_name  = 'Alex';
    const ZIP = 500067;
    var age = 25;
}

// console.log(f_name); // Uncaught ReferenceError: f_name is not defined block scope
// console.log(ZIP);  // Uncaught ReferenceError: ZIP is not defined block scope
console.log(age);  // 25 functional scope

