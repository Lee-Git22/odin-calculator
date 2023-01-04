
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
    // console.log(x)
    // console.log(y)
    // console.log(operator)

    switch (operator != null) {
        case (operator == "add"):
            return add(x, y);
        case (operator == "subtract"):
            return subtract(x, y);
        case (operator == "multiply"):
            return multiply(x, y);
        case (operator == "divide"):
            return divide(x, y);
        default:
            return "0" // TODO: return history
    }
}

function reset() {
    num1 = ""
    num2 = ""
    result = ""
    operator = ""
    // console.log("reseted")
}


let power = false
let switchDisplay = false // false display is for num1, on true it switches to num2

num1 = ""
num2 = ""
result = ""
operator = ""

// TODO: Populate display with numbers buttons
const display = document.querySelector("#display")

const numberButtons = document.querySelectorAll(".numbers");
numberButtons.forEach((button) => {
    button.addEventListener("click", () => {
        if (power && switchDisplay == false) {
            num1 = num1 + button.textContent
            display.textContent = num1;
        } else if (power && switchDisplay) {
            num2 = num2 + button.textContent
            display.textContent = num2;
        }
    })
});



// TODO: Implement functions buttons

const functionButtons = document.querySelectorAll(".function");
functionButtons.forEach((button) => {
    button.addEventListener("click", () => {

        switch (button.id != null) {
            case (button.id == "powerButton"): 
                reset()
                power = !power
                if (power) {
                    display.textContent = "0"
                } else {
                    display.textContent = ""
                }
                break

            case (button.id == "clear" && power):
                reset()
                switchDisplay = false
                display.textContent = "0"
                break

            case (button.id == "back" && power): // Add special logic for result
                if (display.textContent != result) {
                    display.textContent = String(display.textContent)
                    display.textContent = display.textContent.substring(0, display.textContent.length - 1)
                } else {
                    // TODO: clear history
                }
                break

            case (button.id == "negate" && power):
                display.textContent = -(display.textContent);
                break
            
            case (button.id == "operate" && power):
                result = operate(parseFloat(num1), parseFloat(num2), operator)
                num1 = ""
                num2 = ""
                display.textContent = result
                switchDisplay = false
                break
            
            case (button.id == "float" && power):
                // Adds a decimal onto display
                display.textContent = display.textContent + "."

                // Adds a decimal to value
                if (switchDisplay) {
                    num2 = num2 + "."
                    console.log("added")
                } else {
                    num1 = num1 + "."
                    console.log("added")

                }
                break
            // Default case assumes only num1 input 
            case (button.id == "add" || button.id == "subtract" || button.id == "multiply" || button.id == "divide" && power):

                // If there are inputs for both numbers, evaluate first as num1 and clear num2
                if (num1 != "" && num2 != "") {
                    num1 = operate(parseInt(num1), parseInt(num2), operator)
                    num2 = ""
                    display.textContent = num1

                // If there are no inputs(occurs after using operate), set num1 to result 
                } else if (num1 == "" && num2 == "" && result != "") {
                    num1 = result
                }

                // Pass on the operator and switch display
                operator = button.id
                switchDisplay = true
                break
            

            }


        


    })
})
