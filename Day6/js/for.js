// Select the element by class
const resultDiv = document.querySelector(".result");

let sum = 0;
// First loop
for (let i = 1; i <= 5; i++) {
  console.log(`Current number: ${i}`);
  resultDiv.innerText += `Current number: ${i}\n`;
  sum += i;
}

console.log(`Sum of current numbers: ${sum}`);
resultDiv.innerText += `Sum of current numbers: ${sum}\n\n`;

// Second loop
for (let i = 1; i <= 5; i++) {
  console.log(`Iteration ${i}`);
  resultDiv.innerText += `Iteration ${i}\n`;
}
console.log("Loop finished");
resultDiv.innerText += "Loop finished\n";