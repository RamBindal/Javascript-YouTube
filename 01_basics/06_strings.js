const name ="Ram"
const repoCount = 50

// console.log(name + repoCount );

// console.log(`Hello My Name Is:${name} and my repo count is: ${repoCount}`) //String InterPolation

const gameName = new String("Ram Bindal")
//console.log(gameName);
//console.log(gameName[0]);
//console.log(gameName[1]);
//console.log(gameName[2]);
//console.log(gameName[3]);
//console.log(gameName[4]);
//console.log(gameName[5]);
//console.log(gameName[6]);
//console.log(gameName[7]);
//console.log(gameName[8]);
//console.log(gameName[9]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf("m"));
console.log(gameName.charCodeAt(2));

const newString = gameName.substring(0,6)
console.log(newString);

const anotherString = gameName.slice(0,-5)
console.log(anotherString);

const anotherStringOne = "  Ram"
console.log(anotherStringOne.trim());

const url="Https://ram.com/ram%20bindal"
console.log(url.replace("%20",""));
console.log(url.includes("ram"));
console.log(url.includes("bindal"));
console.log(url.includes("sun"));
console.log(url.includes(" "));
console.log(url.includes(""));
console.log(url.includes(":"));
console.log();