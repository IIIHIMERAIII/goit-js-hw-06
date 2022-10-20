const textInput = document.getElementById("validation-input");
textInput.addEventListener("blur", (event) => {
    if (event.currentTarget.value.length == textInput.dataset.length) {
      textInput.classList.add("valid");
      textInput.classList.replace("invalid", "valid");
    }
    else {
      textInput.classList.add("invalid");
      textInput.classList.replace("valid", "invalid",);
    }
});

        