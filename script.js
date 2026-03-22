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
        return "Error! Cannot divide by zero."
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

    return result;
}

let num1 = null, num2 = null, operator = null;

let display = document.querySelector("input");
let btn = document.querySelectorAll("button");

btn.forEach(function (btn) {
    btn.addEventListener("click", function (e) {

        let value = btn.value;

        if (btn.classList.contains("number")) {

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

            display.value  += value;
        }

        else if (btn.classList.contains("operator")) {
            operator = value;
            display.value += operator;
        }

        else if (value === "=") {
            display.value = operate(Number(num1), operator, Number(num2));
        }

        else if (value === "clear") {
            display.value = "";
            num1 = null;
            num2 = null;
            operator = null;
        }
    })
})
