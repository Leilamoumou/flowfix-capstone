//Homepage functionality

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    //button handling, to be worked on more once implementing Node.js backend
      const ctaButtons = document.querySelectorAll('.btn');
    
    ctaButtons.forEach(button => {
        button.addEventListener('click', function() {
            console.log('Button clicked:', this.textContent);
            // TODO: Add functionality to route once backend is connected 
        });
    });
});
//Dark mode Toggle function
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', function() {
    const html = document.documentElement;
    const isDark = html.getAttribute('data-theme') === 'dark';
    html.setAttribute('data-theme', isDark ? 'light' : 'dark');
    this.textContent = isDark ? 'Dark Mode' : 'Light Mode';
});