//const myarr = [] % DebugPrint(myarr);
// continous , holey

// SMI (small integer)
//Packed element
// Double (float, string, function)

const arrTwo = [1, 2, 3, 4, 5];
//Packed_SMI_Elements
arrTwo.push(6.0);
//Packed_Double_Element
arrTwo.push("7");
//Packed_Elements
arrTwo[10] = 11;
//Holey_Elements
console.log(arrTwo);
console.log(arrTwo.length);
console.log(arrTwo[9]);

//Bound Check
//hasOwnProperty(arrTwo,9)
//hasOwnProperty(arrTwo.prototype,10)
//hasOwnProperty(Object.prototype,10)      //Holes Are Very Expensive In Nature.

const arrThree = [1, 2, 3, 4, 5];
console.log(arrThree[2]);

//SMI > DOUBLE > PACKED
//H_SMI > H_DOUBLE > H_PACKED

const arrFour = new Array[3]();
//just 3 holes.Holey_SMI_Elements
arrFour[0] = "1"; //HOLEY_ELEMENTS
arrFour[1] = "2"; //HOLEY_ELEMENTS
arrFour[3] = "3"; //HOLEY_ELEMENTS

const arrFive = [];
arrFive.push("1"); //PACKED_ELEMENTS
arrFive.push("2"); //PACKED_ELEMENTS
arrFive.push("3"); //PACKED_ELEMENTS

const arrSix = [1, 2, 3, 4, 5];
arrSix.push(NaN);
arrSix.push(undefined);
