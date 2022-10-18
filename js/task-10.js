function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}



let btnCreate = document.querySelector("[data-create]");
let btnDestroy = document.querySelector("[data-destroy]");
let mainBox = document.querySelector("#boxes");
let pseudoBox = [];
btnCreate.addEventListener("click", creater);
btnDestroy.addEventListener("click", destroyer);
function creater() {
  let nums = parseInt(document.querySelector("input[type=number]").value);
  for (let i = 0; i < nums; i++) {
    let box = document.createElement('div');
    let color = getRandomHexColor();
    let sizeFormula = 30 + (i * 10);
    box.style.backgroundColor = color;
    box.style.width = sizeFormula + "px";
    box.style.height = sizeFormula + "px";
    box.classList.add('boxList');
    pseudoBox.push(box);
  }
  mainBox.append(...pseudoBox);
}

function destroyer() {
  pseudoBox.splice(0, pseudoBox.length);
  mainBox.innerHTML = '';
}


