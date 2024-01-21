// Primitive
// 7 Types - String,Number,Boolean,null,undefined,Symbol,BigInt

// Non-Primitive (Reference)
//Array,Objects,Functions

//const id=Symbol("123")
//const anotherId=Symbol("123")
//console.log(typeof id);
//console.log(typeof anotherId);
//console.log(id===anotherId);

//const bigNumber = 320975823852850235n
//console.log(typeof bigNumber);
//console.log(bigNumber);

//const heroes = ["Shaktiman","naagraj","doga"] //Array
//let myObj = {    //Objects
    //name:"ram",
    //age:22,
//}
//const myFunction = function(){   //Functions
    //console.log("Hello World!!!")
//}
//myFunction()

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

//// MEMORY ////
//Stack(Primitive), Heap(Non-Primitive)//
//let nameOne="Ram"
//let nameTwo=nameOne
//nameTwo="Bindal"
//console.log(nameOne);
//console.log(nameTwo);

let userOne={
    userEmail:"ram@gmail.com",
    upi:"user@ybl"
}
console.log(userOne);
let userTwo=userOne
userOne.userEmail="rambindal@gmail.com"
console.log(userOne);
console.log(userTwo);
