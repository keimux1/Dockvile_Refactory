const form = document.getElementById('form');
const fullName = document.getElementById('fullName');
const phoneNumber = document.getElementById('phoneNumber');
const nin = document.getElementById('nin');
const numberPlate = document.getElementById('numberPlate');
const vehicles = document.getElementById('vehicles');
const color = document.getElementById('color');
const parkingSlot = document.getElementById('parkingSlot');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidfullName = fullName => {
    const re = /^[A-Z][a-zA-Z\s]*$/;
    return re.test(fullName);
}

const isValidphoneNumber = phoneNumber => {
    const re = /^(\+\d{1,3}[- ]?)?\d{10}$/;
    return re.test(phoneNumber);
}

const isValidNumberPlate = numberPlateValue => {
    const re = /^U[A-Z0-9]{5}$/;
    return re.test(numberPlateValue);
}


const validateInputs = () => {
    const fullNameValue = fullName.value.trim();
    const phoneNumberValue = phoneNumber.value.trim();
    const ninValue = nin.value.trim();
    const numberPlateValue = numberPlate.value.trim();
    const vehiclesValue = vehicles.value.trim();
    const colorValue = color.value.trim();
    const parkingSlotValue = parkingSlot.value.trim();

    if(fullNameValue === '') {
        setError(fullName, 'Enter valid name');
    } else if(!isValidfullName(fullNameValue)) {
        setError(fullName, 'Begin with Capital letter and No Numbers')
    }else {
        setSuccess(fullName);
    }

    if(phoneNumberValue === '') {
        setError(phoneNumber, 'Enter valid phone number');
    } else if (!isValidphoneNumber(phoneNumberValue)) {
        setError(phoneNumber, 'Provide a valid phone number');
    } else {
        setSuccess(phoneNumber);
    }

    if(ninValue === '') {
        setError(nin, 'nin is required');
    } else if (ninValue.length<15) {
        setError(nin, 'Enter a correct nin.')
    } else {
        setSuccess(nin);
    }

    if(numberPlateValue === '') {
        setError(numberPlate, 'Enter a NumberPlate');
    } else if (!isValidfullName(numberPlateValue)) {
        setError(numberPlate, "start with a u and must be 6 characters");
    } else {
        setSuccess(numberPlate);
    }

};