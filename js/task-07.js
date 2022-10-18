let sizer = document.getElementById("font-size-control")
let text = document.getElementById("text")
sizer.addEventListener("input", function() {
  text.style.fontSize = this.value + "px" ; 
});