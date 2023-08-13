const form = document.getElementById('form');
const fullName = document.getElementById('fullName');
const phoneNumber = document.getElementById('phoneNumber');
const tirenumber = document.getElementById('tirenumber');

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


const validateInputs = () => {
    const fullNameValue = fullName.value.trim();
    const phoneNumberValue = phoneNumber.value.trim()
    const tirenumberValue = tirenumber.value.trim();

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

    if(tirenumberValue === '') {
        setError(tirenumber, 'Enter a Number of tyres');
    } else {
        setSuccess(tirenumber);
    }

};
