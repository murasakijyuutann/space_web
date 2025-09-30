const resultDiv = document.querySelector(".result");

let output = ""; //variable to hold the output string

// Generate multiplication tables from 2 to 9

for (let i = 2; i < 10; i++) {
    output += `=== row ${i} ===\n`;
  for (let j = 1; j < 10; j++) {
    output += `${i} x ${j} = ${i * j}\n`;
  }
  output += "\n"; // Add a newline after each table
}

resultDiv.innerText = output; // Display the output in the result div

let str = (x,y) => { return x + y}