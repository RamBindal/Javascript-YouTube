//Singleton

//Object Literals
//Object.create

const mySym = Symbol("Key1")

const jsUser ={
    name:"Ram",
    "Full Name":"Ram Bindal",
    [mySym]:"myKey1",
    location:"Shamli",
    email:"ram@google.com",
    isLoggedIn:"False",
    lastlogindays:["Monday","Saturday"]
}
// console.log(jsUser.email)    ////Not A Good Practice
// console.log(jsUser["email"]) //// A Good Practice
// console.log(jsUser["Full Name"])   ////Its A Good Practice Because Of This.
// console.log(typeof mySym) 
// console.log(jsUser.mySym) //Not Good
// console.log(jsUser[mySym]) // Good
// console.log(typeof [mySym])  //Now Its An object
// jsUser.email="rambindal00@gmail.com"  //To change a value of a key in an object.
// console.log(jsUser["email"]) //// A Good Practice
// Object.freeze(jsUser)
// jsUser.email="rambindal02@gmail.com"  //To change a value of a key in an object.
// console.log(jsUser) //// A Good Practice
// console.log(jsUser["email"]) //// A Good Practice

jsUser.Greeting=function(){
    console.log("Hello JsUser")
}

jsUser.Greeting2=function(){
    console.log(`Hello JsUser, ${this.name}`)
}
console.log(jsUser.Greeting());
console.log(jsUser.Greeting2());