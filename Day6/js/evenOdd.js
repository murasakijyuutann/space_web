/* Even Odd Checker */
const numberInput = document.getElementById('numberInput');
const checkButton = document.getElementById('checkButton');
const resultDiv = document.getElementById('result');

function checkEvenOdd() {
  const number = parseInt(numberInput.value);
  if (isNaN(number)) {
    resultDiv.textContent = "Please enter a valid number.";
    return;
  }
  if (number % 2 === 0) {
    resultDiv.textContent = `${number} is even.`;
  } else {
    resultDiv.textContent = `${number} is odd.`;
  }
}

// Click on the button
checkButton.addEventListener('click', checkEvenOdd);

// Press Enter in the input field
numberInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    checkEvenOdd();
  }
});
