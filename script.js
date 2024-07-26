 // task 6  form styling and validation
 
 // script.js

 // Get the form element
 const form = document.querySelector('form');

 // Add an event listener to the form's submit event
 form.addEventListener('submit', validateForm);

// Function to validate the form
function validateForm(event) {
   // Prevent the form from submitting by default
   event.preventDefault();

  // Get the input fields
  const nameInput = document.querySelector('#name');
  const emailInput = document.querySelector('#email');
   const phoneInput = document.querySelector('#phone');
  const messageInput = document.querySelector('#message');

   // Initialize an error flag   let error = false;

   // Validate the name field
   if (nameInput.value.trim() === '') {
    setError(nameInput, 'Name is required');
    error = true;
  } else {
    setSuccess(nameInput);
   }

  // Validate the email field
  if (emailInput.value.trim() === '') {
    setError(emailInput, 'Email is required');
     error = true;
  } else if (!validateEmail(emailInput.value)) {
    setError(emailInput, 'Invalid email address');
    error = true;
   } else {
    setSuccess(emailInput);
   }

  // Validate the phone field
  if (phoneInput.value.trim() === '') {
    setError(phoneInput, 'Phone is required');
     error = true;
  } else if (!validatePhone(phoneInput.value)) {
    setError(phoneInput, 'Invalid phone number');
    error = true;
 } else {
    setSuccess(phoneInput);
  }

  // Validate the message field
  if (messageInput.value.trim() === '') {
   setError(messageInput, 'Message is required');
   error = true;
  } else {
    setSuccess(messageInput);
   }

   // If there are no errors, submit the form
  if (!error) {
     form.submit();   }
}

 // Function to set an error message
 function setError(input, message) {
   const formControl = input.parentElement;
   formControl.classList.add('error');
   formControl.querySelector('span.error-message').textContent = message;
 }

 // Function to set a success message
 function setSuccess(input) {
  const formControl = input.parentElement;
  formControl.classList.remove('error');
   formControl.querySelector('span.error-message').textContent = '';
}

 // Function to validate an email address
 function validateEmail(email) {
   const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
   return emailRegex.test(email);
 }

 // Function to validate a phone number
 function validatePhone(phone) {
   const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
   return phoneRegex.test(phone);
 }
