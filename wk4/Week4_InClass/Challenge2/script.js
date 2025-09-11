// Task 1
// Add an event listner to the button (the user drags his mouse over the button)
let button = document.getElementById("justin-btn");
let resultBox = document.getElementById("result");

button.addEventListener("mouseover", function() {
    resultBox.innerHTML = "Welcome to My Heart";
    resultBox.style.backgroundColor = "pink";
    resultBox.style.color = "blue";
});

// Task 2
// Add an event listner to the button (the user drags his mouse out of the button)
button.addEventListener("mouseout", function() {
    resultBox.innerHTML = "Don't Leave My Heart";
    resultBox.style.backgroundColor = "black";
    resultBox.style.color = "red";
});