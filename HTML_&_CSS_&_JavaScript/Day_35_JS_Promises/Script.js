console.log("Promises in JavaScript");

// let firstPromise = new Promise((resolve, reject ) =>{
//     console.log("Verma jii");
//     reject(new Error("Internal Server Error"));
// });


// function sayMyName() {
//     console.log("My name is Ajay verma");
// }

// setTimeout(sayMyName, 10000);


// let firstPromise = new Promise((resolve, reject) => {

//     setTimeout(function sayMyName() {
//         console.log("My name is Ajay verma");
//     }, 10000);
//     resolve(1);
// });


// let promise1 = new Promise((resolve, reject) => {
//     let success = true;
//     if(success){
//         resolve("Promise fullfilled");
//     }
//     else {
//         reject("Promise denied");
//     }
// });

// promise1.then((message) => {
//     console.log("Then ka message is " + message);
// }).catch((error) => {
//     console.log("error " + error);
// });

// let promise1 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 1000, "First");
// });

// let promise2 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 2000, "Second");
// });

// let promise3 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 3000, "Third");
// });

// Promise.all((promise1, promise2, promise3)).then((values) => {
//     console.log(values);
// });

