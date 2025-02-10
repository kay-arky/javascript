// Numbers
// int number
const myNumber = 20
// A number with a decimal point is a float which references the "floating point"
const myFloat = 20.01
const myString = "20.123abc"

console.log(myNumber)
console.log(myFloat)
console.log(myString)
console.log(myFloat === myNumber)
console.log(myString === myNumber)
console.log(myString + 3)
console.log(Number(myString) + 3)
console.log(Number(myString) === myNumber)
console.log(Number("Hizkia"))
console.log(Number(true))

// Number Methods
// Number.isInteger() method determines whether the passed value is an integer
console.log(Number.isInteger(myFloat))

// Number.parseFloat() method parses an argument and returns a floating point number. If a number cannot be parsed from the argument, it returns NaN
console.log(Number.parseFloat(myString))

// toFixed() method formats a number according to how many decimal points you provide as the parameter
console.log(myFloat.toFixed(2))

// parseInt() method parses a string argument and returns an integer
console.log(Number.parseInt(myString))

//toString() method returns a string representing the number
console.log(myFloat.toString())
console.log(typeof Number.parseFloat(myString))

// Chaining = Using several methods chained together
console.log(Number.parseFloat("4.237abc").toFixed(2).toString())

// NaN is an acronym for Not a Number
// Number.isNaN() method determines whether the passed value is NaN AND its type is Number
console.log(Number.isNaN("Hizkia"))
console.log(Number("Hizkia"))

// global isNaN() function determines whether a value is NaN or not
console.log(isNaN("Hizkia"))
