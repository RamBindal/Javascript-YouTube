//For Of Loop

// ["","",""]
// [{},{},{}]

const arr = [1, 2, 3, 4, 5]
for (const i of arr) {
    // console.log(i);
}

// const greeting = "Hello World and Ram"
// for (const i of greeting) { 
//     console.log(i);
// }

const greeting = "Hello World and Ram"
for (const i of greeting) {
    if (i == " ") {
        continue;
    }
    // console.log(i);
}

//Maps
const map = new Map()
map.set("IN", "INDIA")
map.set("US", "United States")
map.set("FR", "France")
map.set("IN", "INDIA")
// console.log(map);


for (const [key, value] of map) {
    // console.log(key,':-',value);
}

// const myObject = {
//     'game1': 'NFS',
//     'game2': 'spiderman'
// }
// for (const [key, value] of myObject) {
//     // console.log(key, ':-', 'value');
// }

////Loop used on Object////
const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift: 'swift by apple'
}
// for (const key in myObject) {
//     console.log(`${key} shortcut is for :- ${myObject[key]}`);
// }

// for (const key in myObject) {
//     console.log(myObject);
// }

// for (const key in myObject) {
//     console.log(myObject[key]);
// }

// for (const key in myObject) {
//     console.log(key);
// }

// const programming = ["js", "rb", "py", "java", "cpp"]

// for (const key in programming) {
//     console.log(programming[key]);
// }

// const map1 = new Map()
// map1.set("IN", "INDIA")
// map1.set("US", "United States")
// map1.set("FR", "France")
// map1.set("IN", "INDIA")

// for (const key in map) {
//     console.log(key);
// }

