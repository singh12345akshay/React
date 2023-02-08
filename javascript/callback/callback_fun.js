// Callback function used to call a function just after execution of another function 
// in Callback we just pass second function as an argument in first function

function Add(x,y,callback){
    console.log("sum is "+ (x+y) +" after executing add function square of sum will call automatically")
    let s=x+y
    callback(s)
}

function square_of_sum(s){
    console.log("square of sum is "+ s*s)
}

Add(2,3,square_of_sum)

// const button = document.getElementById('button');
// function callback(){
// console.log("Hello world");
// }

// button.addEventListener('click',callback);
// whenever we click on button then callback function will call and Hello World will be printed on console