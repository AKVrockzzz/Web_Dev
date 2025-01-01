console.log("Arrays in javaScript");

// let obj = {
//     name: "Akventures",
//     age: 24,
//     weight: 75,
//     height: "5ft 8in",
//     greet: function() {
//         console.log("Hello ji kaise jo saare");
//     }    
 
// };

// for(let key in obj){
//     console.log(key," ", obj[key]);
// }

// console.log(obj);
// obj.greet();

// console.log(typeof(obj));




// creation of array 

// let arr = [1,2,3,4,5];
// console.log(arr);


// array constructor

// let arr = new Array("ajay", 1, true);
// console.log(arr);

// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);

// arr.push(11);
// arr.push(20);
// arr.push(30);
// arr.push(40);
// console.log(arr);
// arr.pop();
// console.log(arr);
// arr.shift();
// console.log(arr);
// arr.unshift("vermaji");
// console.log(arr);

// console.log(arr.slice(2,4));

// arr.splice(1,2,'deepak');
// console.log(arr);


// let arr = [10,20,30];

// let answer = arr.map((number) => {
//     return number * number;
// });

// console.log(answer);


// arr.map((number, index) =>{
//     console.log(number + 1);
//     console.log(index);
// })


// let arr = [10,20,30,1,4,11,33,22,51,12];

// let evenArray = arr.filter((number) => {
//     if( number % 2 == 0) return true;
//     else return false;
// })

// console.log(evenArray);



// let arr = [1,2,"ajay", "verma", true, undefined, null];

// let str = arr.filter((value) => {
//     // if(typeof(value) === 'string') return true;
//     // else return false;

//     if(typeof(value) === 'number') return true;
//     else return false;
// });

// console.log(str);'



// let arr = [10,20,30,40];
// let ans = arr.reduce((acc, curr) => {
//     return acc + curr;
// }, 0);

// console.log(ans);



// let arr =[1,4,2,10,5,6];

// arr.sort();
// console.log(arr);
// console.log(arr.indexOf(10));


// let arr = [10,20,30];

// let length = arr.length;
// console.log("length" , length);

// for(let i = 0; i<arr.length; i++){
//     console.log(arr[i]);
// }

// arr.forEach((value, index) => {
//     console.log("Number: ", value, "index: ", index);
// })



// let arr= [10,20,30,40];

// for(let value of arr){
//     console.log(value);
// }

// let str = "ajay";
// for(let s of str){
//     console.log(s);
// }


let arr = [10,20,30,40,50];
let ans =function(arr) {
    let sum = 0;
    arr.forEach((value) => {
        sum += value;
    });
    return sum;
}

console.log(ans);