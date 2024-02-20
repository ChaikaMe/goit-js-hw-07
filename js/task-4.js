const loginForm = document.querySelector(".login-form");

function handleSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const email = form.elements.email.value;
    const password = form.elements.password.value;
    const result = {
        email: "",
        password: "",
    }

    if (email === "" || password === "") {
    alert('All form fields must be filled in');
    }
    else {
        result.email = email;
        result.password = password;
        console.log(result);
        form.reset();
    }
}

loginForm.addEventListener("submit", handleSubmit);