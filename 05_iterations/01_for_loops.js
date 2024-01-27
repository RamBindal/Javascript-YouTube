//For Loop

for (let i = 0; i < 10; i++) {
    const element = i;
    if (element == 5) {
        //console.log("5 is best number");
    }
    //console.log(element);
}
for (let i = 0; i < 10; i++) {
    const element = i;
    if (element == 5) {
        // console.log(`${element} : is best number`);
        continue;
    }
    // console.log(element);
}
for (let i = 1; i <= 10; i++) {
    // console.log(`outer loop ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`Inner Loop${j} and inner loop ${i}`);
        // console.log(`${i} * ${j} = ${i * j}`);
    }
}
let myarr = ["Flash", "BatMan", "SuperMan"]
// console.log(myarr.length);
for (let i = 0; i < myarr.length; i++) {
    const element = myarr[i];
    // console.log(element);
}

//break and continue
for (let i = 1; i <= 20; i++) {
    if (i == 5) {
        // console.log(`Detected 5`);
        break;                      //Breaks stops the execution of loop
    }
    // console.log(`Value of i is ${i}`);
}
for (let i = 1; i <= 20; i++) {
    if (i == 5) {
        // console.log(`Detected 5`);
        continue;                      //Breaks stops the execution of loop
    }
    // console.log(`Value of i is ${i}`);
}


