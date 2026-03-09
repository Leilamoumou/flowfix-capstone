//Homepage functionality

document.addEventListener("DOMContentLoaded", function () {
  // Smooth scrolling for navigation links, only for in-page
  const navLinks = document.querySelectorAll('a[href^="#"]');
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  //button handling, **IMPLEMENTATION BELOW @Leilamoumou**
  const ctaButtons = document.querySelectorAll(".btn[data-href]");

  ctaButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const destination = this.getAttribute("data-href");
      if (destination) {
        window.location.href = destination;
      }
      // TODO: Add functionality to route once backend is connected
    });
  });
});

/* Chat bubble toggles */
const chat_bubble = document.getElementById("chat_bubble");
const chat_window = document.getElementById("chat_window");
const close_chat = document.getElementById("close_chat");
//chat bubble front-end user functionality :3
if (chat_bubble && chat_window) {
  chat_bubble.addEventListener("click", function () {
    chat_window.style.display =
      chat_window.style.display === "none" ? "block" : "none";
  });
  /*hamborg menu*/
  const hamburger = document.getElementById("hamburger");
  const mainNav = document.querySelector(".main-nav");
  if (hamburger && mainNav) {
    hamburger.addEventListener("click", function () {
      mainNav.classList.toggle("open");
    });
  }
}

if (close_chat && chat_window) {
  close_chat.addEventListener("click", function () {
    chat_window.style.display = "none";
  });
}

//Dark mode Toggle function, actual implementation still needed
// const themeToggle = document.getElementById("themeToggle");
// if (themeToggle) {
//   themeToggle.addEventListener("click", function () {
//     const html = document.documentElement;
//     const isDark = html.getAttribute("data-theme") === "dark";
//     html.setAttribute("data-theme", isDark ? "light" : "dark");
//     this.textContent = isDark ? "Dark Mode" : "Light Mode";
//   });
// }

//Dark Mode Toggle Function with Icon Swapping
const themeToggle = document.getElementById("themeToggle");

if (themeToggle)
{
  themeToggle.addEventListener("click", function() {
    const html = document.documentElement;
    const themeIcon = this.querySelector("img");
  
    // 1. Determine the NEW state
    const isCurrentlyDark = html.getAttribute("data-theme") === "dark";
    const nextTheme = isCurrentlyDark ? "light" : "dark";
  
    // 2. Apply the theme to the HTML tag
    html.setAttribute("data-theme", nextTheme);
  
    // 3. Set the icon based on the theme we JUST applied
    if (nextTheme === "dark") {
      // Page is now DARK -> Show the SUN
      // Adding the leading / tells the browser to start from the root
      themeIcon.src = "/light-mode.png"; 
      themeIcon.alt = "Switch to Light Mode";
    } else {
      // Page is now LIGHT -> Show the MOON
      themeIcon.src = "/dark-mode.png";
      themeIcon.alt = "Switch to Dark Mode";
    }
  
    // Debugging: This will show in your F12 console
    console.log("Theme changed to:", nextTheme);
    console.log("Icon src set to:", themeIcon.src);
  
  });
}
