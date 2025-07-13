// Existing Contact Form Handler
function showAlert() {
  alert("Thanks for your interest! More details coming soon.");
}

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thank you for your message!");
  this.reset();
});

// Calculator Functionality
const display = document.getElementById("display");

// Function to handle button clicks
function handleClick(buttonText) {
  let currentDisplay = display.value;

  if (buttonText === "=") {
    try {
      let result = eval(currentDisplay.replace("π", Math.PI).replace("e", Math.E).replace("√", "Math.sqrt"));
      display.value = result;
    } catch (e) {
      display.value = "Error";
    }
  } else if (buttonText === "C") {
    display.value = "";
  } else if (buttonText === "⌫") {
    display.value = currentDisplay.slice(0, -1);
  } else if (buttonText === "M+") {
    // Memory functionality, for example saving value in memory
    localStorage.setItem("memory", display.value);
  } else if (buttonText === "RCL") {
    // Recall memory value
    display.value = localStorage.getItem("memory") || "";
  } else {
    display.value += buttonText;
  }
}

// Add event listeners to calculator buttons
const buttons = document.querySelectorAll(".buttons button");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    handleClick(button.textContent);
  });
});
