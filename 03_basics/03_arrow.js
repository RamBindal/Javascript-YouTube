const user = {
  username: "Ram Bindal",
  price: 999,
  welcomeMessage: function () {
    console.log(`${this.username}, welcome to website`);
    console.log(this);
  },
};
// console.log(user.username);
// console.log(user.price);
// user.welcomeMessage();
// user.username="Sam"
// user.welcomeMessage();
// console.log(this);

// function Chai() {
//   let username = "Ram Bindal";
//   console.log(this.username);
// }
// Chai();

// const Chai = function () {
//   let username = "Ram Bindal";
//   console.log(this.username);
// };
// Chai()

// const Chai = () => {
//   let username = "Ram Bindal";
//   console.log(this.username);
// };
// Chai();

//+++++Arrow Function++++++//

() => {};
// const addtwo = (num1, num2) => {
//   return num1 + num2;                           ////Explicit Return
// };
// console.log(addtwo(23, 45));

// const addtwo = (num1, num2) => num1 + num2;
// const addtwo = (num1, num2) => (num1 + num2);    ////Implicit Return
// console.log(addtwo(24, 3533));

const addtwo = (num1, num2) => ({ username: "Ram Bindal" });
console.log(addtwo());
