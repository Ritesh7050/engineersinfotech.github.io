const form = document.querySelector('form');
const nameInput = form.querySelector('#name');
const emailInput = form.querySelector('#email');
const phoneInput = form.querySelector('#phone');
const trainingInput = form.querySelector('#training');
const messageInput = form.querySelector('#message');

function validateForm() {
  let isValid = true;

  if (nameInput.value.trim() === '') {
    setErrorFor(nameInput, 'Name is required');
    isValid = false;
  } else {
    setSuccessFor(nameInput);
  }

  if (emailInput.value.trim() === '') {
    setErrorFor(emailInput, 'Email is required');
    isValid = false;
  } else if (!isValidEmail(emailInput.value)) {
    setErrorFor(emailInput, 'Email is not valid');
    isValid = false;
  } else {
    setSuccessFor(emailInput);
  }

  if (phoneInput.value.trim() === '') {
    setErrorFor(phoneInput, 'Phone is required');
    isValid = false;
  } else {
    setSuccessFor(phoneInput);
  }

  if (trainingInput.value === '') {
    setErrorFor(trainingInput, 'Please select a training program');
    isValid = false;
  } else {
    setSuccessFor(trainingInput);
  }

  if (messageInput.value.trim() === '') {
    setErrorFor(messageInput, 'Message is required');
    isValid = false;
  } else {
    setSuccessFor(messageInput);
  }

  return isValid;
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const error = formControl.querySelector('.error-message');
  error.innerText = message;
  formControl.classList.add('error');
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  const error = formControl.querySelector('.error-message');
  error.innerText = '';
  formControl.classList.remove('error');
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  if (validateForm()) {
    // Submit the form data
    form.submit();
  }
});