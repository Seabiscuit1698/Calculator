const btn1 = document.querySelector('#num1Btn');
const btn2 = document.querySelector('#num2Btn');
const btn3 = document.querySelector('#num3Btn');
const btn4 = document.querySelector('#num4Btn');
const btn5 = document.querySelector('#num5Btn');
const btn6 = document.querySelector('#num6Btn');
const btn7 = document.querySelector('#num7Btn');
const btn8 = document.querySelector('#num8Btn');
const btn9 = document.querySelector('#num9Btn');
const btn0 = document.querySelector('#num0Btn');
const addBtn = document.querySelector('#addBtn');
const subBtn = document.querySelector('#subBtn');
const multBtn = document.querySelector('#multBtn');
const divBtn = document.querySelector('#divBtn');
const eqBtn = document.querySelector('#equalsBtn');
const clearBtn = document.querySelector('#clearBtn');
const backBtn = document.querySelector('#backBtn');
const screen = document.querySelector('#screen');

let para = document.createElement('p');
para.setAttribute('id', 'para');

let num1;
let num2;
let op;
let displayValue = '';
let result;

screen.appendChild(para);

function setNumber(input) {
    let currentNum = input.toString();
    if (displayValue == 0) {
        displayValue = currentNum;
    } else {
        displayValue += currentNum;
    }
    para.textContent = displayValue;
}

function setOp(input) {
    num1 = displayValue;
    displayValue = 0;
    if (input == '+') {
        op = '+';
    } else if (input == '-') {
        op = '-';
    } else if (input == '*') {
        op = '*';
    } else if (input == '/') {
        op = '/';
    } else {
        return 'Something went wrong.';
    }
    para.textContent += ' ' + op;
}

function operate() {
    num2 = displayValue;
    console.log(`${num1} ${op} ${num2}`);
    if (op == '+') {
        result = add(num1, num2);
    } else if (op == '-') {
        result = subtract(num1, num2);
    } else if (op == '*') {
        result = multiply(num1, num2);
    } else if (op == '/') {
        result = divide(num1, num2);
    } else {
        return 'Invalid operation.';
    }
    para.textContent = result;
}

function add(num1, num2) {
    return +num1 + +num2;
}
function subtract(num1, num2) {
    return num1 - num2;
}
function multiply(num1, num2) {
    return num1 * num2;
}
function divide(num1, num2) {
    if (num2 == 0) {
        return 'Stop that, you know you can\'t divide by zero';
    } else {
        return num1 / num2;
    }
}

function clearCalc() {
    num1 = 0;
    num2 = 0;
    op = 'undefined';
    displayValue = 0;
    para.textContent = displayValue;
}

function backSpace() {
    displayValue = displayValue.slice(0, -1);
    para.textContent = displayValue;
}