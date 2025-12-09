// Variable to store what the user types
let defaultInput = "";

// Create a function to show what the user clicks
function displayInput(value) {

  // If the button is +/-, change the sign
  if (value === "+/-") {
    if (defaultInput.startsWith("-")) {
      
      // If it already starts with -, remove the sign
      defaultInput = defaultInput.slice(1);
    } else {
      // Otherwise, add a minus sign
      defaultInput = "-" + defaultInput;
    }
  } else {
    // Add the button value (number or symbol) to the screen
    defaultInput = defaultInput + value;
  }

  // Show it on the calculator screen
  let resultBox = document.getElementById("result").querySelector("p");
  resultBox.textContent = defaultInput || "0";
}


function clearDisplay() {
  defaultInput = ""; // Empty the variable
  let resultBox = document.getElementById("result").querySelector("p");
  resultBox.textContent = "0"; // Reset the display to 0
}


function calculateResult() {
  try {
    // Use eval to calculate the math expression
    let answer = eval(defaultInput);

    // Show the answer on the screen
    let resultBox = document.getElementById("result").querySelector("p");
    resultBox.textContent = answer;

    // Save the answer as new input (for next calculation)
    defaultInput = answer.toString();
  } catch (error) {
    // If there's an error (like 2++3), show "Error"
    let resultBox = document.getElementById("result").querySelector("p");
    resultBox.textContent = "Invalid";
    defaultInput = "";
  }
}


resultBox.addEventListener("click", function () {
  // Remove the last character
  currentInput = currentInput.slice(0, -1);

  // If everything is deleted, show 0
  if (currentInput === "") {
    resultBox.textContent = "0";
  } else {
    resultBox.textContent = currentInput;
  }
});




