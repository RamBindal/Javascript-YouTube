//If 
// const isUserloggedIn = true
// if (isUserloggedIn) {

// }
// if (2 == "2") {
//     console.log("Executed");
// }
// if (2 === "2") {               //Not Executed Becoz it checks the datatype also. 
//     console.log("Executed");
// }


// const score = 200;
// if (score > 100) {
//     const power = "Fly";
//     console.log(`User Power:${power}`)
// }

// const balance = 1000;

// if (balance <= 1000) {
//     console.log("Less than or equal to 1000");
// }
// else if (balance > 500) {
//     console.log("Greater than 500")
// }
// else if (balance > 750) {
//     console.log("Greater than 750")
// }
// else {
//     console.log("Please Check Your Number");
// }

const userLoggedIn = true
const debitVCard = true
const userLoggesInFromGoogle = false
const userLoggesInFromEmail = true

if (userLoggedIn && debitVCard) {
    console.log("Allow To Buy Courses")
}
if (userLoggesInFromEmail || userLoggesInFromGoogle) {
    console.log("User Logged In")
}
