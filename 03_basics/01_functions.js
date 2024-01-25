function sayMyName() {
  console.log("R");
  console.log("A");
  console.log("M");
}
//sayMyName()
// function addTwoNumbers(num1, num2) {
//   //Here num1 and num2 are Parameters
//   console.log(num1 + num2);
// }
//addTwoNumbers(14, 34);   //Add in two numbers.     //And here the values are Arguments.
//addTwoNumbers(14, "34"); //Add number with string. //And here the values are Arguments.
//addTwoNumbers(14, null); //Add number with null.   //And here the values are Arguments.
// const result = addTwoNumbers(3, 4);
// console.log("result:", result);

// function addTwoNumbers(num1, num2) {
//     return(num1 + num2);
// }
// const result = addTwoNumbers(3, 4);
// console.log("result:", result);

function userLoggedIn(username) {
  return `${username} just logged in.`;
}
//console.log(userLoggedIn("Ram")); //Ram jjust logged in.
//console.log(userLoggedIn("")); // just logged in.
//console.log(userLoggedIn()); // undefined just logged in.

function userLoggedIn(username) {
  if (username === undefined) {
    console.log("Please Enter UserName");
  } else {
    return `${username} just logged in.`;
  }
}
// userLoggedIn();
// console.log(userLoggedIn());
// console.log(userLoggedIn(""));
// console.log(userLoggedIn("Ram"));
function userLoggedIn(username) {
  if (!username) {
    console.log("Please Enter UserName");
  } else {
    return `${username} just logged in.`;
  }
}
// console.log(userLoggedIn());

///////////////////////////////////////////////
// function CalculateCartPrice(...num1) {         //Rest Operator //Spread Operator.
//   return num1;
// }
// console.log(CalculateCartPrice(200,400,690));

function CalculateCartPrice(val1, val2, ...num1) {
  return num1;
}
//console.log(CalculateCartPrice(200,400,690));

// const user = {
//   username: "Ram",
//   price: 199,
// };
// function handleObject(anyobject) {
//   console.log(
//     `Username is:${anyobject.username} and Price is:${anyobject.price}`
//   );
// }
// handleObject(user); //Object In Function
// handleObject({
//   username: "Ram Bindal",
//   price: 189,
// });

const myNewArray = [200, 300, 400, 500, 600];
function returnSecondValue(getArray) {
  return getArray[1];
}
console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue(["200", 300, 400, 500, 600])); //Array in Function
