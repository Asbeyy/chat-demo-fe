const canva = document.querySelector(".canva");
const button = document.getElementById("button")
const input = document.getElementById("input")
let counter = 0;
let stat = 1;
let errCounter;

function createString(testo){
    counter += 1
    stat+= 1
    let child = document.createElement("div")
    canva.appendChild(child)
    child.setAttribute("id",`test${counter}`);
    child.setAttribute("class","test")
    child.innerHTML = testo
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
    if (input.value === ""){
        errCounter++
        return;
    } else {
    createString(input.value)
    input.value = ""
    }
}

document.addEventListener("keypress", function(event) {
    if (event.keyCode == 13) {
        if (input.value === ""){
            return;
        } else {
        createString(input.value)
        input.value = ""
        }
    }
});



