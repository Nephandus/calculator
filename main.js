let term = "";
let holder = "";
let operand = "";

let display = document.body.querySelector('#displayPanel');

let buttonClear = document.body.querySelector('#buttonClear');
buttonClear.addEventListener('click', () => ( display.textContent = operand = term = holder = "") );

let button1 = document.body.querySelector('#button1');
button1.addEventListener('click', () => (makeDigits(1)));
let button2 = document.body.querySelector('#button2');
button2.addEventListener('click', () => (makeDigits(2) ));
let button3 = document.body.querySelector('#button3');
button3.addEventListener('click', () => (makeDigits(3)));
let button4 = document.body.querySelector('#button4');
button4.addEventListener('click', () => (makeDigits(4)));
let button5 = document.body.querySelector('#button5');
button5.addEventListener('click', () => (makeDigits(5)));
let button6 = document.body.querySelector('#button6');
button6.addEventListener('click', () => (makeDigits(6)));
let button7 = document.body.querySelector('#button7');
button7.addEventListener('click', () => (makeDigits(7)));
let button8 = document.body.querySelector('#button8');
button8.addEventListener('click', () => (makeDigits(8)));
let button9 = document.body.querySelector('#button9');
button9.addEventListener('click', () => (makeDigits(9)));
let button0 = document.body.querySelector('#button0');
button0.addEventListener('click', () => (makeDigits(0)));

let buttonDecimal = document.body.querySelector('#buttonDecimal');
buttonDecimal.addEventListener('click', () => ( makeDigits("."), (buttonDecimal.disabled = true)));
let buttonEquals = document.body.querySelector('#buttonEquals');
buttonEquals.addEventListener('click', () => ( endOperation() ));

let buttonAdd = document.body.querySelector('#buttonAdd');
buttonAdd.addEventListener('click', () => ( progressOperation("+", term, holder)));
let buttonSubtract = document.body.querySelector('#buttonSubtract');
buttonSubtract.addEventListener('click', () => ( progressOperation("-", term, holder) ));
let buttonMultiply = document.body.querySelector('#buttonMultiply');
buttonMultiply.addEventListener('click', () => ( progressOperation("*", term, holder) ));
let buttonDivide = document.body.querySelector('#buttonDivide');
buttonDivide.addEventListener('click', () => ( progressOperation("/", term, holder) ));

function makeDigits(number) {
    display.textContent = term += number.toString();
}

function progressOperation(progressOperand, progressTerm, progressHolder) {
    buttonDecimal.disabled = false;
    if (holder === "") {
        operand = progressOperand;
        holder = display.textContent;
        term = "";
    } else {
        operate(operand, progressTerm, progressHolder);
        operand = progressOperand;
    }
}
function endOperation() {
    buttonDecimal.disabled = false;
    if (!(operand === "") && !(term === "") && !(holder === "")){
        operate(operand, term, holder);
        operand = term = holder = "";
    } else {
        display.textContent = operand = term = holder = "";
    }
}

function operate(operator, firstOp, secondOp) {
    switch(operator){
        case '+':
            add(firstOp, secondOp);
            term = "";
            holder = display.textContent;
            break;
        case '-':
            subtract(secondOp, firstOp);
            term = "";
            holder = display.textContent;
            break;
        case '*':
            multiply(secondOp, firstOp);
            term = "";
            holder = display.textContent;
            break;
        case '/':
            divide(secondOp, firstOp);
            term = "";
            holder = display.textContent;
            break;
    }
}

function add(firstAddendend, secondAddended) {
    let roundNumber = (+firstAddendend + +secondAddended);
    roundNumber = (roundNumber * 100000);
    roundNumber = Math.round(+roundNumber);
    roundNumber = (roundNumber / 100000);
    display.textContent = roundNumber;
}   
function subtract(minuend, subtrahend) {
    let roundNumber = (+minuend - +subtrahend);
    roundNumber = (roundNumber * 100000);
    roundNumber = Math.round(+roundNumber);
    roundNumber = (roundNumber / 100000);
    display.textContent = roundNumber;
}
function multiply(multiplicand, multiplier) {
    let roundNumber = (+multiplicand * +multiplier);
    roundNumber = (roundNumber * 100000);
    roundNumber = Math.round(+roundNumber);
    roundNumber = (roundNumber / 100000);
    display.textContent = roundNumber;
}
function divide(dividend, divisor) {
    if (divisor == "0") alert("To infinity but not beyond...");
    let roundNumber = (+dividend / +divisor);
    roundNumber = (roundNumber * 100000);
    roundNumber = Math.round(+roundNumber);
    roundNumber = (roundNumber / 100000);
    display.textContent = roundNumber;
}
