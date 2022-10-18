const inputForm = document.querySelector("#name-input");
const outputForm = document.querySelector("#name-output");
inputForm.addEventListener("input", (event) => {
    if (inputForm.value.length == 0) {
        outputForm.textContent = "Anonymous";
    }
    else {
        outputForm.textContent = event.currentTarget.value;
    }
});

