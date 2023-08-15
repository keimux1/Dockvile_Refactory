const form = document.getElementById('form');
const fullName = document.getElementById('fullName');
const email = document.getElementById('email');
const phoneNumber = document.getElementById('phoneNumber');
const password = document.getElementById('password');

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

const isValidemail = email => {
    const re = /^(\+\d{1,3}[- ]?)?\d{10}$/;
    return re.test(email);
}


const validateInputs = () => {
    const fullNameValue = fullName.value.trim();
    const phoneNumberValue = phoneNumber.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

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

    if(emailValue === '') {
        setError(email, 'Enter valid Email Address');
    } else if (!isValidemail(emailValue)) {
        setError(email, 'Provide a valid Email Address');
    } else {
        setSuccess(email);
    }

    if(passwordValue === '') {
        setError(password, 'password required');
    } else if (passwordValue.length<8) {
        setError(password, 'password must not be less than 8 characters')
    } else {
        setSuccess(password);
    }


};
