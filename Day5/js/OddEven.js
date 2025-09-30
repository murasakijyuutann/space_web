// const is keword for declaring a variable whose value cannot be changed
// const is block scoped
// const must be initialized at the time of declaration


const result = document.querySelector(".result");
const btn = document.getElementById("btn");123
const input = document.getElementById("number");

let num = prompt("Please enter a number: ");
num = parseInt(num);
console.log(typeof(num));

btn.addEventListener("click", function () {
    if (num != null) {
        const num = parseInt(input.value);
        if (num % 2 === 0) {
            result.innerHTML = `${num} is an Even number`;
        } else {
            result.innerHTML = `${num} is an Odd number`;
        }
    } else { // num == nullfdfadfs
        result.innerHTML = `User cancelled the prompt.`;
    }
});