const form = document.getElementById("form");
const fullName = document.getElementById("fullName");
const email = document.getElementById("email");
const phoneNumber = document.getElementById("phoneNumber");
const password = document.getElementById("password");

form.addEventListener("submit", (e) => {
  console.log("waiting for the event listener");
  e.preventDefault();
  console.log("validating inputs");
  validateInputs();
  console.log("validation successful");
});

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};

const isValidfullName = (fullName) => {
  const re = /^[A-Z][a-zA-Z\s]*$/;
  return re.test(fullName);
};

const isValidphoneNumber = (phoneNumber) => {
  const re = /^(\+\d{1,3}[- ]?)?\d{10}$/;
  return re.test(phoneNumber);
};

const isValidemail = (email) => {
  const re =
    /^[a-zA-Z0-9]+([._-][a-zA-Z0-9]+)*@[a-zA-Z0-9]+([.-][a-zA-Z0-9]+)*\.[a-zA-Z]{2,6}$/;
  return re.test(email);
};

const isValidpassword = (password) => {
  const re = /^.{8,}$/;
  return re.test(password);
};

const validateInputs = () => {
  const fullNameValue = fullName.value.trim();
  const phoneNumberValue = phoneNumber.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if (fullNameValue === "") {
    setError(fullName, "Enter valid name");
  } else if (!isValidfullName(fullNameValue)) {
    setError(fullName, "Begin with Capital letter and No Numbers");
  } else {
    setSuccess(fullName);
  }

  if (phoneNumberValue === "") {
    setError(phoneNumber, "Enter valid phone number");
  } else if (!isValidphoneNumber(phoneNumberValue)) {
    setError(phoneNumber, "Provide a valid phone number");
  } else {
    setSuccess(phoneNumber);
  }

  if (emailValue === "") {
    setError(email, "Enter valid Email Address");
  } else if (!isValidemail(emailValue)) {
    setError(email, "Provide a valid Email Address");
  } else {
    setSuccess(email);
  }

  if (passwordValue === "") {
    setError(password, "password require");
  } else if (!isValidpassword(passwordValue)) {
    setError(password, "password must not be less than 8 characters");
  } else {
    setSuccess(password);
  }

  

};
