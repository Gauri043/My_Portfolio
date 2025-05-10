// Theme Toggle
const toggleButton = document.getElementById("modeToggle");
const body = document.body;

// Load saved theme from localStorage
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("portfolio-theme");
  if (savedTheme === "dark") {
    body.classList.add("dark-mode");
    if (toggleButton) { // Ensure button exists before checking checked state
      toggleButton.checked = true; // Set toggle button to checked if dark mode is active
    }
  }
});

// Toggle theme and save preference
if (toggleButton) {
  toggleButton.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
      localStorage.setItem("portfolio-theme", "dark");
    } else {
      localStorage.setItem("portfolio-theme", "light");
    }
  });
}

// Set current year in footer
document.addEventListener("DOMContentLoaded", () => {
  const currentYearSpan = document.getElementById("currentYear");
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }
});