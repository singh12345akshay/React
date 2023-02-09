// we use promises to get the resulting value of the  asynchronous operation
let isLoggedIn=true
function isUserLoggedin(){
const promise=new Promise((resolve,reject) => {
   setTimeout( () => {if(isLoggedIn){
        resolve("User logged in..")
    }else{
        reject()
    }
},3000)
})
return promise
}

setTimeout(() =>{
    isLoggedIn=false
},2000)

isUserLoggedin().then((message)=>{
    console.log(message)
}).catch(() => {
    console.log("User logged out!!")
})