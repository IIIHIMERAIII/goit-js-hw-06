const users = {
    email: 0,
    password: 0,
}

const form = document.querySelector(".login-form");
form.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
    event.preventDefault();
    const {
        elements: {email, password }
    } = event.currentTarget;
    if (email.value === "" || password.value === "") {
        return console.log("Please fill in all the fields!");
    }
    users.email = email.value;
    users.password = password.value;
    console.log(users)
  event.currentTarget.reset();
}