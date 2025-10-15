// Simple Hero Animation
document.addEventListener("DOMContentLoaded", () => {
  console.log("Hero Section Loaded Successfully!");
});


// Scroll reveal for About section
window.addEventListener("scroll", () => {
  const about = document.querySelector(".about");
  const aboutPos = about.getBoundingClientRect().top;
  const screenPos = window.innerHeight / 1.3;
  if (aboutPos < screenPos) {
    about.classList.add("active");
  }
});
