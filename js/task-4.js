const loginForm = document.querySelector(".login-form");

function handleSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    if (email.trim() === "" || password.trim() === "") {
    alert('All form fields must be filled in');
    }
    else {
        const result = {
            email: email,
            password: password,
        }
        console.log(result);
        form.reset();
    }
}

loginForm.addEventListener("submit", handleSubmit);