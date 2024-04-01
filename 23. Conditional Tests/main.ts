#! /usr/bin/env node
/* Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:

let car = 'subaru';

console.log("Is car == 'subaru'? I predict True.")

console.log(car == 'subaru')

• Look closely at your results, and make sure you understand why each line evaluates to True or False.

• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False. */

let car = 'subaru'

console.log("Is car == 'subaru' ? I PREDICT True.")
console.log(car == 'subaru')

console.log("\n Is car == 'civic' ? I PREDICT False.")
console.log(car == 'civic' )

console.log("Is car == 'subaru' and length = 6 ? I PREDICT True.")
console.log(car == 'subaru' && car.length == 6)

console.log("\n Is car == 'Sabaru' ? I PREDICT False.")
console.log(car == 'Sabaru' )

console.log("\n Is car == 'SABARU' ? I PREDICT False.")
console.log(car == 'SABARU' )

console.log("\n Is car == 'city' ? I PREDICT False.")
console.log(car == 'city' )

console.log("\n Is car.lenth == 6 ? I PREDICT True.")
console.log(car.length == 6 )

console.log("\n Is car.lenth != 6 ? I PREDICT False.")
console.log(car.length != 6 )

console.log("Is 5>6  I PREDICT True")
console.log(5 > 6)

console.log("Is 15>6  I PREDICT True")
console.log(15 >6)

console.log("Is 6 != 6  I PREDICT False")
console.log(6 != 6)
