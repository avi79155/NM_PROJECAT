// Theme toggle
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.documentElement.classList.toggle("light");
  localStorage.setItem("theme",
    document.documentElement.classList.contains("light") ? "light" : "dark"
  );
});

// Load theme from localStorage
if (localStorage.getItem("theme") === "light") {
  document.documentElement.classList.add("light");
}

// Menu toggle for mobile
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});
