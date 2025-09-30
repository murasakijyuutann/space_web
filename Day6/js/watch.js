/* JavaScript clock Example */

const display = document.getElementById("display");

// update every second
setInterval(() => {
  const date = new Date();
  const theTime = date.toLocaleTimeString();
  display.textContent = theTime;
}, 1000);

// run immediately once so there's no 1-second delay
const date = new Date();
display.textContent = date.toLocaleTimeString();
