// 01  Write a function that repeats the string a given number of times; will take two params, the string and a number

function repeatString(str, num) {
    let newString = '';
    for(let i = 0; i < num; i++){
        newString = newString + str
    }
    return newString
}

console.log(repeatString('hey', 3));

// 02  reverse String  

function reverseString(str) {
    let newArr = str.split('')
    console.log(newArr)
    let reversed = newArr.reverse().join('')  //Using .join instead of .toString() so that it does not contain commas

    return reversed
}

console.log(reverseString("palindrome words"))

// 03 Takes an array and some other arguments and then removes the other arguments

const removeFromArray = function(arr, ...args) {
    const newArray = [];
    arr.forEach((item) => {
        if (!args.includes(item)){
            newArray.push(item)
        }
    })
    return newArray
}

console.log(removeFromArray([1,2,3,4], 3,2))


// 05 Sum All; takes 2 integers and returns the sum of every number between and including them

const sumAll = function(num1, num2) {
    let count = num2 + 1 - num1;
    let sum = 0;
    for(let i = num1; i < count + 1; i++){
        sum += i
    }
    return sum
}

console.log(`The sum of the numbers is ${sumAll(1,4000)}`)

// 06 Leap years

function leapChecker(year) {
    year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0) ? console.log("This is a leap year") : console.log("This is not a leap year")
}
leapChecker(2000)

// 07 Temp converter

const convertToCelsius = f => Math.round(((f - 32) * 5/9)*10)/10
const convertToFahrenheit = c => Math.round(((c * 9/5) + 32) *10)/10

console.log(convertToCelsius(70));
console.log(convertToFahrenheit(21));



