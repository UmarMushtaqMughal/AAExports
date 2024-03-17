document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission
        
        // Fetch form data
        const formData = new FormData(contactForm);
        const formDataObject = {};
        formData.forEach((value, key) => {
            formDataObject[key] = value;
        });

        // You can now handle the form data, e.g., send it to the server using AJAX
        console.log(formDataObject);

        // For demonstration purposes, alert the user that the form has been submitted
        alert('Form submitted successfully!');
        
        // You can also reset the form after submission if needed
        contactForm.reset();
    });
});
