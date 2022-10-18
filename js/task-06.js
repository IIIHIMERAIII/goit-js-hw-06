const textInput = document.getElementById("validation-input");
textInput.addEventListener("blur", (event) => {
    if (textInput.value.length > textInput.dataset.length) {
        textInput.classList.add("invalid");
        textInput.classList.replace("valid", "invalid",);
    }
    else {
        textInput.classList.add("valid")
        textInput.classList.replace("invalid", "valid");
    }
});

