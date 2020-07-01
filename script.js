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
const screen = document.querySelector('#screen');
const para = document.createElement('p');

para.textContent = '0';
screen.appendChild(para);

let num1;
let num2;
let op;
let result = 0;

function setNumber(input) {
    if (isNaN(num1) && typeof(op) == 'undefined') {
        num1 += input.toString();
    } else if (isNaN(num2) && typeof(op) != 'undefined') {
        num2 += input.toString;
    }
}

function setOp(input) {
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
}

function operate() {
    if (op == '+') {
        return result = +num1 + +num2;
    } else if (op == '-') {
        return result = num1 - num2;
    } else if (op == '*') {
        return result = num1 * num2;
    } else if (op == '/') {
        return result = num1 / num2;
    }
    para.textContent = result;
}

function add(num1, num2) {
    return num1 + num2;
}
function subtract(num1, num2) {
    return num1 - num2;
}
function multiply(num1, num2) {
    return num1 * num2;
}
function divide(num1, num2) {
    return num1 / num2;
}
