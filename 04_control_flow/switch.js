// switch
// switch (key) {
//     case value:

//         break;

//     default:
//         break;
// }

// const month = 3;
// switch (month) {
//     case 1:
//         console.log("January");
//         break;
//     case 2:
//         console.log("February");
//         break;
//     case 3:
//         console.log("March");
//         break;
//     case 4:
//         console.log("April");
//         break;

//     default:
//         console.log("Default Case Matched");
//         break;
// }

/////++++++++++++++++ Falsy Values ++++++++++++++++/////
// False, 0, -0, BigInt(0n), "", null, undefined, Nan 

/////++++++++++++++++Truthy Values ++++++++++++++++/////
// "0", "False", " ", [], {}, function(){}

// const userEmail = []
// if (userEmail.length === 0) {
//     console.log("Array Is Empty");
// }

// const emptyObj = {}
// if (Object.keys(emptyObj.length === 0)) {
//     console.log("Object Is Empty")
// }


/////////////////////////////////////////////////////////////////////////////////////////
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
/////////////////////NULLISH COALESCING OPERATOR (??): null,undefined////////////////////
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
/////////////////////////////////////////////////////////////////////////////////////////

// let val1 = 5 ?? 10
// console.log(val1)

// let val1 = null ?? 10
// console.log(val1)

// let val1 = undefined ?? 10
// console.log(val1)

let val1 = undefined ?? 10 ?? 20
console.log(val1)

/////////+++++++++++Ternary Opeartor+++++++++++//////////
//condition?true:false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("Less Than 80") : console.log("More Than 80")

