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
    if (b == 0){
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

let num1, num2, operator;

let display = document.querySelector("input");
let btn = document.querySelectorAll("button");

btn.forEach(function(btn) {
    btn.addEventListener("click", function (e) {

        let value = btn.value;

        if (btn.classList.contains("number")) {
            if (num1 === undefined){
                num1 = Number(value);
                display.value += num1;
            }

            else if (num2 === undefined){
                num2 = Number(value);
                display.value += num2;
            }
        }

        else if (btn.classList.contains("operator")){
            operator = value;
            display.value += operator;
        }

        else if (value === "="){
            display.value = operate(num1, operator, num2);
        }
    })
})
