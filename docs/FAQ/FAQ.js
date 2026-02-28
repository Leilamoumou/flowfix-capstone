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