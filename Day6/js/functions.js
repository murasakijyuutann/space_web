// give result.innerText a variable for better code reusability
const resultDiv = document.querySelector(".result");
const resultDiv2 = document.querySelector(".result2");
const resultDiv3 = document.querySelector(".result3");

// function to add two numbers and return the result on HTML page
function addNumbers(a, b) {
    resultDiv.innerHTML = a + b + '<br>';
}

// print out hello world on HTML page
function printHelloWorld() {
    resultDiv.innerHTML = "Hello, World!<br>";
}

//multiplication for loop example
function multiplicationTable( ) {
    for (let i = 2; i < 10; i++) {
        for (let j = 1; j < 10; j++) {
            resultDiv.innerHTML += `\t${i} x ${j} = ${i * j}<br>`;
        }
        resultDiv.innerHTML += '<br>';
    }
}

printHelloWorld();
addNumbers(5, 10);
multiplicationTable(5);
