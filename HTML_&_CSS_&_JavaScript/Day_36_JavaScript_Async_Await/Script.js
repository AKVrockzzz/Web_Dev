console.log("Async Await in JavaScript");

// async function getData() {
//     setTimeout(function() {
//         console.log("I am inside set Timeout block");
//     }, 3000);
// }

// getData();

// fetch Api

async function getData() {
    let response =await fetch('https://jsonplaceholder.typicode.com/posts');

    let data = await response.json();
    console.log(data);
}

getData();