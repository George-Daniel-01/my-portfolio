// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function () {
  const myButton = document.getElementById("myBtn");

  // Show or hide the button when scrolling
  window.addEventListener("scroll", function () {
    if (window.scrollY > 20) {
      myButton.style.display = "block";
    } else {
      myButton.style.display = "none";
    }
  });

  // Scroll to the top when the button is clicked
  myButton.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth" // for a smooth scrolling effect
    });
  });
});






(function(){
    emailjs.init("ufqGIjntjaIfuaLeV"); // Replace with your EmailJS public key
})();

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    if (!form) {
        console.error('Contact form not found!');
        return;
    }
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value; // ✅ fixed here
        
        // Basic validation
        if (!name || !email || !message) {
            alert('Please fill in all fields');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address');
            return;
        }

        // Show loading state
        const submitButton = form.querySelector('.form-submit-btn');
        submitButton.disabled = true;
        submitButton.textContent = 'Sending...';

        // Send email using EmailJS
        const templateParams = {
            fullName: name,
            email: email,
            message: message
        };

        emailjs.send('service_r5gptna', 'template_zo0yb2j', templateParams)
            .then(function() {
                alert('Thank you! Your message has been sent successfully.');
                form.reset();
            })
            .catch(function(error) {
                console.error('EmailJS error:', error);
                alert('Failed to send email. Please try again.');
            })
            .finally(function() {
                submitButton.disabled = false;
                submitButton.textContent = 'Send Message';
            });
    });
});



// Scroll Reveal

const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})


sr.reveal('.navbar', {} )
/* sr.reveal('', {delay: 200} )
sr.reveal('.', {delay: 400} )
sr.reveal('.', {delay: 400,} )


sr.reveal('.', {} )
sr.reveal('.', {delay: 200} )
sr.reveal('.', {delay: 400} )

sr.reveal('.', {delay: 100} )
sr.reveal('.', {delay: 150} )
sr.reveal('', {interval: 200} )
sr.reveal('.', {delay: 400} )

sr.reveal('.', {interval: 200} )

sr.reveal('.', {interval: 200} ) */