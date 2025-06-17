
let numbersArray = [];

function updateArrayDisplay() {
  const arrayDisplayElement = document.getElementById("arrayDisplay");
  if (arrayDisplayElement) {
    arrayDisplayElement.textContent = JSON.stringify(numbersArray);
  } else {
    console.warn(
      "Element with id 'arrayDisplay' not found. Cannot display array."
    );
  }
}

function addNumberToArray() {
  const numberInput = document.getElementById("numberInput");

  if (!numberInput) {
    console.error("Input element with id 'numberInput' not found.");
    return;
  }

  const inputValue = numberInput.value;

  if (inputValue === "" || isNaN(inputValue)) {
    console.warn("Please enter a valid number.");
    return;
  }

  const numberToAdd = parseFloat(inputValue);

  numbersArray.push(numberToAdd);

  updateArrayDisplay();

  numberInput.value = "";

  console.log(`Added ${numberToAdd}. Current array:`, numbersArray);
}

document.addEventListener("DOMContentLoaded", () => {
  const addNumberButton = document.getElementById("addNumberButton");
  const numberInput = document.getElementById("numberInput");

  if (addNumberButton) {
    addNumberButton.addEventListener("click", addNumberToArray);
  } else {
    console.error("Button with id 'addNumberButton' not found.");
  }

  if (numberInput) {
    numberInput.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        addNumberToArray();
      }
    });
  } else {
    console.error("Input element with id 'numberInput' not found.");
  }

  updateArrayDisplay();
});
