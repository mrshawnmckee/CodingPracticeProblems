// Write a function that repeats the string a given number of times; will take two params, the string and a number

function repeatString(str, num) {
    let newString = '';
    for(let i = 0; i < num; i++){
        newString = newString + str
    }
    return newString
}

console.log(repeatString('hey', 3));

// reverse String  

function reverseString(str) {
    let newArr = str.split('')
    console.log(newArr)
    let reversed = newArr.reverse().join('')  //Using .join instead of .toString() so that it does not contain commas

    return reversed
}

console.log(reverseString("palindrome words"))