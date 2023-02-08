// Re-declaration and update using keyword var,let,const

var a=10;
var a=25;
// we can re-declare the variable "a" if we use var keyword while creating this.

let c=20;
// let c=30 this will throw an error because we can't re-declare var c using keyword let
c=30 //we can update the value of c
console.log(c)

const b="akshay";
// const b="singh" this will throw an error because we can't re-declare var c using keyword const
// b="singh" this will also throw an error because we can't update var using const keyword
console.log(b)

const t = {
    prop1: 10,
    prop2: 9
}
 
// It is allowed we can chnage the value of property
t.prop1 = 3

// It is not allowed we can't change the property of object
// t = {
//     b: 10,
//     prop2: 9
// }

