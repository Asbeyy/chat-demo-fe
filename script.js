const canva = document.querySelector(".canva");
const button = document.getElementById("button")
const input = document.getElementById("input")
let counter = 0;
let stat = 1;

function createString(testo){
    counter += 1
    stat+= 1
    let child = document.createElement("div")
    canva.appendChild(child)
    child.setAttribute("id",`test${counter}`);
    child.setAttribute("class","test")
    

    if (testo === "mmg"){
        child.innerHTML = "***"
    } else if (testo === "te amo") {
        child.innerHTML = "te odio hijo de la gran puta"
    } else {
        child.innerHTML = testo
    }
    changeColor(child)
  
}


function changeColor(child){
    if (stat % 2 === 0 ){
        child.setAttribute("class","test")
    } else {
        child.setAttribute("class","test-receive")
    }
}

button.onclick = function(){
    createString(input.value)
}

document.addEventListener("keypress", function(event) {
    if (event.keyCode == 13) {
        createString(input.value)
        input.value = ""
    }
});
//createString("TEST")
