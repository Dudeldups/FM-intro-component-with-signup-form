const formEl = document.querySelector("#signup-form");
const firstNameEl = document.querySelector("#first-name");
const lastNameEl = document.querySelector("#last-name");
const emailEl = document.querySelector("#email");
const passwordEl = document.querySelector("#password");
const inputs = [firstNameEl, lastNameEl, emailEl, passwordEl];

formEl.addEventListener("submit", (e) => {
  e.preventDefault();

  validateInput();
});

function validateInput() {
  inputs.forEach((input) => {
    const inputValue = input.value.trim();
    const inputContainer = input.parentElement;
    const errorEl = inputContainer.querySelector(".error-message");
    const errorIcon = inputContainer.querySelector(".error-icon");
    if (inputValue === "") {
      setError(
        inputContainer,
        errorEl,
        errorIcon,
        `${input.placeholder} cannot be emtpy`
      );
    } else if (input.id === "email" && !isEmail(inputValue)) {
      setError(
        inputContainer,
        errorEl,
        errorIcon,
        "Looks like this is not an email"
      );
    } else if (input.id === "password" && inputValue.length < 8) {
      setError(
        inputContainer,
        errorEl,
        errorIcon,
        "Password has to be at least 8 characters long"
      );
    } else {
      setValid(inputContainer);
      if (errorEl.style.display === "block") {
        errorIcon.style.display = "none";
        errorEl.style.display = "none";
      }
    }
  });

  function setValid(inputContainer) {
    inputContainer.className = "input-container valid";
  }

  function setError(inputContainer, errorEl, errorIcon, errorMessage) {
    inputContainer.className = "input-container error";
    errorIcon.style.display = "block";
    errorEl.style.display = "block";
    errorEl.innerText = errorMessage;
  }

  function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  }
}
