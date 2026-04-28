// JavaScript for Location Webpage

//Dark Mode Toggle Function with Icon Swapping
const themeToggle = document.getElementById("themeToggle");

if (themeToggle)
{
  themeToggle.addEventListener("click", function()
  {
    const html = document.documentElement;
    const themeIcon = this.querySelector("img");

    // Checks if webpage is currently in Dark Mode
    const isDark = html.getAttribute("data-theme") === "dark";

    if (isDark)
    {
      // If webpage is in dark mode, switch to light mode
      html.setAttribute("data-theme", "light");
      themeIcon.src = "dark-mode.png";
      themeIcon.alt = "Switch to Dark Mode"; // Alternative Text for greater accessibility
    }
    else
    {
      // If webpage is in light mode, switch to dark mode
      html.setAttribute("data-theme", "dark");
      themeIcon.src = "light-mode.png";
      themeIcon.alt = "Switch to Light Mode"; // Alternative Text for greater accessibility
    }
  });
}

// Hamburger Functionality - Toggle open/close
const hamburgerMenu = document.getElementById('hamburger');
const mainNav = document.querySelector('.main-nav');

hamburgerMenu.addEventListener('click', function() {
    mainNav.classList.toggle('active');
});

document.querySelectorAll('.main-nav a').forEach(function(link) {
    link.addEventListener('click', function() {
        mainNav.classList.remove('active');
    })
})

// Modal Functionality
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}