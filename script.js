//Homepage functionality

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links, only for in-page
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

//button handling, **IMPLEMENTATION BELOW @Leilamoumou** 
const ctaButtons = document.querySelectorAll('.btn[data-href]');

ctaButtons.forEach(button => {
        button.addEventListener('click', function() {
            const destination = this.getAttribute('data-href');
            if(destination){
                window.location.href = destination;
            }
            // TODO: Add functionality to route once backend is connected 
        });
    });
 });


/* Chat bubble toggles */
const chat_bubble = document.getElementById('chat_bubble');
const chat_window = document.getElementById('chat_window');
const close_chat =  document.getElementById('close_chat');
//chat bubble front-end user functionality :3
if (chat_bubble && chat_window){
    chat_bubble.addEventListener('click', function() {
            chat_window.style.display =  chat_window.style.display === 'none' ? 'block' : 'none'';
    });
}

if (close_chat && chat_window){
    close_chat.addEventListener('click', function() {
        chat_window.style.display = 'none';
    });

//Dark mode Toggle function, actual implementation still needed
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', function() {
    const html = document.documentElement;
    const isDark = html.getAttribute('data-theme') === 'dark';
    html.setAttribute('data-theme', isDark ? 'light' : 'dark');
    this.textContent = isDark ? 'Dark Mode' : 'Light Mode';



});
}
