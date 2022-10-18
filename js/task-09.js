function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btn = document.querySelector(".change-color");
const bodyColor = document.querySelector("body")
const textColor = document.querySelector(".color")
btn.addEventListener("click", (event) => {
  let color = getRandomHexColor();
  bodyColor.style.backgroundColor = color;
  textColor.textContent = `${color}`
});