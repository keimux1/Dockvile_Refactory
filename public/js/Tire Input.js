const form = document.getElementById("form");
const fullName = document.getElementById("fullName");
const phoneNumber = document.getElementById("phoneNumber");
const tirenumber = document.getElementById("tirenumber");

form.addEventListener("submit", (e) => {
  let valid = validateInputs();

  console.log("Valid inputs", valid);

  if (valid > 0) {
    e.preventDefault();
  }
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

const validateInputs = () => {
  const fullNameValue = fullName.value.trim();
  const phoneNumberValue = phoneNumber.value.trim();
  const tirenumberValue = tirenumber.value.trim();
  let error = 0;

  if (fullNameValue === "") {
    setError(fullName, "Enter valid name");
    error++;
  } else if (!isValidfullName(fullNameValue)) {
    setError(fullName, "Begin with Capital letter and No Numbers");
    error++;
  } else {
    setSuccess(fullName);
  }

  if (phoneNumberValue === "") {
    setError(phoneNumber, "Enter valid phone number");
    error++;
  } else if (!isValidphoneNumber(phoneNumberValue)) {
    setError(phoneNumber, "Provide a valid phone number");
    error++;
  } else {
    setSuccess(phoneNumber);
  }

  if (tirenumberValue === "") {
    setError(tirenumber, "Enter a Number of tyres");
    error++;
  } else {
    setSuccess(tirenumber);
  }
  return error;
};
