console.log("Classes && Default Parameters");
// function sayName(myName = "Prabhu Deva") {
//     console.log("My name is: ", myName);
// }

// sayName();


// function sayName(fname = "Uday", lname = "Singh".toUpperCase()){
//     console.log("My name is: ", fname," ",lname);
// }

// sayName();


// function solve(value = ["Love","Rahul", 54]) {
//     console.log("hello ji ", value);
// }

// solve();

function getAge() {
    return 190;
}

function utility(name = "Akv", age = getAge()) {
    console.log(name,age);
}

utility();







// class Human {
//     //properties
//     age;
//     #wt = 75;
//     ht = 178;



//     constructor(newAge, newHeight){
//         this.age = newAge;
//         this.ht = newHeight;
//     }




//     //Behaviour

//     walking() {
//         console.log("I am walking", this.#wt);
//     }

//     running() {
//         console.log("I am running");
//     }



//     get fetchWeight() {
//         return this.#wt;
//     }

//     set modifyWeight(val) {
//         this.#wt = val;
//     }
// }


// let obj = new Human(50, 150);
// console.log(obj.age);
// console.log(obj.ht);
// obj.walking();

