let display = document.querySelector("displayNum");

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
    document.querySelector("displayNum").textContent = 69;
}

