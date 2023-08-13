const form = document.getElementById('form');
const phoneNumber = document.getElementById('phoneNumber');

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


const isValidphoneNumber = phoneNumber => {
    const re = /^(\+\d{1,3}[- ]?)?\d{10}$/;
    return re.test(phoneNumber);
}



const validateInputs = () => {
    const phoneNumberValue = phoneNumber.value.trim();

    if(phoneNumberValue === '') {
        setError(phoneNumber, 'Enter valid phone number');
    } else if (!isValidphoneNumber(phoneNumberValue)) {
        setError(phoneNumber, 'Provide a valid phone number');
    } else {
        setSuccess(phoneNumber);
    }

};
