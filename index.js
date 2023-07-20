let num1 = 11   
let num2 = 11
document.getElementById('num1-el').textContent = num1
document.getElementById('num2-el').textContent = num2

let sumEl = document.getElementById('sum-el')

function add() {
    let result = num1 + num2
    sumEl.textContent = 'Sum: ' + (num1 + num2)
}

function subtract() {
    let result = num1 - num2
    sumEl.textContent = 'Sum: ' + (num1 - num2)
}

function divide() {
    let result = num1 / num2
    sumEl.textContent = 'Sum: ' + (num1 / num2)
}

function multiply() {
    let result = num1 * num2
    sumEl.textContent = 'Sum: ' + (num1 * num2)
}

