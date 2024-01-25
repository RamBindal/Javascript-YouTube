const marval_heroes=["Thor","IronMan","Spiderman"]
const dc_heroes =["superman","batman","Flash"] 
// marval_heroes.push(dc_heroes)
// console.log(marval_heroes)
// console.log(marval_heroes[3])
// console.log(marval_heroes[3][0])
// console.log(marval_heroes[3][1])
// console.log(marval_heroes[3][2])

const newheroes=marval_heroes.concat(dc_heroes)     //Conact Operator
// console.log(newheroes);
const allnewheroes=[...marval_heroes,...dc_heroes]  //Spread Operator
//console.log(allnewheroes);
const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]  //Converts all array and sub-array into Array
const real_array=another_array.flat(Infinity)
//console.log(real_array);
//console.log(Array.isArray("RamBindal"))           //Check If Is Array Or Not
//console.log(Array.from("RamBindal"))              //Convert Into Array 
//console.log(Array.from({name:"RamBindal"}))       //If not possible to convert into array it gives us an empty array
 let score1=100
 let score2=200
 let score3=300
 console.log(Array.of(score1,score2,score3));