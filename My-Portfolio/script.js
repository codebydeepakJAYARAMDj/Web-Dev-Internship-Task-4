document.addEventListener('DOMContentLoaded', function() {
    const alertButton = document.getElementById('alertButton');
    
    if (alertButton) {
        alertButton.addEventListener('click', function() {
            // Create a more engaging alert with emoji
            const messages = [
                "Thanks for visiting my portfolio! 🚀",
                "Hello there! 👋 Let's build something amazing together.",
                "Appreciate you stopping by! 💻",
                "Welcome to my coding journey! 🌱"
            ];
            
            const randomMessage = messages[Math.floor(Math.random() * messages.length)];
            alert(randomMessage);
            
            // Add a small animation effect
            alertButton.style.transform = 'scale(0.95)';
            setTimeout(() => {
                alertButton.style.transform = 'scale(1)';
            }, 100);
        });
    }
    
    // Add subtle animation to sections when they come into view
    const sections = document.querySelectorAll('section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
});