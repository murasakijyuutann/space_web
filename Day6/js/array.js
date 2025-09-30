/* Array Object in JavaScript */

// Access to DOM
let div = document.getElementById("demo");
let fruits = [];

// Create an Array
fruits = ["Banana", "Orange", "Apple", "Mango"];
div.innerHTML = "Array: " + fruits + "<br>";
div.innerHTML += "<br>---------------------------------------------------------------------------------------------------<br>";
// Accessing Array Elements
for (let i = 0; i < fruits.length; i++) {
    div.innerHTML += "fruit " + i + ": is " + `<strong>${fruits[i]}</strong>` + "<br>";
}

//add more elements to the array
fruits.push("Pineapple", "Grapes");

div.innerHTML += "<br>---------------------------------------------------------------------------------------------------<br>";

div.innerHTML += "<br>After adding more elements: " + fruits + "<br>";
for (let i = 0; i < fruits.length; i++) {
    div.innerHTML += "fruit " + i + ": is " + `<strong>${fruits[i]}</strong>` + "<br>";
}

// Remove element from fruits array
fruits.pop(fruits[fruits.length - 1]); // removes last element

// remove element using splice
fruits.splice(1, 1); // removes 1 element at index 1 (Orange)
div.innerHTML += "<br>---------------------------------------------------------------------------------------------------<br>";

div.innerHTML += "<br>After removing some elements: " + fruits + "<br>";
for (let i = 0; i < fruits.length; i++) {
    div.innerHTML += "fruit " + i + ": is " + `<strong>${fruits[i]}</strong>` + "<br>";
}
