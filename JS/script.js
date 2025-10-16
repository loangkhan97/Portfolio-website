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

// Animate skill bars when scrolled into view
window.addEventListener("scroll", () => {
  const skillBars = document.querySelectorAll(".skill-bar span");
  const triggerBottom = window.innerHeight * 0.8;

  skillBars.forEach((bar) => {
    const barTop = bar.getBoundingClientRect().top;
    if (barTop < triggerBottom && !bar.classList.contains("filled")) {
      bar.classList.add("filled");
      const width = bar.getAttribute("style").match(/width:\s*(\d+)%/)[1];
      bar.style.width = `${width}%`;
    }
  });
});
