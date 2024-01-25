// //Singleton

// const tinderUser = new Object()
// tinderUser.id="123abc"
// tinderUser.name="sam"
// tinderUser.isLoggedIn=false
// //console.log(tinderUser);

// // const tinderUser1 = {}
// // console.log(tinderUser1);

// const regularUser={
//     email:"some@gmail.com",
//     fullname:{
//         userFullname:{
//             fisrtName:"Ram",
//             lastName:"Bindal"
//         }
//     }
// }
// // console.log(regularUser.fullname);
// // console.log(regularUser.fullname.userFullname);
// // console.log(regularUser.fullname.userFullname.fisrtName);

// const obj1={1:"a",2:"b"}
// const obj2={3:"a",4:"b"}
// const obj3={obj1,obj2}
// //console.log(obj3);        //Not a good practice.
// const obj4=Object.assign(obj1,obj2) //This is also not a good practice.
// //console.log(obj4);
// const obj5=Object.assign({},obj1,obj2) //This is OK practice.
// //console.log(obj5);

// const obj6={...obj1,...obj2}   //Spread Operator(This A Good Practice)
// //console.log(obj6);

// const users=[
//     {
//         name:"Ram",
//         email:"r@mail.com"
//     },
//     {
        
//     }
// ]
// console.log(users[0].email);
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('id'));

///////////////////De-Structuring Of Objects///////////////////

const course={
    coursename:"js in hindi",
    price:"999",
    courseInstructor:"Hitesh"
}
// course.courseInstructor 
const{courseInstructor}=course
const{courseInstructor:instructor}=course
console.log(courseInstructor);
console.log(instructor);

