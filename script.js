let clear = document.querySelector(".clear");
let equals = document.querySelector(".equals");
let decimal = document.querySelector(".decimal");
let del = document.querySelector(".delete");
let numbers = document.querySelectorAll(".number");
let operators = document.querySelectorAll(".operator");

let previousDisplay = document.querySelector(".previousDisplay");
let currentDisplay = document.querySelector(".currentDisplay");

let operator = "";
let previousValue= "";
let currentValue = "";

numbers.forEach((number) => number.addEventListener("click", function(e){
    numberHelper(e.target.textContent);
    currentDisplay.textContent = currentValue;
}));

operators.forEach((operator) => operator.addEventListener("click", function(e){
    operatorHelper(e.target.textContent);
    previousDisplay.textContent = previousValue + " " + operator.textContent;
    currentDisplay.textContent = currentValue;
}));

clear.addEventListener("click", function(e){
    allClear(e);
});

del.addEventListener("click", function(e){
    deleteLast(e);
});

equals.addEventListener("click", function(e) {
    if (currentValue != '' && previousValue != '') {
        calculate(e);
    }
});

decimal.addEventListener("click", function() {
    appendDecimal();
})

function numberHelper(num){
    if (currentValue.length <= 15) {
        currentValue += num;
    }

    changeFontSize();
}

function operatorHelper(op){
    operator = op;
    previousValue = currentValue;
    currentValue = '';
}

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

    if (operator == "+") {
        return add(num1, num2);
    } else if (operator == "-") {
        return subtract(num1, num2);
    } else if (operator == "×") {
        return multiply(num1, num2);
    } else if (operator == "÷") {
        return divide(num1, num2);
    }

}

function changeFontSize (e) {
    if (currentDisplay.textContent.length < 10) {
        currentDisplay.style.fontSize = "60px";
    } else if (currentDisplay.textContent.length >= 10) {
        currentDisplay.style.fontSize = "30px";
    }
}

function allClear (e) {
    operator = '';
    previousValue = '';
    currentValue = '';
    previousDisplay.textContent = '';
    currentDisplay.textContent = '';
}

function deleteLast(e) {
    if (currentValue != '') {
        currentValue = currentValue.slice(0, -1);
        currentDisplay.textContent = currentValue;
    }
}

function roundNumber(num) {
    return Math.round(num * 1000) / 1000;
}

function appendDecimal() {
    if (currentValue.includes(".")) {
        return;
    }

    if (currentValue == '') {
        currentValue = "0";
    }
    currentValue += ".";
    currentDisplay.textContent = currentValue;
}

function calculate(e) {
    if (operator == "÷" && currentValue == "0") {
        currentDisplay.style.fontSize = "20px";
        previousDisplay.textContent = previousValue + " " + operator + " " + currentValue + " =";
        currentDisplay.textContent = "You cannot divide by 0, you grape!"
    } else {
        previousValue = Number(previousValue);
        currentValue = Number(currentValue);
        previousDisplay.textContent = previousValue + " " + operator + " " + currentValue + " =";
        currentValue = roundNumber(operate(operator, previousValue, currentValue));
        currentDisplay.textContent = currentValue;
    }
}