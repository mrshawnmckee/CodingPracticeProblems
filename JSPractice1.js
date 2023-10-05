// // 01  Write a function that repeats the string a given number of times; will take two params, the string and a number

// function repeatString(str, num) {
//     let newString = '';
//     for(let i = 0; i < num; i++){
//         newString = newString + str
//     }
//     return newString
// }

// console.log(repeatString('hey', 3));

// // 02  reverse String  

// function reverseString(str) {
//     let newArr = str.split('')
//     console.log(newArr)
//     let reversed = newArr.reverse().join('')  //Using .join instead of .toString() so that it does not contain commas

//     return reversed
// }

// console.log(reverseString("palindrome words"))

// // 03 Takes an array and some other arguments and then removes the other arguments

// const removeFromArray = function(arr, ...args) {
//     const newArray = [];
//     arr.forEach((item) => {
//         if (!args.includes(item)){
//             newArray.push(item)
//         }
//     })
//     return newArray
// }

// console.log(removeFromArray([1,2,3,4], 3,2))


// // 05 Sum All; takes 2 integers and returns the sum of every number between and including them

// const sumAll = function(num1, num2) {
//     let count = num2 + 1 - num1;
//     let sum = 0;
//     for(let i = num1; i < count + 1; i++){
//         sum += i
//     }
//     return sum
// }

// console.log(`The sum of the numbers is ${sumAll(1,4000)}`)

// // 06 Leap years

// function leapChecker(year) {
//     year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0) ? console.log("This is a leap year") : console.log("This is not a leap year")
// }
// leapChecker(2000)

// // 07 Temp converter

// const convertToCelsius = f => Math.round(((f - 32) * 5/9)*10)/10
// const convertToFahrenheit = c => Math.round(((c * 9/5) + 32) *10)/10

// console.log(convertToCelsius(70));
// console.log(convertToFahrenheit(21));






// //  Fibonacci Series

// function fibonacci(num){
//     let previousNum = 0;
//     let currentNum = 1;
//     let sum;
//     for(let i = 2; i < num; i++){
//         sum = previousNum + currentNum
//         previousNum = currentNum
//         currentNum = sum
//     }
//     return sum
// }
// console.log(fibonacci(8))

// // Fibonacci create an array

// function fibonaccirArray(num){
//     let newArray = [0,1];
//     let sum;
//     let num1 = 0;
//     let num2 = 1;

//     for(let i = 2; i < num; i++){
//         sum = num1 + num2
//         num1 = num2
//         num2 = sum
//         newArray.push(num2)
//     }
//     return newArray
// }

// console.log(fibonaccirArray(8));

// //  fibonacci array with recursion


// function recursiveFibonacci(n){

//     if(n < 2){
//         return n
//     } else {
//         return (recursiveFibonacci(n-1) + recursiveFibonacci(n -2))
//     }
// }


// console.log(recursiveFibonacci(5))

/////////////////////////////////////////////////////////////////////////////////////////////////


// Running some random CodeWars Challenges, attempting some here


// //  Write a function which calculates the average of the numbers in a given list.
// // Note: Empty arrays should return 0.
// function findAverage(array) {
//     // your code here, 
//     let avg = 0;
//     let sum = 0;
//     let count = 0;
    
//     if (array.length === 0){
//       return 0;
      
//     } else {
//        for(let i = 0; i < array.length; i++){
//          sum += array[i]
//          count ++    
//        }      
//     }
//     return avg = sum / count
// }

// console.log(findAverage([1,2,3]))

// // Multiply a given number by 8 if it is even, multiply time 9 if it is odd

// function simpleMultiplication(number) {
//     // your code........
//     return number % 2 === 0 ? number * 8 : number * 9;
//     // if(number % 2 === 0){
//     //     return number * 8
//     // } else {
//     //     return number * 9
//     // }
// }

// console.log(simpleMultiplication(8))

// Make negative

// function makeNegative(num){

//     return num >= 0 ? num - num - num : num
//     //     if(num >= 0){
//     //     return num - num - num
//     // } else {
//     //     return num
//     // }
// }

// console.log(makeNegative(-30));


// Change an array with 10 numbers to a phone number

function createPhoneNumber (array){
    let phoneString = array.join('');
    console.log(phoneString)
    let firstGroup = phoneString.slice(0,3)
    let secondGroup = phoneString.slice(3,6)
    let lastGroup = phoneString.slice(6)
    let phoneNumber = `"(${firstGroup}) ${secondGroup}-${lastGroup}"`
    return phoneNumber
}

console.log(createPhoneNumber([1,2,3,4,5,6,7,8,9,0]))

