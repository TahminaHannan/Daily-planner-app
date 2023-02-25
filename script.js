// Set to current date and time
var currentDay = document.getElementById("currentDay");
currentDay.textContent = moment().format("LLLL");
var currentHour = moment().hour();

// Arrays for the hours in the working day
var hours = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
var ids = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm"];



// Loops through all the save buttons and add event listeners. Save the to do list to localStorage
var saveBtns = document.querySelectorAll(".saveBtn");
for (var i = 0; i < saveBtns.length; i++) {
saveBtns[i].addEventListener("click", function() {
var dataId = this.getAttribute("data-id");
var textarea = document.getElementById(dataId);
localStorage.setItem(dataId, textarea.value);
});
}