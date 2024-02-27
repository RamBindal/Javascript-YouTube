const func1 = {
  "Ram Bindal": "Software Developer",
  "Siddharth Shrivastav": "Software Engineer",
};
//console.log(func1["Ram Bindal"]);
//console.log(func1["Siddharth Shrivastav"]);

const array = ["Ra m", "Si dd "];
const array2 = ["La kh an ", "Anmol "];
let strings = "Hello Ram  ";

Object.prototype.ram = function () {
  console.log("Ram is present in all objects ");
};

array.ram();
array2.ram();
strings.ram();

String.prototype.truelength = function () {
  console.log(`${this.trim()}`);
  console.log(`True Lenght Is: ${this.trim().length} `);
};
strings.truelength();
"Ram    ".truelength()
"  Sidd".truelength()

