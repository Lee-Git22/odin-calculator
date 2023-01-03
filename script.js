function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}

// console.log(add(1,2));
// console.log(subtract(1,2));
// console.log(multiply(1,2));
// console.log(divide(1,2));

function operate(x, y, operator) {
    switch (operator != null) {
        case (operator == "+"):
            return add(x, y);
        case (operator == "-"):
            return subtract(x, y);
        case (operator == "*"):
            return multiply(x, y);
        case (operator == "/"):
            return divide(x, y);
        default:
            console.log("invalid operator")
            break;
    }
}

// console.log(operate(15, 14, "+"))
// console.log(operate(15, 14, "-"))
// console.log(operate(15, 14, "*"))
// console.log(operate(15, 14, "/"))