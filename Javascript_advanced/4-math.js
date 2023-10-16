/**
 * Returns a function that divides a given number by the first number passed as argument.
 * @param {number} firstNumber - The number to divide by.
 * @returns {function} - A function that takes a number as argument and returns the result of dividing it by the first number.
 */
function divideBy(firstNumber){
    return function(secondNumber) {
        return secondNumber / firstNumber;
    }
}

function addBy(firstNumber){
    return function(secondNumber) {
        return secondNumber + firstNumber;
    }
}

const addBy100 = addBy(100);
const addBy1000 = addBy(1000);
const divideBy10 = divideBy(10);
const divideBy100 = divideBy(100);