// This is an article for interview prep on recursion
// https://www.codingame.com/playgrounds/5422/js-interview-prep-recursion

// Challenge 01:
// Write a function called sumRange taht takes a number and returns the sum of all numbers from t up to the number passed in

function sumRange(n, total = 0){
    if(n <= 0){
        return total
    } else {
        total += n
    return sumRange(n -1, total)
    }
}

console.log(sumRange(3));

// Challenge 02
// Write a function called power that takes  base and an exponent. if the exponent is zero, return 1
function power(n, exp){
    if(exp == 1){
        return n
    } else {
        return n * power(n, exp-1)
    }
}

console.log(power(2,2))

// Challenge 03
// Write a function that returns the factorial of a number

function factorial(n){
    if(n === 1){
        return n
    } else {
        return n * factorial(n-1)
    }
    
}

console.log(factorial(5))