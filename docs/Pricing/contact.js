// Auto-fill service type from pricing page
const params = new URLSearchParams(window.location.search);
const service = params.get("service");

if (service) {
  const serviceSelect = document.getElementById("service");
  if (serviceSelect) {
    serviceSelect.value = service;
  }
}

// Redirects user to the confirmation page after submitting the contact form
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      window.location.href = "confirmation.html";
    });
  }
});

// @judykuang implemented JavaScript for Contact Webpage

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

