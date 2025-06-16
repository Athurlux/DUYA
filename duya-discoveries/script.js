// Toggle mobile menu
document.getElementById("hamburger").addEventListener("click", () => {
  document.getElementById("mainMenu").classList.toggle("active");
});

// Simple contact form alert
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("formStatus").textContent = "Thank you! Your message has been received.";
  this.reset();
});