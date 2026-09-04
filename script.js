// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Handle CTA button click
document.querySelector('.cta-btn').addEventListener('click', function() {
    document.querySelector('#reviews').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
});

// Handle contact form submission
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const email = this.querySelector('input[type="email"]').value;
    const message = this.querySelector('textarea').value;
    
    // Simple validation
    if (email && message) {
        // Show success message
        alert('Thank you for your message! We will get back to you soon.');
        
        // Reset form
        this.reset();
    } else {
        alert('Please fill in all fields.');
    }
});

// Add some interactivity to review cards
document.querySelectorAll('.review-card').forEach(card => {
    card.addEventListener('click', function() {
        this.style.backgroundColor = '#f8f9fa';
        setTimeout(() => {
            this.style.backgroundColor = '';
        }, 300);
    });
});

// Log page load
console.log('Tap It Reviews - Loaded Successfully!');