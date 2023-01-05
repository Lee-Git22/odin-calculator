# odin-calculator
Final project for odin basics - a simple calculator

I was pleasantly surprised by how well javascript's handling of string concatenation fits with a calculator project (such that inputting 1 and 2 becomes 12 and not 3) and how simple it was to convert strings to numbers when performing calculations, and so I decided to keep all user inputs and related variables as strings until I need to pass them into the `operate` function. At that point the strings would be converted to numbers and passed into `round` before being displayed on the calculator. By choosing to display values as numbers it would get rid of all leading zeros and trailing zeros. 

The calculator handles a pair of numbers at once and supports chaining of functions such that `12 + 7 - 5 * 3 = 42`, this is done by operating on the first 2 values and storing the output as `result` to be used as the first value of the next pair. 

The design for the calculator is of a minimalist pastel color palette which I think turned out nicely. The `Orbitron` font used is from googleapi. The size is fixed and it does not support keyboard. 
Bonus features include negate (+/-), decimal point (.), history display, backspace and power (ON/OFF). 

Overall this was a fun and fast project and I'm quite happy with how it turned out. 