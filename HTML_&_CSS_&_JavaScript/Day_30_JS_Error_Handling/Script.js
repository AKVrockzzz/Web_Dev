console.log("Error Handling in JavaScript");


// Compile Error
// Syntax Error  
// console.log(1;

//Runtime Error
// Reference Error 
// console.log(x);



// try {
//     console.log("try block start here");
//     console.log(x);
//     console.log("try block end here");
// }
// catch(err) {
//     console.log("i am INSIDE CATCH BLOCK");
//     console.log("Your error is here ", err);
// }
// finally {
//     console.log("I am run evrytime as i am finally block");
// }









// Lets create a cunstom error 

// try {
//     //Reference error
//     console.log(x);
// }
// catch(err){
//     throw new Error("Bhai phele Declare tho krdo fir print krna");
// }


let errorCode = 100;
if(errorCode ==  100){
    throw new Error("Invalid JASON");
}