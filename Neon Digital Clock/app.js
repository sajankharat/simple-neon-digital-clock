

// Get references to the DOM elements that display the time and date
const time = document.getElementById("time");
const date = document.getElementById("date");

// Update the displayed time and date every second
setInterval(() => {
  // Create formatted strings for the current date and time
  const setDate = new Date().toDateString().toUpperCase();
  const setTime = new Date().toLocaleTimeString().toUpperCase();
  // Render values into the page
  time.innerText = setTime;
  date.innerText = setDate;
}, 1000);

// Populate footer year if the element exists
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.innerText = new Date().getFullYear();
}
