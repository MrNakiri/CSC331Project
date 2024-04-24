document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');
  
    form.addEventListener('submit', function (event) {
      event.preventDefault();
  
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
  
      if (name === '') {
        alert('Please enter your name.');
        return;
      }
  
      if (email === '') {
        alert('Please enter your email.');
        return;
      }
  
      if (!isValidEmail(email)) {
        alert('Please enter a valid email address.');
        return;
      }
  
      if (message === '') {
        alert('Please enter your message.');
        return;
      }
  
      // If all validations pass, you can submit the form
      alert('Form submitted successfully!');
      form.reset();
    });
  
    function isValidEmail(email) {
      // Basic email validation using regex
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
  });
  