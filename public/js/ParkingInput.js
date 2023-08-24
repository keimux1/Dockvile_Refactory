const form = document.getElementById("form");
const fullName = document.getElementById("fullName");
const phoneNumber = document.getElementById("phoneNumber");
const nin = document.getElementById("nin");
const numberPlate = document.getElementById("numberPlate");
const vehicles = document.getElementById("vehicles");
const color = document.getElementById("color");
const parkingSlot = document.getElementById("parkingSlot");

// form.addEventListener('submit', e => {
//     e.preventDefault();

//     validateInputs();
// });

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

// const isValidnin = nin=> {
//     const re = /^[A-Za-z0-9]{14}$/;
//     return re.test(nin);
//   };

const isValidnin = (nin) => {
  const re = /^[A-Za-z0-9]{14}$/;
  return re.test(nin);
};

const isValidNumberPlate = (numberPlate) => {
  const re = /^U[A-Z0-9]{2}\s[A-Z0-9]{3}\s[A-Z0-9]{2}$/i;
  return re.test(numberPlate);
};

const validateInputs = () => {
  const fullNameValue = fullName.value.trim();
  const phoneNumberValue = phoneNumber.value.trim();
  const ninValue = nin.value.trim();
  const numberPlateValue = numberPlate.value.trim();
  const vehiclesValue = vehicles.value.trim();
  const colorValue = color.value.trim();
  const parkingSlotValue = parkingSlot.value.trim();
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

  if (ninValue === "") {
    setError(nin, "NIN is required");
    error++;
  } else if (!isValidnin(ninValue)) {
    setError(nin, "Enter a correct NIN");
    error++;
  } else {
    setSuccess(nin);
  }

  if (numberPlateValue === "") {
    setError(numberPlate, "Enter a NumberPlate");
    error++;
  } else if (!isValidNumberPlate(numberPlateValue)) {
    setError(numberPlate, "start with a u and must be 7 characters");
    error++;
  } else {
    setSuccess(numberPlate);
  }

  if (parkingSlotValue === "") {
    setError(numberPlate, "Assaign a parking slot");
    error++;
  } else {
    setSuccess(numberPlate);
  }

  return error;
};
