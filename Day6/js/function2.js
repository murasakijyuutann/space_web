const resultDiv = document.getElementById('result');
const resultDiv2 = document.getElementById('result2');
const resultDiv3 = document.getElementById('result3');
const resultDiv4 = document.getElementById('result4');
const resultDiv5 = document.getElementById('result5');
const resultDiv6 = document.getElementById('result6');
const resultDiv7 = document.getElementById('result7');

// normal functions into arrow functions

// Function to calculate the area of a rectangle
const calcArea = function calculateArea(length, width) {
    return length * width;
}

// Function to calculate the perimeter of a rectangle
const calcPerimeter = function calculatePerimeter(length, width) {
    return 2 * (length + width);                                  
}

// function to calculate the power of a number 
const calcPower = function calculatePower(base, exponent) {
    return Math.pow(base, exponent);
}

// simple arithmetic operations
const add = function add(a, b) {
    return a + b;
}

const subtract = function subtract(a, b) {
    return a - b;
}

// division with remainder handling
const divide = function divide(a, b) {
    if (b === 0) {
        return "Division by zero error";
    }
    const quotient = Math.floor(a / b);
    const remainder = a % b;
    return `Quotient: ${quotient}, Remainder: ${remainder}`;
}

// function to get prime numbers up to a limit of 100
const getPrimes = function findPrimes(limit) {
    const primes = [];
    for (let num = 2; num <= limit; num++) {
        let isPrime = true;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            primes.push(num);
        }
    }
    return primes;
}

// Example usage
const length = 5;
const width = 3;
const base = 2;
const exponent = 3;


const area = calcArea(length, width);
const perimeter = calcPerimeter(length, width);
const power = calcPower(base, exponent);
const sum = add(10, 5);
const difference = subtract(10, 5);
const primesUpTo100 = getPrimes(100);
const division = divide(10, 3);

// Display results

resultDiv.textContent = `Area of rectangle (length=${length}, width=${width}): ${area}`;
resultDiv2.textContent = `Perimeter of rectangle (length=${length}, width=${width}): ${perimeter}`;
resultDiv3.textContent = `${base} raised to the power of ${exponent} is: ${power}`;
resultDiv4.textContent = `Sum of 10 and 5 is: ${sum}`;
resultDiv5.textContent = `Difference of 10 and 5 is: ${difference}`;
resultDiv6.textContent = `Prime numbers up to 100 are: ${primesUpTo100.join(', ')}`;
resultDiv7.textContent = `Division of 10 by 3: ${division}`;