var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) 
{
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) 
    {
      panel.style.maxHeight = null;
    } 
    else 
    {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

/* Find the buttons in webpage */
const expandBtn = document.getElementById("expandButton");
const collapseBtn = document.getElementById("collapseButton");
const allAccordions = document.querySelectorAll(".accordion");

/* 
  When "Expand All" or "Collapse All" button is clicked,
  All of the accordians will open/close to reveal/hide the answer to questions
*/

function toggleAll(open)
{
  allAccordions.forEach(function(accItem) 
  {
    const panel = accItem.nextElementSibling;

    if (open)
    {
      accItem.classList.add('active');
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
    else
    {
      accItem.classList.remove('active');
      panel.style.maxHeight = null;
    }
  });
}

/* On-click event listeners */
expandBtn.addEventListener('click', function () {
  toggleAll(true);
});

collapseBtn.addEventListener('click', function() {
  toggleAll(false);
});

/* Back To Top Button Functionality */
var btn = document.getElementById("backToTopBtn");

window.onscroll = function() {scroll()};

function scroll() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)
  {
    btn.style.display = "block";
  }
  else
  {
    btn.style.display = "none;"
  }
}

/* Event listener for BackToTop button */
btn.addEventListener("click", function() {
  /* Handles scrolling for various browsers */
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

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