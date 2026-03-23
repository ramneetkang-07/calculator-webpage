let add = function (a, b) {
    return a + b;
}

let subtract = function (a, b) {
    return a - b;
}

let multiply = function (a, b) {
    return a * b;
}

let divide = function (a, b) {
    if (b == 0) {
        alert("Cannot divide by zero !");
        return null;
    }
    return a / b;
}

let operate = function (a, operator, b) {
    let result;

    switch (operator) {
        case "+":
            result = add(a, b);
            break;
        case "-":
            result = subtract(a, b);
            break;
        case "*":
            result = multiply(a, b);
            break;
        case "/":
            result = divide(a, b);
            break;
    }

    if (result === null) {
        return null;
    }
    else{
        return Number(result.toFixed(4));
    }
}

let num1 = null, num2 = null, operator = null;
let equal = false;

let display = document.querySelector("input");
let btn = document.querySelectorAll("button");

btn.forEach(function (btn) {
    btn.addEventListener("click", function (e) {

        let value = btn.value;

        if (btn.classList.contains("numbers")) {
            
            if (equal){
                num1 = null;
                num2 = null;
                operator = null;
                display.value = "";
                equal = false;
            }

            if (operator === null) {
                if (num1 === null) {
                    num1 = value;
                }
                else {
                    num1 += value;
                }
            }

            else {
                if (num2 === null) {
                    num2 = value;
                }
                else {
                    num2 += value;
                }
            }

            display.value += value;
        }

        else if (btn.classList.contains("operators")) {

            if (equal){
                equal = false;
            }

            if (operator === null) {
                if (num2 === null) {
                    operator = value;
                    display.value += operator;
                }

                else {
                    num1 = operate(Number(num1), operator, Number(num2));
                    display.value = num1;
                    num2 = null;
                    operator = value;
                    display.value += operator;
                }
            }

            else {
                if (num2 === null) {
                    operator = value;
                    display.value = display.value.slice(0, display.value.length - 1).concat(operator);
                }

                else {
                    num1 = operate(Number(num1), operator, Number(num2));
                    display.value = num1;
                    num2 = null;
                    operator = value;
                    display.value += operator;
                }
            }
        }

        else if (value === "=") {
            if ((num1 !== null) && (num2 !== null) && (operator !== null)){
                display.value = operate(Number(num1), operator, Number(num2));
                equal = true;
            }
        }

        else if (value === "clear") {
            display.value = "";
            num1 = null;
            num2 = null;
            operator = null;
        }

        else if (value === "."){
            if (operator === null){
                if (num1 === null){
                    num1 = "0.";
                    display.value += num1;
                }
                else if (!num1.includes(".")){
                    num1 += value;
                    display.value += value;
                }
            }

            
            else{
                if (num2 === null){
                    num2 = "0.";
                    display.value += num2;
                }
                else if (!num2.includes(".")){
                    num2 += value;
                    display.value += value;
                }
            }
        }

        else if (value === "delete"){
            if (operator === null){
                num1 = num1.slice(0, num1.length - 1);
            }

            else if (num2 === null){
                operator = null;
            }

            else{
                num2 = num2.slice(0, num2.length - 1);
            }

            display.value = display.value.slice(0, display.value.length - 1);
        }
    })
})