const display = document.getElementById("display");

// Append number to display
function appendNumber(number) {
    display.innerText += number;
}

// Append operator to display
function appendOperator(operator) {
    const current = display.innerText;
    if (current && !isNaN(current[current.length - 1])) {
        display.innerText += operator;
    }
}

// Clear display
function clearDisplay() {
    display.innerText = "";
}

// Delete last character
function deleteLast() {
    display.innerText = display.innerText.slice(0, -1);
}

// Calculate result
function calculateResult() {
    try {
        display.innerText = eval(display.innerText.replace("÷", "/").replace("×", "*"));
    } catch (error) {
        display.innerText = "Error";
    }
}
