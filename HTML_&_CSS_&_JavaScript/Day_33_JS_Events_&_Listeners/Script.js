console.log("Events & Listeners JavaScript");



function changeText() {
    let fpara = document.getElementById("fpara");
    fpara.textContent = "Hello Ajay";
}

let fpara = document.getElementById("fpara");
fpara.addEventListener('click', changeText);
// fpara.removeEventListener('click', changeText);