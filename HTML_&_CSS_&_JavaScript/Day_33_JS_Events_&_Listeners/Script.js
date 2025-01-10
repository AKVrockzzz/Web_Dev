console.log("Events & Listeners JavaScript");



function alertPara(event){
    if(event.target.nodeName = 'SPAN'){
        alert("You have clicked on para: " + event.target.textContent);

    }
};

let mydiv = document.getElementById('fdiv');
document.addEventListener('click', alertPara);






// let paras = document.querySelectorAll('p');


// function alertPara(event){
//     alert("You have clicked on para: " + event.target.textContent);
// };
// for(let i=0; paras.length; i++){
//     let para = paras[i];
//     para.addEventListener('click', alertPara);
// }










// let anchorElement = document.getElementById('fanchor');

// anchorElement.addEventListener('click', function(event){
//     event.preventDefault();
//     anchorElement.textContent = "Click done bhai";

// });






// function changeText(event) {
//     console.log(event);
//     let fpara = document.getElementById("fpara");
//     fpara.textContent = "Hello Ajay";
// }

// let fpara = document.getElementById("fpara");
// fpara.addEventListener('click', changeText);
// fpara.removeEventListener('click', changeText);