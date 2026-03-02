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
