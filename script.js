
// Helper functions for operate
function add(x, y) {
    return x + y
}

function subtract(x, y) {
    return x - y
}

function multiply(x, y) {
    return x * y
}

function divide(x, y) {
    return x / y
}

function operate(x, y, operator) {
    switch (operator != null) {
        case (operator == "+"):
            return add(x, y);
        case (operator == "-"):
            return subtract(x, y);
        case (operator == "×"):
            return multiply(x, y);
        case (operator == "÷"):
            return divide(x, y);
        default:
            return "Error"
    }
}

// Rounds and displays up to 8 digits 
function round(input) {
    decimals = 8
    stringOutput = String(Number(Math.round(input + "e" + decimals) + "e-" + decimals))
    if (stringOutput.length > 8) {
        stringOutput = stringOutput.substring(0, 8)
    }
    return (Number(stringOutput))
}

function updateHistory(num1, num2, operator) {
    if (power) {
        return (`${num1} ${operator} ${num2}`)
    }
}

// Sets default parameters 
function reset() {
    defaultNum = "0"
    num1 = ""
    num2 = ""
    result = ""
    operator = ""
    history.textContent = ""
    mem = ""
}

let power = false
let switchDisplay = false // false display is for num1, on true it switches to num2

defaultNum = "0"
num1 = ""
num2 = ""
result = ""
operator = ""

const display = document.querySelector("#display")
const history = document.querySelector("#history")

// Populate display on number button click up until 9 characters
const numberButtons = document.querySelectorAll(".numbers");
numberButtons.forEach((button) => {
    button.addEventListener("click", () => {
        if (power && switchDisplay == false && String(Number(num1)).length < 9) {
            num1 = num1 + button.textContent
            display.textContent = Number(num1);
        } else if (power && switchDisplay && String(Number(num2)).length < 9) {
            num2 = num2 + button.textContent
            display.textContent = Number(num2);
        }
    })
});

// Checks button.id for corresponding function
const functionButtons = document.querySelectorAll(".function");
functionButtons.forEach((button) => {
    button.addEventListener("click", () => {
        switch (button.id != null) {

            // Toggles power switch and resets parameters
            case (button.id == "powerButton"): 
                reset()
                power = !power
                if (power) {
                    display.textContent = defaultNum
                } else {
                    display.textContent = ""
                }
                break
            
            // Clears display and resets parameters
            case (button.id == "clear" && power):
                reset()
                switchDisplay = false
                display.textContent = defaultNum
                break
            
            // Removes last character of display and corresponding number value
            case (button.id == "back" && power): 
                display.textContent = String(display.textContent)
                display.textContent = display.textContent.substring(0, display.textContent.length - 1)

                if (switchDisplay) {
                    num2 = String(num2)
                    num2.substring(0, num2.length - 1)
                } else {
                    num1 = String(num2)
                    num1.substring(0, num1.length - 1)
                }
                break
            
            // Negates the current number value and changes display
            case (button.id == "negate" && power && Number(display.textContent) != 0):
                display.textContent = -(display.textContent)
                
                if (switchDisplay) {
                    num2 = -(num2)
                } else {
                    num1 = -(num1)
                }
                break
            
            // Operates a number pair
            case (button.id == "operate" && power):
                if (num1 != "" && num2 != "") {
                    // Stores valid pair into mem for repeat operating
                    mem = num2
                    history.textContent = updateHistory((num1), (num2), operator)
                    result = round(operate(Number(num1), Number(num2), operator))
                } else {
                    history.textContent = updateHistory((result), (mem), operator)
                    result = round(operate(Number(result), Number(mem), operator))
                }

                // Clears number pairs for next use and displays result
                num1 = ""
                num2 = ""
                display.textContent = result
                switchDisplay = false
                break

            // Adds a decimal onto display if not already applied
            case (button.id == "float" && power && display.textContent.includes(".") == false):
                display.textContent = display.textContent + "."

                // Adds a decimal to computed value
                if (switchDisplay) {
                    num2 = num2 + "."
                } else {
                    num1 = num1 + "."
                }
                break

            // Default case assumes only num1 input 
            case (button.id == "add" || button.id == "subtract" || button.id == "multiply" || button.id == "divide" && power):
                
                // For a chain of inputs, evaluate in pairs
                if (num1 != "" && num2 != "") {
                    
                    num1 = round(operate(Number(num1), Number(num2), operator))
                    num2 = ""
                    display.textContent = num1

                // If there are no inputs(occurs after repeated operates), set num1 to result 
                } else if (num1 == "" && num2 == "" && result != "") {
                    num1 = result
                }

                // Pass on the operator and switch display
                operator = button.textContent
                history.textContent = updateHistory((num1), (num2), operator)
                switchDisplay = true
                break
            }
    })
})
