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