document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
           
            clearErrors();
          
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            let isValid = true;

            if (name === '') {
                showError('nameError', 'Name is required.');
                isValid = false;
            }

            if (email === '') {
                showError('emailError', 'Email is required.');
                isValid = false;
            } else if (!validateEmail(email)) {
                showError('emailError', 'Please enter a valid email address.');
                isValid = false;
            }

            if (message.length < 10) {
                showError('messageError', 'Message must be at least 10 characters long.');
                isValid = false;
            }

            if (isValid) {
                alert('Thank you for your enquiry! We will get back to you shortly.');
                contactForm.reset();
            }
        });
    }

    function showError(elementId, message) {
        const errorElement = document.getElementById(elementId);
        errorElement.textContent = message;
    }

    function clearErrors() {
        const errorMessages = document.querySelectorAll('.error-message');
        errorMessages.forEach(el => el.textContent = '');
    }

    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
});
