// let a = 10;
// const b = 20;
// var c = 30;
// console.log(a);
// console.log(b);
// console.log(c);

if (true) {
  let a = 10;
  const b = 20;
  var c = 30;
}
// console.log(a);
// console.log(b);
// console.log(c);

function one() {
  const username = "Ram Bindal";
  function two() {
    const website = "You Tube";
    console.log(username);
  }
  two();
  // console.log(website);
}
// one();

//+++++++++++++++++++++++++++Interesting+++++++++++++++++++++++++++//
// function addone(num) {
//   return num + 1;
// }
// addone(5);

// const addtwo = function (num) {
//   return num + 1;
// };
// addtwo(5);

console.log(addone(5)); //Ok With It
function addone(num) {
  return num + 1;
}

// console.log(addtwo(5)); //Gives An Error  //Function Hoisting
const addtwo = function (num) {
  return num + 1;
};
