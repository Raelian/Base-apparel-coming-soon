const form = document.querySelector(".wrapper__input");
const input = document.querySelector(".wrapper__mail");
const errorIcon = document.querySelector(".wrapper__error-icon");
const errorText = document.querySelector(".wrapper__error-text");

const checkEmail = (email) => {
    let re = /\S+@\S+\.\S+/;
    return re.test(String(email).toLowerCase());
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    submitEmail();
});

function submitEmail() {
    const emailValue = input.value.trim();

    if(emailValue === '' || !checkEmail(emailValue)) {
        input.classList.add("wrapper__mail--border-error");
        errorIcon.classList.remove("wrapper__error-icon--hidden");
        errorText.classList.remove("wrapper__error-text--hidden");
    } else if (checkEmail(emailValue)) {
        input.classList.remove("wrapper__mail--border-error");
        errorIcon.classList.add("wrapper__error-icon--hidden");
        errorText.classList.add("wrapper__error-text--hidden");
    }
}