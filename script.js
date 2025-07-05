// script.js

function showAlert() {
  alert("Thanks for your interest! More details coming soon.");
}

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thank you for your message!");
  this.reset();
});
