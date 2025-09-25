/*
  Name: Joe Ye Di
  Email: joeye.2021
*/
// Global variables provided
let logNumber = 0;
const maxLogs = 10;

// Add any other global variables you need here
//
// End of add global variables

function addLog(newLog) {
    const logBox = document.getElementById("logs");

    for(const log of newLog) {
        // Part C: Add code below
        const li = document.createElement('li');
        const logContent = document.createTextNode(log);
        li.append(logContent);
        logBox.append(li);
        logNumber++;
        // End of Part C
    }
}

function halveLogs() {
    const logBox = document.getElementById("logs");
    const logItems = logBox.getElementsByTagName('li');

    // Part E: Add code below
    //
    logItems.
    // End of Part E
}

function changeColor() {
    const toggleButtonIsDisabled = document.getElementById('toggleButton').disabled;
    if (!toggleButtonIsDisabled) {
        // Part D: Debug the following block of if code
        if(logNumber >= maxLogs) {
            document.getElementById("errorMsg").innerText  = "Clear some logs before proceeding";
        }
        // End debugging task Part D

        else {
            // clear any previous error message
            document.getElementById("errorMsg").innerText = "";
            const bulb = document.getElementById('bulb');
            // Part A: Add code below
            //
            if(bulb.style.fill == 'yellow') {
                bulb.style.fill = 'white';
            }
            else {
                bulb.style.fill = 'yellow';
            }
            // End of Part A
            
            delayButton();

            if(bulb.style.fill == 'yellow') {
                addLog(["User interacts.", "ON.", "Bulb lights up."]);
            }
            else {
                addLog(["User interacts.", "OFF.", "Bulb turns off."]);
            }
        }
    }
}

function delayButton() {
    // Part B: Add code below 
    document.getElementById('toggleButton').disabled = true;
    setTimeout(() => {
        document.getElementById('toggleButton').disabled = false;
    }, 1000);

    // End of Part B
}