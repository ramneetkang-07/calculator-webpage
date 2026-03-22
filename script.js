let add = function(a,b){
    return a+b;
}

let subtract = function(a,b){
    return a-b;
}

let multiply = function(a,b){
    return a*b;
}

let divide = function(a,b){
    return a/b;
}

let operate = function(a,operator,b){
    switch (operator) {
        case "+":
            add(a,b);
            break;
        case "-":
            subtract(a,b);
            break;
        case "*":
            multiply(a,b);
            break;
        case "/":
            divide(a,b);
            break;
    }
}

let num1, num2, operator;