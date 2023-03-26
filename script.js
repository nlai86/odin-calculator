const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const clearButton = document.querySelector('[data-clear]');
const currentDisplay = document.querySelector("[data-currentDisplay]");
const previousDisplay = document.querySelector("[data-previousDisplay]")
let displayValue = 0;

function add (num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1/num2;
}

function operate(operator, num1, num2) {

    if (operator == "add") {
        return add(num1, num2);
    } else if (operator == "subtract") {
        return subtract(num1, num2);
    } else if (operator == "multiply") {
        return multiply(num1, num2);
    } else if (operator == "divide") {
        return divide(num1, num2);
    }

}

let numButtons = document.getElementsByClassName("number");
for (let i = 0; i < numButtons.length; i++) {
    numButtons[i].addEventListener("click", numDisplay);
}

function numDisplay(e) {

    display.textContent = displayValue;
}

function appendNumber(number) {
    display.textContent += number; 
}