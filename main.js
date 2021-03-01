/*window.addEventListener('load', function () {
    const script = document.createElement('script');
    script.src = 'main.js';
    document.body.appendChild(script);
});*/

const display1 = document.querySelector(".history");
const display2 = document.querySelector(".output");
const tempDisplay = document.querySelector(".tempOutput");
const numberEl = document.querySelectorAll(".number");
const operatorEl = document.querySelectorAll(".operation");
const equalEl = document.querySelector(".equal");
const clearEl = document.querySelector(".clear");
const cbackSpaceEl = document.querySelector(".backSpace");

let disNum1 = '';
let disNum2 = '';
let result = null;
let lastOperation = '';
let haveDot = false;

//Functions

let clearVar = function (num = '') {// Does the display update
    disNum1 = disNum1 + lastOperation+ disNum2 + num;
    display2.innerText = '';
    disNum2 = '';
    tempDisplay.innerText = result;
    display1.innerText = disNum1;
    disNum1 = result;
}

let mathOperation = function () {// Does the math operation
    switch (lastOperation) {
        case 'X':
            result = parseFloat(disNum1) * parseFloat(disNum2);
            tempDisplay.innerText = result;
            break;
        
        case '/':
            result = parseFloat(disNum1) / parseFloat(disNum2);
            tempDisplay.innerText = result;
            break;

        case '+':
            result = parseFloat(disNum1) + parseFloat(disNum2);
            tempDisplay.innerText = result;
            break;

        case '-':
            result = parseFloat(disNum1) - parseFloat(disNum2);
            tempDisplay.innerText = result;
            break;
            
        case '%':
            result = parseFloat(disNum1) % parseFloat(disNum2);
            tempDisplay.innerText = result;
            break;

    }
}

//Number looping

    numberEl.forEach (function (num) {
        num.addEventListener('click', function () {
            if (this.innerText === '.' && !haveDot) {
                haveDot = true;
            } else if (this.innerText === '.' && haveDot) {
                return;
            }
            disNum2 += this.innerText;
            display2.innerText = disNum2;
        })
    })

    //Operation looping

    operatorEl.forEach (function (operator) {
        operator.addEventListener ('click', function () {
           if (!disNum2) {return;}
            
        haveDot = false;
        const operationName = this.innerText;
           
           if (disNum1 && disNum2 && lastOperation) {
               mathOperation ();
           } else {
               result = parseFloat(disNum2);
           }
           clearVar (operationName);
           lastOperation = operationName;
        })
    })

// All clerar key

clearEl.addEventListener('click', function () {
    haveDot = false;
    disNum1='';
    disNum2='';
    display1.innerText ='0';
    display2.innerText ='0';
    tempDisplay.innerText = '0';
    lastOperation = '';
});

// Backspace key

cbackSpaceEl.addEventListener('click', (e)=> {
    haveDot = false;
    disNum2 = '';
    display2.innerText = '0';
})

// Equal key

equalEl.addEventListener ('click', e => {
    haveDot = false;
    mathOperation ();
    display2.innerText = result;
    tempDisplay.innerText = '0';
    display1.innerText = '';
    disNum1 = '';
    disNum2 = 0;
    lastOperation = '';
})