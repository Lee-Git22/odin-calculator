
// Helper functions for operate
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
    }
}

let power = false;

num1 = ""
num2 = ""

// TODO: Populate display with numbers buttons
const display = document.querySelector("#display")

const numberButtons = document.querySelectorAll(".numbers");
numberButtons.forEach((button) => {
    button.addEventListener("click", () => {
        if (power) {
            num1 = num1 + button.textContent
            display.textContent = num1;
        }
    })
});



// TODO: Implement functions buttons

const functionButtons = document.querySelectorAll(".function");
functionButtons.forEach((button) => {
    button.addEventListener("click", () => {

        if (button.id == "powerButton") {
            num1 = "";
            power = !power
            if (power) {
                display.textContent = "0";
            } else {
                display.textContent = "";
            }

        }


    })
})
