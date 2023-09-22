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