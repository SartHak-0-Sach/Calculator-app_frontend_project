const output = document.querySelector("#screen-output");
const buttons = document.querySelectorAll(
  ".normal-btn, .delete-btn, .reset-btn, .equal-btn"
);

let currentExpression = "";

buttons.forEach((button) => {
  button.addEventListener("click", handleClick);
});

function formatNumberWithCommas(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function handleClick(event) {
  const buttonValue = event.target.innerText;

  // Check the type of button clicked and perform the corresponding action
  if (buttonValue === "DEL") {
    // Handle delete button
    currentExpression = currentExpression.slice(0, -1);
  } else if (buttonValue === "RESET") {
    // Handle reset button
    currentExpression = "";
  } else if (buttonValue === "=") {
    // Handle equal button
    try {
      const result = eval(currentExpression);
      output.innerText = formatNumberWithCommas(result);
      currentExpression = result.toString(); // Store the result as the new current expression
    } catch (error) {
      output.innerText = "Error";
      currentExpression = ""; // Clear the current expression in case of an error
    }
  } else {
    // Handle normal buttons
    currentExpression += buttonValue;
  }

  // Update the screen output with formatted number
  output.innerText = formatNumberWithCommas(currentExpression);
}