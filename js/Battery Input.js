
const form = document.getElementById("form");
const fullName = document.getElementById("fullName");
const phoneNumber = document.getElementById("phoneNumber");
const nin = document.getElementById("nin");
const vehicles = document.getElementById("vehicles");
const bartterynumber = document.getElementById("bartterynumber");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validateInputs();
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
  const ninValue = nin.value.trim();
  const bartterynumbervalue = bartterynumber.value.trim();
  const vehiclesValue = vehicles.value.trim();

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

  if (ninValue === "") {
    setError(nin, "nin is required");
  } else if (ninValue.length < 15) {
    setError(nin, "Enter a correct nin.");
  } else {
    setSuccess(nin);
  }

  if (vehiclesValue === "") {
    setError(vehicles, "Enter a NumberPlate");
  } else {
    setSuccess(vehicles);
  }

  if (bartterynumbervalue === "") {
    setError(barttery, "Enter a Number of Bartteis");
  } else {
    setSuccess(barttery);
  }
};
